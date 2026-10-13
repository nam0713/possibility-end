// Line-edit statistics for design/V9-PROSE.md: src/manuscript.original.txt (v8.1) → src/manuscript.txt.
//
//   node tests/prose-stats.mjs            table (Markdown) + vocabulary
//   node tests/prose-stats.mjs --json     the same as JSON
//
// Paragraphs are compared one to one (the line edit keeps every paragraph in place). The share of a
// paragraph that changed is 1 − LCS/max over its eojeol (space-separated words): < 25 % light,
// 25–60 % moderate, ≥ 60 % heavy. Characters exclude whitespace; minutes = ceil(chars / 450) as in
// build.mjs.
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = file => readFile(path.join(root, file), 'utf8');
const chaptersOf = t => t.trim().split(/^@@\d+\s*$/m).filter(s => s.trim()).map(c => c.trim());
const paragraphsOf = c => c.split(/\n\s*\n/).map(s => s.trim());
const chars = t => t.replace(/\s/g, '').length;
const minutes = t => Math.max(1, Math.ceil(chars(t) / 450));
const SHORT = ['지능', '컴퓨터', '손', '물질', '에너지', '거리', '우주', '허용된 것들의 끝'];

function changeRatio(a, b) {
  const x = a.split(/\s+/), y = b.split(/\s+/);
  const dp = Array.from({ length: x.length + 1 }, () => new Uint16Array(y.length + 1));
  for (let i = 1; i <= x.length; i++)
    for (let j = 1; j <= y.length; j++)
      dp[i][j] = x[i - 1] === y[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
  return 1 - dp[x.length][y.length] / Math.max(x.length, y.length);
}

const original = chaptersOf(await read('src/manuscript.original.txt'));
const revised = chaptersOf(await read('src/manuscript.txt'));
const rows = original.map((o, i) => {
  const r = revised[i];
  const po = paragraphsOf(o), pr = paragraphsOf(r);
  const row = { ch: i + 1, name: SHORT[i], paragraphs: pr.length, paragraphsOriginal: po.length, breaks: pr.filter(p => p === '✦').length, text: 0, touched: 0, light: 0, moderate: 0, heavy: 0, ratioSum: 0, charsOriginal: chars(o), charsRevised: chars(r), minutesOriginal: minutes(o), minutesRevised: minutes(r) };
  po.forEach((p, k) => {
    if (p === '✦') return;
    row.text++;
    if (p === pr[k]) return;
    row.touched++;
    const ratio = changeRatio(p, pr[k] ?? '');
    row.ratioSum += ratio;
    if (ratio < 0.25) row.light++; else if (ratio < 0.6) row.moderate++; else row.heavy++;
  });
  row.meanChange = row.touched ? Math.round(row.ratioSum / row.touched * 100) : 0;
  delete row.ratioSum;
  return row;
});
const sum = key => rows.reduce((a, r) => a + r[key], 0);
const total = Object.fromEntries(['paragraphs', 'breaks', 'text', 'touched', 'light', 'moderate', 'heavy', 'charsOriginal', 'charsRevised'].map(k => [k, sum(k)]));

const O = original.join('\n'), R = revised.join('\n');
const WORDS = ['압도적', '극상', '철저히', '처절', '하등', '숭고', '지극히', '엄청난', '절대', '불과했다', '존재했다', '거대한', '단 하나', '위대한', '결코', '완벽', '수행', '이는', '이를', '-하며'];
const count = (t, w) => (w === '-하며' ? (t.match(/[가-힣]하며/g) || []).length : t.split(w).length - 1);
const vocabulary = WORDS.map(w => ({ word: w, original: count(O, w), revised: count(R, w) }));
const quotes = t => ({ straightSingle: (t.match(/'/g) || []).length, curlySingle: (t.match(/‘/g) || []).length, curlyDouble: (t.match(/“/g) || []).length });
const isTransmission = p => !p.includes('\n') && (/^‘[^’]*’$/.test(p) || /^'[^']*'$/.test(p));
const transmissions = list => list.map(c => paragraphsOf(c).filter(isTransmission).length);

const result = { rows, total, vocabulary, quotes: { original: quotes(O), revised: quotes(R) }, transmissions: { original: transmissions(original), revised: transmissions(revised) } };
if (process.argv.includes('--json')) {
  console.log(JSON.stringify(result, null, 1));
} else {
  const n = v => v.toLocaleString('en-US');
  const pct = (a, b) => `${((b / a - 1) * 100).toFixed(1).replace('-', '−')}%`;
  console.log('| 장 | 문단 | 본문 문단 | 손본 문단 | 손대지 않음 | 가벼움 / 중간 / 큼 | 평균 변경률 | 글자 수 (원문 → 교정) | 읽기 |');
  console.log('|---|---:|---:|---:|---:|---|---:|---|---|');
  for (const r of rows) console.log(`| ${r.ch} ${r.name} | ${r.paragraphs} | ${r.text} | ${r.touched} | ${r.text - r.touched} | ${r.light} / ${r.moderate} / ${r.heavy} | ${r.meanChange}% | ${n(r.charsOriginal)} → ${n(r.charsRevised)} (${pct(r.charsOriginal, r.charsRevised)}) | ${r.minutesRevised}분${r.minutesRevised !== r.minutesOriginal ? ` (원문 ${r.minutesOriginal}분)` : ''} |`);
  console.log(`| **합계** | **${total.paragraphs}** | **${total.text}** | **${total.touched} (${Math.round(total.touched / total.text * 100)}%)** | **${total.text - total.touched}** | **${total.light} / ${total.moderate} / ${total.heavy}** | — | **${n(total.charsOriginal)} → ${n(total.charsRevised)} (${pct(total.charsOriginal, total.charsRevised)})** | |`);
  console.log(`\n✦ per chapter: ${rows.map(r => r.breaks).join(' / ')}`);
  console.log(`transmissions per chapter: ${result.transmissions.original.join('/')} → ${result.transmissions.revised.join('/')}`);
  console.log(`quotes: original ${JSON.stringify(result.quotes.original)} → revised ${JSON.stringify(result.quotes.revised)}`);
  console.log('\nvocabulary (original → revised):');
  for (const v of vocabulary) console.log(`  ${v.word}: ${v.original} → ${v.revised}`);
}
