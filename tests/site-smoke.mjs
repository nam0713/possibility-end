// End-to-end smoke test of the reading site (v9) in headless Chrome.
//
//   npm run test:site                      (= node tests/site-smoke.mjs)
//   node tests/site-smoke.mjs --url http://localhost:5180/ --gpu --only routes,ending [--settle 4000] [--headed]
//
// Needs: `npm install` once in tools/ (playwright-core), Chrome (or Edge; CHROME_PATH overrides),
// and the dev server (`npm run dev`, http://localhost:5173/). It only reads the page; the browser
// profile is a fresh temporary one per group, so nothing of the reader's own state is touched.
//
// Default rendering is SwiftShader (portable, slow, correct); --gpu uses the real GPU through ANGLE.
// Every navigation settles for 3.5 s before anything is measured (reveals, morphs, route fades).
//
// Groups: routes (all hash routes, every chapter's text verbatim, ←/→, Back), reading (resume after
// reload — landing scattered —, 이어서 읽기, settings without a theme choice, persistence),
// dark-only (v9.1: one dark page; saved 종이/밝게 preferences — v9.0 or v8.1 — load as dark and
// are dropped), scatter (v9.1: the formation on a chapter's cover, scattered stars in its text,
// gathered into the next formation / ch.8's seed at its end, reversed on the way back; a return
// into the text never gathers first — needs an engine with Universe.setScatter and
// getState().scatter), palette (v9.1: no warm hue in the key UI elements or the UI sources; ch.8's
// end has exactly one light — the trigger draws none, covers the seed and arms it on hover/focus),
// ending (legacy #ending, film open → advancing → close restores scroll and focus, keyboard),
// layout-1440 / layout-390 / layout-320 (no horizontal overflow and no text cut off at the edges:
// home sections, sheets, chapters, the film and its finale), nowebgl (?nowebgl=1 renders and reads;
// one CSS seed, the cold CSS film; a browser with no WebGL at all), reduced (prefers-reduced-motion:
// still universe, static text, four stills). Each group also fails on any console error or uncaught
// page error. Prints a PASS/FAIL table; exit 1 on failure, 2 when the test cannot start.
import { createRequire } from 'node:module';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { isDeepStrictEqual } from 'node:util';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const option = (name, fallback) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : fallback; };
const flag = name => args.includes(`--${name}`);
const BASE = option('url', 'http://localhost:5173/');
const ONLY = option('only', '').split(',').filter(Boolean);
const SETTLE = Math.max(3000, Number(option('settle', 3500)) || 3500);   // after every navigation (never < 3 s)
const SCROLL_SETTLE = 1500;                       // after a scroll inside a page, before measuring

/* ── Setup ── */
let chromium;
try {
  ({ chromium } = createRequire(path.join(root, 'tools', 'package.json'))('playwright-core'));
} catch {
  console.error('playwright-core is not installed: run `npm install` in tools/ once.');
  process.exit(2);
}
const executablePath = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser',
].filter(Boolean).find(p => existsSync(p));
if (!executablePath) { console.error('No Chrome/Edge found; set CHROME_PATH.'); process.exit(2); }
try {
  const res = await fetch(BASE);
  if (!res.ok) throw Error(`HTTP ${res.status}`);
} catch (error) {
  console.error(`The site is not reachable at ${BASE} (${error.message}). Start it with \`npm run dev\`.`);
  process.exit(2);
}
const localChapters = JSON.parse(await readFile(path.join(root, 'src/chapters.json'), 'utf8'));
const urlFor = (hash, search = '') => { const u = new URL(BASE); u.search = search; u.hash = hash; return u.href; };

/* ── Results ── */
const results = [];
let group = '';
function check(name, pass, detail = '') {
  results.push({ group, name, status: pass ? 'PASS' : 'FAIL', detail: pass ? '' : typeof detail === 'string' ? detail : JSON.stringify(detail) });
  return !!pass;
}
function note(name, detail) { results.push({ group, name, status: 'INFO', detail }); }

const browser = await chromium.launch({
  executablePath,
  headless: !flag('headed'),
  args: [
    ...(flag('gpu') ? ['--use-angle=d3d11', '--enable-gpu'] : ['--enable-unsafe-swiftshader']),
    '--ignore-gpu-blocklist', '--mute-audio',
  ],
});

