(function(){
  if (window.__bdEnemyLink) return;
  window.__bdEnemyLink = true;
  var path = location.pathname || "";
  if (/the-enemy-within-16-october-2026\.html$/i.test(path)) return;
  var ID = "enemy-within-16-october-2026";
  var HREF = "https://wezzo72.github.io/barrandodger-rebuild/the-enemy-within-16-october-2026.html";
  var PDF = "https://github.com/wezzo72/Barrandodger/blob/main/THE-ENEMY-WITHIN-FAMILY-BETRAYAL-COMMUNITY-POWER-INSTITUTIONAL-EXILE-AND-THE-PRICE-OF-INTEGRITY-16-OCTOBER-2026.pdf";
  var HASH = "e74e2b8743bff27e04069cd11b38250675ec72841cd788d71f5d6f18a9fe95f6";
  function ensure(){
    var el = document.getElementById(ID);
    if (!el) {
      el = document.createElement("section");
      el.id = ID;
      el.setAttribute("role", "note");
      if (document.body) document.body.insertBefore(el, document.body.firstChild);
    }
    if (el.getAttribute("data-enemy-full") !== "20261016d") {
      el.setAttribute("data-enemy-full", "20261016d");
      el.style.cssText = "margin:0;padding:22px 16px 18px;background:#1a140f;color:#f3eee4;border-bottom:8px solid #8B2E2A;font-family:Georgia,'Times New Roman',serif;text-align:center;";
      el.innerHTML = '<p style="letter-spacing:.14em;font-size:.72rem;font-weight:800;color:#e6c36a;margin:0 0 8px;font-family:system-ui,sans-serif;">16 OCTOBER 2026 · FULL TEXT · NOT A FINDING</p>'
        + '<p style="margin:0 auto;max-width:44rem;font-size:clamp(1.2rem,3.5vw,1.65rem);line-height:1.25;font-weight:700;"><a href="' + HREF + '" style="color:#f3eee4;text-decoration:underline;text-underline-offset:3px;">THE ENEMY WITHIN - Family Betrayal, Community Power, Institutional Exile, and the Price of Integrity</a></p>'
        + '<p style="margin:10px auto 0;max-width:42rem;font-size:.98rem;line-height:1.45;color:#e4d5bc;">The extended testimony, in full, on its own page, to the last line. The prophetic video is at the close. The name is the link. A link is not a finding.</p>'
        + '<p style="margin:8px auto 0;max-width:44rem;font-size:.78rem;line-height:1.4;color:#c9a36a;font-family:ui-monospace,Menlo,Consolas,monospace;word-break:break-all;"><a href="' + PDF + '" style="color:#e6c36a;font-family:Georgia,serif;font-size:.92rem;">PDF on GitHub</a> · #' + HASH + '</p>';
    }
    return el;
  }
  var busy = false;
  function place(){
    if (!document.body || busy) return;
    busy = true;
    var el = ensure();
    if (document.body.firstChild !== el) document.body.insertBefore(el, document.body.firstChild);
    var pr = document.getElementById("private-record-able-point-14-october-2026");
    if (pr && el.nextSibling !== pr) el.parentNode.insertBefore(pr, el.nextSibling);
    busy = false;
  }
  function arm(){
    place();
    [0,250,700,1400,2500,4200,6800,9000].forEach(function(ms){ setTimeout(place, ms); });
    if (window.MutationObserver && document.body) {
      new MutationObserver(function(){ place(); }).observe(document.body, {childList:true});
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", arm);
  else arm();
  window.addEventListener("load", place);
})();
