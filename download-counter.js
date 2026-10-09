(function () {
  var NS = "barrandodger-archive";
  function keyFor(a) {
    if (a && a.dataset && a.dataset.bdKey) return String(a.dataset.bdKey).slice(0, 80);
    var href = a && a.getAttribute ? a.getAttribute("href") : a;
    try {
      var name = decodeURIComponent(new URL(href, location.href).pathname.split("/").pop() || "file");
      return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 80) || "file";
    } catch (e) { return "file"; }
  }
  function isDownload(a) {
    if (a.dataset && a.dataset.bdView === "1") return false;
    if (a.dataset && a.dataset.bdDownload === "1") return true;
    var href = a.getAttribute("href") || "";
    if (!href || href.charAt(0) === "#") return false;
    if (a.hasAttribute("download")) return true;
    if (/\.pdf($|[?#])/i.test(href)) return true;
    var t = (a.textContent || "").replace(/\s+/g, " ").trim().toLowerCase();
    return t === "download" || t.indexOf("download ") === 0 || t.indexOf("download the") === 0;
  }
  function paint(btn, n) { btn.textContent = "Downloads: " + n; }
  function call(path) {
    return fetch("https://abacus.jasoncameron.dev/" + path, { headers: { Accept: "application/json" } }).then(function (r) {
      return r.json().then(function (d) {
        if (!r.ok) {
          var err = new Error((d && d.error) || "counter unavailable");
          err.status = r.status;
          throw err;
        }
        return d;
      });
    });
  }
  var queue = [];
  function pump() {
    var job = queue.shift();
    if (!job) return;
    call(job.path).then(job.ok, job.fail).then(function () { setTimeout(pump, 450); }, function () { setTimeout(pump, 450); });
  }
  function enqueue(path, ok, fail) { queue.push({ path: path, ok: ok, fail: fail }); if (queue.length === 1) pump(); }
  function attach(a) {
    if (a.dataset.bdCount) return;
    a.dataset.bdCount = "1";
    var key = keyFor(a);
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "bd-downloads";
    btn.style.cssText = "display:inline-block;margin:0 0 0 .55rem;padding:.15rem .45rem;border:1px solid currentColor;border-radius:.35rem;background:transparent;color:#8B2E2A;font:600 .82rem/1.2 Arial,sans-serif;cursor:pointer;vertical-align:baseline;";
    paint(btn, "…");
    a.insertAdjacentElement("afterend", btn);
    enqueue("get/" + NS + "/" + encodeURIComponent(key), function (d) { paint(btn, d.value); }, function (err) { paint(btn, err && err.status === 404 ? 0 : "—"); });
    function go() {
      enqueue("hit/" + NS + "/" + encodeURIComponent(key), function (d) { paint(btn, d.value); }, function () {});
    }
    a.addEventListener("click", go);
    btn.addEventListener("click", function () { go(); window.location.href = a.href; });
  }
  function run() { document.querySelectorAll("a[href]").forEach(function (a) { if (isDownload(a)) attach(a); }); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run); else run();
})();

(function () {
  if (document.getElementById("bd-companion") || document.querySelector("script[data-bd-companion]")) return;
  var s = document.createElement("script");
  s.src = "https://wezzo72.github.io/Barrandodger/companion-resources.js";
  s.defer = true;
  s.setAttribute("data-bd-companion", "1");
  document.head.appendChild(s);
})();
