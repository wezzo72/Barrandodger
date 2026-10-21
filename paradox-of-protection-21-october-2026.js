(function () {
  if (window.__bdParadoxOfProtection) return;
  window.__bdParadoxOfProtection = true;
  var ID = "paradox-of-protection-21-october-2026";
  var PAGE = "https://wezzo72.github.io/Barrandodger/the-paradox-of-protection-the-witness-and-the-divine-reckoning.html";
  var PDF = "https://wezzo72.github.io/Barrandodger/2026-10-21-THE-PARADOX-OF-PROTECTION-THE-WITNESS-AND-THE-DIVINE-RECKONING.pdf";
  function place() {
    if (!document.body) return;
    var el = document.getElementById(ID);
    if (!el) {
      el = document.createElement("section");
      el.id = ID;
      el.setAttribute("role", "note");
      el.style.cssText = "margin:0;padding:18px 16px 16px;background:#f3eee4;color:#1a140f;border-bottom:8px solid #8B2E2A;font-family:Georgia,'Times New Roman',serif;text-align:center;";
      el.innerHTML = '<p style="letter-spacing:.14em;font-size:.72rem;font-weight:800;color:#8B2E2A;margin:0 0 8px;font-family:system-ui,sans-serif;">21 OCTOBER 2026 · TESTIMONY · FULL TEXT · NOT A FINDING</p>'
        + '<p style="margin:0 auto;max-width:46rem;font-size:clamp(1.15rem,3.2vw,1.6rem);line-height:1.25;font-weight:700;"><a href="' + PAGE + '" style="color:#1a140f;text-decoration:underline;text-underline-offset:3px;">The Paradox of Protection, the Witness and the Divine Reckoning</a></p>'
        + '<p style="margin:10px auto 0;max-width:44rem;font-size:.98rem;line-height:1.45;">A public testimony by Dr Richard William McLean — Barran Dodger. The full text is on its own page. The links in the PDF are kept. A link is not a finding.</p>'
        + '<p style="margin:12px auto 0;"><a href="' + PAGE + '" style="color:#8B2E2A;font-weight:700;">Read the full text</a> · <a href="' + PDF + '" style="color:#8B2E2A;font-weight:700;">PDF</a></p>';
    }
    if (document.body.firstChild !== el) document.body.insertBefore(el, document.body.firstChild);
  }
  function arm() {
    place();
    [80, 600, 1600, 3200].forEach(function (ms) { setTimeout(place, ms); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", arm);
  else arm();
  window.addEventListener("load", place);
})();
