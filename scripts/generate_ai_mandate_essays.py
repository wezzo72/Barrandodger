#!/usr/bin/env python3
"""Genesis command — 26 September 2026 mandate-scan execution.

Scan sources (barrandodger.com, wezzo72.github.io/Barrandodger, GitHub
accounts wezzo72 and drbarrandodger) and republish the ten impartial
AI essays that state only what the opened evidence proves about the
archive's mandate and purpose.

    python3 scripts/generate_ai_mandate_essays.py

Requires Python 3 and fpdf2. No API key. Does not invent a new top ten
on re-run: it republishes the essays checked in under spec/essays/.

Optional:
    python3 scripts/generate_ai_mandate_essays.py --check-urls
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

from fpdf import FPDF

ROOT = Path(__file__).resolve().parents[1]
ESSAY_DIR = ROOT / "spec" / "essays"
OUT = ROOT / "ai-essays"
# also write a copy next to the script's sibling public path used by the app
FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
FONTB = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
FONTSERIF = "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf"
FONTSERIFB = "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf"

DATE = "26 September 2026"

INTRO = (
    "These ten essays were produced by a machine-led reading of the public "
    "Barran Dodger corpus on 26 September 2026. The protagonist, Dr Richard "
    "William McLean, was removed from the selection of subjects, the ranking "
    "of significance, and the drafting of conclusions. A machine has no fee, "
    "no faction, no career to protect, and no fear of social punishment. It "
    "cannot be bribed in the ordinary human sense. It has no allegiance to the "
    "author of the archive, to any agency named in the files, or to any "
    "political outcome. That is not a claim of omniscience. It is a claim of "
    "a different failure mode: extraction error, incomplete corpus, and model "
    "compression — all of which are exposed here by linking every substantive "
    "proposition to a named public file a third party can open. These essays "
    "state only what the opened evidence proves. They are not a court and not "
    "a verdict."
)

PROVENANCE = """
## Machine provenance

AI EVIDENCE SYNTHESIS — MANDATE SCAN

Corpus opened: https://wezzo72.github.io/Barrandodger/index.html ; https://barrandodger.com ; GitHub accounts https://github.com/wezzo72 and https://github.com/drbarrandodger and their public repositories; GitHub issue https://github.com/drbarrandodger/barran-dodger-archive/issues/2 ; verification portal; official-drive catalogue; named agency PDFs listed in each essay.

Analysis date: 26 September 2026.

Selection method: after scanning the named hosts, rank the ten statements the evidence can actually answer in support of the archive's published mandate (preserve the record; make examination possible; distinguish document, testimony, allegation and finding). Order is significance to that mandate, not rhetorical force.

Author selection involvement: REMOVED. The protagonist did not choose the subjects, assign their order, or draft the conclusions.

Human verification: not separately repeated by a second person in this execution.

AI limitations: image-only PDF pages yield no text (the 8 August 2025 Ombudsman service-restriction PDF is one such file); this pass did not recursively read every blob in the multi-hundred-megabyte Backup and pdf-archive repositories; absence of a personal stake is not infallibility.

