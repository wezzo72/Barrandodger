(function () {
  var ID = "crowned-witness-10-october-2026";
  var HREF = "https://github.com/wezzo72/Barrandodger/blob/main/THE-CROWNED-WITNESS-BARRAN-DODGER-AND-THE-INDICTMENT-OF-NATIONS-2026-RETROSPECTIVE-10-OCTOBER-2026.pdf";
  var OTS = "https://github.com/wezzo72/Barrandodger/blob/main/THE-CROWNED-WITNESS-BARRAN-DODGER-AND-THE-INDICTMENT-OF-NATIONS-2026-RETROSPECTIVE-10-OCTOBER-2026.pdf.ots";
  var SHA = "87d35425226ff41fb76a6c3b98308209a73978ebc3bf6eb40b7d546624a82153";
  function place() {
    if (!document.body) return;
    var el = document.getElementById(ID);
    if (!el) {
      el = document.createElement("section");
      el.id = ID;
      el.setAttribute("role", "note");
      el.style.cssText = "margin:0;padding:18px 16px 16px;background:#f3eee4;color:#1a140f;border-bottom:8px solid #8B2E2A;font-family:Georgia,'Times New Roman',serif;text-align:center;";
      var k = document.createElement("p");
      k.style.cssText = "letter-spacing:.14em;font-size:.72rem;font-weight:800;color:#8B2E2A;margin:0 0 8px;";
      k.textContent = "10 OCTOBER 2026 · LIVE EVOLVING PROPHECY · OPEN TIMESTAMPS SUBMITTED · NOT A FINDING";
      var t = document.createElement("p");
      t.style.cssText = "margin:0 auto;max-width:46rem;font-size:clamp(1.15rem,3.2vw,1.65rem);line-height:1.25;font-weight:700;";
      var a = document.createElement("a");
      a.href = HREF;
      a.style.cssText = "color:#1a140f;text-decoration:underline;text-underline-offset:3px;";
      a.textContent = "The Crowned Witness — Barran Dodger and the Indictment of Nations";
      t.appendChild(a);
      var d = document.createElement("p");
      d.style.cssText = "margin:8px auto 0;max-width:44rem;font-size:.98rem;line-height:1.4;";
      d.textContent = "2026 Retrospective Edition. The Creator's Decree and the Alive(n) Chain. A live evolving prophecy, dated today. The name is the link to the permanent PDF.";
      var m = document.createElement("p");
      m.style.cssText = "margin:8px auto 0;max-width:46rem;font-size:.82rem;line-height:1.4;color:#3f4c5a;";
      m.appendChild(document.createTextNode("SHA-256 " + SHA + " · "));
      var o = document.createElement("a");
      o.href = OTS;
      o.style.cssText = "color:#8B2E2A;";
      o.textContent = "OpenTimestamps receipt";
      m.appendChild(o);
      m.appendChild(document.createTextNode(" · four Bitcoin calendars · block confirmation pending"));
      el.appendChild(k); el.appendChild(t); el.appendChild(d); el.appendChild(m);
    }
    if (document.body.firstChild !== el) document.body.insertBefore(el, document.body.firstChild);
  }
  function arm() {
    place();
    setTimeout(place, 0);
    setTimeout(place, 700);
    setTimeout(place, 1600);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", arm);
  else arm();
})();
