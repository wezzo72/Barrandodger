(function(){
  var U = "https://wezzo72.github.io/Barrandodger/#crimes";
  var LINE = '<p class="evidence-link" style="margin:0 0 12px;font-size:.9rem;opacity:.9">Documented evidence: <a href="'+U+'">'+U+'</a></p>';
  function inject(){
    var root = document.getElementById("content") || document.body;
    if(!root || root.querySelector(".evidence-link")) return;
    var d = document.createElement("div");
    d.innerHTML = LINE;
    var first = root.firstChild;
    if(first) root.insertBefore(d.firstChild, first);
    else root.appendChild(d.firstChild);
  }
  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", inject);
  else inject();
  var obs = new MutationObserver(function(){ inject(); });
  if(document.getElementById("content")) obs.observe(document.getElementById("content"), {childList:true, subtree:false});
})();
