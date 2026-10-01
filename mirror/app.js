const ROOT = '../barrandodger.com website backup/';
const MANIFEST = ROOT + 'manifest.jsonl';
const EXCEPTIONS = new Set([15, 49, 70, 187, 246, 298, 388, 424, 450, 542, 617]);

let records = [];

function esc(value) {
  return String(value ?? '').replace(/[&<>\"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function fileLinks(r) {
  const base = ROOT + 'html/' + encodeURIComponent(r.id) + '.html';
  return {
    html: base,
    pdf: ROOT + 'pdf/' + encodeURIComponent(r.id) + '.pdf',
    links: ROOT + 'links/' + encodeURIComponent(r.id) + '.txt'
  };
}

function hasText(r) {
  return Number(r.text_chars || 0) >= 200;
}

async function loadManifest() {
  const response = await fetch(MANIFEST);
  if (!response.ok) throw Error('Manifest unavailable');
  const text = await response.text();
  return text
    .split(/\r?\n/)
    .filter(Boolean)
    .map(line => { try { return JSON.parse(line); } catch { return null; } })
    .filter(Boolean);
}

function renderCard(r) {
  const f = fileLinks(r);
  const exception = EXCEPTIONS.has(Number(r.n));
  return `<article class="archive-card">
    <div class="archive-meta">
      <span>#${String(r.n).padStart(3, '0')}</span>
      <span>${hasText(r) ? 'captured text' : 'low text'}</span>
    </div>
    <h2>${esc(r.title || r.path || r.id)}</h2>
    <p>${esc(r.path || r.url || '')}</p>
    ${exception ? '<div class="exception">Captured page — original article body unavailable in the preserved rendering.</div>' : ''}
    <div class="archive-actions">
      <a class="primary" href="reader.html?n=${r.n}">Read record</a>
      <a href="${f.html}">HTML</a>
      <a href="${f.pdf}">PDF</a>
      <a href="${f.links}">Links</a>
    </div>
  </article>`;
}

function queryValue(key) {
  return new URLSearchParams(location.search).get(key) || '';
}

function initMenu() {
  const b = document.querySelector('.menu');
  if (b) b.addEventListener('click', () => document.querySelector('.site-header').classList.toggle('open'));
}

async function init() {
  initMenu();

  if (document.body.dataset.page === 'home') {
    try {
      records = await loadManifest();
      document.querySelector('#stat-total').textContent = records.length;
      document.querySelector('#stat-text').textContent = records.filter(hasText).length;
      document.querySelector('#stat-pdf').textContent = records.filter(r => r.pdf || true).length;
    } catch (e) {}
  }

  if (document.body.dataset.page === 'archive') {
    try {
      records = await loadManifest();
      const input = document.querySelector('#archive-search');
      const filter = document.querySelector('#archive-filter');
      const sort = document.querySelector('#archive-sort');
      const list = document.querySelector('#archive-list');
      const count = document.querySelector('#result-count');
      const empty = document.querySelector('#empty');

      if (queryValue('q')) input.value = queryValue('q');

      function draw() {
        const q = input.value.trim().toLowerCase();
        let out = records.filter(r => {
          const exception = EXCEPTIONS.has(Number(r.n));
          const text = Object.values(r).join(' ').toLowerCase();
          return (!q || text.includes(q))
            && (filter.value === 'all' || (filter.value === 'text' && hasText(r)) || (filter.value === 'exceptions' && exception));
        });

        out.sort((a, b) =>
          sort.value === 'title'
            ? String(a.title || '').localeCompare(String(b.title || ''))
            : Number(a.n) - Number(b.n)
        );

        list.innerHTML = out.map(renderCard).join('');
        count.textContent = `${out.length} of ${records.length} records`;
        empty.hidden = out.length > 0;
      }

      input.addEventListener('input', draw);
      filter.addEventListener('change', draw);
      sort.addEventListener('change', draw);
      document.querySelector('#clear-search').addEventListener('click', () => {
        input.value = '';
        draw();
        input.focus();
      });

      draw();
    } catch (e) {
      document.querySelector('#result-count').textContent = 'The archive manifest could not be loaded.';
    }
  }
}

init();
