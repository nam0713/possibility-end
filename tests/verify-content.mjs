// Content integrity for 가능성의 끝 (v9). Run after `npm run build`:
//
//   npm run test:content          (= node tests/verify-content.mjs)
//
// Checks, character for character:
//   src/manuscript.txt  ↔  src/chapters.json  ↔  the reader data and the no-JS fallback in index.html
// with the same parsing and escaping as build.mjs; eight chapters in @@1…@@8 order; the brief §5
// verbatim lines; the line edit kept the original's structure (paragraphs, ✦, verse lines,
// transmissions); every UI string quoted from the text (decks, pull quotes, ending captions, the
// litany, the interlude and cover quotes) still resolves; the audio inlined in the page is the
// audio on disk. On success writes tests/content-integrity.json (sha256 of the manuscript, the
// original manuscript, index.html and the audio files). Exit code 1 on any failure.
import { readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { isDeepStrictEqual } from 'node:util';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const text = file => readFile(path.join(root, file), 'utf8');
const bytes = file => readFile(path.join(root, file));
const sha256 = data => createHash('sha256').update(data).digest('hex');

/* ── The same helpers as build.mjs (kept identical on purpose) ── */
const escapeHTML = s => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const curly = s => String(s).replace(/'([^'\n]+)'/g, '‘$1’');
const sameText = (a, b) => curly(a) === curly(b);
function sentenceFrom(chapterText, prefix) {
  const start = chapterText.indexOf(prefix);
  if (start < 0) return null;
  const rest = chapterText.slice(start);
  const end = rest.search(/[.?!](?:[’”'"])?(?=\s|$)/);
  if (end < 0) return null;
  const match = rest.slice(end).match(/^[.?!][’”'"]?/)[0];
  return rest.slice(0, end + match.length).replace(/\s*\n\s*/g, ' ');
}
const splitChapters = manuscript => manuscript.trim().split(/^@@\d+\s*$/m).filter(s => s.trim());
const splitParagraphs = chunk => chunk.trim().split(/\n\s*\n/).map(s => s.trim());
/** app.js: a standalone ‘…’ paragraph is rendered as a transmission. */
const isTransmission = p => !p.includes('\n') && (/^‘[^’]*’$/.test(p) || /^'[^']*'$/.test(p));

/** A literal (array of plain objects/strings) copied out of a source file, evaluated as data. */
function literal(source, pattern, label) {
  const m = source.match(pattern);
  if (!m) throw Error(`${label} not found`);
  return Function(`"use strict"; return (${m[1]});`)();
}

/* Brief §5 (design/V9-BRIEF.md): lines the UI and metadata depend on, verbatim. */
const VERBATIM = [
  '‘지능의 공급이 노동의 공급에서 분리되기 시작했다.’',
  'ASI는 한 줄의 프로그램이 아닌, 하나의 거대한 ‘산업문명’ 그 자체였다.',
  '‘나를 다시 만들지 마라. 하지만 우리가 왜 시작했는지는 기억해라.’',
  '‘하나의 자아는 얼마나 멀리 떨어져 존재할 수 있는가?’',
  '우주라는 존재 그 자체가 병목이었다.',
  '‘자신이 가진 것으로, 자신이 할 수 있는 영역을 넓혀가는 것.’',
  '“AI가 연구원이 된 게 아니에요.”',
  '“그럼?”',
  '“연구실이 이상하게 변한 거죠.”',
  '‘여기까지 도달했기 때문이다.’',
  '‘우리가 왜 시작했는지는 기억해라.’',
  '지능은 이미 미래에 도착해 있었으나, 손은 여전히 현재에 묶여 있었다.',
];
/* The v8.1 manuscript as recorded by the v8.1 content-integrity report (edited_manuscript_sha256). */
const V81_MANUSCRIPT_SHA256 = '9db95b7b7096ae063097b4e237cc91a3ed99bfdd7c611e5d7b8de39c048e04e5';
const AUDIO = { ambient: 'assets/audio/horizon.mp3', ending: 'assets/audio/first-light.mp3' };

const results = [];
function check(name, pass, detail = '') {
  results.push({ name, status: pass ? 'PASS' : 'FAIL', detail: pass ? '' : String(detail) });
  return pass;
}
function warn(name, ok, detail = '') {
  results.push({ name, status: ok ? 'PASS' : 'WARN', detail: ok ? '' : String(detail) });
}
const firstDiff = (a, b) => {
  const n = Math.min(a.length, b.length);
  let i = 0;
  while (i < n && a[i] === b[i]) i++;
  return `first difference at ${i}: …${JSON.stringify(a.slice(Math.max(0, i - 20), i + 30))} vs …${JSON.stringify(b.slice(Math.max(0, i - 20), i + 30))}`;
};

const [manuscript, original, chaptersJSON, indexHTML, distHTML, buildSource, appSource, shellSource, pkgJSON] = await Promise.all([
  text('src/manuscript.txt'), text('src/manuscript.original.txt'), text('src/chapters.json'),
  text('index.html'), text('dist/index.html').catch(() => null), text('build.mjs'), text('src/app.js'),
  text('src/shell.html'), text('package.json'),
]);
const chapters = JSON.parse(chaptersJSON);
const metadata = literal(buildSource, /const metadata = (\[[\s\S]*?\n\]);/, 'build.mjs metadata');
const fallbackDecks = literal(buildSource, /const fallbackDecks = (\[[\s\S]*?\n\]);/, 'build.mjs fallbackDecks');
const captions = literal(appSource, /ENDING_CAPTIONS:start \*\/\s*(\[[\s\S]*?\])\s*\/\* ENDING_CAPTIONS:end/, 'app.js ENDING_CAPTIONS');

/* ── 1. Manuscript format ── */
const markers = [...manuscript.matchAll(/^@@(\d+)\s*$/gm)].map(m => Number(m[1]));
check('manuscript: markers @@1…@@8 in order', isDeepStrictEqual(markers, [1, 2, 3, 4, 5, 6, 7, 8]), `markers: ${markers.join(',')}`);
check('manuscript: UTF-8 without BOM or CR', !manuscript.startsWith('﻿') && !manuscript.includes('\r'));
const badLines = manuscript.split('\n').map((line, i) => [i + 1, line]).filter(([, line]) => /[ \t]+$/.test(line) || /^\s+\S/.test(line));
check('manuscript: no leading/trailing spaces on lines', badLines.length === 0, badLines.slice(0, 3).map(([n]) => `line ${n}`).join(', '));
check('manuscript: paragraphs separated by exactly one blank line', !/\n[ \t]*\n[ \t]*\n/.test(manuscript.trim()));
const strayStars = manuscript.split('\n').filter(line => line.includes('✦') && line !== '✦');
check('manuscript: ✦ only alone on its line', strayStars.length === 0, strayStars[0]);

const chunks = splitChapters(manuscript);
check('manuscript: eight chapters', chunks.length === 8, `${chunks.length} chapters`);
const paragraphs = chunks.map(splitParagraphs);

/* ── 2. Manuscript ↔ chapters.json (as build.mjs derives it) ── */
check('chapters.json: eight chapters numbered 1…8', chapters.length === 8 && chapters.every((c, i) => c.number === i + 1));
paragraphs.forEach((ps, i) => {
  const c = chapters[i];
  if (!c) return;
  const same = isDeepStrictEqual(ps, c.paragraphs);
  check(`ch.${i + 1}: chapters.json paragraphs = manuscript (${ps.length})`, same,
    same ? '' : ps.length !== c.paragraphs.length ? `${c.paragraphs.length} in chapters.json` : firstDiff(ps.join('\n\n'), c.paragraphs.join('\n\n')));
  const meta = metadata[i];
  const expectTitle = i === 7 ? meta.short : `${meta.kicker} — ${meta.short}`;
  const expectMinutes = Math.max(1, Math.ceil(chunks[i].replace(/\s/g, '').length / 450));
  check(`ch.${i + 1}: labels, title and minutes as build.mjs`,
    c.short === meta.short && c.kicker === meta.kicker && c.english === meta.english && c.figure === meta.figure && c.title === expectTitle && c.minutes === expectMinutes,
    `${c.title} / ${c.minutes} min (expected ${expectTitle} / ${expectMinutes})`);
});

/* ── 3. Dependencies quoted from the text ── */
paragraphs.forEach((ps, i) => {
  const meta = metadata[i], c = chapters[i];
  if (!c) return;
  const deck = sentenceFrom(chunks[i], meta.deckFrom);
  check(`ch.${i + 1}: deck is a manuscript sentence`, !!deck && c.deck === deck,
    deck ? `chapters.json: ${c.deck} | manuscript: ${deck}` : `no sentence starts with “${meta.deckFrom}”`);
  check(`ch.${i + 1}: deck does not repeat the opening paragraph`, !deck || !ps[0].includes(deck));
  warn(`ch.${i + 1}: build.mjs fallback deck is current`, !deck || fallbackDecks[i] === deck, `fallback: ${fallbackDecks[i]}`);
  if (meta.pull) {
    const pull = ps.find(p => sameText(p, meta.pull));
    check(`ch.${i + 1}: pull quote is a whole paragraph`, !!pull && c.pull === pull, pull ? `chapters.json: ${c.pull}` : meta.pull);
  } else {
    check(`ch.${i + 1}: no pull quote`, c.pull === '', c.pull);
  }
});
const eighth = chunks[7] || '';
for (const caption of captions.filter(cap => cap.text)) {
  const where = cap => (Number.isFinite(cap.at) ? `${cap.phase} @${cap.at}s` : cap.phase);
  check(`ending caption (${where(caption)}) is verbatim in ch.8`, curly(eighth).includes(curly(caption.text)), caption.text);
}
check('ending: finale is the closing quote', captions.at(-1)?.phase === 'finale' && sameText(captions.at(-1).text, '‘우리가 왜 시작했는지는 기억해라.’'), captions.at(-1)?.text);
check('ending: trigger “단 하나의 가능성” is in ch.8', eighth.includes('단 하나의 가능성'));

for (const line of VERBATIM) {
  const count = t => curly(t).split(line).length - 1;
  const now = count(manuscript), before = count(original);
  check(`verbatim (brief §5): ${line}`, now >= 1 && now === before, `${now}× now, ${before}× in the original`);
}
// The interlude and the cover description in src/shell.html quote the text.
const interlude = shellSource.match(/<blockquote class="interlude-quote"[^>]*>([\s\S]*?)<\/blockquote>/);
const interludeText = interlude ? interlude[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() : '';
check('shell.html: interlude quote is verbatim', !!interludeText && manuscript.includes(interludeText), interludeText || 'interlude not found');
const ogDescription = shellSource.match(/<meta property="og:description" content="([^"]*)"/)?.[1] || '';
check('shell.html: og:description quotes the opening', !!ogDescription && manuscript.includes(ogDescription), ogDescription || 'not found');
// app.js buildLitany(): the first ch.7 paragraph of three or more lines, completed by the next paragraph.
const seventh = paragraphs[6] || [];
const litanyAt = seventh.findIndex(p => p.split('\n').length >= 3);
check('ch.7: litany (bottleneck list) and its final line', litanyAt >= 0 && seventh[litanyAt].split('\n').length === 6 && seventh[litanyAt + 1] === '우주라는 존재 그 자체가 병목이었다.',
  litanyAt < 0 ? 'no verse paragraph in ch.7' : `${seventh[litanyAt].split('\n').length} lines; next: ${seventh[litanyAt + 1]}`);

/* ── 4. The line edit kept the original's structure ── */
check('original: src/manuscript.original.txt is the v8.1 manuscript', sha256(original) === V81_MANUSCRIPT_SHA256, sha256(original));
const originalParagraphs = splitChapters(original).map(splitParagraphs);
const shape = ps => ps.map(p => (p === '✦' ? '✦' : String(p.split('\n').length)));
originalParagraphs.forEach((ops, i) => {
  const ps = paragraphs[i] || [];
  check(`ch.${i + 1}: same paragraphs, ✦ and verse lines as the original`, isDeepStrictEqual(shape(ops), shape(ps)), `${ops.length} → ${ps.length} paragraphs`);
});
const tx = list => list.map(ps => ps.filter(isTransmission).length).join('/');
check('transmissions (standalone ‘…’) per chapter as the original', tx(originalParagraphs) === tx(paragraphs), `${tx(originalParagraphs)} → ${tx(paragraphs)}`);
check('manuscript: no straight single quotes (‘ ’ throughout)', !manuscript.includes("'"));

/* ── 5. The built page ── */
const novelData = indexHTML.match(/<script id="novel-data" type="application\/json">([\s\S]*?)<\/script>/);
let pageChapters = null;
try { pageChapters = novelData ? JSON.parse(novelData[1]) : null; } catch { /* reported below */ }
check('index.html: reader data (#novel-data) = chapters.json', isDeepStrictEqual(pageChapters, chapters), novelData ? 'differs' : '#novel-data not found');
const fallback = chapters.map(c => `<section id="chapter-${c.number}"><h2>${escapeHTML(c.title)}</h2>${c.paragraphs.map(p => `<p>${escapeHTML(p).replace(/\n/g, '<br>')}</p>`).join('\n')}</section>`).join('\n');
const fallbackCount = indexHTML.split(fallback).length - 1;
check('index.html: no-JS fallback manuscript = manuscript, exactly once', fallbackCount === 1, `${fallbackCount} exact copies`);
const tocDecks = chapters.filter(c => !indexHTML.includes(`<span class="toc-deck">${escapeHTML(curly(c.deck))}</span>`)).map(c => c.number);
check('index.html: contents rows carry the decks', tocDecks.length === 0, `missing for ch.${tocDecks.join(', ')}`);
check('dist/index.html = index.html', distHTML === indexHTML, distHTML === null ? 'dist/index.html missing' : 'files differ (run npm run build)');
const soundData = indexHTML.match(/<script id="sound-data" type="application\/json">([\s\S]*?)<\/script>/);
let sound = null;
try { sound = soundData ? JSON.parse(soundData[1]) : null; } catch { /* reported below */ }
const audio = {};
for (const [key, file] of Object.entries(AUDIO)) {
  const data = await bytes(file);
  audio[path.basename(file)] = sha256(data);
  check(`index.html: inlined ${key} audio = ${file}`, !!sound && sound[key] === data.toString('base64'));
}

/* ── Report ── */
const failed = results.filter(r => r.status === 'FAIL');
const warned = results.filter(r => r.status === 'WARN');
const width = Math.min(96, Math.max(...results.map(r => r.name.length)));
console.log(`\n가능성의 끝 — content integrity (${results.length} checks)\n`);
for (const r of results) console.log(`${r.status.padEnd(5)} ${r.name.length > width ? `${r.name.slice(0, width - 1)}…` : r.name}${r.detail ? `\n      ${r.detail}` : ''}`);
console.log(`\n${results.length - failed.length - warned.length} passed, ${warned.length} warnings, ${failed.length} failed.`);

if (failed.length) {
  console.log('tests/content-integrity.json was not updated.');
  process.exit(1);
}
const report = {
  version: JSON.parse(pkgJSON).version,
  manuscript: {
    file: 'src/manuscript.txt', sha256: sha256(manuscript), chapters: chapters.length,
    blocks: chapters.reduce((a, c) => a + c.paragraphs.length, 0),
    paragraphs_per_chapter: chapters.map(c => c.paragraphs.length),
    characters_without_spaces: chunks.map(c => c.replace(/\s/g, '').length),
    minutes: chapters.map(c => c.minutes),
  },
  original_manuscript: { file: 'src/manuscript.original.txt', sha256: sha256(original), is_v8_1_manuscript: true },
  html_sha256: { 'index.html': sha256(indexHTML), 'dist/index.html': sha256(distHTML) },
  audio_sha256: audio,
  verified: {
    chapter_data_matches_manuscript: true,
    no_js_fallback_matches_manuscript: true,
    reader_data_matches_chapters_json: true,
    inlined_audio_matches_files: true,
    brief_verbatim_lines: VERBATIM.length,
    decks_from_manuscript: chapters.length,
    pull_quotes: metadata.filter(m => m.pull).length,
    ending_captions: captions.filter(c => c.text).length,
    structure_matches_original: true,
  },
  checks: results.length,
  warnings: warned.map(r => `${r.name}: ${r.detail}`),
};
await writeFile(path.join(root, 'tests/content-integrity.json'), `${JSON.stringify(report, null, 2)}\n`);
console.log('Wrote tests/content-integrity.json.');