/** A fresh browser profile and page; console and page errors are collected per page. */
async function openPage({ width = 1440, height = 900, mobile = false, dpr = 1, reduced = false } = {}) {
  const context = await browser.newContext({
    viewport: { width, height }, deviceScaleFactor: dpr, isMobile: mobile, hasTouch: mobile,
    reducedMotion: reduced ? 'reduce' : 'no-preference', colorScheme: 'dark',
  });
  const page = await context.newPage();
  page.setDefaultTimeout(20000);
  const errors = [];
  const ignored = [];
  page.on('console', m => {
    if (m.type() !== 'error') return;
    // Webfont downloads failing (offline machine) is the network, not the page.
    const where = m.location()?.url || '';
    if (/fonts\.(googleapis|gstatic)\.com/.test(where)) { ignored.push(m.text()); return; }
    errors.push(`console: ${m.text()}${where ? ` (${where.slice(0, 80)})` : ''}`);
  });
  page.on('pageerror', e => errors.push(`page: ${(e.stack || e.message).split('\n').slice(0, 3).join(' | ')}`));
  return { context, page, errors, ignored };
}
async function load(page, url, settle = SETTLE + 1500) {
  await page.goto(url, { waitUntil: 'load', timeout: 60000 });
  await page.waitForTimeout(settle);
}
async function go(page, hash) {
  await page.evaluate(h => { location.hash = h; }, hash);
  await page.waitForTimeout(SETTLE);
}
const snapshot = page => page.evaluate(() => {
  const u = window.Universe?.getState?.() || null;
  return {
    hash: location.hash, y: Math.round(scrollY), max: Math.round(document.documentElement.scrollHeight - innerHeight),
    route: window.NovelUI?.route?.() || null, section: window.NovelUI?.section?.() || null,
    universe: document.documentElement.dataset.universe, renderer: u?.renderer, scene: u?.scene, chapter: u?.chapter,
    frames: u?.frames ?? 0, title: document.title, active: document.activeElement?.id || document.activeElement?.tagName,
  };
});
/** Expected rendered text of a manuscript paragraph (app.js: curly quotes, 10^{n} → <sup>, lines joined). */
const expectedText = p => (p === '✦' ? '' : p.replace(/'([^'\n]+)'/g, '\u2018$1\u2019').replace(/10\^\{(-?\d+)\}/g, '10$1').replace(/\n/g, ''));
/** Rendered paragraphs as text (the transient glyph layer of a transmission is left out). */
const proseText = page => page.evaluate(() => [...document.querySelectorAll('#prose > [data-paragraph]')].map(el => {
  const copy = el.cloneNode(true);
  copy.querySelectorAll('.tx-glyphs, [aria-hidden="true"]').forEach(x => x.remove());
  return copy.textContent;
}));
async function checkChapterText(page, n, chapters) {
  const want = chapters[n - 1].paragraphs.map(expectedText);
  const got = await proseText(page);
  const bad = want.findIndex((w, i) => got[i] !== w);
  check(`ch.${n}: ${want.length} paragraphs rendered verbatim`, got.length === want.length && bad < 0,
    got.length !== want.length ? `${got.length} rendered` : bad >= 0 ? `p-${bad}: ${String(JSON.stringify(got[bad])).slice(0, 90)}` : '');
}
/** Scroll the reader so paragraph k sits on the reading line (app.js anchorOffset). */
const scrollToParagraph = (page, k) => page.evaluate(k => {
  const el = document.getElementById(`p-${k}`);
  const anchor = innerWidth < 760 ? 72 : 96;
  scrollTo({ top: el.getBoundingClientRect().top + scrollY - anchor, behavior: 'instant' });
}, k);
/** The paragraph on the reading line now. */
const paragraphOnLine = page => page.evaluate(() => {
  const line = (innerWidth < 760 ? 72 : 96) + 4 + 1;
  let found = -1;
  for (const el of document.querySelectorAll('#prose > [data-paragraph]')) if (el.getBoundingClientRect().top <= line) found = Number(el.dataset.paragraph);
  return found;
});
/** Horizontal overflow of the document and of open dialogs; culprits when there is some. */
const measureOverflow = page => page.evaluate(() => {
  const de = document.documentElement;
  const x0 = scrollX, y0 = scrollY;
  scrollTo({ left: 100000, top: y0, behavior: 'instant' });
  const sx = scrollX;
  scrollTo({ left: x0, top: y0, behavior: 'instant' });
  const over = Math.max(de.scrollWidth, document.body.scrollWidth) - de.clientWidth;
  const dialogs = [...document.querySelectorAll('dialog[open], dialog[open] .sheet-inner')].map(d => ({ id: d.id || d.className, over: d.scrollWidth - d.clientWidth })).filter(d => d.over > 1);
  // body clips horizontal overflow (site.css), so also look for visible text cut off at the edges.
  const opacity = el => { let o = 1; for (let e = el; e && e !== de; e = e.parentElement) o *= Number(getComputedStyle(e).opacity); return o; };
  const clipped = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode() && clipped.length < 4) {
    const t = walker.currentNode;
    const el = t.parentElement;
    if (!t.textContent.trim() || !el || el.closest('[aria-hidden="true"], .sr-only, .skip-link, [hidden], dialog:not([open]), script, style, noscript')) continue;
    if (getComputedStyle(el).visibility === 'hidden') continue;
    const range = document.createRange();
    range.selectNodeContents(t);
    const out = [...range.getClientRects()].find(r => r.width >= 1 && r.height >= 1 && (r.right > de.clientWidth + 1 || r.left < -1));
    if (out && opacity(el) >= 0.05) clipped.push(`“${t.textContent.trim().slice(0, 20)}” in ${el.tagName.toLowerCase()}${el.id ? `#${el.id}` : ''} [${Math.round(out.left)}…${Math.round(out.right)}]`);
  }
  let culprits = [];
  if (over > 1 || sx > 0) {
    culprits = [...document.querySelectorAll('body *')].map(el => ({ el, r: el.getBoundingClientRect() }))
      .filter(({ r }) => r.width && r.right > de.clientWidth + 1)
      .sort((a, b) => b.r.right - a.r.right).slice(0, 4)
      .map(({ el, r }) => `${el.tagName.toLowerCase()}${el.id ? `#${el.id}` : ''}${el.classList.length ? `.${[...el.classList].join('.')}` : ''} right=${Math.round(r.right)}`);
  }
  return { over, sx, dialogs, culprits, clipped, width: de.clientWidth };
});
/** Measure; a transient overflow (an animation in flight) is measured again after 3 s. */
async function checkOverflow(page, where) {
  const bad = m => m.over > 1 || m.sx > 0 || m.dialogs.length || m.clipped.length;
  let m = await measureOverflow(page);
  if (bad(m)) { await page.waitForTimeout(3000); m = await measureOverflow(page); }
  check(`no horizontal overflow or cut-off text: ${where}`, !bad(m),
    `scrollWidth−clientWidth=${m.over}, scrollX after push=${m.sx}${m.dialogs.length ? `, dialogs ${JSON.stringify(m.dialogs)}` : ''}${m.culprits.length ? `; ${m.culprits.join(', ')}` : ''}${m.clipped.length ? `; text outside the viewport: ${m.clipped.join(', ')}` : ''}`);
}
function checkErrors(errors, ignored, label = '') {
  check(`no console or page errors${label}`, errors.length === 0, errors.slice(0, 4).join(' ‖ '));
  if (ignored.length) note('ignored webfont network errors', `${ignored.length}`);
}
const pageChapters = page => page.evaluate(() => JSON.parse(document.getElementById('novel-data').textContent));
/** Bottom of the current chapter (the chapter end; ch.8: the seed trigger). */
const toBottom = page => page.evaluate(() => scrollTo({ top: document.documentElement.scrollHeight, behavior: 'instant' }));
/** The scatter the page asks for (NovelUI.scatter: 0 formation … 1 starfield) and the universe's own
 * eased value (Universe.getState().scatter; null when the engine reports none). */
const scatterState = page => page.evaluate(() => {
  const u = window.Universe?.getState?.() || {};
  const round = v => Math.round(v * 1000) / 1000;
  return { ui: round(NovelUI.scatter()), engine: typeof u.scatter === 'number' ? round(u.scatter) : null, scene: u.scene, chapter: u.chapter, phase: NovelUI.route().phase, y: Math.round(scrollY) };
});
const engineScattered = s => s.engine !== null && s.engine > 0.95;
const engineGathered = (s, tolerance = 0.05) => s.engine !== null && s.engine < tolerance;
/** Record every scatter value the page sends from now on (window.__scatterLog). */
const logScatter = page => page.evaluate(() => {
  window.__scatterLog = [];
  const original = Universe.setScatter;
  Universe.setScatter = function (v) { window.__scatterLog.push(v); return typeof original === 'function' ? original.call(this, v) : undefined; };
});
/** Colours outside the one cold hue family (design/V9.1-FEEDBACK.md, ~190–210°; accepted 170–235°)
 * found in a text (CSS values, source files): rgb()/rgba() and #rgb/#rrggbb (also %23 in data URIs).
 * Greys and near-blacks (chroma under 16 of 255) have no hue to judge; transparent ones are skipped. */
function warmColours(text) {
  const found = [];
  const judge = (r, g, b, a, raw) => {
    if (a === 0) return;
    const max = Math.max(r, g, b), min = Math.min(r, g, b), c = max - min;
    if (c < 16) return;
    let h = max === r ? ((g - b) / c) % 6 : max === g ? (b - r) / c + 2 : (r - g) / c + 4;
    h = (h * 60 + 360) % 360;
    if (h < 170 || h > 235) found.push(`${raw} (hue ${Math.round(h)}°)`);
  };
  for (const m of String(text).matchAll(/rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)(?:[\s,/]+([\d.]+%?))?\s*\)/g)) {
    const a = m[4] === undefined ? 1 : m[4].endsWith('%') ? parseFloat(m[4]) / 100 : Number(m[4]);
    judge(Number(m[1]), Number(m[2]), Number(m[3]), a, m[0]);
  }
  for (const m of String(text).matchAll(/(?:#|%23)([0-9a-f]{6}|[0-9a-f]{3})(?![0-9a-z_-])/gi)) {
    const hex = m[1].length === 3 ? m[1].replace(/./g, ch => ch + ch) : m[1];
    judge(parseInt(hex.slice(0, 2), 16), parseInt(hex.slice(2, 4), 16), parseInt(hex.slice(4, 6), 16), 1, m[0]);
  }
  return found;
}

/* ── Groups ── */
const groups = {
  async routes() {
    const { context, page, errors, ignored } = await openPage();
    await load(page, urlFor('#home'));
    let s = await snapshot(page);
    check('Universe.getState().renderer === "webgl"', s.renderer === 'webgl' && s.universe === 'webgl', `renderer=${s.renderer}, data-universe=${s.universe}`);
    check('the universe renders frames', s.frames > 0, `frames=${s.frames}`);
    check('#home: cover shown, scene “cover”', s.route?.view === 'home' && s.scene === 'cover' && s.y === 0, s);
    const fallbackHidden = await page.evaluate(() => getComputedStyle(document.querySelector('.fallback-manuscript')).display === 'none');
    check('no-JS manuscript hidden when scripts run', fallbackHidden);
    const chapters = await pageChapters(page);
    check('served page data = src/chapters.json (current build)', isDeepStrictEqual(chapters, localChapters), 'rebuild with npm run build');

    await go(page, '#contents');
    s = await snapshot(page);
    const contentsTop = await page.evaluate(() => Math.round(document.getElementById('contents').getBoundingClientRect().top));
    check('#contents: contents in view, universe previews a chapter', s.route?.view === 'home' && s.section === 'contents' && s.scene === 'preview' && contentsTop >= 0 && contentsTop < 200, { ...s, contentsTop });
    await go(page, '#about');
    s = await snapshot(page);
    const footer = await page.evaluate(() => { const r = document.getElementById('about').getBoundingClientRect(); return { top: Math.round(r.top), bottom: Math.round(r.bottom), vh: innerHeight }; });
    check('#about: footer in view', s.route?.view === 'home' && footer.top < footer.vh && footer.bottom > 0, { ...s, footer });
    await go(page, '#home');
    s = await snapshot(page);
    check('#home again: back at the cover', s.route?.view === 'home' && s.scene === 'cover' && s.y < 5, s);

    for (let n = 1; n <= 8; n++) {
      await go(page, `#chapter-${n}`);
      s = await snapshot(page);
      const title = await page.evaluate(() => document.getElementById('reader-title').textContent);
      check(`#chapter-${n}: reader, title, scene “chapter” ${n}`, s.route?.view === 'reader' && s.route.chapter === n && title === chapters[n - 1].short && s.scene === 'chapter' && s.chapter === n && s.hash === `#chapter-${n}`,
        { ...s, title });
      await checkChapterText(page, n, chapters);
    }

    await go(page, '#chapter-3');
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(SETTLE);
    s = await snapshot(page);
    check('→ opens the next chapter (3 → 4)', s.route?.chapter === 4 && s.hash === '#chapter-4', s);
    await page.keyboard.press('ArrowLeft');
    await page.waitForTimeout(SETTLE);
    s = await snapshot(page);
    check('← opens the previous chapter (4 → 3)', s.route?.chapter === 3 && s.hash === '#chapter-3', s);
    await go(page, '#chapter-1');
    await page.keyboard.press('ArrowLeft');
    await page.waitForTimeout(1500);
    s = await snapshot(page);
    check('← on chapter 1 stays', s.route?.chapter === 1 && s.hash === '#chapter-1', s);

    await go(page, '#ending');
    s = await snapshot(page);
    check('legacy #ending → #chapter-8 at its last screen, seed waiting', s.route?.chapter === 8 && s.hash === '#chapter-8' && s.max - s.y <= 2 && s.scene === 'ending-ready', s);
    await page.goBack();
    await page.waitForTimeout(SETTLE);
    s = await snapshot(page);
    check('Back returns to the previous chapter', s.route?.chapter === 1 && s.hash === '#chapter-1', s);
    checkErrors(errors, ignored);
    await context.close();
  },

  async reading() {
    const { context, page, errors, ignored } = await openPage();
    await load(page, urlFor('#chapter-5'));
    const k = 9;
    await scrollToParagraph(page, k);
    await page.waitForTimeout(SCROLL_SETTLE);
    let saved = (await page.evaluate(() => NovelUI.state())).position;
    check(`reading position saved (ch.5, paragraph ${k})`, saved?.chapter === 5 && saved.paragraph === k, saved);
    await page.reload({ waitUntil: 'load' });
    await page.waitForTimeout(SETTLE + 1500);
    let line = await paragraphOnLine(page);
    let s = await snapshot(page);
    check('reload resumes at the same paragraph', s.route?.chapter === 5 && line === k, { line, ...s });

    await go(page, '#home');
    const resume = await page.evaluate(() => { const b = document.getElementById('resume'); return { hidden: b.hidden, text: b.textContent }; });
    check('cover offers “이어서 읽기 — 05. 에너지”', !resume.hidden && /이어서 읽기/.test(resume.text) && /05/.test(resume.text) && /에너지/.test(resume.text), resume);
    await page.click('#resume');
    await page.waitForTimeout(SETTLE);
    line = await paragraphOnLine(page);
    s = await snapshot(page);
    check('“이어서 읽기” returns to the paragraph', s.route?.chapter === 5 && line === k, { line, ...s });

    // A return into the middle of the text lands with the stars already scattered (no gather first).
    s = await scatterState(page);
    check('…and lands scattered (the page asks 1; the universe has scattered)', s.ui === 1 && engineScattered(s), s);

    await page.click('#settings-open');
    await page.waitForTimeout(800);
    const sheet = await page.evaluate(() => ({
      choices: document.querySelectorAll('[data-theme-choice], .swatch').length,
      labels: [...document.querySelectorAll('#settings-dialog .setting-label')].map(l => l.textContent.trim()),
    }));
    check('settings: no 화면 (theme) choice; size, line height, face, sound, motion remain', sheet.choices === 0 && !sheet.labels.includes('화면')
      && ['글자 크기', '줄 간격', '서체', '소리', '움직임'].every(l => sheet.labels.includes(l)), sheet);
    await page.click('button[data-font="serif"]');
    await page.waitForTimeout(400);
    let look = await page.evaluate(() => ({ font: document.documentElement.dataset.font, pressed: document.querySelector('button[data-font="serif"]').getAttribute('aria-pressed') }));
    check('settings: 명조 applies', look.font === 'serif' && look.pressed === 'true', look);
    await page.keyboard.press('Escape');
    await page.waitForTimeout(800);
    check('settings sheet closes with Esc', !(await page.evaluate(() => document.getElementById('settings-dialog').open)));
    await page.reload({ waitUntil: 'load' });
    await page.waitForTimeout(SETTLE + 1500);
    look = await page.evaluate(() => {
      let stored = null;
      try { stored = JSON.parse(localStorage.getItem('possibility-end-v9')); } catch { /* reported */ }
      return { font: document.documentElement.dataset.font, stored: stored && { font: stored.font, theme: stored.theme } };
    });
    check('settings persist after reload (localStorage possibility-end-v9), no theme stored', look.font === 'serif' && look.stored?.font === 'serif' && look.stored?.theme === undefined, look);
    line = await paragraphOnLine(page);
    check('…and the paragraph is kept in the new typeface', line === k, { line });
    checkErrors(errors, ignored);
    await context.close();
  },

  /* v9.1: dark only. Saved 종이 (paper) / 밝게 (light) preferences are silently dropped. */
  async 'dark-only'() {
    /** A fresh profile whose first page load finds these localStorage records (as a returning reader's would). */
    const seeded = async records => {
      const run = await openPage();
      await run.page.addInitScript(records => {
        if (sessionStorage.getItem('seeded')) return;
        sessionStorage.setItem('seeded', '1');
        for (const [key, value] of Object.entries(records)) localStorage.setItem(key, JSON.stringify(value));
      }, records);
      return run;
    };
    const dark = page => page.evaluate(() => {
      const css = (el, p = null) => getComputedStyle(el, p);
      const surface = document.getElementById('surface');
      let stored = null;
      try { stored = JSON.parse(localStorage.getItem('possibility-end-v9')); } catch { /* reported */ }
      return {
        attr: document.documentElement.getAttribute('data-theme'),
        html: css(document.documentElement).backgroundColor, body: css(document.body).backgroundColor,
        surface: `${css(surface).backgroundColor} ${css(surface).backgroundImage}`,
        ink: css(document.getElementById('prose')).color,
        bar: css(document.getElementById('topbar')).backgroundColor,
        meta: document.querySelector('meta[name="theme-color"]').content,
        state: NovelUI.state(), stored,
        route: NovelUI.route(),
      };
    });
    const isDark = d => d.attr === null && d.html === 'rgb(4, 7, 11)' && d.body === 'rgb(4, 7, 11)' && d.surface === 'rgba(0, 0, 0, 0) none'
      && d.ink === 'rgb(221, 230, 237)' && d.meta === '#04070b' && !('theme' in d.state);

    let run = await openPage();
    await load(run.page, urlFor('#chapter-1'));
    let d = await dark(run.page);
    check('fresh profile: the dark page (no data-theme, space background, transparent reading surface)', isDark(d), d);
    checkErrors(run.errors, run.ignored, ' (fresh profile)');
    await run.context.close();

    // A v9.0 record that chose 종이, read on into the text.
    run = await seeded({ 'possibility-end-v9': {
      v: 9, size: 22, leading: 'loose', font: 'serif', theme: 'paper', motion: 'on', sound: { enabled: true, volume: 0.3 },
      position: { chapter: 1, paragraph: 6, percent: 14 }, bookmark: null, progress: { 1: 14 }, completed: [], migratedFrom: null,
    } });
    await load(run.page, urlFor('#chapter-1'));
    d = await dark(run.page);
    check('a saved 종이 (paper) preference loads as dark (in the text: transparent surface, dark bar)', isDark(d) && d.route.phase === 'text' && d.bar === 'rgb(4, 7, 11)', { ...d, state: undefined });
    check('…the other settings and the place are kept', d.state.size === 22 && d.state.leading === 'loose' && d.state.font === 'serif' && d.state.position?.chapter === 1 && d.state.position.paragraph === 6, d.state);
    check('…and the stored record is written back without a theme', !!d.stored && !('theme' in d.stored) && d.stored.font === 'serif' && d.stored.size === 22, d.stored);
    checkErrors(run.errors, run.ignored, ' (saved 종이)');
    await run.context.close();

    // A v8.1 record (the legacy key) that chose 밝게: migrated once, without the theme.
    run = await seeded({ 'possibility-end-edition-v2': { size: 24, font: 'serif', fontVersion: 1, theme: 'light', paused: false, position: { chapter: 3, paragraph: 4, percent: 20 }, completed: [1] } });
    await load(run.page, urlFor('#home'));
    d = await dark(run.page);
    check('a v8.1 밝게 (light) preference migrates as dark; size, face, place and progress migrate',
      isDark(d) && d.state.size === 24 && d.state.font === 'serif' && d.state.position?.chapter === 3 && d.state.completed.includes(1)
      && !!d.stored && !('theme' in d.stored) && d.stored.migratedFrom === 'possibility-end-edition-v2', { attr: d.attr, state: d.state, stored: d.stored });
    checkErrors(run.errors, run.ignored, ' (saved 밝게, v8.1)');
    await run.context.close();
  },

  /* v9.1: reading = scattered stars. The page asks the universe for 0 (formation) on a chapter's cover,
   * 1 (a sparse starfield) in its text and 0 again at its end, where the stars gather into the next
   * chapter's formation (ch.8: the seed); the engine eases toward it (Universe.getState().scatter). */
  async scatter() {
    const { context, page, errors, ignored } = await openPage();
    await load(page, urlFor('#chapter-2'));
    const at = async (where, scrollTo, wait = SCROLL_SETTLE + 1500) => {
      if (scrollTo !== undefined) await page.evaluate(y => scrollTo({ top: y === 'end' ? document.documentElement.scrollHeight : y === 'mid' ? document.documentElement.scrollHeight * 0.45 : y, behavior: 'instant' }), scrollTo);
      await page.waitForTimeout(wait);
      return { where, ...(await scatterState(page)) };
    };
    let s = await at('ch.2 cover');
    check('chapter cover: the formation stands (scatter ≈ 0)', s.ui === 0 && engineGathered(s) && s.scene === 'chapter' && s.chapter === 2, s);
    s = await at('ch.2 text', 'mid');
    check('mid-body: scattered into the starfield (scatter ≈ 1), same chapter', s.ui === 1 && engineScattered(s) && s.scene === 'chapter' && s.chapter === 2, s);
    s = await at('ch.2 end', 'end');
    check('chapter end: gathered again into the next chapter’s formation (scatter → 0, preview 3)', s.ui < 0.05 && engineGathered(s, 0.1) && s.scene === 'preview' && s.chapter === 3, s);
    s = await at('ch.2 text again', 'mid');
    check('back up into the text: scattered again, this chapter', s.ui === 1 && engineScattered(s) && s.scene === 'chapter' && s.chapter === 2, s);
    s = await at('ch.2 cover again', 0);
    check('back on the cover: the formation gathers again (scatter ≈ 0)', s.ui === 0 && engineGathered(s) && s.scene === 'chapter' && s.chapter === 2, s);
    // The ramp: nothing yet while the cover is the view; complete once the first paragraph is well up.
    const ramp = await page.evaluate(async () => {
      const prose = document.getElementById('prose').getBoundingClientRect().top + scrollY;
      const out = [];
      for (const y of [innerHeight * 0.05, prose - innerHeight * 0.6]) {
        scrollTo({ top: y, behavior: 'instant' });
        await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
        out.push(NovelUI.scatter());
      }
      return out;
    });
    check('ramp: 0 while the cover is the view, 1 once the first paragraph’s top reaches 60% of the screen', ramp[0] === 0 && ramp[1] === 1, ramp);

    await go(page, '#chapter-8');
    await toBottom(page);
    s = await at('ch.8 end');
    check('ch.8 end: the stars gather into the waiting seed (ending-ready, scatter ≈ 0)', s.ui === 0 && engineGathered(s, 0.1) && s.scene === 'ending-ready', s);

    // Into the middle of a chapter (이어서 읽기, ←/→ onto a saved place): already scattered, never a
    // gather first. Every value the page sends from the click on is recorded.
    await go(page, '#chapter-5');
    await scrollToParagraph(page, 9);
    await page.waitForTimeout(SCROLL_SETTLE);
    await go(page, '#home');
    await logScatter(page);
    await page.click('#resume');
    await page.waitForTimeout(SETTLE);
    let log = await page.evaluate(() => window.__scatterLog.slice());
    s = await scatterState(page);
    check('이어서 읽기 into ch.5’s text: the page asks only for the starfield (no 0 on the way)', log.length > 0 && log.every(v => v >= 0.99) && s.chapter === 5, { log, ...s });
    check('…and the universe is scattered there', engineScattered(s), s);
    await page.evaluate(() => { window.__scatterLog.length = 0; });
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(SETTLE);
    log = await page.evaluate(() => window.__scatterLog.slice());
    s = await scatterState(page);
    check('→ to ch.6 (no saved place there): its cover’s formation, gathered', log.length > 0 && log.every(v => v === 0) && s.chapter === 6 && s.ui === 0, { log, ...s });
    await page.evaluate(() => { window.__scatterLog.length = 0; });
    await page.keyboard.press('ArrowLeft');
    await page.waitForTimeout(SETTLE);
    log = await page.evaluate(() => window.__scatterLog.slice());
    s = await scatterState(page);
    check('← back to ch.5 (its saved place in the text): lands scattered, no gather first', log.length > 0 && log.every(v => v >= 0.99) && s.chapter === 5 && engineScattered(s), { log, ...s });
    checkErrors(errors, ignored);
    await context.close();
  },

  /* v9.1: one cold theme colour (no warm hue in the UI) and exactly one light at ch.8's end. */
  async palette() {
    const { context, page, errors, ignored } = await openPage();
    await load(page, urlFor('#home'));
    const samples = [];
    const sample = async (label, selector, pseudo = null, props = ['color', 'backgroundColor', 'backgroundImage', 'boxShadow', 'borderTopColor', 'outlineColor', 'fill', 'stroke', 'textShadow']) => {
      const got = await page.evaluate(({ selector, pseudo, props }) => {
        const el = document.querySelector(selector);
        if (!el) return null;
        const cs = getComputedStyle(el, pseudo);
        return props.map(p => cs[p]).join(' | ');
      }, { selector, pseudo, props });
      samples.push({ label, value: got });
      return got;
    };
    // (Programmatic presses: the ring drifts, and the top bar may have slid away while scrolling.)
    const press = selector => page.evaluate(sel => document.querySelector(sel).click(), selector);
    await press('.node[data-chapter="3"]');
    await page.waitForTimeout(1200);
    await sample('brand mark dot', '.brand-mark circle');
    await sample('primary button dot', '.btn-primary', '::before');
    await sample('selected node ring', '.node.is-selected .node-ring');
    await sample('selected node number', '.node.is-selected .node-label .mono');
    await page.keyboard.press('Escape');
    await go(page, '#contents');
    await sample('contents: current number', '.toc-row.is-active .toc-num');
    await page.evaluate(() => { const l = document.getElementById('litany'); scrollTo({ top: l.getBoundingClientRect().top + scrollY + innerHeight * 0.8, behavior: 'instant' }); });
    await page.waitForTimeout(SCROLL_SETTLE);
    await sample('litany: current number', '.litany-line.is-current .litany-num');
    await go(page, '#chapter-8');
    await page.evaluate(() => document.querySelector('#prose .tx')?.scrollIntoView({ block: 'center', behavior: 'instant' }));
    await page.waitForTimeout(SCROLL_SETTLE);
    await sample('progress line', '#progress-line');
    await sample('rail: current chapter', '.rail-tick[aria-current="page"] b');
    await sample('transmission rule', '#prose .tx', '::before');
    await press('#bookmark-toggle');
    await page.waitForTimeout(500);
    await sample('toast', '#toast');
    await press('#contents-open');
    await page.waitForTimeout(1200);
    await sample('contents sheet: current number', '.sheet-row[aria-current="page"] .sheet-num');
    await sample('contents sheet: current dot', '.sheet-row[aria-current="page"] .sheet-title', '::after');
    await page.keyboard.press('Escape');
    await page.waitForTimeout(800);

    // ch.8's end: exactly one light, the universe's seed. The trigger draws none, and covers the seed.
    await page.evaluate(() => { window.__anchor = null; Universe.subscribe(f => { if (f && f.anchor && f.scene === 'ending-ready') window.__anchor = { x: f.anchor.x, y: f.anchor.y }; }); });
    await toBottom(page);
    await page.waitForTimeout(SETTLE);
    const light = await page.evaluate(() => {
      const trigger = document.getElementById('seed-trigger');
      const lit = [];
      for (const el of [trigger, ...trigger.querySelectorAll('*')]) for (const p of [null, '::before', '::after']) {
        const cs = getComputedStyle(el, p);
        if (cs.display === 'none' || cs.visibility === 'hidden' || (p && cs.content === 'none')) continue;
        const bg = cs.backgroundColor.match(/[\d.]+/g)?.map(Number) || [];
        const glows = cs.backgroundImage !== 'none' || cs.boxShadow !== 'none' || (bg.length === 4 ? bg[3] > 0 : bg.length === 3) || /drop-shadow|blur/.test(cs.filter) || cs.textShadow !== 'none';
        if (glows) lit.push(`${el.className || el.tagName}${p || ''}: ${cs.backgroundImage.slice(0, 60)} ${cs.boxShadow.slice(0, 40)}`);
      }
      const r = trigger.querySelector('.seed').getBoundingClientRect();
      return { lit, shared: !!document.getElementById('shared-light') || !!document.querySelector('.shared-light'), text: trigger.textContent.replace(/\s+/g, ' ').trim(), role: trigger.tagName, seed: { x: r.left + r.width / 2, y: r.top + r.height / 2, w: r.width }, anchor: window.__anchor, scene: Universe.getState().scene };
    });
    check('ch.8 end: the trigger is a button “단 하나의 가능성.” with no light of its own (no star, glow or bloom element)', light.role === 'BUTTON' && light.text === '단 하나의 가능성.' && light.lit.length === 0 && !light.shared, light);
    check('…its hit area covers the universe’s seed (frame.anchor)', light.scene === 'ending-ready' && !!light.anchor && Math.hypot(light.seed.x - light.anchor.x, light.seed.y - light.anchor.y) < 1 && light.seed.w >= 44, light);
    // Hover and keyboard focus arm the seed itself; leaving disarms it.
    await page.evaluate(() => {
      window.__armLog = [];
      const original = Universe.ending.arm;
      Universe.ending.arm = function (v) { window.__armLog.push(v); return typeof original === 'function' ? original.call(this, v) : undefined; };
    });
    const box = await page.evaluate(() => { const r = document.querySelector('#seed-trigger .seed').getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; });
    await page.mouse.move(box.x, box.y, { steps: 4 });
    await page.waitForTimeout(300);
    await page.mouse.move(40, 120, { steps: 4 });
    await page.waitForTimeout(300);
    await page.evaluate(() => document.getElementById('copy-link').focus());
    await page.keyboard.press('Shift+Tab');
    await page.keyboard.press('Shift+Tab');
    await page.keyboard.press('Shift+Tab');
    await page.waitForTimeout(200);
    const focused = await page.evaluate(() => document.activeElement?.id);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    const arm = await page.evaluate(() => window.__armLog.slice());
    check('pointing at the trigger arms the seed (Universe.ending.arm(true)), leaving disarms it', arm[0] === true && arm[1] === false, arm);
    check('keyboard focus on the trigger arms it, Tab away disarms it', focused === 'seed-trigger' && arm[2] === true && arm[3] === false, { focused, arm });

    // Pressing it: the page fades and the film starts from the seed; nothing on the page lights up.
    await page.click('#seed-trigger');
    await page.waitForTimeout(700);
    const pressed = await page.evaluate(() => {
      const lit = [...document.querySelectorAll('body *')].filter(el => {
        if (el.closest('#ending, .sky')) return false;
        const cs = getComputedStyle(el);
        const r = el.getBoundingClientRect();
        return r.width > 0 && cs.visibility !== 'hidden' && /radial-gradient/.test(cs.backgroundImage);
      }).map(el => el.className || el.tagName);
      return { open: document.getElementById('ending').open, lit, film: Universe.ending.state().active };
    });
    check('pressing it opens the film with no HTML light on the page', pressed.open && pressed.lit.length === 0, pressed);
    await page.waitForTimeout(1800);
    await sample('ending timeline: current phase', '#timeline li.is-current i');
    await page.keyboard.press('Escape');
    await page.waitForTimeout(SETTLE);

    const warm = samples.flatMap(s => warmColours(s.value || '').map(c => `${s.label}: ${c}`));
    check(`no warm colour in ${samples.length} key UI elements (computed styles)`, samples.every(s => s.value !== null) && warm.length === 0,
      warm.length ? warm.join(' ‖ ') : samples.filter(s => s.value === null).map(s => `${s.label}: not found`).join(', '));
    const sources = await Promise.all(['src/site.css', 'src/shell.html', 'src/app.js'].map(async f => [f, await readFile(path.join(root, f), 'utf8')]));
    const literals = sources.flatMap(([f, text]) => warmColours(text).map(c => `${f}: ${c}`));
    check('no warm colour literal in src/site.css, src/shell.html, src/app.js', literals.length === 0, literals.slice(0, 6).join(' ‖ '));
    checkErrors(errors, ignored);
    await context.close();
  },

  async ending() {
    const { context, page, errors, ignored } = await openPage();
    await load(page, urlFor('#ending'));
    let s = await snapshot(page);
    check('deep link #ending → #chapter-8, last screen', s.hash === '#chapter-8' && s.route?.chapter === 8 && s.max - s.y <= 2, s);
    const completed = (await page.evaluate(() => NovelUI.state())).completed;
    check('legacy #ending does not mark ch.8 as read', !completed.includes(8), completed);
    const savedY = s.y;
    await page.click('#seed-trigger');
    await page.waitForTimeout(1200);
    const opened = await page.evaluate(() => ({ dialog: document.getElementById('ending').open, ui: NovelUI.ending(), film: Universe.ending.state() }));
    check('“단 하나의 가능성.” opens the ending film', opened.dialog && opened.ui.open && opened.ui.live && opened.film.active, opened);
    const t1 = await page.evaluate(() => Universe.ending.state().time);
    await page.waitForTimeout(4500);
    const later = await page.evaluate(() => ({ film: Universe.ending.state(), caption: document.getElementById('ending-caption').textContent.trim() }));
    check('film time advances', later.film.time > t1 + 1, `${t1.toFixed(2)} → ${later.film.time.toFixed(2)} s`);
    check('past the impact (3.6 s): phase ≥ 1 and a caption shows', later.film.phase >= 1 && later.caption.length > 0, { phase: later.film.phase, time: later.film.time, caption: later.caption });
    await page.mouse.move(700, 450, { steps: 6 });
    await page.mouse.move(720, 470, { steps: 6 });
    await page.waitForTimeout(500);
    await page.click('#ending-close');
    await page.waitForTimeout(SETTLE);
    s = await snapshot(page);
    const closed = await page.evaluate(() => ({ dialog: document.getElementById('ending').open, film: Universe.ending.state() }));
    check('읽던 곳 closes the film and restores scrollY', !closed.dialog && Math.abs(s.y - savedY) <= 2 && s.hash === '#chapter-8', { savedY, ...s, film: closed.film });
    check('focus returns to the seed trigger', s.active === 'seed-trigger', s.active);
    check('the universe rests on the seed again', s.scene === 'ending-ready' && !closed.film.active, { scene: s.scene, film: closed.film });

    await page.keyboard.press('Enter');
    await page.waitForTimeout(2500);
    const reopened = await page.evaluate(() => document.getElementById('ending').open);
    check('Enter on the trigger opens it again', reopened);
    await page.keyboard.press('Escape');
    await page.waitForTimeout(SETTLE);
    s = await snapshot(page);
    check('Esc closes and restores scrollY and focus', !(await page.evaluate(() => document.getElementById('ending').open)) && Math.abs(s.y - savedY) <= 2 && s.active === 'seed-trigger', { savedY, ...s });
    checkErrors(errors, ignored);
    await context.close();
  },

  ...Object.fromEntries([
    ['layout-1440', { width: 1440, height: 900 }],
    ['layout-390', { width: 390, height: 844, mobile: true, dpr: 2 }],
    ['layout-320', { width: 320, height: 568, mobile: true, dpr: 2 }],
  ].map(([name, viewport]) => [name, async () => {
    const { context, page, errors, ignored } = await openPage(viewport);
    const tag = `${viewport.width}×${viewport.height}`;
    await load(page, urlFor('#home'));
    const s = await snapshot(page);
    check(`${tag}: Universe renders (webgl)`, s.renderer === 'webgl' && s.frames > 0, s);
    for (const id of ['home', 'contents', 'interlude', 'litany', 'about']) {
      await page.evaluate(id => document.getElementById(id).scrollIntoView({ block: 'start', behavior: 'instant' }), id);
      await page.waitForTimeout(SCROLL_SETTLE);
      await checkOverflow(page, `${tag} home #${id}`);
    }
    await page.click('#contents-open');
    await page.waitForTimeout(1200);
    await checkOverflow(page, `${tag} contents sheet`);
    await page.keyboard.press('Escape');
    await page.waitForTimeout(800);
    const chapters = await pageChapters(page);
    for (const n of [1, 6, 8]) {
      await go(page, `#chapter-${n}`);
      await checkOverflow(page, `${tag} #chapter-${n} cover`);
      await checkChapterText(page, n, chapters);
      await page.evaluate(() => scrollTo({ top: document.documentElement.scrollHeight / 2, behavior: 'instant' }));
      await page.waitForTimeout(SCROLL_SETTLE);
      await checkOverflow(page, `${tag} #chapter-${n} text`);
      await toBottom(page);
      await page.waitForTimeout(SCROLL_SETTLE);
      await checkOverflow(page, `${tag} #chapter-${n} end`);
    }
    // ch.8's end: the film's captions and the finale must fit too.
    await page.waitForTimeout(SETTLE - SCROLL_SETTLE);
    await page.click('#seed-trigger');
    await page.waitForTimeout(6000);
    await checkOverflow(page, `${tag} ending film (caption)`);
    await page.mouse.move(viewport.width / 2, viewport.height / 2, { steps: 4 });
    await page.waitForTimeout(400);
    await page.click('#ending-skip');
    await page.waitForTimeout(2500);
    const finale = await page.evaluate(() => !document.getElementById('finale').hidden);
    check(`${tag}: 건너뛰기 shows the finale`, finale);
    await checkOverflow(page, `${tag} ending finale`);
    await page.keyboard.press('Escape');
    await page.waitForTimeout(SETTLE);
    await page.click('#settings-open');
    await page.waitForTimeout(1200);
    await checkOverflow(page, `${tag} settings sheet`);
    await page.keyboard.press('Escape');
    checkErrors(errors, ignored);
    await context.close();
  }])),

  async nowebgl() {
    const { context, page, errors, ignored } = await openPage();
    await load(page, urlFor('#home', '?nowebgl=1'));
    let s = await snapshot(page);
    const sky = await page.evaluate(() => ({
      sky: getComputedStyle(document.getElementById('sky')).display !== 'none',
      nodes: [...document.querySelectorAll('#node-layer button')].filter(b => b.getBoundingClientRect().width > 0).length,
    }));
    check('?nowebgl=1: data-universe="none", fallback sky shown', s.universe === 'none' && sky.sky, { universe: s.universe, ...sky });
    check('?nowebgl=1: eight chapter nodes on the fallback ring', sky.nodes === 8, sky);
    const chapters = await pageChapters(page);
    await go(page, '#chapter-2');
    s = await snapshot(page);
    check('?nowebgl=1: #chapter-2 opens', s.route?.view === 'reader' && s.route.chapter === 2, s);
    await checkChapterText(page, 2, chapters);
    await scrollToParagraph(page, 7);
    await page.waitForTimeout(SCROLL_SETTLE);
    const position = (await page.evaluate(() => NovelUI.state())).position;
    check('?nowebgl=1: reading position recorded', position?.chapter === 2 && position.paragraph === 7, position);
    await go(page, '#chapter-8');
    await toBottom(page);
    await page.waitForTimeout(SETTLE);
    const savedY = (await snapshot(page)).y;
    // Without the universe the trigger's CSS seed is the one light (the sky draws no seed of its own).
    const seedLight = await page.evaluate(() => {
      const core = getComputedStyle(document.querySelector('#seed-trigger .seed'), '::after');
      const halo = getComputedStyle(document.querySelector('#seed-trigger .seed'), '::before');
      return { core: core.content !== 'none' && core.display !== 'none' ? `${core.backgroundColor} ${core.boxShadow}` : null, halo: halo.content !== 'none' ? halo.backgroundImage : null, sky: document.getElementById('sky-figure').innerHTML.length, skyScene: document.getElementById('sky').dataset.scene };
    });
    check('?nowebgl=1: ch.8 end shows one light — the trigger’s CSS seed, cold — and no seed in the sky', !!seedLight.core && seedLight.sky === 0 && seedLight.skyScene === 'ending-ready'
      && warmColours(`${seedLight.core} ${seedLight.halo}`).length === 0, seedLight);
    await page.click('#seed-trigger');
    await page.waitForTimeout(2000);
    const t1 = await page.evaluate(() => NovelUI.ending());
    await page.waitForTimeout(3000);
    const t2 = await page.evaluate(() => ({ ui: NovelUI.ending(), fallback: document.getElementById('ending').classList.contains('is-fallback') }));
    check('?nowebgl=1: the CSS film plays (time advances)', t1.open && !t1.live && t2.fallback && t2.ui.time > t1.time + 1, { t1: t1.time, t2: t2.ui.time, fallback: t2.fallback });
    const filmColours = await page.evaluate(() => ['.film', '.film-field', '.film-band', '.film-glow', '.film-planet'].map(sel => {
      const cs = getComputedStyle(document.querySelector(sel));
      return `${sel}: ${cs.backgroundColor} ${cs.backgroundImage.replace(/url\([^)]*\)/g, 'url()')} ${cs.boxShadow}`;
    }).join(' ‖ ') + ` ‖ .sky: ${getComputedStyle(document.getElementById('sky')).backgroundImage}`);
    check('?nowebgl=1: the CSS sky and film are in the one cold palette', warmColours(filmColours).length === 0, warmColours(filmColours).join(', '));
    await page.keyboard.press('Escape');
    await page.waitForTimeout(SETTLE);
    s = await snapshot(page);
    check('?nowebgl=1: closing restores scrollY', Math.abs(s.y - savedY) <= 2 && !(await page.evaluate(() => document.getElementById('ending').open)), { savedY, y: s.y });
    checkErrors(errors, ignored);
    await context.close();

    // A browser that really has no WebGL: the bundle's own probe must fail softly (contract §3).
    const blind = await openPage();
    await blind.context.addInitScript(() => {
      const original = HTMLCanvasElement.prototype.getContext;
      HTMLCanvasElement.prototype.getContext = function (type, ...rest) { return /webgl/i.test(type) ? null : original.call(this, type, ...rest); };
    });
    await load(blind.page, urlFor('#chapter-4'));
    const state = await blind.page.evaluate(() => ({ universe: document.documentElement.dataset.universe, renderer: Universe.getState().renderer, ending: typeof Universe.ending.state().active, route: NovelUI.route() }));
    check('no WebGL at all: Universe reports "none", the reader still opens', state.universe === 'none' && state.renderer === 'none' && state.ending === 'boolean' && state.route.chapter === 4, state);
    await checkChapterText(blind.page, 4, chapters);
    checkErrors(blind.errors, blind.ignored, ' (no WebGL at all)');
    await blind.context.close();
  },

  async reduced() {
    const { context, page, errors, ignored } = await openPage({ reduced: true });
    await load(page, urlFor('#home'));
    let s = await snapshot(page);
    const u = await page.evaluate(() => Universe.getState());
    check('reduced motion: universe still (paused), webgl', u.renderer === 'webgl' && u.paused === true, { renderer: u.renderer, paused: u.paused, reducedMotion: u.reducedMotion });
    const chapters = await pageChapters(page);
    await go(page, '#chapter-6');
    await page.evaluate(() => document.querySelector('#prose .tx')?.scrollIntoView({ block: 'center', behavior: 'instant' }));
    await page.waitForTimeout(300);
    const tx = await page.evaluate(() => ({
      waiting: document.querySelectorAll('[data-reveal]:not(.is-in)').length,
      glyphs: document.querySelectorAll('.tx-glyphs').length,
      transmissions: document.querySelectorAll('#prose .tx').length,
    }));
    const transmissions = chapters[5].paragraphs.filter(p => !p.includes('\n') && /^‘[^’]*’$/.test(p)).length;
    check('reduced motion: everything shown at once, transmissions static', tx.waiting === 0 && tx.glyphs === 0 && tx.transmissions === transmissions, { ...tx, expected: transmissions });
    await checkChapterText(page, 6, chapters);
    await go(page, '#chapter-8');
    await toBottom(page);
    await page.waitForTimeout(SETTLE);
    const savedY = (await snapshot(page)).y;
    await page.click('#seed-trigger');
    await page.waitForTimeout(2500);
    let ui = await page.evaluate(() => ({ ui: NovelUI.ending(), next: !document.getElementById('ending-next').hidden, film: Universe.ending.state() }));
    check('reduced motion: the ending opens as still compositions', ui.ui.open && ui.ui.stills && ui.next && ui.film.paused, ui);
    for (let i = 0; i < 4; i++) { await page.click('#ending-next'); await page.waitForTimeout(900); }
    ui = await page.evaluate(() => ({ finale: !document.getElementById('finale').hidden, quote: document.getElementById('finale-quote').textContent.replace(/\s+/g, ' ') }));
    check('reduced motion: four stills, then the closing quote', ui.finale && ui.quote.includes('우리가 왜 시작했는지는 기억해라.'), ui);
    await page.click('#ending-return');
    await page.waitForTimeout(SETTLE);
    s = await snapshot(page);
    check('reduced motion: 읽던 곳 restores scrollY and focus', Math.abs(s.y - savedY) <= 2 && s.active === 'seed-trigger', { savedY, ...s });
    checkErrors(errors, ignored);
    await context.close();
  },
};

/* ── Run ── */
const started = Date.now();
console.log(`가능성의 끝 — site smoke test · ${BASE} · ${flag('gpu') ? 'GPU (ANGLE)' : 'SwiftShader'} · ${path.basename(executablePath)}`);
for (const [name, run] of Object.entries(groups)) {
  if (ONLY.length && !ONLY.includes(name)) continue;
  group = name;
  const t0 = Date.now();
  process.stdout.write(`  ${name} … `);
  try {
    await run();
  } catch (error) {
    check('group ran to the end', false, error.message.split('\n')[0]);
  }
  const mine = results.filter(r => r.group === name);
  console.log(`${mine.filter(r => r.status === 'FAIL').length ? 'FAIL' : 'ok'} (${((Date.now() - t0) / 1000).toFixed(0)} s)`);
}
await browser.close();

const failed = results.filter(r => r.status === 'FAIL');
const gw = Math.max(5, ...results.map(r => r.group.length));
console.log('');
for (const r of results) {
  console.log(`${r.status.padEnd(4)}  ${r.group.padEnd(gw)}  ${r.name}${r.detail ? `\n${' '.repeat(gw + 8)}${r.detail.slice(0, 400)}` : ''}`);
}
console.log(`\n${results.filter(r => r.status === 'PASS').length} passed, ${failed.length} failed · ${((Date.now() - started) / 1000).toFixed(0)} s`);
process.exit(failed.length ? 1 : 0);
