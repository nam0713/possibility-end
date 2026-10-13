// NodeFocus: the cover's chapter dial (Universe.focusNode, design/V9.1-FEEDBACK.md amendment 3).
//
// The eight chapter nodes ride one orbit (RING.nodeOrbit); node i sits at orbit angle
// (i / 8)·τ + phase + spin. Free, the spin is the living clock × the orbit's speed (+ an offset kept
// from the last release), exactly as before. focusNode(n) eases the spin so node n arrives at the
// *front* of the orbit — the orbit's lowest point on screen as the composition camera sees it — and
// holds it there with a slow breath; 0 releases it to free rotation from wherever it is, without a
// jump in angle or speed. Only the nodes turn (along their own orbit): the ribbon, the composition and
// the camera are untouched, so the cover keeps its look and the node projection stays exact.
//
// The front is recomputed every frame from the composition camera (the layout's yaw/pitch, explore
// rotation and zoom; never pointer parallax or ambient sway, which stay as gentle life around the
// held node). The turn is a critically damped spring (EASE.focus smooth time → ≈0.9 s to settle)
// toward the nearest equivalent angle, so successive calls retarget smoothly, with the velocity they
// have, the shortest way round. Reduced motion (or nodes not yet on screen): instant.

import { EASE } from './config.js';
import { NODE_COUNT } from './accents/cover.js';
import { RING } from './formations/cover.js';
import { TAU, damper, smoothDamp } from './math.js';

const PI = Math.PI;
const wrapPi = (a) => a - TAU * Math.floor((a + PI) / TAU);
const SETTLE_ANGLE = 2e-3; // rad (≈0.3 px on a phone): the spring hands over to tracking below this error…
const SETTLE_SPEED = 0.04; // …and this angular speed (rad/s; the breath alone moves ≤ 0.007)
const TRACK_LIMIT = 4e-3; // rad: a larger jump of the front (explore drag, layout change) eases again
const RELEASE_DECAY = 0.3; // s: the turn's leftover speed fades into the free orbit speed

/** Slow breath of the held node along its orbit (rad): alive, never drifting away. */
const breath = (t) => 0.016 * Math.sin(t * 0.21 + 0.6) + 0.006 * Math.sin(t * 0.57 + 2.1);

export class NodeFocus {
  constructor() {
    this.node = 0; // focused node 1..8 (0 = free rotation)
    this.offset = 0; // free spin = time·speed + offset
    this.spin = 0; // current spin (rad, unwrapped)
    this.turn = damper(0); // the spin while easing (value + velocity)
    this.tracking = false; // settled on the front: the spin follows it directly
    this.moving = false; // easing (renders even when paused; never capped to the ambient 30 fps)
    this.drift = 0; // after a release: leftover speed relative to the free orbit (rad/s)
    this.snapNext = false;
    this.front = 0;
    this._m = RING.nodeOrbit.matrix;
  }

  /**
   * Focus node n (1..8) or release (0). instant: arrive without easing (reduced motion, nodes not
   * shown yet). time: the living clock (for a release's offset).
   */
  set(n, instant, time) {
    const k = Math.max(0, Math.min(NODE_COUNT, Math.round(Number(n) || 0)));
    if (k === this.node) {
      if (instant && k) this.snapNext = true;
      return;
    }
    const o = RING.nodeOrbit;
    if (!k) {
      // Release: free rotation continues from the current angle; the turn's speed fades out.
      this.drift = instant ? 0 : this.turn.velocity - o.speed;
      this.offset = this.spin - time * o.speed;
      this.node = 0;
      this.tracking = false;
      this.moving = this.drift !== 0;
      return;
    }
    if (!this.node) {
      // From free rotation: start from the current angle with the free orbit's speed (plus any
      // leftover release drift), so the turn begins without a jolt.
      this.turn.value = this.spin;
      this.turn.velocity = o.speed + this.drift;
      this.drift = 0;
    }
    this.node = k;
    this.tracking = false;
    this.moving = true;
    this.snapNext = !!instant;
  }

  /** Jump to the target (lab settle). */
  settle() {
    if (this.node) this.snapNext = true;
    else this.drift = 0;
  }