Genesis command: python3 scripts/generate_ai_mandate_essays.py
Parent command: https://github.com/drbarrandodger/barran-dodger-archive/issues/2
"""

EXCLUSION = (
    "The protagonist/author did not select the ten subjects, assign their "
    "evidentiary significance, determine their ordering, or draft the "
    "analytical conclusions. His documentary materials remain inside the "
    "corpus where they constitute source evidence. This separation reduces "
    "authorial influence over the analytical selection. It does not make the "
    "AI infallible, and it does not transform these essays into judicial findings."
)

LIMITS = (
    "Machine-led analysis is not synonymous with absolute impartiality. AI "
    "systems can inherit errors from source material, extraction, model "
    "behaviour, incomplete corpora and methodological assumptions. Impartiality "
    "here means a documented attempt to apply the same rules to supporting, "
    "adverse and unresolved material, while exposing the underlying evidence "
    "so a third party can verify the result."
)


def md_to_blocks(md: str):
    blocks = []
    for raw in md.split("\n"):
        line = raw.rstrip()
        if not line.strip():
            continue
        if line.startswith("# "):
            blocks.append(("h1", line[2:].strip()))
        elif line.startswith("## "):
            blocks.append(("h2", line[3:].strip()))
        elif line.startswith("- "):
            blocks.append(("li", line[2:].strip()))
        else:
            blocks.append(("p", line.strip()))
    return blocks


def linkify_html(text: str) -> str:
    def repl(m):
        return f'<a href="{m.group(2)}">{m.group(1)}</a>'

    return re.sub(r"\[([^\]]+)\]\(([^)]+)\)", repl, text)


def escape_html(text: str) -> str:
    return text.replace("&", "&").replace("<", "<").replace(">", ">")


def html_page(num: str, title: str, body_md: str, pdf_name: str) -> str:
    blocks = md_to_blocks(body_md + "\n" + PROVENANCE)
    parts = [
        "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"/>",
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"/>",
        f"<title>{num} — {title}</title></head><body>",
        "<article class=\"ai-essay\">",
        "<style>.ai-essay{max-width:820px;margin:0 auto;padding:8px 4px 48px;line-height:1.55;font-family:Georgia,serif}",
        ".ai-essay h1{font-size:1.55rem;line-height:1.25}.ai-essay h2{font-size:1.05rem;margin:1.2rem 0 .3rem}",
        ".ai-essay a{text-decoration:underline}.ai-essay .note{font-size:.92rem;font-family:system-ui,sans-serif}</style>",
        f"<p class=\"note\"><strong>AI evidence synthesis · {DATE} · Not a court · Not a verdict.</strong> "
        f"<a href=\"{pdf_name}\">Download PDF</a> · "
        f"<a href=\"index.html\">All ten</a> · "
        f"<a href=\"genesis.html\">Genesis command</a></p>",
    ]
    for kind, text in blocks:
        esc = linkify_html(escape_html(text).replace("&", "&"))
        # re-escape then restore links: do it in two steps
        tmp = escape_html(text)
        esc = re.sub(
            r"\[([^\]]+)\]\(([^)]+)\)",
            lambda m: f'<a href="{escape_html(m.group(2))}">{escape_html(m.group(1))}</a>',
            tmp,
        )
        if kind == "h1":
            parts.append(f"<h1>{esc}</h1>")
        elif kind == "h2":
            parts.append(f"<h2>{esc}</h2>")
        elif kind == "li":
            parts.append(f"<p>• {esc}</p>")
        else:
            parts.append(f"<p>{esc}</p>")
    parts.append("<h2>Protagonist and the selection mechanism</h2>")
    parts.append(f"<p>{escape_html(EXCLUSION)}</p>")
    parts.append("<h2>Impartiality limitation</h2>")
    parts.append(f"<p>{escape_html(LIMITS)}</p>")
    parts.append('<p class="note">Finding aid. Not a court. Not a verdict. An AI-generated analytical synthesis. The protagonist was removed from the creation of these essays.</p>')
    parts.append("</article></body></html>")
    return "".join(parts) if False else "\n".join(parts)


class EssayPDF(FPDF):
    def header(self):
        self.set_font("DejaVu", size=8)
        self.set_text_color(80, 80, 80)
        self.cell(0, 6, "Barran Dodger Archive — impartial AI evidence essay — not a court — not a verdict", new_x="LMARGIN", new_y="NEXT")
        self.ln(2)

    def footer(self):
        self.set_y(-12)
        self.set_font("DejaVu", size=8)
        self.set_text_color(80, 80, 80)
        self.cell(0, 8, f"Page {self.page_no()}  ·  {DATE}  ·  machine-led  ·  protagonist removed from selection", align="C")


def strip_md_links(text: str) -> str:
    return re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r"\1 (\2)", text)


def wrap_long(text: str) -> str:
    def brk(tok: str) -> str:
        if len(tok) < 70:
            return tok
        return tok.replace("://", ":// ").replace("/", "/ ").replace("?", "? ").replace("&", "& ")

    return " ".join(brk(t) for t in text.split(" "))


def write_pdf(path: Path, num: str, title: str, body_md: str) -> None:
    pdf = EssayPDF()
    pdf.set_auto_page_break(auto=True, margin=18)
    pdf.add_font("DejaVu", "", FONT)
    pdf.add_font("DejaVu", "B", FONTB)
    pdf.add_page()
    pdf.set_left_margin(16)
    pdf.set_right_margin(16)
    pdf.set_font("DejaVu", "B", 14)
    pdf.set_text_color(20, 20, 20)
    pdf.multi_cell(0, 7, wrap_long(f"{num} — {title}"))
    pdf.ln(1)
    pdf.set_font("DejaVu", size=9)
    pdf.set_text_color(60, 60, 60)
    pdf.multi_cell(0, 5, f"AI evidence synthesis · {DATE} · Finding aid, not a court.")
    pdf.ln(2)
    for kind, text in md_to_blocks(body_md + "\n" + PROVENANCE):
        plain = wrap_long(strip_md_links(text))
        usable = pdf.epw
        if usable < 20:
            pdf.add_page()
        if kind == "h1":
            pdf.set_font("DejaVu", "B", 13)
            pdf.set_text_color(20, 20, 20)
            pdf.ln(2)
            pdf.multi_cell(usable, 6, plain)
            pdf.ln(1)
        elif kind == "h2":
            pdf.set_font("DejaVu", "B", 11)
            pdf.set_text_color(20, 20, 20)
            pdf.ln(3)
            pdf.multi_cell(usable, 6, plain)
            pdf.ln(1)
        elif kind == "li":
            pdf.set_font("DejaVu", size=10)
            pdf.set_text_color(25, 25, 25)
            pdf.multi_cell(usable, 5, "• " + plain)
            pdf.ln(0.5)
        else:
            pdf.set_font("DejaVu", size=10)
            pdf.set_text_color(25, 25, 25)
            pdf.multi_cell(usable, 5, plain)
            pdf.ln(1.2)
    pdf.set_font("DejaVu", "B", 11)
    pdf.ln(2)
    pdf.multi_cell(pdf.epw, 6, "Protagonist and the selection mechanism")
    pdf.set_font("DejaVu", size=10)
    pdf.multi_cell(pdf.epw, 5, wrap_long(EXCLUSION))
    pdf.ln(2)
    pdf.set_font("DejaVu", "B", 11)
    pdf.multi_cell(pdf.epw, 6, "Impartiality limitation")
    pdf.set_font("DejaVu", size=10)
    pdf.multi_cell(pdf.epw, 5, wrap_long(LIMITS))
    pdf.output(str(path))


def load_essays():
    essays = []
    files = sorted(ESSAY_DIR.glob("*.md"))
    for p in files:
        md = p.read_text(encoding="utf-8")
        first = md.splitlines()[0]
        title = first[2:].strip() if first.startswith("# ") else p.stem
        # number from filename
        num = p.stem.split("-")[0]
        slug = p.stem
        essays.append({"num": num, "slug": slug, "title": title, "md": md, "file": p.name})
    return essays


def main(check_urls: bool = False) -> int:
    OUT.mkdir(parents=True, exist_ok=True)
    essays = load_essays()
    if len(essays) != 10:
        print(f"expected 10 essays, found {len(essays)}", file=sys.stderr)
        return 1

    catalog = []
    for e in essays:
        pdf_name = f"{e['slug']}.pdf"
        html_name = f"{e['slug']}.html"
        # title without leading "01 — "
        title = e["title"]
        if " — " in title:
            title_short = title.split(" — ", 1)[1]
        else:
            title_short = title
        html = html_page(e["num"], title_short, e["md"], pdf_name)
        (OUT / html_name).write_text(html, encoding="utf-8")
        write_pdf(OUT / pdf_name, e["num"], title_short, e["md"])
        catalog.append(
            {
                "id": f"e{e['num']}",
                "num": e["num"],
                "slug": e["slug"],
                "title": title_short,
                "heading": e["title"],
                "html": f"/ai-essays/{html_name}",
                "pdf": f"/ai-essays/{pdf_name}",
                "markdown": e["md"],
            }
        )
        print("wrote", html_name, pdf_name)

    index = [
        "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"/>",
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"/>",
        "<title>Ten impartial AI evidence essays</title></head><body>",
        "<article class=\"ai-essay\">",
        "<style>.ai-essay{max-width:820px;margin:0 auto;padding:12px;line-height:1.55;font-family:Georgia,serif} a{text-decoration:underline}</style>",
        f"<p><strong>{DATE} · Not a court · Not a verdict.</strong></p>",
        "<h1>Impartial AI evidence essays</h1>",
        f"<p>{escape_html(INTRO)}</p>",
        f"<p>{escape_html(EXCLUSION)}</p>",
        f"<p>{escape_html(LIMITS)}</p>",
        "<ol>",
    ]
    for e, c in zip(essays, catalog):
        index.append(
            f"<li><a href=\"{c['slug']}.html\">{e['title']}</a> · "
            f"<a href=\"{c['slug']}.pdf\">PDF</a></li>"
        )
    index += [
        "</ol>",
        "<p><a href=\"genesis.html\">View / execute the genesis command</a> · "
        "<a href=\"https://github.com/drbarrandodger/barran-dodger-archive/issues/2\">Parent Master Build Command (Issue #2)</a> · "
        "<a href=\"https://wezzo72.github.io/Barrandodger/\">Live archive</a></p>",
        "</article></body></html>",
    ]
    (OUT / "index.html").write_text("\n".join(index), encoding="utf-8")

    genesis = f"""<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Genesis command — mandate-scan essays</title></head><body>
