// The film camera: one continuous move from the reader's own view, through the
// singularity and the newborn plasma, along the cosmic web, into one ordinary
// galaxy's outskirts and down to a small blue planet. A pure function of time
// (plus the gentle pointer parallax, which is smoothed outside of film time).
import { clamp, createTrack, evalTrack, mix, smootherstep, smoothstep } from './ending-math.js';
import { IMPACT, DURATION } from './ending-timeline.js';
import {
  DIR_STRUCTURE_END, FINAL_DISTANCE, GAL_E1, GAL_E2, GALAXY_NORMAL, HERO, PLANET, SUN, SUN_AZIMUTH, UP_FINAL, VIEW_FINAL, galaxyAngles,
} from './ending-layout.js';

const STRUCTURE_END = 19.4;

// Target path during the structure flight (F space), ending on the hero node. Through the dark
// ages the camera pushes slowly in toward the knots condensing ahead (the hero, the most massive,
// lights the first stars), then pulls back as the whole web ignites.
const PUSH_END = 12.3;
const targetTracks = [0, 1, 2].map(i => createTrack([
  [IMPACT, 0],
  [9.4, [0, 0, 0][i]],
  [PUSH_END, [0.16, 0.04, -0.55][i]],
  [16.2, [0.26, 0.06, -0.76][i]],
  [STRUCTURE_END, HERO[i]],
]));

// Direction target → camera during collapse / birth / structure.
const dirKeys = [
  [0, [0, 0, 1]],
  [IMPACT, [0, 0, 1]],
  [9.4, [0.04, 0.03, 1]],
  [PUSH_END, [0.0, 0.1, 1]],
  [14.6, [-0.14, 0.3, 1]],
  [16.2, [-0.2, 0.36, 1]],
  [STRUCTURE_END, DIR_STRUCTURE_END],
];
const dirTracks = [0, 1, 2].map(i => createTrack(dirKeys.map(([t, d]) => [t, d[i]])));

// Approach in galaxy-frame angles (azimuth around the galactic normal, elevation).
const [az0, el0] = galaxyAngles(DIR_STRUCTURE_END);
let [azF, elF] = galaxyAngles([-VIEW_FINAL[0], -VIEW_FINAL[1], -VIEW_FINAL[2]]);
while (azF - az0 > Math.PI) azF -= Math.PI * 2;
while (azF - az0 < -Math.PI) azF += Math.PI * 2;
// “어느 평범한 은하”: first the whole galaxy, inclined, filling the frame as we close in with a
// slow orbit; then a dive to its outskirts — down toward the disk, the arms resolving into
// stars — onto the blue-white star. We come in from outside the star's orbit, looking inward.
const azTrack = createTrack([
  [STRUCTURE_END, az0], [21.6, az0 + 0.32], [23.0, SUN_AZIMUTH * 0.85], [24.6, SUN_AZIMUTH], [26.2, mix(SUN_AZIMUTH, azF, 0.65)], [28.8, azF],
]);
const elTrack = createTrack([
  [STRUCTURE_END, el0], [21.2, 0.8], [22.4, 0.7], [23.4, 0.5], [24.6, 0.2], [26.2, 0.1], [28.8, elF],
]);

// Camera distance from its target, in log space (the zoom spans ~4 decades).
const preImpactLogD = createTrack([[0, 0], [1.4, Math.log(0.985)], [2.7, Math.log(0.86)], [IMPACT, Math.log(0.6)]], true, false);
const logDTrack = createTrack([
  // After the impact we back away from the growing fireball — keeping it whole in the frame, an
  // object with an edge and a scale — until inflation overtakes us (~6.1 s).
  [IMPACT, Math.log(0.6)], [3.85, Math.log(0.8)], [4.05, Math.log(1.25)], [4.35, Math.log(1.7)], [4.7, Math.log(1.95)],
  [5.1, Math.log(2.05)], [5.5, Math.log(2.1)], [5.9, Math.log(1.95)], [7.0, Math.log(0.95)],
  // The push through the dark ages, the pull back to the grand view of the web, the dive to one node.
  [9.4, Math.log(0.66)], [PUSH_END, Math.log(0.62)], [14.6, Math.log(1.3)], [17.0, Math.log(0.84)],
  [STRUCTURE_END, Math.log(0.56)], [21.2, Math.log(0.36)], [22.4, Math.log(0.21)], [23.4, Math.log(0.075)], [24.3, Math.log(0.022)],
  [25.4, Math.log(0.0034)], [26.6, Math.log(8.5e-4)], [28.2, Math.log(2.9e-4)], [30.4, Math.log(FINAL_DISTANCE)],
]);

