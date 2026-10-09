(function () {
  if (document.getElementById("bd-companion")) return;
  var bar = document.createElement("aside");
  bar.id = "bd-companion";
  bar.setAttribute("aria-label", "Companion resources");
  bar.style.cssText = "font-family:Georgia,serif;background:#14110c;color:#f3eee4;border-bottom:1px solid #c9a36a;padding:10px 14px;font-size:16px;line-height:1.45;";
  var k = document.createElement("p");
  k.textContent = "Companion resource · not a revision of the record";
  k.style.cssText = "margin:0 0 4px;color:#c9a36a;font-size:11px;letter-spacing:.08em;text-transform:uppercase;font-family:Arial,sans-serif;font-weight:700;";
  var p = document.createElement("p");
  p.style.margin = "0";
  p.appendChild(document.createTextNode("Barran Dodger Finance and The Impossible Survivor are linked here as significant companion resources. They do not replace the archive. "));
  function link(href, text) {
    var a = document.createElement("a");
    a.href = href;
    a.textContent = text;
    a.style.cssText = "color:#f0d99b;font-weight:700;";
    if (href.indexOf("base44") !== -1) { a.target = "_blank"; a.rel = "noopener"; }
    return a;
  }
  p.appendChild(link("https://barran-dodger-finance.base44.app", "Open the Finance App"));
  p.appendChild(document.createTextNode(" · "));
  p.appendChild(link("https://wezzo72.github.io/Barrandodger/impossible-survivor.html", "Read the testimony"));
  bar.appendChild(k);
  bar.appendChild(p);
  var eco = document.getElementById("bd-eco");
  if (eco && eco.parentNode) eco.parentNode.insertBefore(bar, eco.nextSibling);
  else document.body.insertBefore(bar, document.body.firstChild);
})();
