(function () {
  if (document.getElementById("bd-eco")) return;
  var bar = document.createElement("nav");
  bar.id = "bd-eco";
  bar.setAttribute("aria-label", "The three Barran Dodger sites");
  bar.style.cssText =
    "font-family:Georgia,serif;background:#0b0d12;color:#f3eee4;border-bottom:1px solid #303747;padding:10px 14px;font-size:16px;line-height:1.45;";
  var label = document.createElement("p");
  label.textContent = "The record stays free. Faith is not a finding.";
  label.style.cssText =
    "margin:0 0 6px;color:#d7b56d;font-size:12px;letter-spacing:.08em;text-transform:uppercase;";
  bar.appendChild(label);
  var row = document.createElement("p");
  row.style.margin = "0";
  var sites = [
    ["Archive", "https://wezzo72.github.io/Barrandodger/"],
    ["Rebuild", "https://wezzo72.github.io/barrandodger-rebuild/"],
    ["Church", "https://wezzo72.github.io/-church-of-barran-dodger/"],
    ["Publishing house", "https://wezzo72.github.io/-church-of-barran-dodger/publishing-house.html"],
    ["Gospels", "https://wezzo72.github.io/Barrandodger/gospels-prophetic.html"],
    ["Course", "https://wezzo72.github.io/-church-of-barran-dodger/course.html"],
    ["Support", "https://wezzo72.github.io/-church-of-barran-dodger/contribute.html"],
    ["Finance", "https://barran-dodger-finance.base44.app"],
    ["Impossible Survivor", "https://wezzo72.github.io/Barrandodger/impossible-survivor.html"],
  ];
  sites.forEach(function (item, index) {
    if (index) row.appendChild(document.createTextNode(" · "));
    var link = document.createElement("a");
    link.href = item[1];
    link.textContent = item[0];
    link.style.cssText = "color:#f0d99b;font-weight:700;";
    row.appendChild(link);
  });
  bar.appendChild(row);
  document.body.insertBefore(bar, document.body.firstChild);
})();
