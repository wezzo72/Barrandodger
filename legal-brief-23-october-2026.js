(function () {
  if (window.__bdLegalBrief23) return;
  window.__bdLegalBrief23 = true;
  var ID = "legal-brief-23-october-2026";
  var TITLE = "LEGAL BRIEF of BARRAN DODGER / DR RICHARD WILLIAM MCLEAN — Fri 23rd October, 2026";
  var BLOB = "https://github.com/wezzo72/Barrandodger/blob/main/2026-10-23-LEGAL-BRIEF-of-BARRAN-DODGER-DR-RICHARD-WILLIAM-MCLEAN.pdf";
  var PDF = "https://wezzo72.github.io/Barrandodger/2026-10-23-LEGAL-BRIEF-of-BARRAN-DODGER-DR-RICHARD-WILLIAM-MCLEAN.pdf";
  var HASH = "effa0bfe8894e4d9f98de8de8988a44ddef8ee95b1317a80d28d7cbd20fca8ff";
  function place() {
    if (!document.body) return;
    var el = document.getElementById(ID);
    if (!el) {
      el = document.createElement("section");
      el.id = ID;
      el.setAttribute("role", "note");
      el.style.cssText = "margin:0;padding:18px 16px 16px;background:#f3eee4;color:#1a140f;border-bottom:8px solid #8B2E2A;font-family:Georgia,'Times New Roman',serif;text-align:center;";
      el.innerHTML = '<p style="letter-spacing:.14em;font-size:.72rem;font-weight:800;color:#8B2E2A;margin:0 0 8px;font-family:system-ui,sans-serif;">23 OCTOBER 2026 · LEGAL BRIEF · NOT A FINDING</p>'
        + '<p style="margin:0 auto;max-width:48rem;font-size:clamp(1.05rem,2.8vw,1.45rem);line-height:1.3;font-weight:700;"><a href="' + BLOB + '" style="color:#1a140f;text-decoration:underline;text-underline-offset:3px;">' + TITLE + '</a></p>'
        + '<p style="margin:10px auto 0;max-width:44rem;font-size:.98rem;line-height:1.45;">Comprehensive legal status, access to justice, international human rights, institutional accountability and documentary evidence investigation. A finding aid. Not a court. Not a verdict.</p>'
        + '<p style="margin:8px auto 0;max-width:46rem;font-size:.82rem;line-height:1.45;color:#3f4c5a;font-family:system-ui,sans-serif;overflow-wrap:anywhere;">SHA-256 ' + HASH + ' · <a href="' + PDF + '" style="color:inherit;font-weight:700;">Open the PDF</a></p>';
    }
    var pin = document.getElementById("philip-glass-letter");
    if (pin && pin.parentNode === document.body) {
      if (pin.nextSibling !== el) pin.parentNode.insertBefore(el, pin.nextSibling);
    } else if (document.body.firstChild !== el) {
      document.body.insertBefore(el, document.body.firstChild);
    }
  }
  function arm() {
    place();
    [0, 400, 1200, 2500, 5000, 9000, 14000].forEach(function (ms) { setTimeout(place, ms); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", arm);
  else arm();
  window.addEventListener("load", function () {
    place();
    [400, 2000, 6000].forEach(function (ms) { setTimeout(place, ms); });
  });
})();
