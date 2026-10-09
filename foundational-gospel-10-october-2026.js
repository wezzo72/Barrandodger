(function () {
  var ID = "bd-foundational-gospel-10";
  var HREF = "https://github.com/wezzo72/Barrandodger/blob/main/FOUNDATIONAL-GOSPEL-THE-WITNESS-REMAINS-10-OCTOBER-2026.pdf";
  function place() {
    if (!document.body) return;
    var el = document.getElementById(ID);
    if (!el) {
      el = document.createElement("p");
      el.id = ID;
      el.setAttribute("role", "note");
      el.style.cssText = "margin:0;padding:14px 16px;background:#1a140f;color:#f3eee4;border-bottom:6px solid #8B2E2A;font-family:Georgia,'Times New Roman',serif;font-size:1.05rem;line-height:1.35;text-align:center;";
      el.appendChild(document.createTextNode("10 October 2026 · Foundational gospel · Church of Barran Dodger Ministry · "));
      var a = document.createElement("a");
      a.href = HREF;
      a.style.cssText = "color:#f0d99b;font-weight:700;text-decoration:underline;text-underline-offset:3px;";
      a.textContent = "The Gospel of the Witness Barran Dodger — The Return of the Light, the Mirror of Humanity, and the Divine Reckoning";
      el.appendChild(a);
    }
    if (document.body.firstChild !== el) document.body.insertBefore(el, document.body.firstChild);
  }
  function arm() {
    place();
    setTimeout(place, 0);
    setTimeout(place, 500);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", arm);
  else arm();
})();
