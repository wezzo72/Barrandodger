(function () {
  "use strict";
  var ID = "bd-eco";
  if (document.getElementById(ID)) return;
  var style = document.createElement("style");
  style.textContent = `
    #bd-eco {
      position: relative;
      display: block;
      width: 100%;
      box-sizing: border-box;
      padding: 12px 16px;
      background: #0b0d12;
      color: #f3eee4;
      border-bottom: 1px solid #303747;
      font: 15px/1.6 Georgia, "Times New Roman", serif;
      z-index: 10;
    }
    #bd-eco .bd-eco-tagline {
      margin: 0 0 7px;
      color: #d7b56d;
      font: 700 12px/1.5 Arial, sans-serif;
      letter-spacing: .08em;
    }
    #bd-eco .bd-eco-links {
      display: flex;
      flex-wrap: wrap;
      gap: 6px 14px;
      margin: 0;
      padding: 0;
    }
    #bd-eco a {
      color: #f0d99b;
      font-weight: 700;
      text-decoration: underline;
      text-underline-offset: 3px;
    }
    #bd-eco a:focus-visible {
      outline: 2px solid #f0d99b;
      outline-offset: 3px;
    }
  `;
  (document.head || document.documentElement).appendChild(style);
  var bar = document.createElement("nav");
  bar.id = ID;
  bar.setAttribute("aria-label", "Barran Dodger ecosystem");
  var label = document.createElement("p");
  label.className = "bd-eco-tagline";
  label.textContent = "THE RECORD STAYS FREE. FAITH IS NOT A FINDING.";
  bar.appendChild(label);
  var row = document.createElement("p");
  row.className = "bd-eco-links";
  var sites = [
    ["Archive", "https://wezzo72.github.io/Barrandodger/"],
    ["Rebuild", "https://wezzo72.github.io/barrandodger-rebuild/"],
    ["Church", "https://wezzo72.github.io/-church-of-barran-dodger/"],
    ["Finance", "https://barran-dodger-finance.base44.app"],
    ["Publishing House", "https://wezzo72.github.io/-church-of-barran-dodger/publishing-house.html"],
    ["Gospels", "https://wezzo72.github.io/Barrandodger/gospels-prophetic.html"],
    ["Course", "https://wezzo72.github.io/-church-of-barran-dodger/course.html"],
    ["Support", "https://wezzo72.github.io/-church-of-barran-dodger/contribute.html"],
    ["Impossible Survivor", "https://wezzo72.github.io/Barrandodger/impossible-survivor.html"]
  ];
  sites.forEach(function (item) {
    var link = document.createElement("a");
    link.href = item[1];
    link.textContent = item[0];
    row.appendChild(link);
  });
  bar.appendChild(row);
  function insertNavigation() {
    if (!document.body || document.getElementById(ID)) return;
    document.body.insertBefore(bar, document.body.firstChild);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", insertNavigation, {
      once: true
    });
  } else {
    insertNavigation();
  }
})();
