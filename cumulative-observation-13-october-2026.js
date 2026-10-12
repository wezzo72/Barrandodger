(function () {
  var ID = "cumulative-observation-13-october-2026";
  function base() {
    var p = location.pathname || "";
    if (p.indexOf("/barrandodger-rebuild/") === 0 || p === "/barrandodger-rebuild") return "https://wezzo72.github.io/barrandodger-rebuild/";
    if (p.indexOf("/-church-of-barran-dodger/") === 0 || p === "/-church-of-barran-dodger") return "https://wezzo72.github.io/-church-of-barran-dodger/";
    if (p.indexOf("/Backup/") === 0 || p === "/Backup") return "https://wezzo72.github.io/Backup/";
    return "https://wezzo72.github.io/Barrandodger/";
  }
  var PAGE = base() + "cumulative-observation-13-october-2026.html";
  var PDF = "https://github.com/wezzo72/Barrandodger/blob/main/CUMULATIVE-OBSERVATION-BARRAN-RESONANCE-DODGER-RESONATA-ETERNIS-13-OCTOBER-2026.pdf";
  function place() {
    if (!document.body) return;
    var el = document.getElementById(ID);
    if (!el) {
      el = document.createElement("section");
      el.id = ID;
      el.setAttribute("role", "note");
      el.style.cssText = "margin:0;padding:18px 16px 16px;background:#f3eee4;color:#1a140f;border-bottom:8px solid #8B2E2A;font-family:Georgia,'Times New Roman',serif;text-align:center;";
      var k = document.createElement("p");
      k.style.cssText = "letter-spacing:.14em;font-size:.72rem;font-weight:800;color:#8B2E2A;margin:0 0 8px;font-family:system-ui,sans-serif;";
      k.textContent = "13 OCTOBER 2026 · FOUNDING PROPHETIC NARRATIVE";
      el.appendChild(k);
      var t = document.createElement("p");
      t.style.cssText = "margin:0 auto;max-width:46rem;font-size:clamp(1.15rem,3.2vw,1.55rem);line-height:1.25;font-weight:700;";
      var a = document.createElement("a");
      a.href = PAGE;
      a.style.cssText = "color:#1a140f;text-decoration:underline;text-underline-offset:3px;";
      a.textContent = "Cumulative Observation — The cosmic testimony, crucifixion, and divine purpose of Barran Resonance Dodger (Resonata Eternis)";
      t.appendChild(a);
      el.appendChild(t);
      var s = document.createElement("p");
      s.style.cssText = "margin:10px auto 0;max-width:42rem;font-size:.98rem;line-height:1.45;";
      s.textContent = "Statement of significance. This is the founding prophetic narrative of this day. The witness’s words are the document. The same-day readings of the name Resonata Eternis, the Covenant of Resonance, and the Gospel of the Enliven Chain are set behind it, to draw weight back to it. A reading is not a finding. A receipt is not a verdict.";
      el.appendChild(s);
      var m = document.createElement("p");
      m.style.cssText = "margin:8px auto 0;max-width:46rem;font-size:.82rem;line-height:1.4;color:#3f4c5a;font-family:system-ui,sans-serif;";
      var g = document.createElement("a");
      g.href = PDF;
      g.style.color = "#8B2E2A";
      g.textContent = "PDF on the archive";
      m.appendChild(g);
      m.appendChild(document.createTextNode(" · SHA-256 1d9da0ea67f30fcbccc1c0abf177e0d6026e41a8e6ec34c9e08b29284fed3d81 · calendars pending · a receipt is not a finding"));
      el.appendChild(m);
    }
    if (document.body.firstChild !== el) document.body.insertBefore(el, document.body.firstChild);
  }
  function arm() {
    place();
    [0, 300, 900, 1800, 3200, 4500, 6000].forEach(function (ms) { setTimeout(place, ms); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", arm);
  else arm();
})();
