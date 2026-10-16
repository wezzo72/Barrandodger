(function () {
  if (window.__bdPrivateRecord) return;
  window.__bdPrivateRecord = true;
  var ID = "private-record-able-point-14-october-2026";
  var REGISTER = "https://wezzo72.github.io/Barrandodger/official-government-documents-register.html";
  function base() {
    var p = location.pathname || "";
    if (p.indexOf("/barrandodger-rebuild/") === 0 || p === "/barrandodger-rebuild") return "https://wezzo72.github.io/barrandodger-rebuild/";
    if (p.indexOf("/-church-of-barran-dodger/") === 0 || p === "/-church-of-barran-dodger") return "https://wezzo72.github.io/Barrandodger/";
    if (p.indexOf("/Backup/") === 0 || p === "/Backup") return "https://wezzo72.github.io/Barrandodger/";
    return "https://wezzo72.github.io/Barrandodger/";
  }
  var PAGE = base() + "private-record-able-point-ndis-support-workers-14-october-2026.html";
  var PDF = "https://github.com/wezzo72/Barrandodger/blob/main/PRIVATE-RECORD-ORIGINAL-STATEMENT-REGARDING-ABLE-POINT-AND-NDIS-SUPPORT-WORKERS-14-OCTOBER-2026.pdf";

  function phoneFix() {
    if (document.getElementById("bd-phone-fix")) return;
    var style = document.createElement("style");
    style.id = "bd-phone-fix";
    style.textContent = [
      "html{color-scheme:dark;}",
      "header,nav{backdrop-filter:none !important;-webkit-backdrop-filter:none !important;}",
      ".navlinks{display:flex !important;}",
      "@media(max-width:700px){",
      ".nav{flex-wrap:wrap;}",
      ".navlinks{flex-wrap:nowrap;overflow-x:auto;max-width:100%;gap:14px;}",
      "}"
    ].join("");
    (document.head || document.documentElement).appendChild(style);
  }

  function linkGovernment() {
    var heads = document.querySelectorAll("h1");
    for (var i = 0; i < heads.length; i++) {
      var h = heads[i];
      if (h.querySelector("a")) continue;
      var text = (h.textContent || "").replace(/\s+/g, " ");
      if (!/government/i.test(text)) continue;
      if (!/35 years|correspondence/i.test(text)) continue;
      var a = document.createElement("a");
      a.href = REGISTER;
      a.style.color = "inherit";
      a.style.textDecoration = "underline";
      a.style.textUnderlineOffset = "3px";
      while (h.firstChild) a.appendChild(h.firstChild);
      h.appendChild(a);
    }
  }

  function build(el) {
    el.setAttribute("role", "note");
    el.style.cssText = "margin:0;padding:18px 16px 16px;background:#f3eee4;color:#1a140f;border-bottom:8px solid #8B2E2A;font-family:Georgia,'Times New Roman',serif;text-align:center;";
    var k = document.createElement("p");
    k.style.cssText = "letter-spacing:.14em;font-size:.72rem;font-weight:800;color:#8B2E2A;margin:0 0 8px;font-family:system-ui,sans-serif;";
    k.textContent = "14 OCTOBER 2026 · PRIVATE RECORD · NOT A FINDING";
    el.appendChild(k);
    var t = document.createElement("p");
    t.style.cssText = "margin:0 auto;max-width:46rem;font-size:clamp(1.15rem,3.2vw,1.55rem);line-height:1.25;font-weight:700;";
    var a = document.createElement("a");
    a.href = PAGE;
    a.style.cssText = "color:#1a140f;text-decoration:underline;text-underline-offset:3px;";
    a.textContent = "Private Record — Original Statement Regarding Able Point and NDIS Support Workers";
    t.appendChild(a);
    el.appendChild(t);
    var s = document.createElement("p");
    s.style.cssText = "margin:10px auto 0;max-width:42rem;font-size:.98rem;line-height:1.45;";
    s.textContent = "Reproduced in full. The author’s account to Able Point and NDIS support workers. The name is the link. A link is not a finding.";
    el.appendChild(s);
    var m = document.createElement("p");
    m.style.cssText = "margin:8px auto 0;max-width:46rem;font-size:.82rem;line-height:1.4;color:#3f4c5a;font-family:system-ui,sans-serif;";
    var g = document.createElement("a");
    g.href = PDF;
    g.style.color = "#8B2E2A";
    g.textContent = "PDF on the archive";
    m.appendChild(g);
    m.appendChild(document.createTextNode(" · SHA-256 fa24e094cdd4fd558a644c1c791943bd4ffc281c855c044d082137707dde13eb · appearance is not a finding"));
    el.appendChild(m);
  }

  function place() {
    if (!document.body) return;
    var el = document.getElementById(ID);
    if (!el) {
      el = document.createElement("section");
      el.id = ID;
      build(el);
    }
    if (el.parentNode) return;
    var enemy = document.getElementById("enemy-within-16-october-2026");
    if (enemy && enemy.parentNode) enemy.parentNode.insertBefore(el, enemy.nextSibling);
    else document.body.insertBefore(el, document.body.firstChild);
  }

  function go() {
    phoneFix();
    linkGovernment();
    place();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", go);
  else go();
})();