  /**
   * Advance by dt (real seconds) at living time `time`. rig: the camera rig (composition camera).
   * Returns the spin to place the nodes with.
   */
  update(dt, time, rig, reduced) {
    const o = RING.nodeOrbit;
    if (!this.node) {
      if (this.drift !== 0) {
        // Leftover turn speed fades into the free orbit: integrate it into the offset.
        const k = Math.exp(-dt / RELEASE_DECAY);
        this.offset += this.drift * RELEASE_DECAY * (1 - k);
        this.drift *= k;
        if (Math.abs(this.drift) < 1e-4) this.drift = 0;
      }
      this.moving = this.drift !== 0;
      this.spin = time * o.speed + this.offset;
      return this.spin;
    }
    const front = (this.front = this.frontAngle(rig));
    // The spin that puts node n on the front (+ its breath), as the equivalent nearest the spin now.
    const want = front - ((this.node - 1) / NODE_COUNT) * TAU - o.phase + (reduced ? 0 : breath(time));
    const target = this.turn.value + wrapPi(want - this.turn.value);
    const err = target - this.turn.value;
    if (reduced || this.snapNext) {
      this.snapNext = false;
      this.turn.value = target;
      this.turn.velocity = 0;
      this.tracking = true;
    } else if (this.tracking && Math.abs(err) <= TRACK_LIMIT) {
      // Held: follow the front and the breath directly (sub-pixel steps).
      this.turn.velocity = dt > 0 ? err / dt : 0;
      this.turn.value = target;
    } else {
      this.tracking = false;
      if (dt > 0) smoothDamp(this.turn, target, EASE.focus, dt);
      if (Math.abs(target - this.turn.value) < SETTLE_ANGLE && Math.abs(this.turn.velocity) < SETTLE_SPEED) {
        this.turn.value = target;
        this.tracking = true;
      }
    }
    this.moving = !this.tracking;
    this.spin = this.turn.value;
    return this.spin;
  }

  /**
   * Orbit angle (in the orbit's own frame: p = R·(cos a, 0, −sin a)·r) of the front: the orbit's
   * lowest point on screen for the composition camera (the nearest point when the camera looks up
   * at the orbit from below its plane).
   */
  frontAngle(rig) {
    const M = this._m;
    const yaw = rig.vYaw.value + rig.exYaw;
    const pitch = Math.max(-1.32, Math.min(1.32, rig.vPitch.value + rig.exPitch));
    const d = rig.dist.value / Math.max(0.05, rig.zoom.value);
    const cp = Math.cos(pitch);
    // Camera relative to the orbit's centre (the cover's centre, at the origin).
    const cx = rig.tx.value + d * Math.sin(yaw) * cp;
    const cy = rig.ty.value + d * Math.sin(pitch);
    const cz = rig.tz.value + d * Math.cos(yaw) * cp;
    // Orbit axes in world space: u (a = 0), w (a = π/2), n (normal).
    const ux = M[0], uy = M[3], uz = M[6];
    const wx = -M[2], wy = -M[5], wz = -M[8];
    const nx = M[1], ny = M[4], nz = M[7];
    const r = RING.nodeOrbit.radius;
    // Nearest point: maximise C·p(a).
    const near = Math.atan2(cx * wx + cy * wy + cz * wz, cx * ux + cy * uy + cz * uz);
    if (cx * nx + cy * ny + cz * nz <= 0.05 * d) return near;
    // View basis (lookAt the target with world up): forward f, right, up.
    const L = Math.hypot(cx - rig.tx.value, cy - rig.ty.value, cz - rig.tz.value) || 1;
    const fx = (rig.tx.value - cx) / L, fy = (rig.ty.value - cy) / L, fz = (rig.tz.value - cz) / L;
    let rx = -fz, rz = fx;
    const rl = Math.hypot(rx, rz) || 1;
    rx /= rl;
    rz /= rl;
    const vx = -rz * fy, vy = rz * fx - rx * fz, vz = rx * fy; // up = right × forward
    // Screen depth z(a) = (p − C)·f and height y(a) = (p − C)·up; lowest = maximise −y/z,
    // g(a) = (A + B cos a + Cc sin a) / (D + E cos a + F sin a). g'(a) = 0 ⇔ P sin a + Q cos a + R = 0.
    const A = cx * vx + cy * vy + cz * vz;
    const B = -r * (ux * vx + uy * vy + uz * vz);
    const Cc = -r * (wx * vx + wy * vy + wz * vz);
    const D = -(cx * fx + cy * fy + cz * fz);
    const E = r * (ux * fx + uy * fy + uz * fz);
    const F = r * (wx * fx + wy * fy + wz * fz);
    const P = A * E - B * D, Q = Cc * D - A * F, R = Cc * E - B * F;
    const rho = Math.hypot(P, Q);
    if (rho < 1e-9) return near;
    const phi = Math.atan2(Q, P);
    const s = Math.asin(Math.max(-1, Math.min(1, -R / rho)));
    const g = (a) => (A + B * Math.cos(a) + Cc * Math.sin(a)) / Math.max(1e-6, D + E * Math.cos(a) + F * Math.sin(a));
    const a1 = s - phi, a2 = PI - s - phi;
    return g(a1) >= g(a2) ? a1 : a2;
  }
}
