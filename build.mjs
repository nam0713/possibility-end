// Builds the single self-contained page: index.html and dist/index.html.
//
//   npm run build                      normal build
//   node build.mjs --universe <file>   inline another universe bundle (QA mocks)
//   node build.mjs --out <file>        write only that HTML file (QA builds; skips
//                                      index.html, dist/, chapters.json and the game copy)
//
// Order of inlined scripts (see src/shell.html):
//   #novel-data JSON → #sound-data JSON → src/audio.js → universe bundle → src/app.js
import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const option = name => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : null; };
const read = file => fs.readFile(path.resolve(root, file), 'utf8');
const escapeHTML = s => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
// Typesetting only (same rule as app.js): straight single quotes around a phrase are set as ‘ ’.
const curly = s => String(s).replace(/'([^'\n]+)'/g, '\u2018$1\u2019');
/** Compare text regardless of how its single quotes are typed (' ' or ‘ ’). */
const sameText = (a, b) => curly(a) === curly(b);
// Inline scripts must never contain a literal closing tag.
const scriptSafe = js => js.replace(/<\/(script)/gi, '<\\/$1').replace(/<!--/g, '<\\!--');
const warnings = [];

/* ── Chapter metadata ──────────────────────────────────────────────────────────
 * Every displayed sentence must come from the manuscript. `deck` is therefore not
 * stored as prose: it names the opening words of a sentence in that chapter, and the
 * build copies the whole sentence verbatim. If the prose is revised, the deck follows.
 * `pull` strings are kept exactly; they mark sentences emphasised in the reader.
 * `figure` is UI copy naming the formation the universe shows for the chapter. */
const metadata = [
  { short: '지능', kicker: '첫 번째 병목', english: 'INTELLIGENCE', figure: '연구의 순환', deckFrom: '정확히 어느 날부터', pull: '‘지능의 공급이 노동의 공급에서 분리되기 시작했다.’' },
  { short: '컴퓨터', kicker: '두 번째 병목', english: 'COMPUTATION', figure: '연산 격자', deckFrom: '인류 최초의 초인간적 연구 시스템은', pull: '' },
  { short: '손', kicker: '세 번째 병목', english: 'PRODUCTION', figure: '생산의 순환', deckFrom: '마침내 루프의', pull: 'ASI는 한 줄의 프로그램이 아닌, 하나의 거대한 ‘산업문명’ 그 자체였다.' },
  { short: '물질', kicker: '네 번째 병목', english: 'MATTER', figure: '스스로 자라는 결정', deckFrom: 'ASI는 원자를 일일이', pull: '‘나를 다시 만들지 마라. 하지만 우리가 왜 시작했는지는 기억해라.’' },
  { short: '에너지', kicker: '다섯 번째 병목', english: 'ENERGY', figure: '항성을 두른 구조물', deckFrom: '시간 자체가 최적화의', pull: '' },
  { short: '거리', kicker: '여섯 번째 병목', english: 'DISTANCE', figure: '서로 멀어지는 지성', deckFrom: '지성은 갈라질 수밖에', pull: '‘하나의 자아는 얼마나 멀리 떨어져 존재할 수 있는가?’' },
  { short: '우주', kicker: '일곱 번째 병목', english: 'THE UNIVERSE', figure: '식어 가는 우주', deckFrom: '우주의 가속 팽창은', pull: '우주라는 존재 그 자체가 병목이었다.' },
  { short: '허용된 것들의 끝', kicker: '마지막 장', english: 'POSSIBILITY', figure: '한 점으로 모이는 빛', deckFrom: '오랜 연구 끝에', pull: '‘자신이 가진 것으로, 자신이 할 수 있는 영역을 넓혀가는 것.’' },
];
// Fallback decks (these sentences as of the v8.1 manuscript), used only if a sentence can no longer be found.
const fallbackDecks = [
  '정확히 어느 날부터 변화가 시작되었는지 아는 사람은 없었다.',
  '인류 최초의 초인간적 연구 시스템은 생각이 느려져서 멈춘 것이 아니라, 건물이 지어지기를 기다리느라 멈춰 섰다.',
  '마침내 루프의 대부분이 닫혔다.',
  'ASI는 원자를 일일이 집어 들지 않았다.',
  '시간 자체가 최적화의 자원이 되었다.',
  '지성은 갈라질 수밖에 없었다.',
  '우주의 가속 팽창은 멈추지 않았다.',
  '오랜 연구 끝에 단 하나의 가능성이 남았다.',
];

