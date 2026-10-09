(function () {
  if (document.getElementById("bd-eco")) return;
  var style = document.createElement("style");
  style.textContent = `
    #bd-eco {
      position: relative;
      z-index: 100;
      display: block;
      width: 100%;
      box-sizing: border-box;
      padding: 12px 16px;
      background: #0b0d12;
      color: #f3eee4;
      border-bottom: 1px solid #303747;
      font-family: Georgia, serif;
      font-size: 15px;
      line-height: 1.6;
    }
    #bd-eco .bd-eco-tagline {
      margin: 0 0 7px;
      color: #d7b56d;
      font-size: 12px;
      letter-spacing: .08em;
      text-transform: uppercase;
    }
    #bd-eco .bd-eco-links {
      display: flex;
      flex-wrap: wrap;
      gap: 5px 14px;
      margin: 0;
    }
    #bd-eco a {
      color: #f0d99b;
      font-weight: 700;
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  `;
  document.head.appendChild(style);
  var bar = document.createElement("nav");
  bar.id = "bd-eco";
  bar.setAttribute("aria-label", "Barran Dodger ecosystem navigation");
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
  document.body.insertBefore(bar, document.body.firstChild);
})();
