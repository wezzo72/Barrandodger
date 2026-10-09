<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#080b10">
<title>Barran Dodger — 3T Ecosystem</title>
<style>
:root {
  color-scheme: dark;
  --bg: #080b10;
  --panel: #111822;
  --gold: #f0d99b;
  --text: #f3eee4;
  --muted: #bdc5d0;
  --line: #303b49;
}
* { box-sizing: border-box; }
html { min-height: 100%; }
body {
  margin: 0;
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: Georgia, "Times New Roman", serif;
  line-height: 1.6;
}
header {
  padding: 28px 18px;
  text-align: center;
  border-bottom: 1px solid var(--line);
  background: #0c1119;
}
.eyebrow {
  color: var(--gold);
  font-size: .78rem;
  letter-spacing: .16em;
  text-transform: uppercase;
}
h1 { margin: 10px 0; font-size: clamp(2rem, 7vw, 3.5rem); }
header p { max-width: 680px; margin: 0 auto; color: var(--muted); }
main { width: min(900px, 100%); margin: auto; padding: 24px 16px 48px; }
h2 { font-size: 1.45rem; }
.intro { color: var(--muted); }
.sites { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr)); gap: 14px; }
.site {
  display: block;
  padding: 20px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 12px;
  color: var(--text);
  text-decoration: none;
  overflow-wrap: anywhere;
}
.site:hover, .site:focus-visible {
  border-color: var(--gold);
  outline: 2px solid transparent;
}
.site strong { display: block; color: var(--gold); font-size: 1.15rem; margin-bottom: 6px; }
.site span { color: var(--muted); font-size: .95rem; }
.finance { border-color: #927b46; }
.statement {
  margin-top: 24px;
  padding: 18px;
  border-left: 3px solid var(--gold);
  background: #111822;
}
footer {
  padding: 20px 16px;
  text-align: center;
  color: var(--muted);
  border-top: 1px solid var(--line);
  font-size: .9rem;
}
footer a { color: var(--gold); }
</style>
</head>
<body>
<header>
  <div class="eyebrow">The Barran Dodger Ecosystem</div>
  <h1>THE WITNESS REMAINS</h1>
  <p>A connected home for the documentary archive, its rebuild, the Church project and the financial hub.</p>
</header>

<main>
  <h2>Three-site navigation and Finance</h2>
  <p class="intro">Choose a destination below. Each link opens the relevant website or application.</p>

  <div class="sites">
    <a class="site" href="https://wezzo72.github.io/Barrandodger/">
      <strong>01 · Archive</strong>
      <span>The Barran Dodger public documentary archive.</span>
    </a>

    <a class="site" href="https://wezzo72.github.io/barrandodger-rebuild/">
      <strong>02 · Rebuild</strong>
      <span>The rebuilt Barran Dodger website.</span>
    </a>

    <a class="site" href="https://wezzo72.github.io/-church-of-barran-dodger/">
      <strong>03 · Church</strong>
      <span>The Church of Barran Dodger website and ministry resources.</span>
    </a>

    <a class="site finance" href="https://barran-dodger-finance.base44.app">
      <strong>04 · Barran Dodger Finance</strong>
      <span>Open the dedicated financial application.</span>
    </a>

    <a class="site" href="https://wezzo72.github.io/Barrandodger/gospels-prophetic.html">
      <strong>Gospels</strong>
      <span>Read the prophetic and foundational Gospel materials.</span>
    </a>

    <a class="site" href="https://wezzo72.github.io/-church-of-barran-dodger/publishing-house.html">
      <strong>Publishing House</strong>
      <span>Access publishing resources.</span>
    </a>

    <a class="site" href="https://wezzo72.github.io/-church-of-barran-dodger/course.html">
      <strong>Course</strong>
      <span>Open the Church course resources.</span>
    </a>

    <a class="site" href="https://wezzo72.github.io/-church-of-barran-dodger/contribute.html">
      <strong>Support</strong>
      <span>View the project's support information.</span>
    </a>

    <a class="site" href="https://wezzo72.github.io/Barrandodger/impossible-survivor.html">
      <strong>Impossible Survivor</strong>
      <span>Open the related project page.</span>
    </a>
  </div>

  <div class="statement">
    <strong>The record stays free. Faith is not a finding.</strong>
    <p>Donations or financial support do not purchase access, influence or editorial control over the documentary archive.</p>
  </div>
</main>

<footer>
  <p>THE WITNESS REMAINS · Barran Dodger</p>
  <p><a href="https://wezzo72.github.io/Barrandodger/">Return to the main archive</a></p>
</footer>
</body>
</html>