const fovTrack = createTrack([[IMPACT, 52], [9.4, 50], [STRUCTURE_END, 44], [25, 40], [DURATION, 38]]);
/**
 * The horizontal field a narrow (portrait) screen keeps at least, in degrees. Wide through the
 * birth and the web, so a phone sees the fireball and the filaments whole (a 16:10 screen sees
 * ~73°); it narrows to 30° only once the pan from the star has settled on the planet.
 */
const minHTrack = createTrack([[IMPACT, 46], [STRUCTURE_END, 46], [23.0, 44], [26.6, 42], [28.4, 31], [29.5, 30]]);
/** Before the impact: enough width for the accretion disk with a margin (the push-in). */
const MIN_H_COLLAPSE = 27;
/** How far above centre the fireball sits during the birth, in NDC (scaled down on portrait). */
const BIRTH_LIFT = 0.12;
/**
 * On short landscape screens (out.shortScreen) the UI's caption sits high in the frame (~0.72 H):
 * through the web the hero node (and the densest knots round it) rides this much above centre.
 */
const STRUCTURE_LIFT = 0.2;

/** Vertical FOV that keeps at least `minH` degrees horizontally (portrait screens). */
function fitFov(vfov, aspect, minH) {
  const needed = (2 * Math.atan(Math.tan((minH * Math.PI) / 360) / aspect) * 180) / Math.PI;
  return Math.max(vfov, needed);
}
/** The collapse's lens: the engine's at the handover, widening on narrow screens as the disk forms. */
function collapseFov(t, aspect, engineFov) {
  return mix(engineFov, fitFov(engineFov, aspect, MIN_H_COLLAPSE), smoothstep(0.2, 2.0, t));
}

/**
 * Compute the camera at film time t into `out` (see createCameraState).
 * engineFov: the engine camera's fov at the handover (kept exactly at t = 0).
 * look: smoothed pointer parallax {x, y} in -1..1. reduced: no shake / drift.
 */
