// Geometry of the new universe in "film space" (F).
//
// F is built from the engine camera at the handover: origin = the point everything
// collapses into (the engine camera target), +Z points back to the engine camera,
// +Y is up, and one unit = the engine camera distance. The film camera therefore
// starts at (0, 0, 1) looking at the origin — the exact view the reader saw.
//
// After the impact, the web, the hero galaxy, its sun-like star and the small blue
// planet all live in F. Scales are cinematic, not astronomical: the zoom from the
// web to the planet spans ~4 decades and stays well inside float32 precision.

const v = (x, y, z) => [x, y, z];
const len = a => Math.hypot(a[0], a[1], a[2]);
export const norm = a => { const l = len(a) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
export const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
export const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
export const scale = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
export const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
export const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
/** Rotate vector a around unit axis k by angle (Rodrigues). */
export function rotate(a, k, angle) {
  const c = Math.cos(angle), s = Math.sin(angle), kd = dot(k, a), kx = cross(k, a);
  return [a[0] * c + kx[0] * s + k[0] * kd * (1 - c), a[1] * c + kx[1] * s + k[1] * kd * (1 - c), a[2] * c + kx[2] * s + k[2] * kd * (1 - c)];
}

/** Radius of the comoving ball the new universe's matter fills once inflation ends. */
export const WEB_RADIUS = 2.5;
/** Comoving radius of the primordial plasma sphere. */
export const PLASMA_RADIUS = 2.6;
/** Spin axis of the collapse: the accretion swirl is seen inclined, like a lensed disk. */
export const COLLAPSE_AXIS = norm(v(0.16, 0.95, 0.27));

/** The hero proto-galaxy that becomes “어느 평범한 은하”. */
export const HERO = v(0.46, 0.1, -1.0);
export const GALAXY_NORMAL = norm(v(-0.3, 1.0, 0.42));
export const GALAXY_RADIUS = 0.15;

/** Direction (target → camera) at the end of the structure flight (19.4 s). */
export const DIR_STRUCTURE_END = norm(v(-0.25, 0.42, 1.0));

// Galaxy frame: e1 points from the centre toward where the camera arrives from.
const n = GALAXY_NORMAL;
const towardCam = sub(DIR_STRUCTURE_END, scale(n, dot(DIR_STRUCTURE_END, n)));
export const GAL_E1 = norm(towardCam);
export const GAL_E2 = norm(cross(n, GAL_E1));

/** Galaxy-frame direction: azimuth around the normal from e1, elevation above the plane. */
export function galaxyDir(azimuth, elevation) {
  const c = Math.cos(elevation);
  return norm(add(add(scale(GAL_E1, Math.cos(azimuth) * c), scale(GAL_E2, Math.sin(azimuth) * c)), scale(n, Math.sin(elevation))));
}

// The star sits in the outskirts (0.72 R) on the side the camera comes from.
export const SUN_AZIMUTH = 0.62;
export const SUN = add(HERO, scale(galaxyDir(SUN_AZIMUTH, 0), GALAXY_RADIUS * 0.72));

/** Planet radius (F units) and the cinematic system scale built on it. */
export const PLANET_RADIUS = 2.0e-5;
export const SUN_RADIUS = PLANET_RADIUS * 4.2;
export const ORBIT = PLANET_RADIUS * 36;

// Final composition: we look across the galactic plane, ~38° off the direction of
// the galactic centre (its glow sits off-frame, the band crosses diagonally).
const inward = norm(sub(HERO, SUN));
const lookIn = rotate(inward, n, -0.66);
/** Final view direction (camera → planet). */
export const VIEW_FINAL = norm(add(lookIn, scale(n, -0.07)));
const ROLL_FINAL = -0.36;
const upPlane = norm(sub(n, scale(VIEW_FINAL, dot(n, VIEW_FINAL))));
/** Camera up at the final composition (galactic plane rolled into a diagonal). */
export const UP_FINAL = norm(rotate(upPlane, VIEW_FINAL, ROLL_FINAL));
const RIGHT_FINAL = norm(cross(VIEW_FINAL, UP_FINAL));
/** Planet → sun: from the left, a little above and in front: a gibbous ~70° phase angle. */
export const SUN_DIR_FINAL = norm(add(add(scale(VIEW_FINAL, -0.34), scale(RIGHT_FINAL, -0.86)), scale(UP_FINAL, 0.38)));
export const PLANET = sub(SUN, scale(SUN_DIR_FINAL, ORBIT));
/** Final camera distance from the planet centre, in planet radii. */
export const FINAL_DISTANCE = PLANET_RADIUS * 9.6;

/** Angles (in the galaxy frame) of a direction, for keyframing the approach. */
export function galaxyAngles(dir) {
  const el = Math.asin(Math.max(-1, Math.min(1, dot(dir, n))));
  const az = Math.atan2(dot(dir, GAL_E2), dot(dir, GAL_E1));
  return [az, el];
}
