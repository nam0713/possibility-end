import test from 'node:test';
import assert from 'node:assert/strict';
import {
  RELAY_COSTS, RELAY_SECONDS, UPGRADES, newStats, applyUpgrade,
  xpNeeded, difficultyAt, clampPosition, segmentHit, pickUpgrades,
} from '../game/rules.js';

const EPSILON = 1e-8;
const close = (actual, expected, message) => assert.ok(
  Math.abs(actual - expected) <= EPSILON * Math.max(1, Math.abs(expected)),
  message || `${actual} should be approximately ${expected}`,
);

test('a projectile crossing an enemy hits even with both frame endpoints outside', () => {
  assert.equal(segmentHit(-50, 0, 50, 0, 0, 0, 0.5), true);
  assert.equal(segmentHit(50, 0, -50, 0, 0, 0, 0.5), true);
  assert.equal(segmentHit(-50, 0, 50, 0, 0, 0.51, 0.5), false);
});

test('hit detection honors the finite segment, tangency, and stationary projectiles', () => {
  assert.equal(segmentHit(0, 0, 1, 0, 3, 0, 0.5), false);
  assert.equal(segmentHit(0, 0, 1, 0, -2, 0, 0.5), false);
  assert.equal(segmentHit(-1, 0, 1, 0, 0, 0.5, 0.5), true);
  assert.equal(segmentHit(2, 3, 2, 3, 2, 3, 0.1), true);
  assert.equal(segmentHit(2, 3, 2, 3, 3, 3, 0.1), false);
});

test('the whole player body stays in the arena and clear of separated obstacles', () => {
  const radius = 18;
  const body = 0.65;
  const obstacles = [{ x: 0, z: 0, r: 2 }, { x: 7, z: -4, r: 3 }];
  for (const [x, z] of [[30, 30], [-30, -30], [100, 0], [0, 0], [7, -4], [7.5, -4], [0, 14]]) {
    const result = clampPosition(x, z, radius, obstacles, body);
    assert.ok(Number.isFinite(result.x) && Number.isFinite(result.z));
    assert.ok(Math.hypot(result.x, result.z) <= radius - body + EPSILON);
    for (const obstacle of obstacles) {
      assert.ok(Math.hypot(result.x - obstacle.x, result.z - obstacle.z) >= obstacle.r + body - EPSILON);
    }
    const stable = clampPosition(result.x, result.z, radius, obstacles, body);
    close(stable.x, result.x, 'a valid collision result should be stable');
    close(stable.z, result.z, 'a valid collision result should be stable');
  }
});

test('an exact obstacle-center overlap has a finite local escape including the origin', () => {
  for (const obstacle of [{ x: 0, z: 0, r: 2 }, { x: -5, z: 4, r: 3 }]) {
    const result = clampPosition(obstacle.x, obstacle.z, 40, [obstacle]);
    close(Math.hypot(result.x - obstacle.x, result.z - obstacle.z), obstacle.r + 0.65);
  }
});

test('a nearly centered overlap does not teleport the player to the arena wall', () => {
  const obstacle = { x: 0, z: 0, r: 2 };
  const result = clampPosition(0.00001, 0, 40, [obstacle]);
  const distance = Math.hypot(result.x, result.z);
  assert.ok(distance >= 2.65 - EPSILON, 'must escape the obstacle');
  assert.ok(distance <= 2.65 + EPSILON, 'must use a local collision correction');
});

test('an obstacle near the boundary cannot push the player outside the arena', () => {
  // Free space exists on either side of this obstacle; bouncing between two
  // constraints must not leave the body beyond the arena's playable boundary.
  const result = clampPosition(9, 0, 10, [{ x: 8, z: 0, r: 1 }], 1);
  assert.ok(Math.hypot(result.x, result.z) <= 9 + EPSILON, 'whole body must remain inside');
  assert.ok(Math.hypot(result.x - 8, result.z) >= 2 - EPSILON, 'must also clear the obstacle');
});

test('time and completed relays increase threat while spawning remains bounded', () => {
  const start = difficultyAt(0, 0);
  const later = difficultyAt(300, 0);
  const relay = difficultyAt(300, 2);
  assert.ok(later.health > start.health && later.damage > start.damage && later.interval < start.interval);
  assert.ok(relay.health > later.health && relay.damage > later.damage && relay.interval < later.interval);
  for (const seconds of [0, 60, 300, 900, 100000]) {
    const normal = difficultyAt(seconds, 3);
    const hard = difficultyAt(seconds, 3, true);
    assert.equal(hard.threat, normal.threat, 'hard mode should preserve the threat timeline');
    assert.ok(hard.health > normal.health && hard.damage > normal.damage && hard.interval < normal.interval);
    assert.ok(normal.interval >= 0.34 - EPSILON && hard.interval >= 0.272 - EPSILON);
    assert.ok(Number.isFinite(normal.health) && Number.isFinite(hard.interval));
  }
});