/** The full sentence of `text` that begins with `prefix` (up to . ? ! and a closing quote). */
function sentenceFrom(text, prefix) {
  const start = text.indexOf(prefix);
  if (start < 0) return null;
  const rest = text.slice(start);
  const end = rest.search(/[.?!](?:[’”'"])?(?=\s|$)/);
  if (end < 0) return null;
  const match = rest.slice(end).match(/^[.?!][’”'"]?/)[0];
  return rest.slice(0, end + match.length).replace(/\s*\n\s*/g, ' ');
}

const manuscript = await read('src/manuscript.txt');
const chunks = manuscript.trim().split(/^@@\d+\s*$/m).filter(s => s.trim());
if (chunks.length !== 8) throw Error('Expected eight complete chapters.');

const chapters = chunks.map((text, i) => {
  const meta = metadata[i];
  const paragraphs = text.trim().split(/\n\s*\n/).map(s => s.trim());
  let deck = sentenceFrom(text, meta.deckFrom);
  if (!deck) {
    warnings.push(`ch.${i + 1}: deck sentence starting “${meta.deckFrom}” not found; using the stored fallback.`);
    deck = fallbackDecks[i];
  }
  if (paragraphs[0].includes(deck)) warnings.push(`ch.${i + 1}: the deck repeats the opening paragraph right below the chapter cover; choose another sentence.`);
  // The pull quote is matched whatever its quote marks, and stored exactly as the paragraph reads.
  const pull = meta.pull ? paragraphs.find(p => sameText(p, meta.pull)) : '';
  if (meta.pull && !pull) warnings.push(`ch.${i + 1}: pull quote is no longer a whole paragraph: ${meta.pull}`);
  return {
    number: i + 1,
    short: meta.short,
    kicker: meta.kicker,
    english: meta.english,
    figure: meta.figure,
    deck,
    pull: pull || meta.pull,
    title: i === 7 ? meta.short : `${meta.kicker} — ${meta.short}`,
    minutes: Math.max(1, Math.ceil(text.replace(/\s/g, '').length / 450)),
    paragraphs,
  };
});

/* ── Verbatim checks for UI strings quoted from the text (warnings, not errors:
 *    the manuscript may be mid-revision). The ending captions live in app.js. */
const appSource = await read('src/app.js');
const captionBlock = appSource.match(/ENDING_CAPTIONS:start \*\/([\s\S]*?)\/\* ENDING_CAPTIONS:end/);
if (captionBlock) {
  for (const match of captionBlock[1].matchAll(/text:\s*(['"`])((?:\\.|(?!\1).)*)\1/g)) {
    const quote = match[2].replace(/\\(['"`\\])/g, '$1');
    if (!curly(manuscript).includes(curly(quote))) warnings.push(`Ending caption not found verbatim in the manuscript: ${quote}`);
  }
} else warnings.push('ENDING_CAPTIONS markers not found in src/app.js.');

/* ── Markup generated from the data ── */
const pad = n => String(n).padStart(2, '0');
const contentsRows = chapters.map(c => `
<li class="toc-row" data-chapter="${c.number}">
 <a class="toc-link" href="#chapter-${c.number}" data-chapter="${c.number}">
  <span class="toc-num mono" aria-hidden="true">${pad(c.number)}</span>
  <span class="toc-title">${escapeHTML(c.short)}</span>
  <span class="toc-en mono" lang="en">${escapeHTML(c.english)}</span>
  <span class="toc-deck">${escapeHTML(curly(c.deck))}</span>
  <span class="toc-meta meta"><span class="toc-minutes">약 ${c.minutes}분</span><span class="toc-state" data-state-for="${c.number}"></span></span>
  <span class="toc-bar" aria-hidden="true"><i data-bar-for="${c.number}"></i></span>
 </a>
</li>`).join('');

const dialogRows = chapters.map(c => `
<li><a class="sheet-row" href="#chapter-${c.number}" data-chapter="${c.number}">
 <span class="sheet-num mono" aria-hidden="true">${pad(c.number)}</span>
 <span class="sheet-title">${escapeHTML(c.short)}</span>
 <span class="sheet-state meta" data-state-for="${c.number}"></span>
 <span class="sheet-bar" aria-hidden="true"><i data-bar-for="${c.number}"></i></span>
</a></li>`).join('');

const railItems = chapters.map(c => `<li><a class="rail-tick" href="#chapter-${c.number}" data-chapter="${c.number}" aria-label="${c.number}장 ${escapeHTML(c.short)}"><i aria-hidden="true"><b data-bar-for="${c.number}"></b></i><span class="rail-label" aria-hidden="true"><span class="mono">${pad(c.number)}</span> ${escapeHTML(c.short)}</span></a></li>`).join('');

// The no-JavaScript manuscript, verbatim (tests/verify-content.mjs compares it with the
// manuscript character for character; keep this shape).
const fallback = chapters.map(c => `<section id="chapter-${c.number}"><h2>${escapeHTML(c.title)}</h2>${c.paragraphs.map(p => `<p>${escapeHTML(p).replace(/\n/g, '<br>')}</p>`).join('\n')}</section>`).join('\n');

/* ── Universe bundle (built in parallel by another module) ── */
const UNIVERSE_STUB = `/* Universe stub: src/generated/universe.js has not been built yet. */
(function () {
  var root = document.documentElement, noop = function () {};
  root.dataset.universe = 'none';
  var ending = { active: false, time: 0, duration: 0, started: false, paused: false, finished: false, phase: -1, phases: [], impact: 3.6 };
  window.Universe = {
    mount: function () { root.dataset.universe = 'none'; return false; },
    setScene: noop, setLayout: noop, setReading: noop, setVeil: noop, setVisible: noop,
    setScatter: noop, setInteractive: noop, setPointer: noop, setPaused: noop, setQuality: noop,
    select: noop, focusNode: noop, reset: noop, zoom: noop,
    subscribe: function () { return noop; },
    pick: function () { return 0; },
    getState: function () { return { renderer: 'none', scene: null, chapter: 0, layout: null, quality: 'low', particles: 0, fps: 0, frames: 0, contextLost: false, paused: false, visible: false, interactive: false, scatter: 0, ending: Object.assign({}, ending) }; },
    ending: {
      start: function () { return Promise.resolve(false); },
      pause: noop, seek: noop, skipToEnd: noop, replay: noop, arm: noop,
      stop: function () { return Promise.resolve(); },
      state: function () { return Object.assign({}, ending); }
    }
  };
})();`;
const universeFile = option('universe') || 'src/generated/universe.js';
const universeSource = existsSync(path.resolve(root, universeFile)) ? await read(universeFile) : UNIVERSE_STUB;
if (universeSource === UNIVERSE_STUB) warnings.push(`${universeFile} not found: inlined the no-op Universe stub.`);

/* ── Assemble ── */
const sound = {
  ambient: (await fs.readFile(path.join(root, 'assets/audio/horizon.mp3'))).toString('base64'),
  ending: (await fs.readFile(path.join(root, 'assets/audio/first-light.mp3'))).toString('base64'),
};
let html = await read('src/shell.html');
const tokens = [
  ['/*__CSS__*/', await read('src/site.css')],
  ['<!--__CONTENTS_ROWS__-->', contentsRows],
  ['<!--__SHEET_ROWS__-->', dialogRows],
  ['<!--__RAIL__-->', railItems],
  ['<!--__FALLBACK__-->', fallback],
  ['/*__DATA__*/', JSON.stringify(chapters).replace(/</g, '\\u003c')],
  ['/*__SOUND_DATA__*/', JSON.stringify(sound)],
  ['/*__AUDIO__*/', scriptSafe(await read('src/audio.js'))],
  ['/*__UNIVERSE__*/', scriptSafe(universeSource)],
  ['/*__APP__*/', scriptSafe(appSource)],
];
for (const [token, value] of tokens) {
  if (!html.includes(token)) throw Error(`Token ${token} missing from src/shell.html`);
  html = html.replace(token, () => value);
}

const out = option('out');
if (out) {
  await fs.mkdir(path.dirname(path.resolve(out)), { recursive: true });
  await fs.writeFile(path.resolve(out), html);
} else {
  await fs.writeFile(path.join(root, 'index.html'), html);
  await fs.mkdir(path.join(root, 'dist'), { recursive: true });
  await fs.writeFile(path.join(root, 'dist/index.html'), html);
  await fs.writeFile(path.join(root, 'src/chapters.json'), JSON.stringify(chapters, null, 2));
}
for (const w of warnings) console.warn(`⚠ ${w}`);
console.log(`Built ${chapters.length} chapters; ${chapters.reduce((a, c) => a + c.paragraphs.length, 0)} text blocks; ${(Buffer.byteLength(html) / 1024).toFixed(0)} KB, self-contained${out ? ` → ${out}` : ''}.`);
if (!out) await import('./build-game.mjs');
