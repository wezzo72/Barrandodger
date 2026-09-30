/**
 * Crawl barrandodger.com after JavaScript renders each page.
 * Saves the rendered HTML (every word and every hyperlink) and a PDF
 * whose text and link annotations come from that same rendered page.
 *
 * Usage:
 *   node crawl.mjs            # all URLs in urls.txt, skipping files already saved
 *   node crawl.mjs --only 1   # first page only
 *   node crawl.mjs --from 2 --to 40
 */
import pkg from "/workspace/node_modules/playwright-core/index.js";
const { chromium } = pkg;
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const HTML_DIR = path.join(HERE, "html");
const PDF_DIR = path.join(HERE, "pdf");
const LINK_DIR = path.join(HERE, "links");
const MANIFEST = path.join(HERE, "manifest.jsonl");
const CHROME = "/opt/pw-browsers/chromium-1243/chrome-linux64/chrome";
const ORIGIN = "https://barrandodger.com";

function arg(name, fallback) {
  const i = process.argv.indexOf(name);
  if (i === -1) return fallback;
  return process.argv[i + 1];
}

function slug(urlPath) {
  if (urlPath === "/" || urlPath === "") return "home";
  return urlPath.replace(/^\/+|\/+$/g, "").replace(/\//g, "__");
}

function sha256(buf) {
  return crypto.createHash("sha256").update(buf).digest("hex");
}

function loadJobs() {
  const lines = fs.readFileSync(path.join(HERE, "urls.txt"), "utf8").trim().split("\n");
  return lines.map((line) => {
    const tab = line.indexOf("\t");
    const n = Number(line.slice(0, tab));
    const urlPath = line.slice(tab + 1).trim();
    return { n, urlPath, url: ORIGIN + (urlPath === "/" ? "/" : urlPath) };
  });
}

async function capture(page, job) {
  const id = String(job.n).padStart(3, "0") + "-" + slug(job.urlPath);
  const htmlPath = path.join(HTML_DIR, id + ".html");
  const pdfPath = path.join(PDF_DIR, id + ".pdf");
  const linkPath = path.join(LINK_DIR, id + ".links.txt");
  if (fs.existsSync(htmlPath) && fs.existsSync(pdfPath) && fs.existsSync(linkPath)) {
    return { n: job.n, url: job.url, skipped: true, id };
  }

  let lastErr;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      await page.goto(job.url, { waitUntil: process.env.SLOW ? "networkidle" : "domcontentloaded", timeout: 60000 });
      const budget = process.env.SLOW ? 25000 : 9000;
      const start = Date.now();
      let chars = 0;
      while (Date.now() - start < budget) {
        try {
          chars = await page.evaluate(() => (document.body && document.body.innerText ? document.body.innerText.trim().length : 0));
        } catch (e) {
          throw e;
        }
        if (chars > 700) break;
        await page.waitForTimeout(500);
      }
      const title = await page.title();
      const links = await page.evaluate(() =>
        Array.from(document.querySelectorAll("a[href]")).map((a) => ({
          text: (a.innerText || "").replace(/\s+/g, " ").trim(),
          href: a.href,
        }))
      );
      const html = await page.content();
      const banner =
        "<!--\nPreserved from " +
        job.url +
        "\nRendered after JavaScript. Text and hyperlinks are in this file.\nDo not redact.\n-->\n";
      const htmlBuf = Buffer.from(banner + html, "utf8");
      fs.writeFileSync(htmlPath, htmlBuf);

      const linkLines = [
        "# " + job.url,
        "# title: " + title,
        "# links: " + links.length,
        "",
        ...links.map((l) => (l.text || "(no anchor text)") + "\t" + l.href),
        "",
      ];
      const linkBuf = Buffer.from(linkLines.join("\n"), "utf8");
      fs.writeFileSync(linkPath, linkBuf);

      await page.addStyleTag({
        content: "img,video,canvas,iframe{display:none!important}*{background-image:none!important}",
      });
      await page.pdf({
        path: pdfPath,
        format: "A4",
        printBackground: false,
        displayHeaderFooter: true,
        headerTemplate: `<div style="font-size:8px;width:100%;padding:0 12px;color:#333;">${job.url.replace(/</g, "")}</div>`,
        footerTemplate: `<div style="font-size:8px;width:100%;padding:0 12px;color:#333;text-align:right;">page <span class="pageNumber"></span> / <span class="totalPages"></span></div>`,
        margin: { top: "14mm", bottom: "12mm", left: "10mm", right: "10mm" },
      });
      const pdfBuf = fs.readFileSync(pdfPath);
      const record = {
        n: job.n,
        id,
        url: job.url,
        path: job.urlPath,
        title,
        text_chars: chars,
        link_count: links.length,
        html: "html/" + id + ".html",
        pdf: "pdf/" + id + ".pdf",
        links: "links/" + id + ".links.txt",
        html_bytes: htmlBuf.length,
        pdf_bytes: pdfBuf.length,
        html_sha256: sha256(htmlBuf),
        pdf_sha256: sha256(pdfBuf),
        saved_at: new Date().toISOString(),
      };
      fs.appendFileSync(MANIFEST, JSON.stringify(record) + "\n");
      console.log(
        "OK",
        record.n,
        record.id,
        "text",
        chars,
        "links",
        links.length,
        "pdf",
        pdfBuf.length
      );
      return record;
    } catch (err) {
      lastErr = err;
      console.error("RETRY", job.n, job.url, attempt, err.message);
      try {
        await page.waitForTimeout(1500 * attempt);
      } catch (e) {
        console.error("PAGE DEAD", job.n, e.message);
        return { n: job.n, url: job.url, path: job.urlPath, error: "page crashed: " + err.message, saved_at: new Date().toISOString(), dead: true };
      }
    }
  }
  const fail = {
    n: job.n,
    url: job.url,
    path: job.urlPath,
    error: String(lastErr && lastErr.message ? lastErr.message : lastErr),
    saved_at: new Date().toISOString(),
  };
  fs.appendFileSync(MANIFEST, JSON.stringify(fail) + "\n");
  console.error("FAIL", job.n, job.url, fail.error);
  return fail;
}