test('stacked upgrades create distinct builds without corrupting unrelated stats', () => {
  const base = newStats();
  const power = newStats();
  applyUpgrade(applyUpgrade(power, 'damage'), 'damage');
  applyUpgrade(power, 'rate');
  applyUpgrade(power, 'multi');
  assert.ok(power.damage > base.damage * 1.6, 'stacked damage must compound');
  assert.ok(power.damage / power.interval * power.multi > base.damage / base.interval * 3, 'combined weapon upgrades must increase sustained output');
  assert.equal(power.maxHp, base.maxHp);
  assert.equal(power.speed, base.speed);

  const mobile = newStats();
  for (let i = 0; i < 3; i++) applyUpgrade(mobile, 'speed');
  assert.ok(mobile.speed > base.speed && mobile.dashCooldown < base.dashCooldown);
  assert.equal(mobile.damage, base.damage);

  const area = newStats();
  for (let i = 0; i < 4; i++) applyUpgrade(area, 'pulse');
  assert.ok(area.pulseDamage > base.pulseDamage * 5);
  assert.ok(area.pulseRadius > base.pulseRadius && area.pulseCooldown < base.pulseCooldown);
  assert.ok(area.pulseCooldown > 0 && Number.isFinite(area.pulseDamage));

  const support = newStats();
  for (const id of ['chain', 'drone', 'vamp', 'hull']) {
    applyUpgrade(support, id);
    applyUpgrade(support, id);
  }
  assert.equal(support.chain, 2);
  assert.equal(support.drone, 2);
  assert.equal(support.vamp, 4);
  assert.equal(support.maxHp, 170);
  assert.equal(support.damage, base.damage);
});

test('critical chance saturates below certainty even for repeated direct applications', () => {
  const stats = newStats();
  let previous = stats.crit;
  for (let i = 0; i < 30; i++) {
    applyUpgrade(stats, 'crit');
    assert.ok(stats.crit >= previous && stats.crit <= 0.85);
    previous = stats.crit;
  }
  close(stats.crit, 0.85);
  assert.throws(() => applyUpgrade(stats, 'not-an-upgrade'), /Unknown upgrade/);
});

test('upgrade choices never duplicate or offer exhausted upgrades at shuffle extremes', () => {
  const catalogBefore = UPGRADES.map(upgrade => ({ ...upgrade }));
  const stacks = Object.fromEntries(UPGRADES.map(upgrade => [upgrade.id, upgrade.max]));
  const available = UPGRADES.slice(0, 4);
  for (const upgrade of available) stacks[upgrade.id]--;
  for (const random of [() => 0, () => 0.5, () => 0.999999]) {
    const choices = pickUpgrades(stacks, random);
    assert.equal(choices.length, 3);
    assert.equal(new Set(choices.map(choice => choice.id)).size, choices.length);
    assert.ok(choices.every(choice => stacks[choice.id] < choice.max));
  }
  assert.deepEqual(UPGRADES, catalogBefore, 'choice shuffling must not mutate the shared catalog');
});

test('the choice pool shrinks gracefully to two, one, and zero remaining upgrades', () => {
  const stacks = Object.fromEntries(UPGRADES.map(upgrade => [upgrade.id, upgrade.max]));
  assert.deepEqual(pickUpgrades(stacks, () => 0.5), []);
  stacks.damage--;
  assert.deepEqual(pickUpgrades(stacks, () => 0.5).map(choice => choice.id), ['damage']);
  stacks.rate--;
  assert.equal(pickUpgrades(stacks, () => 0.5).length, 2);
});

test('XP thresholds stay positive and increase, allowing large rewards to resolve into levels', () => {
  let previous = 0;
  for (let level = 0; level <= 100; level++) {
    const needed = xpNeeded(level);
    assert.ok(Number.isSafeInteger(needed) && needed > previous);
    previous = needed;
  }
  // A single large pickup may grant several levels; the residual must not buy another.
  let xp = 1000;
  let level = 1;
  let spent = 0;
  while (xp >= xpNeeded(level)) {
    const cost = xpNeeded(level);
    xp -= cost;
    spent += cost;
    level++;
  }
  assert.ok(level > 2 && xp >= 0 && xp < xpNeeded(level));
  assert.equal(xp + spent, 1000, 'level progression must conserve earned XP');
});

test('relay objectives require increasing investment and a positive charge duration', () => {
  assert.equal(RELAY_COSTS.length, 3);
  assert.ok(RELAY_COSTS.every((cost, i) => cost > 0 && (i === 0 || cost > RELAY_COSTS[i - 1])));
  assert.ok(RELAY_SECONDS > 0);
});
