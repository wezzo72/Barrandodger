# Emergency mirror of barrandodger.com

Captured: 2026-09-30 05:43 UTC
Origin: https://barrandodger.com (HTTP 200 at capture)

## Result
- 560 unique URLs from sitemaps + site index (admin/api skipped)
- **559 HTTP 200**
- **1 HTTP 404:** https://barrandodger.com/evidence
- Raw HTML snapshots: 560 files, 44 MB (SPA shells + unique titles/JSON-LD)
- Main JS bundle that contains page bodies: `/assets/index-Bk4DJqLv.js` (21 MB)
- `/documents/*.pdf` on the live origin: **404** (hosting already broken)
- 387 `/documents/` PDF paths extracted from the JS bundle and listed in `DOCUMENT_PDF_PATHS.txt`
- Site-wide PDF path inventory extracted from JS: 716 URLs including myaidrive.com links

## What is in this folder on GitHub
- This status file
- DOCUMENT_PDF_PATHS.txt — every /documents/*.pdf path referenced by the live app
- URLS.txt — every page URL crawled

## Critical fact
Pages are a client-rendered app (`<div id="root"></div>` + 21 MB JS). HTML snapshots preserve titles, schema, and chrome. Unique article bodies live in `index-Bk4DJqLv.js`. Download that file immediately from the live origin while it is still up:

`curl -L -o index-Bk4DJqLv.js https://barrandodger.com/assets/index-Bk4DJqLv.js`

Nuclear ZIP (`/api/nuclear-download`) is only 30 KB and contains README.txt + COMPLETE-SITE-INDEX.html — not the full archive.
