(function(){
  var ROUTES = {
  "r01": "tabs/r01-master-evidence.html",
  "r02": "tabs/r02-chronology.html",
  "r03": "tabs/r03-architecture.html",
  "r04": "tabs/r04-institutional-map.html",
  "r05": "tabs/r05-contradictions.html",
  "r06": "tabs/r06-whistleblower.html",
  "r07": "tabs/r07-human-rights.html",
  "r08": "tabs/r08-financial.html",
  "r09": "tabs/r09-allegations.html",
  "r10": "tabs/r10-repository.html",
  "home": "tabs/home.html",
  "bio": "tabs/bio.html",
  "archive-about": "tabs/about-archive.html",
  "crimes": "tabs/crimes.html",
  "manifesto": "tabs/manifesto.html",
  "pids": "tabs/pids-all.html",
  "legal-brief": "legal-brief.html",
  "personal-statement-exile": "tabs/personal-statement-exile.html",
  "witness": "tabs/witness.html",
  "the-witness-remains": "tabs/the-witness-remains.html",
  "able-point": "tabs/able-point-exile.html",
  "official": "official.html",
  "evidence": "evidence/allegation-matrix.html",
  "sources": "SOURCES.html"
  };
  var tabsEl = document.getElementById('tabs');
  var identityEl = document.getElementById('identity');
  var content = document.getElementById('content');
  var cache = {};
  function injectWitnessTab(){
    if(identityEl && !identityEl.querySelector('[data-page="the-witness-remains"]')){
      var a = document.createElement('a');
      a.href = '#the-witness-remains';
      a.setAttribute('data-page', 'the-witness-remains');
      a.textContent = 'THE WITNESS REMAINS · 30 Sep 2026';
      identityEl.insertBefore(a, identityEl.firstChild);
    }
    if(tabsEl && !tabsEl.querySelector('[data-page="the-witness-remains"]')){
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'tab';
      b.setAttribute('data-page', 'the-witness-remains');
      b.textContent = 'THE WITNESS REMAINS · 30 Sep 2026';
      tabsEl.insertBefore(b, tabsEl.firstChild);
    }
    var landing = document.getElementById('landing');
    if(landing && !document.getElementById('twr-2026-09-30-callout')){
      var box = document.createElement('div');
      box.id = 'twr-2026-09-30-callout';
      box.setAttribute('style', 'background:#160e0c;border:1px solid #c4452f;border-left:5px solid #f1c75b;padding:14px 16px;margin:14px 0 18px;');
      box.innerHTML = '<p style="font-size:.72rem;letter-spacing:.14em;color:#f1c75b;font-weight:700;margin:0 0 8px;">ADDED 30 SEPTEMBER 2026</p><p style="margin:0;"><a href="#the-witness-remains">THE WITNESS REMAINS</a> · <a href="tabs/the-witness-remains.html">standalone tab</a> · <a href="statements/THE-WITNESS-REMAINS-30-SEPTEMBER-2026.md">markdown file</a></p>';
      landing.insertBefore(box, landing.firstChild);
    }
  }
  function setActive(id){
    if(tabsEl) tabsEl.querySelectorAll('button').forEach(function(b){
      var on = b.getAttribute('data-page') === id;
      b.classList.toggle('active', on);
    });
    var fEl = document.getElementById('forensic-tabs');
    if(fEl) fEl.querySelectorAll('button').forEach(function(b){
      var on = b.getAttribute('data-page') === id;
      b.classList.toggle('active', on);
    });
    if(identityEl) identityEl.querySelectorAll('a').forEach(function(a){
      a.classList.toggle('on', a.getAttribute('data-page') === id);
    });
  }
  function extractBody(html){
    var m = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    var inner = m ? m[1] : html;
    return inner.replace(/<script[\s\S]*?<\/script>/gi, '');
  }
  var req = 0;
  function showLanding(){
    req++;
    var landing = document.getElementById('landing');
    var archive = document.getElementById('archive');
    if(landing) landing.hidden = false;
    if(archive) archive.hidden = true;
    history.replaceState(null, '', location.pathname + location.search);
    window.scrollTo(0, 0);
  }
  async function show(id){
    if(id === 'archive-about' || id === 'about'){ showLanding(); return; }
    var href = ROUTES[id];
    if(!href){ return; }
    var my = ++req;
    try{
      var html = cache[href];
      if(!html){
        var res = await fetch(href, {cache: 'no-cache'});
        if(!res.ok) throw new Error(res.status + ' ' + res.statusText);
        html = await res.text();
        cache[href] = html;
      }
      if(my !== req) return;
      document.getElementById('landing').hidden = true;
      document.getElementById('archive').hidden = false;
      content.innerHTML = '<p>Full source: <a href="'+href+'">'+href+'</a></p><div>'+extractBody(html)+'</div>';
      setActive(id);
      history.replaceState(null, '', '#' + id);
      window.scrollTo(0, 0);
    } catch(err){
      document.getElementById('landing').hidden = true;
      document.getElementById('archive').hidden = false;
      content.innerHTML = '<p>Could not load in-page. <a href="'+href+'">Open '+href+'</a></p>';
      setActive(id);
    }
  }
  injectWitnessTab();
  var fEl = document.getElementById('forensic-tabs');
  if(fEl) fEl.addEventListener('click', function(e){
    var b = e.target.closest('button[data-page]');
    if(b) show(b.getAttribute('data-page'));
  });
  if(tabsEl) tabsEl.addEventListener('click', function(e){
    var b = e.target.closest('button[data-page]');
    if(b) show(b.getAttribute('data-page'));
  });
  document.addEventListener('click', function(e){
    var a = e.target.closest('a[href^="#"]');
    if(!a) return;
    var id = (a.getAttribute('href') || '').replace(/^#/, '');
    if(ROUTES[id]){ e.preventDefault(); show(id); }
  });
  window.addEventListener('hashchange', function(){
    var id = (location.hash || '').slice(1);
    if(!id || id === 'archive-about' || id === 'about') showLanding();
    else if(ROUTES[id]) show(id);
  });
  var enterBtn = document.getElementById('enter');
  if(enterBtn) enterBtn.addEventListener('click', function(){ show('r01'); });
  var start = (location.hash || '').slice(1);
  if(start && ROUTES[start] && start !== 'archive-about') show(start);
  else showLanding();
})();
