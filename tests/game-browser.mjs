import assert from 'node:assert/strict';
import { access, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const reportPath = path.join(root, 'tests', 'game-browser-results.json');
const design = path.join(root, 'design');
const report = {
  startedAt: new Date().toISOString(),
  url: 'http://localhost:5173/game/?qa=1',
  browser: 'isolated headless Microsoft Edge',
  scope: 'Real browser rendering and input. QA setup and accelerated objectives are explicitly labeled; this is not an unassisted full-length balancing playthrough.',
  checks: [], screenshots: [], pageErrors: [], consoleErrors: [],
};
let browser;
let page;
const snapshot = () => page.evaluate(() => window.__lastLight.snapshot());
async function check(name, kind, fn) {
  const started = Date.now();
  try {
    const details = await fn();
    report.checks.push({ name, kind, status: 'passed', durationMs: Date.now() - started, details });
    console.log(`PASS ${name}`);
    return true;
  } catch (error) {
    let state;
    try { state = await snapshot(); } catch {}
    report.checks.push({ name, kind, status: 'failed', durationMs: Date.now() - started, error: error.stack || String(error), state });
    console.log(`FAIL ${name}: ${error.message}`);
    return false;
  }
}
async function screenshot(name, target = page) {
  const filename = name === 'menu' ? 'game-menu.png' : `${name}.png`;
  await target.screenshot({ path: path.join(design, filename), fullPage: true });
  report.screenshots.push(path.posix.join('design', filename));
}
async function modeIs(mode, timeout = 5000) {
  await page.waitForFunction(expected => window.__lastLight.snapshot().mode === expected, mode, { timeout });
}
async function clearUpgradeScreens() {
  for (let i = 0; i < 30; i++) {
    if ((await snapshot()).mode !== 'upgrade') return;
    await page.locator('.upgrade-card').first().click();
    await page.waitForTimeout(80);
  }
  throw Error('Upgrade screens did not settle after 30 choices');
}
async function aimAt(x, z) {
  const screen = await page.evaluate(async ({ x, z }) => {
    const THREE = await import('/game/vendor/three.module.js');
    const player = window.__lastLight.snapshot().player;
    // Match the settled gameplay camera documented in world.js, without
    // reaching into private runtime state or modifying it.
    const camera = new THREE.PerspectiveCamera(53, innerWidth / innerHeight, 0.1, 650);
    camera.position.set(player.x, 25.5, player.z + 23.5);
    camera.lookAt(player.x, 0, player.z);
    camera.updateMatrixWorld();
    const point = new THREE.Vector3(x, 0.85, z).project(camera);
    return { x: (point.x * 0.5 + 0.5) * innerWidth, y: (-point.y * 0.5 + 0.5) * innerHeight };
  }, { x, z });
  await page.mouse.move(screen.x, screen.y);
}
function monitor(target, label) {
  target.on('pageerror', error => report.pageErrors.push({ page: label, message: error.message }));
  target.on('console', message => {
    if (message.type() === 'error') report.consoleErrors.push({ page: label, message: message.text() });
  });
}

try {
  await mkdir(design, { recursive: true });
  const bundled = 'C:/Users/82102/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
  await access(bundled);
  const { chromium } = await import(pathToFileURL(bundled).href);
  const edgeCandidates = [
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  ];
  let executablePath;
  for (const candidate of edgeCandidates) {
    try { await access(candidate); executablePath = candidate; break; } catch {}
  }
  assert.ok(executablePath, 'An installed Edge browser is required; this harness does not install browsers');
  browser = await chromium.launch({
    executablePath, headless: true,
    // The installed Edge GPU path is substantially faster on this Windows
    // host than forcing SwiftShader, which can distort wall-clock input tests.
    args: ['--no-sandbox', '--enable-webgl', '--ignore-gpu-blocklist'],
  });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  page = await context.newPage();
  page.setDefaultTimeout(10000);
  monitor(page, 'desktop');
  await page.goto(report.url, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => window.__lastLight && !document.getElementById('start-button').disabled);
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(500);

  await check('Menu renders a functioning 3D scene', 'actual rendering', async () => {
    assert.equal((await snapshot()).mode, 'menu');
    assert.ok(await page.locator('#menu').isVisible());
    const rendered = await snapshot();
    assert.ok(rendered.renderer.calls > 0 && rendered.renderer.triangles > 0);
    await screenshot('menu');
    return { renderCalls: rendered.renderer.calls, triangles: rendered.renderer.triangles };
  });

  await page.locator('#start-button').click();
  await modeIs('playing');
  await check('WASD movement uses actual keyboard input', 'actual input', async () => {
    const before = await snapshot();
    await page.keyboard.down('d');
    await page.waitForTimeout(550);
    await page.keyboard.up('d');
    const after = await snapshot();
    assert.ok(after.player.x - before.player.x > 2);
    assert.ok(after.elapsed > before.elapsed);
    return { before: before.player, after: after.player, elapsed: after.elapsed };
  });

  // Place a target in a clear firing lane; damage, projectile travel, death,
  // attraction, XP and upgrade selection still use normal game code.
  await page.evaluate(() => window.__lastLight.teleport(0, 7));
  await page.waitForTimeout(2200);
  await check('Held pointer firing kills a spawned enemy and its pickup grants matter', 'actual input with QA enemy/position setup', async () => {
    const before = await snapshot();
    await page.evaluate(() => {
      const player = window.__lastLight.snapshot().player;
      window.__lastLight.spawn('chaser', player.x, player.z - 5);
    });
    await aimAt(0, 2);
    await page.mouse.down({ button: 'left' });
    const deadline = Date.now() + 6500;
    while (Date.now() < deadline) {
      const current = await snapshot();
      if (current.kills > before.kills && current.scrap > before.scrap) break;
      const nearest = current.enemies.slice().sort((a, b) => Math.hypot(a.x - current.player.x, a.z - current.player.z) - Math.hypot(b.x - current.player.x, b.z - current.player.z))[0];
      if (nearest) await aimAt(nearest.x, nearest.z);
      await page.waitForTimeout(100);
    }
    await page.mouse.up({ button: 'left' });
    const after = await snapshot();
    assert.ok(after.kills > before.kills, 'held left pointer must kill through real projectiles');
    assert.ok(after.scrap > before.scrap, 'the kill must yield a collected matter pickup');
    assert.ok(after.xp > before.xp || after.level > before.level, 'pickup must grant experience');
    await screenshot('gameplay');
    return { kills: after.kills - before.kills, matter: after.scrap - before.scrap, xp: after.xp, level: after.level };
  });

  await check('Collected XP opens an upgrade, freezes simulation, and selecting a card changes stats', 'actual input with QA enemy setup', async () => {
    for (let attempt = 0; attempt < 8 && (await snapshot()).mode === 'playing'; attempt++) {
      const before = await snapshot();
      await page.evaluate(() => {
        const player = window.__lastLight.snapshot().player;
        window.__lastLight.spawn('chaser', player.x, player.z - 4);
      });
      await aimAt(before.player.x, before.player.z - 4);
      await page.mouse.down();
      const deadline = Date.now() + 5000;
      while (Date.now() < deadline) {
        const current = await snapshot();
        if (current.mode === 'upgrade' || current.kills > before.kills && current.scrap > before.scrap) break;
        const nearest = current.enemies.slice().sort((a, b) => Math.hypot(a.x - current.player.x, a.z - current.player.z) - Math.hypot(b.x - current.player.x, b.z - current.player.z))[0];
        if (nearest) await aimAt(nearest.x, nearest.z);
        await page.waitForTimeout(90);
      }
      await page.mouse.up();
      await page.waitForTimeout(450);
    }
    await modeIs('upgrade');
    const frozen = await snapshot();
    assert.equal(await page.locator('.upgrade-card').count(), 3);
    await screenshot('upgrades');
    await page.waitForTimeout(600);
    assert.ok(Math.abs((await snapshot()).elapsed - frozen.elapsed) < 0.001);
    await page.locator('.upgrade-card').first().click();
    await clearUpgradeScreens();
    await modeIs('playing');
    const chosen = await snapshot();
    assert.notDeepEqual(chosen.stats, frozen.stats);
    return { level: chosen.level, beforeStats: frozen.stats, chosenStats: chosen.stats };
  });

  await check('Escape pauses simulation and the Resume button restores it', 'actual input', async () => {
    await page.keyboard.press('Escape');
    await modeIs('paused');
    const frozen = await snapshot();
    await page.waitForTimeout(650);
    assert.ok(Math.abs((await snapshot()).elapsed - frozen.elapsed) < 0.001);
    await page.locator('#resume-button').click();
    await modeIs('playing');
    await page.waitForTimeout(350);
    assert.ok((await snapshot()).elapsed > frozen.elapsed + 0.05);
    return { pausedElapsed: frozen.elapsed, resumedElapsed: (await snapshot()).elapsed };
  });

  // Start a clean objective scenario so naturally collected resources cannot
  // accidentally make the "insufficient matter" case affordable.
  await page.keyboard.press('Escape');
  await page.locator('#restart-button').click();
  await modeIs('playing');
  const relays = [{ x: -20, z: -12 }, { x: 20, z: -12 }, { x: 0, z: 23 }];
  await check('E refuses to activate an unaffordable relay', 'actual input with QA position setup', async () => {
    await page.evaluate(point => window.__lastLight.teleport(point.x, point.z), relays[0]);
    await page.keyboard.press('e');
    const state = await snapshot();
    assert.equal(state.scrap, 0);
    assert.equal(state.activeRelay, null);
    assert.match(await page.locator('#toast').textContent(), /부족/);
    return { matter: state.scrap, activeRelay: state.activeRelay };
  });

  await check('A relay charges inside its radius and stops outside', 'actual input and time with QA position/resource setup', async () => {
    await page.evaluate(() => window.__lastLight.grantMatter(18));
    await page.keyboard.press('e');
    await page.waitForFunction(() => window.__lastLight.snapshot().activeRelay?.progress > 0.15);
    const inside = await snapshot();
    assert.equal(inside.scrap, 0);
    await page.evaluate(() => window.__lastLight.teleport(0, 7));
    await page.waitForTimeout(150);
    const outside = await snapshot();
    await page.waitForTimeout(600);
    const stillOutside = await snapshot();
    assert.ok(Math.abs(stillOutside.activeRelay.progress - outside.activeRelay.progress) < 0.001);
    assert.ok(stillOutside.elapsed > outside.elapsed);
    return { insideProgress: inside.activeRelay.progress, outsideProgress: outside.activeRelay.progress, afterWait: stillOutside.activeRelay.progress };
  });

  await check('All three relay completions trigger upgrades and spawn the final boss', 'QA accelerated charge; actual E activation and upgrade selection', async () => {
    for (let i = 0; i < relays.length; i++) {
      if (i > 0) {
        await page.evaluate(({ point, cost }) => {
          window.__lastLight.teleport(point.x, point.z);
          window.__lastLight.grantMatter(cost);
        }, { point: relays[i], cost: [18, 36, 54][i] });
        await page.keyboard.press('e');
        assert.ok((await snapshot()).activeRelay);
      }
      await page.evaluate(() => window.__lastLight.completeCharge());
      await modeIs('upgrade');
      await clearUpgradeScreens();
      await modeIs('playing');
      assert.equal((await snapshot()).relaysDone, i + 1);
    }
    const state = await snapshot();
    assert.equal(state.boss, true);
    assert.ok(state.enemies.some(enemy => enemy.type === 'boss'));
    assert.ok(await page.locator('#boss-hud').isVisible());
    return { relaysDone: state.relaysDone, bossPresent: state.boss, mode: state.mode };
  });

  await check('Defeating the boss unlocks the portal and actual E input completes victory', 'QA boss defeat/position setup; actual final input', async () => {
    await page.evaluate(() => window.__lastLight.killBoss());
    assert.equal((await snapshot()).bossDefeated, true);
    assert.equal((await snapshot()).boss, false);
    await page.evaluate(() => window.__lastLight.teleport(0, 0));
    await page.keyboard.press('e');
    await modeIs('won');
    assert.ok(await page.locator('#end-screen').isVisible());
    assert.match(await page.locator('#end-title').textContent(), /가능성/);
    await page.waitForTimeout(500);
    await screenshot('victory');
    return { state: await snapshot(), title: await page.locator('#end-title').textContent() };
  });

  await check('Victory retry resets player stats, objectives, resources, and enemies', 'actual input', async () => {
    await page.locator('#retry-button').click();
    await modeIs('playing');
    const state = await snapshot();
    assert.equal(state.relaysDone, 0);
    assert.equal(state.boss, false);
    assert.equal(state.bossDefeated, false);
    assert.equal(state.scrap, 0);
    assert.equal(state.kills, 0);
    assert.equal(state.level, 1);
    assert.equal(state.hp, 100);
    assert.ok(state.elapsed < 1);
    assert.equal(state.enemies.length, 0);
    return { mode: state.mode, elapsed: state.elapsed, hp: state.hp, level: state.level, relays: state.relaysDone };
  });

  await check('A real bullet killing a boss safely clears multiple in-flight bullets', 'QA fragile boss/position setup; actual pointer firing', async () => {
    await page.evaluate(() => window.__lastLight.teleport(0, 7));
    await page.waitForTimeout(2200);
    await page.evaluate(() => {
      window.__lastLight.killAll();
      const boss = window.__lastLight.spawn('boss', 0, -13);
      boss.hp = 1;
      window.__lastLightMaxObservedBullets = 0;
    });
    const errorsBefore = report.pageErrors.length;
    await aimAt(0, -13);
    await page.mouse.down();
    try {
      await page.waitForFunction(() => {
        const state = window.__lastLight.snapshot();
        window.__lastLightMaxObservedBullets = Math.max(window.__lastLightMaxObservedBullets, state.bullets);
        return state.bossDefeated;
      }, null, { polling: 'raf', timeout: 6000 });
    } finally { await page.mouse.up(); }
    await page.waitForTimeout(180);
    const maximum = await page.evaluate(() => window.__lastLightMaxObservedBullets);
    const state = await snapshot();
    assert.ok(maximum > 1, `regression requires multiple live bullets; observed ${maximum}`);
    assert.equal(state.bossDefeated, true);
    assert.equal(state.mode, 'playing');
    assert.equal(report.pageErrors.length, errorsBefore, 'boss-death bullet-array clearing must not throw');
    return { maximumInFlightBullets: maximum, mode: state.mode, bossDefeated: state.bossDefeated };
  });

  await check('Lethal damage opens defeat and retry starts a clean run', 'QA damage setup; actual retry input', async () => {
    await page.waitForTimeout(1900);
    await page.evaluate(() => { window.__lastLight.setHp(1); window.__lastLight.damagePlayer(999); });
    await modeIs('lost');
    assert.ok(await page.locator('#end-screen').isVisible());
    assert.match(await page.locator('#end-title').textContent(), /꺼졌/);
    await page.locator('#retry-button').click();
    await modeIs('playing');
    const state = await snapshot();
    assert.equal(state.hp, 100);
    assert.equal(state.relaysDone, 0);
    assert.equal(state.kills, 0);
    return { mode: state.mode, hp: state.hp, elapsed: state.elapsed };
  });

  await check('Mobile menu and gameplay fit the viewport with visible touch controls', 'actual mobile browser rendering', async () => {
    const mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
    const mobile = await mobileContext.newPage();
    monitor(mobile, 'mobile');
    await mobile.goto(report.url, { waitUntil: 'networkidle' });
    await mobile.waitForFunction(() => window.__lastLight && !document.getElementById('start-button').disabled);
    const dimensions = await mobile.evaluate(() => ({ width: innerWidth, height: innerHeight, scrollWidth: document.documentElement.scrollWidth, scrollHeight: document.documentElement.scrollHeight }));
    assert.ok(dimensions.scrollWidth <= dimensions.width, 'mobile menu must not overflow horizontally');
    await mobile.locator('#start-button').tap();
    await mobile.waitForFunction(() => window.__lastLight.snapshot().mode === 'playing');
    assert.ok(await mobile.locator('#touch-controls').isVisible());
    assert.ok(await mobile.locator('#touch-fire').isVisible());
    const controls = await mobile.locator('#touch-controls').boundingBox();
    assert.ok(controls.x >= 0 && controls.x + controls.width <= 390 + 1);
    await mobile.waitForTimeout(600);
    await screenshot('mobile', mobile);
    const gameplayDimensions = await mobile.evaluate(() => ({ width: innerWidth, height: innerHeight, scrollWidth: document.documentElement.scrollWidth, scrollHeight: document.documentElement.scrollHeight }));
    assert.ok(gameplayDimensions.scrollWidth <= gameplayDimensions.width);
    await mobileContext.close();
    return { menu: dimensions, gameplay: gameplayDimensions, touchControls: controls };
  });

  await check('Desktop and mobile emitted no uncaught JavaScript errors', 'runtime monitoring', async () => {
    assert.deepEqual(report.pageErrors, []);
    return { uncaughtErrors: report.pageErrors.length, consoleErrors: report.consoleErrors };
  });
} catch (error) {
  report.checks.push({ name: 'Harness setup or dependent scenario', kind: 'harness', status: 'failed', error: error.stack || String(error) });
  console.log(error.stack || error);
} finally {
  if (browser) await browser.close();
  report.finishedAt = new Date().toISOString();
  report.passed = report.checks.filter(check => check.status === 'passed').length;
  report.failed = report.checks.filter(check => check.status === 'failed').length;
  await writeFile(reportPath, JSON.stringify(report, null, 2) + '\n', 'utf8');
  console.log(`Browser checks: ${report.passed} passed, ${report.failed} failed. Report: ${reportPath}`);
  if (report.failed) process.exitCode = 1;
}