export function cameraAt(out, t, f, aspect, engineFov, look, reduced) {
  const target = out.target;
  const dir = out.dir;
  const up = out.up;
  let d;
  if (t <= IMPACT) {
    // From the reader's exact view: the camera sits on the ray from the collapse point
    // to the engine camera, pans from the engine target onto the point and pushes in.
    const w = smootherstep(0.15, 3.1, t);
    const ht = out.handoverTarget, hu = out.handoverUp;
    for (let i = 0; i < 3; i++) target[i] = ht[i] * (1 - w);
    const z = Math.exp(evalTrack(preImpactLogD, t));
    dir[0] = -target[0]; dir[1] = -target[1]; dir[2] = z - target[2];
    d = Math.hypot(dir[0], dir[1], dir[2]);
    up[0] = mix(hu[0], 0, w); up[1] = mix(hu[1], 1, w); up[2] = mix(hu[2], 0, w);
  } else {
    // ---- target
    if (t <= STRUCTURE_END) {
      for (let i = 0; i < 3; i++) target[i] = evalTrack(targetTracks[i], t);
    } else {
      const w1 = smootherstep(21.0, 24.4, t);
      // Narrow screens pan target-first, so the planet enters the frame before the star leaves it.
      const narrow = clamp((0.8 - aspect) / 0.35, 0, 1);
      const w2 = smootherstep(mix(24.8, 24.5, narrow), mix(27.9, 27.1, narrow), t);
      for (let i = 0; i < 3; i++) target[i] = HERO[i] + (SUN[i] - HERO[i]) * w1 + (PLANET[i] - SUN[i]) * w2;
    }
    // ---- direction (target → camera)
    if (t <= STRUCTURE_END) {
      for (let i = 0; i < 3; i++) dir[i] = evalTrack(dirTracks[i], t);
    } else {
      // Allocation-free galaxy-frame direction.
      const az = evalTrack(azTrack, t), el = evalTrack(elTrack, t);
      const ca = Math.cos(az) * Math.cos(el), sa = Math.sin(az) * Math.cos(el), se = Math.sin(el);
      for (let i = 0; i < 3; i++) dir[i] = GAL_E1[i] * ca + GAL_E2[i] * sa + GALAXY_NORMAL[i] * se;
    }
    d = Math.exp(evalTrack(logDTrack, t));
    // ---- up hint: world up, rolling into the final diagonal composition
    const roll = smootherstep(21.0, 28.8, t);
    up[0] = mix(0, UP_FINAL[0], roll); up[1] = mix(1, UP_FINAL[1], roll); up[2] = mix(0, UP_FINAL[2], roll);
  }
  normalize(dir);
  // Orthonormal basis: right = up × dir, up = dir × right.
  const right = out.right;
  cross3(right, up, dir); normalize(right);
  cross3(up, dir, right); normalize(up);

  // ---- small rotations: impact shake, pointer parallax, the living drift after the end
  let yaw = 0, pitch = 0;
  if (f.shake > 0) {
    yaw += f.shake * 0.014 * (Math.sin(t * 71.0) + 0.6 * Math.sin(t * 133.0 + 1.7));
    pitch += f.shake * 0.012 * (Math.sin(t * 89.0 + 0.4) + 0.5 * Math.sin(t * 151.0 + 2.9));
  }
  yaw -= look.x * 0.032;
  pitch += look.y * 0.022;
  if (!reduced && t > DURATION - 1.5) {
    const s = t - (DURATION - 1.5);
    const k = smoothstep(0, 6, s);
    yaw += k * 0.022 * Math.sin(s * 0.061);
    pitch += k * 0.012 * Math.sin(s * 0.043 + 1.1);
  }
  for (let i = 0; i < 3; i++) dir[i] += right[i] * yaw + up[i] * pitch;
  normalize(dir);

  out.distance = d;
  const pos = out.position;
  for (let i = 0; i < 3; i++) pos[i] = target[i] + dir[i] * d;

  // ---- lens
  if (t <= IMPACT) out.fov = collapseFov(t, aspect, engineFov);
  else {
    const film = fitFov(evalTrack(fovTrack, t), aspect, evalTrack(minHTrack, t));
    out.fov = mix(collapseFov(IMPACT, aspect, engineFov), film, smootherstep(IMPACT, 4.1, t));
  }
  out.fov = clamp(out.fov, 10, 100);

  // ---- composition: through the birth the fireball sits a little above centre, leaving the
  // lower band (where the UI sets its captions) to the dark; on short landscape screens the web's
  // hero node does too. A pure tilt of the view about its right axis, so every layer (particles,
  // plasma, gas, sky) shares it.
  const liftNdc = BIRTH_LIFT * Math.min(1, aspect) * smoothstep(IMPACT, 3.95, t) * (1 - smoothstep(5.6, 6.3, t))
    + STRUCTURE_LIFT * out.shortScreen * smoothstep(9.6, 11.2, t) * (1 - smoothstep(19.4, 20.8, t));
  const aim = out.look;
  if (liftNdc > 0) {
    const k = liftNdc * Math.tan((out.fov * Math.PI) / 360);
    for (let i = 0; i < 3; i++) dir[i] += up[i] * k;
    normalize(dir);
    cross3(up, dir, right); normalize(up);
  }
  for (let i = 0; i < 3; i++) aim[i] = pos[i] - dir[i] * d;
  out.near = Math.max(d * 0.02, 1e-7);
  out.far = 40;
  return out;
}

export function createCameraState() {
  return {
    position: [0, 0, 1], target: [0, 0, 0], look: [0, 0, 0], dir: [0, 0, 1], up: [0, 1, 0], right: [1, 0, 0],
    fov: 45, near: 0.02, far: 40, distance: 1,
    // The engine's view at the handover, in film space (set by begin()).
    handoverTarget: [0, 0, 0], handoverUp: [0, 1, 0],
    // 0..1: how much the screen is a short landscape one (set by the film each frame).
    shortScreen: 0,
  };
}

function normalize(a) {
  const l = Math.hypot(a[0], a[1], a[2]) || 1;
  a[0] /= l; a[1] /= l; a[2] /= l;
}
function cross3(out, a, b) {
  const x = a[1] * b[2] - a[2] * b[1];
  const y = a[2] * b[0] - a[0] * b[2];
  const z = a[0] * b[1] - a[1] * b[0];
  out[0] = x; out[1] = y; out[2] = z;
}
