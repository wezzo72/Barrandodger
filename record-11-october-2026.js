(function () {
  var ITEM = "itemised-list-11-october-2026";
  var OFFER = "offer-the-government-11-october-2026";
  var RIDLEY = "tony-ridley-12-october-2026";
  var BASE = (function () {
    var p = location.pathname || "";
    if (p.indexOf("/barrandodger-rebuild/") === 0 || p === "/barrandodger-rebuild") return "https://wezzo72.github.io/barrandodger-rebuild/";
    if (p.indexOf("/-church-of-barran-dodger/") === 0 || p === "/-church-of-barran-dodger") return "https://wezzo72.github.io/-church-of-barran-dodger/";
    if (p.indexOf("/Barrandodger/") === 0 || p === "/Barrandodger") return "https://wezzo72.github.io/Barrandodger/";
    return "";
  })();
  var ITEM_HREF = BASE + "full-comprehensive-itemised-list-11-october-2026.html";
  var OFFER_HREF = BASE + "offer-the-government-its-own-record-11-october-2026.html";
  var RIDLEY_HREF = "https://wezzo72.github.io/barrandodger-rebuild/tony-ridley-nsw-stalking-evidence-reference-12-october-2026.html";
  var GH = "https://github.com/wezzo72/Barrandodger/blob/main/";
  function cssSection() {
    return "margin:0;padding:18px 16px 16px;background:#f3eee4;color:#1a140f;border-bottom:8px solid #8B2E2A;font-family:Georgia,'Times New Roman',serif;text-align:center;";
  }
  function addP(parent, css, text) {
    var p = document.createElement("p");
    p.style.cssText = css;
    if (text) p.textContent = text;
    parent.appendChild(p);
    return p;
  }
  function buildRidley(el) {
    addP(el, "letter-spacing:.14em;font-size:.72rem;font-weight:800;color:#8B2E2A;margin:0 0 8px;", "12 OCTOBER 2026 · FINDING AID · NOT A FINDING");
    var t = addP(el, "margin:0 auto;max-width:46rem;font-size:clamp(1.15rem,3.2vw,1.6rem);line-height:1.25;font-weight:700;");
    var a = document.createElement("a");
    a.href = RIDLEY_HREF;
    a.style.cssText = "color:#1a140f;text-decoration:underline;text-underline-offset:3px;";
    a.textContent = "Tony Ridley — NSW Stalking Evidence Reference";
    t.appendChild(a);
    addP(el, "margin:8px auto 0;max-width:44rem;font-size:.98rem;line-height:1.4;", "Alleged electronic surveillance, stalking and death threats. A pathway register for the repository. The name is the link. A link is not a finding.");
    var m = addP(el, "margin:8px auto 0;max-width:46rem;font-size:.82rem;line-height:1.4;color:#3f4c5a;");
    m.appendChild(document.createTextNode("SHA-256 7c210284c30582356ca1d354d2278764d04600208dc17402bf19d8f7abcc4993 · "));
    var o = document.createElement("a");
    o.href = GH + "TONY-RIDLEY-NSW-STALKING-EVIDENCE-REFERENCE-12-OCTOBER-2026.md";
    o.style.color = "#8B2E2A";
    o.textContent = "Markdown source";
    m.appendChild(o);
    m.appendChild(document.createTextNode(" · "));
    var g = document.createElement("a");
    g.href = "https://github.com/wezzo72/barrandodger-rebuild/blob/main/tony-ridley-nsw-stalking-evidence-reference-12-october-2026.html";
    g.style.color = "#8B2E2A";
    g.textContent = "GitHub page";
    m.appendChild(g);
    m.appendChild(document.createTextNode(" · appearance is not a finding"));
  }
  function buildItem(el) {
    addP(el, "letter-spacing:.14em;font-size:.72rem;font-weight:800;color:#8B2E2A;margin:0 0 8px;", "11 OCTOBER 2026 · OPEN TIMESTAMPS SUBMITTED · NOT A FINDING");
    var t = addP(el, "margin:0 auto;max-width:46rem;font-size:clamp(1.15rem,3.2vw,1.6rem);line-height:1.25;font-weight:700;");
    var a = document.createElement("a");
    a.href = ITEM_HREF;
    a.style.cssText = "color:#1a140f;text-decoration:underline;text-underline-offset:3px;";
    a.textContent = "Full Comprehensive Itemised List of Alleged Acts, Treatment, Losses and Institutional Failures";
    t.appendChild(a);
    addP(el, "margin:8px auto 0;max-width:44rem;font-size:.98rem;line-height:1.4;", "A consolidated statement of alleged conduct, non-consent, losses and institutional failures, published in full. The name is the link. A link is not a finding.");
    var m = addP(el, "margin:8px auto 0;max-width:46rem;font-size:.82rem;line-height:1.4;color:#3f4c5a;");
    m.appendChild(document.createTextNode("SHA-256 f9a3067caefeb2ab4afebf4400bc9da56b362ba82905ffcc1de8054a50b4f99f · "));
    var o = document.createElement("a");
    o.href = GH + "FULL-COMPREHENSIVE-ITEMISED-LIST-OF-ALLEGED-ACTS-11-OCTOBER-2026.pdf.ots";
    o.style.color = "#8B2E2A";
    o.textContent = "OpenTimestamps receipt";
    m.appendChild(o);
    m.appendChild(document.createTextNode(" · "));
    var g = document.createElement("a");
    g.href = GH + "FULL-COMPREHENSIVE-ITEMISED-LIST-OF-ALLEGED-ACTS-11-OCTOBER-2026.pdf";
    g.style.color = "#8B2E2A";
    g.textContent = "GitHub PDF";
    m.appendChild(g);
    m.appendChild(document.createTextNode(" · four Bitcoin calendars · block confirmation pending"));
  }
  function buildOffer(el) {
    el.style.background = "#f7f1e6";
    addP(el, "letter-spacing:.14em;font-size:.72rem;font-weight:800;color:#8B2E2A;margin:0 0 8px;", "11 OCTOBER 2026 · OPEN TIMESTAMPS SUBMITTED · NOT A FINDING");
    var t = addP(el, "margin:0 auto;max-width:46rem;font-size:clamp(1.15rem,3.2vw,1.6rem);line-height:1.25;font-weight:700;");
    var a = document.createElement("a");
    a.href = OFFER_HREF;
    a.style.cssText = "color:#1a140f;text-decoration:underline;text-underline-offset:3px;";
    a.textContent = "Offer the Government Its Own Record";
    t.appendChild(a);
    addP(el, "margin:8px auto 0;max-width:44rem;font-size:.98rem;line-height:1.4;", "The man in every file — yet nowhere in the whole. Published in full. The name is the link. A link is not a finding.");
    var m = addP(el, "margin:8px auto 0;max-width:46rem;font-size:.82rem;line-height:1.4;color:#3f4c5a;");
    m.appendChild(document.createTextNode("SHA-256 79d3aef8216ec08b1b0e96df9f600076251fc440cce04884f3525931ded9c919 · "));
    var o = document.createElement("a");
    o.href = GH + "OFFER-THE-GOVERNMENT-ITS-OWN-RECORD-11-OCTOBER-2026.pdf.ots";
    o.style.color = "#8B2E2A";
    o.textContent = "OpenTimestamps receipt";
    m.appendChild(o);
    m.appendChild(document.createTextNode(" · "));
    var g = document.createElement("a");
    g.href = GH + "OFFER-THE-GOVERNMENT-ITS-OWN-RECORD-11-OCTOBER-2026.pdf";
    g.style.color = "#8B2E2A";
    g.textContent = "GitHub PDF";
    m.appendChild(g);
    m.appendChild(document.createTextNode(" · four Bitcoin calendars · block confirmation pending"));
  }
  function ensure(id, builder) {
    var el = document.getElementById(id);
    if (!el) {
      el = document.createElement("section");
      el.id = id;
      el.setAttribute("role", "note");
      el.style.cssText = cssSection();
      builder(el);
    }
    return el;
  }
  function place() {
    if (!document.body) return;
    var ridley = ensure(RIDLEY, buildRidley);
    var item = ensure(ITEM, buildItem);
    var offer = ensure(OFFER, buildOffer);
    var og = document.getElementById("ogdr-banner");
    if (og && og.parentNode === document.body) {
      document.body.insertBefore(offer, og.nextSibling);
      document.body.insertBefore(item, og.nextSibling);
      document.body.insertBefore(ridley, og.nextSibling);
    } else {
      document.body.insertBefore(offer, document.body.firstChild);
      document.body.insertBefore(item, document.body.firstChild);
      document.body.insertBefore(ridley, document.body.firstChild);
    }
  }
  function arm() {
    place();
    [0, 400, 900, 1800, 2600, 4000].forEach(function (ms) { setTimeout(place, ms); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", arm);
  else arm();
})();