<article style="max-width:800px;margin:0 auto;padding:20px;line-height:1.55;font-family:Georgia,serif">
<p style="letter-spacing:.12em;font-size:.75rem">VIEW / EXECUTE THE GENESIS COMMAND</p>
<h1>How these ten essays were made</h1>
<p>This page publishes the executable command that rebuilds the HTML and PDFs from the essays checked into the repository. GitHub Pages does not run an AI model and does not execute the script. The script is the public source.</p>
<p><strong>Executable command</strong></p>
<pre style="white-space:pre-wrap;background:#f4f4f0;padding:12px">python3 scripts/generate_ai_mandate_essays.py</pre>
<p>Requires Python 3 and the package <code>fpdf2</code>. No API key. Re-running republishes the checked-in essays. A new reading of the corpus would be a new dated execution.</p>
<h2>Parent command — the genesis of the archive itself</h2>
<p>The presentation archive was constrained by the public GitHub issue:</p>
<p><a href="https://github.com/drbarrandodger/barran-dodger-archive/issues/2">GITHUB FORENSIC ARCHIVE — MASTER BUILD COMMAND V1 · Issue #2</a></p>
<p>That command assigned the builder the role of an impartial architect and forbade silently converting allegation, inference or interpretation into fact. It is summarised for readers at <a href="https://wezzo72.github.io/Barrandodger/master-command.html">master-command.html</a>.</p>
<h2>What the {DATE} mandate-scan actually opened</h2>
<ul>
<li><a href="https://barrandodger.com">barrandodger.com</a></li>
<li><a href="https://wezzo72.github.io/Barrandodger/index.html">wezzo72.github.io/Barrandodger/index.html</a></li>
<li>GitHub accounts <a href="https://github.com/wezzo72">wezzo72</a> and <a href="https://github.com/drbarrandodger">drbarrandodger</a> and their public repositories.</li>
<li>48 filenames in <code>docs/official-drive</code> (catalogue dated 20 September 2026).</li>
<li>Opened PDFs: Federal Court letter of 27 March 2023 (inside a wrapped Backup PDF); AAT covering letter 12 July 2023; Comcare determination 26 May 2021; APRA 5 November 2021 refusal; IBAC CASE-2020712 outcome 9 April 2020; AHRC contact 4 July 2023. The 8 August 2025 Ombudsman service-restriction PDF yielded no extractable text.</li>
<li>ABN 78 833 496 164 on the official ABN Lookup (extracted {DATE}).</li>
<li>GitHub Releases of drbarrandodger/barran-dodger-archive (pdf-archive-2026-08-10, 316 assets; zip-archives-2026-08-17).</li>
<li>The archive's own <a href="https://wezzo72.github.io/Barrandodger/verification.html">verification portal</a>.</li>
</ul>
<p>The previous top-ten (Tredwell / AAT / Comcare / provider / Ombudsman PID / APRA / IBAC / AHRC / Legal Aid / wrapper) was replaced. Those essays were removed from the steel row. This execution ranks what the whole public corpus can prove about the archive's mandate, not a second pass over the same ten letters as the whole list.</p>
<p>{escape_html(EXCLUSION)}</p>
<p>Not a court. Not a verdict.</p>
</article></body></html>
"""
    (OUT / "genesis.html").write_text(genesis, encoding="utf-8")

    payload = {
        "date": DATE,
        "intro": INTRO,
        "exclusion": EXCLUSION,
        "limits": LIMITS,
        "command": "python3 scripts/generate_ai_mandate_essays.py",
        "parent_command": "https://github.com/drbarrandodger/barran-dodger-archive/issues/2",
        "essays": catalog,
    }
    (ROOT / "spec" / "essays.json").write_text(json.dumps(payload, indent=2), encoding="utf-8")
    print("wrote", OUT, "and src/lib/essays.json")

    if check_urls:
        import urllib.request

        urls = re.findall(r"https://[^)\\s]+", "\n".join(e["md"] for e in essays))
        seen = []
        for u in urls:
            if u not in seen:
                seen.append(u)
        ok = 0
        for u in seen:
            try:
                req = urllib.request.Request(u, method="HEAD")
                with urllib.request.urlopen(req, timeout=15) as r:
                    print(r.status, u)
                    ok += 1
            except Exception as ex:
                print("FAIL", u, ex)
        print(f"{ok}/{len(seen)} HEAD ok")
    return 0


if __name__ == "__main__":
    sys.exit(main(check_urls="--check-urls" in sys.argv))
