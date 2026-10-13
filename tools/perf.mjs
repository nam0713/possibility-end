// GPU perf probe: node tools/perf.mjs <url> [seconds] [w] [h] — real GPU via ANGLE/D3D11, headless.
import { chromium } from 'playwright-core';
const [url = 'http://localhost:5173/', secs = '6', w = '1440', h = '900'] = process.argv.slice(2);
const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true,
  args: ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist', '--enable-gpu-rasterization', '--disable-frame-rate-limit=false'] });
const page = await (await browser.newContext({ viewport: { width: +w, height: +h } })).newPage();
const errors = []; page.on('pageerror', e => errors.push(e.message)); page.on('console', m => m.type() === 'error' && errors.push(m.text()));
await page.goto(url, { waitUntil: 'load' });
await page.waitForTimeout(Number(secs) * 1000);
const r = await page.evaluate(async () => {
  const gl = document.createElement('canvas').getContext('webgl2'); const e = gl.getExtension('WEBGL_debug_renderer_info');
  const gpu = e ? gl.getParameter(e.UNMASKED_RENDERER_WEBGL) : '?';
  const s0 = window.Universe?.getState?.(); const f0 = s0?.frames ?? 0;
  const times = []; let last = performance.now();
  await new Promise(res => { const t0 = performance.now(); (function f(t) { times.push(t - last); last = t; if (t - t0 < 3000) requestAnimationFrame(f); else res(); })(performance.now()); });
  const s = window.Universe?.getState?.();
  times.sort((a, b) => a - b);
  return { gpu, rafPerSec: times.length / 3, p50: times[times.length >> 1]?.toFixed(1), p95: times[Math.floor(times.length * .95)]?.toFixed(1), engineFrames3s: s ? s.frames - f0 : null, adaptive: s?.adaptiveLevel, pixelRatio: s?.pixelRatio, particles: s?.particles, scene: s?.scene, fps: s?.fps };
});
console.log(JSON.stringify({ url, ...r, errors }, null, 1));
await browser.close();