const only = arg("--only", "");
const from = Number(arg("--from", "1"));
const to = Number(arg("--to", "9999"));
let jobs = loadJobs().filter((j) => j.n >= from && j.n <= to);
if (only) jobs = jobs.filter((j) => String(j.n) === String(only));

fs.mkdirSync(HTML_DIR, { recursive: true });
fs.mkdirSync(PDF_DIR, { recursive: true });
fs.mkdirSync(LINK_DIR, { recursive: true });

const browser = await chromium.launch({
  executablePath: CHROME,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
const context = await browser.newContext({
  userAgent: "BarranDodgerArchiveBackup/1.0 (preservation crawl before unpublish)",
  viewport: { width: 1280, height: 1800 },
});
const workers = [
  await context.newPage(),
  await context.newPage(),
];
let ok = 0;
let fail = 0;
if (process.env.SLOW) {
  let page = await context.newPage();
  for (const job of jobs) {
    const result = await capture(page, job);
    if (result.error || result.dead) {
      fail++;
      try { await page.close(); } catch (e) {}
      page = await context.newPage();
    } else ok++;
  }
} else {
  for (let i = 0; i < jobs.length; i += workers.length) {
    const batch = jobs.slice(i, i + workers.length);
    const results = await Promise.all(batch.map((job, idx) => capture(workers[idx], job)));
    for (const result of results) {
      if (result.error) fail++;
      else ok++;
    }
  }
}
await browser.close();
console.log("DONE ok", ok, "fail", fail, "of", jobs.length);
process.exit(fail ? 2 : 0);
