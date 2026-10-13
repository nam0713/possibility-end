// Headless QA screenshots for agents and humans. Dev-only; needs `npm install` in tools/.
//
//   node tools/shot.mjs --url http://localhost:5173/#home --out shots/home.png
//   node tools/shot.mjs --url ... --out a.png --w 390 --h 844 --mobile --wait 3000
//   node tools/shot.mjs --url ... --steps steps.json      (multi-step script, see below)
//
// steps.json: [{"wait":1500},{"eval":"document.querySelector('#x').click()"},
//              {"key":"ArrowRight"},{"click":"#selector"},{"scroll":1200},
//              {"mouse":[400,300]},{"shot":"out/name.png","full":false}]
// Prints a JSON report (console errors, page errors, eval results) to stdout.
import { chromium } from 'playwright-core';
import { existsSync } from 'node:fs';
import { mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const args = process.argv.slice(2);
const opt = (name, fallback) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : fallback; };
const flag = name => args.includes(`--${name}`);
const candidates = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
].filter(Boolean);
const executablePath = candidates.find(p => existsSync(p));
if (!executablePath) throw Error('No Chrome/Edge executable found; set CHROME_PATH.');

const url = opt('url', 'http://localhost:5173/');
const width = Number(opt('w', flag('mobile') ? 390 : 1440));
const height = Number(opt('h', flag('mobile') ? 844 : 900));
const report = { url, viewport: [width, height], consoleErrors: [], pageErrors: [], logs: [], results: [], shots: [] };

const browser = await chromium.launch({
  executablePath, headless: !flag('headed'),
  // --gpu renders through the real GPU (ANGLE/D3D11); the default is portable SwiftShader.
  args: [...(flag('gpu') ? ['--use-angle=d3d11', '--enable-gpu'] : ['--enable-unsafe-swiftshader']), '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required', '--hide-scrollbars'],
});
try {
  const context = await browser.newContext({
    viewport: { width, height }, deviceScaleFactor: Number(opt('dpr', 1)),
    isMobile: flag('mobile'), hasTouch: flag('mobile'),
    reducedMotion: flag('reduced') ? 'reduce' : 'no-preference',
    colorScheme: 'dark',
  });
  const page = await context.newPage();
  page.on('console', m => {
    if (m.type() === 'error') report.consoleErrors.push(m.text());
    else if (flag('logs')) report.logs.push(`${m.type()}: ${m.text()}`);
  });
  page.on('pageerror', e => report.pageErrors.push(e.stack || e.message));
  await page.goto(url, { waitUntil: 'load', timeout: 60000 });
  const steps = opt('steps') ? JSON.parse(await readFile(opt('steps'), 'utf8')) : [{ wait: Number(opt('wait', 2500)) }, ...(opt('eval') ? [{ eval: opt('eval') }] : []), { shot: opt('out', 'shot.png'), full: flag('full') }];
  for (const step of steps) {
    if (step.wait) await page.waitForTimeout(step.wait);
    if (step.eval) report.results.push(await page.evaluate(code => { try { const v = (0, eval)(code); return Promise.resolve(v).then(x => { try { return JSON.parse(JSON.stringify(x ?? null)); } catch { return String(x); } }); } catch (e) { return `EVAL ERROR: ${e.message}`; } }, step.eval));
    if (step.click) await page.click(step.click, { timeout: 10000 }).catch(e => report.results.push(`CLICK ERROR ${step.click}: ${e.message.split('\n')[0]}`));
    if (step.key) await page.keyboard.press(step.key);
    if (step.down) await page.keyboard.down(step.down);
    if (step.up) await page.keyboard.up(step.up);
    if (step.mouse) await page.mouse.move(step.mouse[0], step.mouse[1], { steps: 8 });
    if (step.mousedown) await page.mouse.down();
    if (step.mouseup) await page.mouse.up();
    if (step.scroll !== undefined) { await page.mouse.wheel(0, step.scroll); await page.waitForTimeout(400); }
    if (step.scrollTo !== undefined) await page.evaluate(y => window.scrollTo({ top: y, behavior: 'instant' }), step.scrollTo);
    if (step.shot) {
      const out = path.resolve(step.shot);
      await mkdir(path.dirname(out), { recursive: true });
      await page.screenshot({ path: out, fullPage: !!step.full });
      report.shots.push(out);
    }
  }
} finally {
  await browser.close();
}
console.log(JSON.stringify(report, null, 1));
