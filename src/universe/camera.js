// CameraRig: places the current formation's framing circle at a target screen region independent of
// aspect ratio. The camera orbits the formation centre at a distance that makes the formation's
// radius span the layout's radius in CSS px; an off-axis projection (setViewOffset) shifts that centre
// to the layout's screen point. Everything eases with critically damped springs.
//
// The reading starfield (scatter) is anchored to a reference frame: this camera without pointer
// parallax, ambient sway, explore rotation or zoom. Its stars therefore keep their place on screen
// whatever the composition does, and the small remaining parallax/sway reads as depth.

import * as THREE from 'three';
import { CAMERA_FOV, EASE, LAYOUTS, SCATTER, isTall } from './config.js';
import { clamp, damper, smoothDamp } from './math.js';

const ZOOM_MIN = 0.62;
const ZOOM_MAX = 2.4;
const PITCH_LIMIT = 1.32;

/** Component k of a formation's focal point relative to its centre (spec.focus defaults to the centre). */
const focusOffset = (spec, k) => (spec.focus ? spec.focus[k] - spec.center[k] : 0);

export class CameraRig {
  constructor(camera) {
    this.camera = camera;
    this.W = 1;
    this.H = 1;
    this.Hf = 1; // visible frame height: compositions are placed and sized in it (top-aligned in H)
    this.tanHalf = Math.tan(THREE.MathUtils.degToRad(CAMERA_FOV) / 2);
    this.layout = 'hero';
    this.spec = null;
    // Damped composition state.
    this.cx = damper(0.5);
    this.cy = damper(0.5);
    this.dist = damper(14);
    this.tx = damper(0);
    this.ty = damper(0);
    this.tz = damper(0);
    // The formation's focal point relative to its centre (spec.focus − spec.center; the anchor).
    this.fx = damper(0);
    this.fy = damper(0);
    this.fz = damper(0);
    this.vYaw = damper(0);
    this.vPitch = damper(0.35);
    this.dim = damper(1);
    this.veil = damper(0);
    this.veilTarget = 0;
    // Parallax & explore.
    this.pointer = [0, 0];
    this.px = damper(0);
    this.py = damper(0);
    this.exYaw = 0;
    this.exPitch = 0;
    this.velYaw = 0;
    this.velPitch = 0;
    this.zoom = damper(1);
    this.zoomTarget = 1;
    this.returning = false;
    this.dragging = false;
    this.moving = true;
    this._v = new THREE.Vector3();
    this.target = new THREE.Vector3();
    // Scatter (0..1, set by the engine): calms parallax and sway behind the reading text.
    this.calm = 0;
    this.refMatrix = new THREE.Matrix4();
    this.refDistance = 14;
    this._ref = new THREE.Vector3();
  }

  setViewport(W, H, Hf = H) {
    this.W = W;
    this.H = H;
    this.Hf = Math.min(H, Hf || H);
    this.camera.aspect = W / H;
    // Composition values depend on the viewport: jump instead of easing on resize.
    this._targets();
    this.cx.value = this._t.cx;
    this.cy.value = this._t.cy;
    this.dist.value = this._t.dist;
  }

  setFormation(spec) {
    this.spec = spec;
  }

  setLayout(layout) {
    if (LAYOUTS[layout]) this.layout = layout;
  }

  setVeil(v) {
    this.veilTarget = clamp(v, 0, 1);
  }

  setPointer(nx, ny) {
    this.pointer[0] = clamp(nx, -1, 1);
    this.pointer[1] = clamp(ny, -1, 1);
  }

  // ---- explore controls ----
  beginDrag() {
    this.dragging = true;
    this.returning = false;
    this.velYaw = 0;
    this.velPitch = 0;
  }

  dragBy(dx, dy, dt) {
    const dYaw = -dx * 0.0044;
    const dPitch = dy * 0.0036;
    this.exYaw += dYaw;
    this.exPitch = clamp(this.exPitch + dPitch, -PITCH_LIMIT - 0.4, PITCH_LIMIT - 0.4);
    if (dt > 0) {
      // Smoothed angular velocity for inertia.
      const k = Math.min(1, dt * 18);
      this.velYaw += (dYaw / dt - this.velYaw) * k;
      this.velPitch += (dPitch / dt - this.velPitch) * k;
    }
  }

  endDrag() {
    this.dragging = false;
  }

  zoomBy(factor) {
    this.returning = false;
    this.zoomTarget = clamp(this.zoomTarget * factor, ZOOM_MIN, ZOOM_MAX);
  }

  get zoomLimits() {
    return [ZOOM_MIN, ZOOM_MAX];
  }

  reset() {
    this.returning = true;
    this.velYaw = 0;
    this.velPitch = 0;
    this.zoomTarget = 1;
  }

  _targets() {
    const L = LAYOUTS[this.layout] || LAYOUTS.hero;
    const tall = isTall(this.W, this.Hf);
    const c = tall ? L.tall : L.wide;
    const spec = this.spec;
    const R = spec ? spec.radius : 3;
    // A formation may adjust a layout's composition (e.g. ch.8 steps right of its long title).
    const o = spec && spec.compose && spec.compose[this.layout] ? spec.compose[this.layout][tall ? 'tall' : 'wide'] : null;
    const rpx = Math.max(40, c.r(this.W, this.Hf) * (o && o.scale ? o.scale : 1));
    const veil = this.veil.value;
    const dist = (R * (this.H / 2)) / (rpx * this.tanHalf) * c.push * (1 + 0.42 * veil);
    this._t = this._t || {};
    this._t.cx = o && o.cx !== undefined ? o.cx : c.cx;
    this._t.cy = o && o.cy !== undefined ? o.cy : c.cy;
    this._t.dist = dist;
    this._t.dim = c.dim * (1 - 0.86 * veil);
    return this._t;
  }

  /**
   * Jump the screen composition (centre) and the veil to their targets, leaving the formation's
   * framing alone. Returns false when nothing would visibly change (veil and centre tolerances).
   */
  snapComposition(veilTol, posTol) {
    const t = this._targets();
    if (Math.abs(this.veilTarget - this.veil.value) <= veilTol && Math.abs(t.cx - this.cx.value) <= posTol && Math.abs(t.cy - this.cy.value) <= posTol) return false;
    this.veil.value = this.veilTarget;
    this.veil.velocity = 0;
    const s = this._targets();
    this.cx.value = s.cx; this.cy.value = s.cy; this.dim.value = s.dim;
    this.cx.velocity = 0; this.cy.velocity = 0; this.dim.velocity = 0;
    return true;
  }

  /** Jump to the targets (no easing). */
  snap() {
    this.veil.value = this.veilTarget;
    const t = this._targets();
    this.cx.value = t.cx; this.cy.value = t.cy; this.dist.value = t.dist; this.dim.value = t.dim;
    const s = this.spec;
    if (s) {
      this.tx.value = s.center[0]; this.ty.value = s.center[1]; this.tz.value = s.center[2];
      this.fx.value = focusOffset(s, 0); this.fy.value = focusOffset(s, 1); this.fz.value = focusOffset(s, 2);
      this.vYaw.value = s.view.yaw; this.vPitch.value = s.view.pitch;
    }
    for (const d of [this.cx, this.cy, this.dist, this.dim, this.tx, this.ty, this.tz, this.fx, this.fy, this.fz, this.vYaw, this.vPitch, this.veil]) d.velocity = 0;
  }

  /**
   * Advance easing. time: living clock (ambient drift), reduced: reduced motion,
   * parallax: whether pointer parallax applies. Returns true while anything is still moving.
   */
  update(dt, time, reduced, parallax) {
    const st = reduced ? EASE.cameraReduced : EASE.camera;
    smoothDamp(this.veil, this.veilTarget, reduced ? 0.05 : EASE.veil, dt);
    const t = this._targets();
    smoothDamp(this.cx, t.cx, st, dt);
    smoothDamp(this.cy, t.cy, st, dt);
    smoothDamp(this.dist, t.dist, st, dt);
    smoothDamp(this.dim, t.dim, reduced ? 0.05 : EASE.veil, dt);
    const s = this.spec;
    if (s) {
      smoothDamp(this.tx, s.center[0], st, dt);
      smoothDamp(this.ty, s.center[1], st, dt);
      smoothDamp(this.tz, s.center[2], st, dt);
      smoothDamp(this.fx, focusOffset(s, 0), st, dt);
      smoothDamp(this.fy, focusOffset(s, 1), st, dt);
      smoothDamp(this.fz, focusOffset(s, 2), st, dt);
      smoothDamp(this.vYaw, s.view.yaw, st, dt);
      smoothDamp(this.vPitch, s.view.pitch, st, dt);
    }
    smoothDamp(this.px, parallax ? this.pointer[0] : 0, EASE.parallax, dt);
    smoothDamp(this.py, parallax ? this.pointer[1] : 0, EASE.parallax, dt);
    smoothDamp(this.zoom, this.zoomTarget, reduced ? 0.05 : 0.18, dt);

    // Explore inertia / return to default.
    let inertia = false;
    if (!this.dragging) {
      if (this.returning) {
        this.exYaw += (0 - this.exYaw) * (1 - Math.exp(-dt * 4));
        this.exPitch += (0 - this.exPitch) * (1 - Math.exp(-dt * 4));
        if (Math.abs(this.exYaw) < 1e-4 && Math.abs(this.exPitch) < 1e-4) {
          this.exYaw = 0;
          this.exPitch = 0;
          this.returning = false;
        }
        inertia = this.returning;
      } else if (Math.abs(this.velYaw) + Math.abs(this.velPitch) > 1e-3) {
        this.exYaw += this.velYaw * dt;
        this.exPitch = clamp(this.exPitch + this.velPitch * dt, -PITCH_LIMIT - 0.4, PITCH_LIMIT - 0.4);
        const decay = Math.exp(-dt * 4.2);
        this.velYaw *= decay;
        this.velPitch *= decay;
        inertia = true;
      }
    }

    const eps = 1e-4;
    this.moving =
      inertia || this.dragging ||
      Math.abs(this.cx.velocity) > eps || Math.abs(this.cy.velocity) > eps || Math.abs(this.dist.velocity) > eps * 10 ||
      Math.abs(this.vYaw.velocity) > eps || Math.abs(this.vPitch.velocity) > eps || Math.abs(this.tx.velocity) + Math.abs(this.ty.velocity) + Math.abs(this.tz.velocity) + Math.abs(this.fx.velocity) + Math.abs(this.fy.velocity) + Math.abs(this.fz.velocity) > eps ||
      Math.abs(this.px.velocity) + Math.abs(this.py.velocity) > eps || Math.abs(this.zoom.velocity) > eps || Math.abs(this.veil.velocity) > eps || Math.abs(this.dim.velocity) > eps;

    // Ambient drift: a slow, inevitable sway (time stops when motion is paused). Both the sway and
    // the pointer parallax calm down while the formation is scattered behind the text.
    const sway = 1 - (1 - SCATTER.sway) * this.calm;
    const lean = 1 - (1 - SCATTER.parallax) * this.calm;
    const ay = (0.075 * Math.sin(time * 0.041) + 0.022 * Math.sin(time * 0.107 + 1.0)) * sway;
    const ap = 0.028 * Math.sin(time * 0.059 + 2.0) * sway;
    const yaw = this.vYaw.value + this.exYaw + this.px.value * 0.07 * lean + ay;
    const pitch = clamp(this.vPitch.value + this.exPitch - this.py.value * 0.045 * lean + ap, -PITCH_LIMIT, PITCH_LIMIT);
    const d = this.dist.value / this.zoom.value;
    const cam = this.camera;
    this.target.set(this.tx.value, this.ty.value, this.tz.value);
    cam.position.set(
      this.target.x + d * Math.sin(yaw) * Math.cos(pitch),
      this.target.y + d * Math.sin(pitch),
      this.target.z + d * Math.cos(yaw) * Math.cos(pitch),
    );
    cam.lookAt(this.target);
    // cy is a share of the visible frame (Hf, top-aligned); the projection spans the whole canvas (H).
    cam.setViewOffset(this.W, this.H, (0.5 - this.cx.value) * this.W, 0.5 * this.H - this.cy.value * this.Hf, this.W, this.H);
    cam.updateMatrixWorld();
    this.distance = d;
    // Reference frame of the starfield: the same composition, without parallax, sway, explore or zoom.
    const ry = this.vYaw.value;
    const rp = clamp(this.vPitch.value, -PITCH_LIMIT, PITCH_LIMIT);
    const dr = this.dist.value;
    const tg = this.target;
    this._ref.set(tg.x + dr * Math.sin(ry) * Math.cos(rp), tg.y + dr * Math.sin(rp), tg.z + dr * Math.cos(ry) * Math.cos(rp));
    this.refMatrix.lookAt(this._ref, tg, cam.up);
    this.refMatrix.setPosition(this._ref);
    this.refDistance = dr;
    return this.moving;
  }

  /** World position of the current formation's focal point (eased with the composition). */
  focusPoint(out) {
    out[0] = this.tx.value + this.fx.value;
    out[1] = this.ty.value + this.fy.value;
    out[2] = this.tz.value + this.fz.value;
    return out;
  }

  /** CSS px framing radius → pixels per world unit at the focus distance. */
  pxPerUnit(distance) {
    return this.H / 2 / (distance * this.tanHalf);
  }

  /** Projects a world point; writes [x, y (CSS px), distance] into out. */
  project(x, y, z, out) {
    const v = this._v.set(x, y, z);
    const dist = v.distanceTo(this.camera.position);
    v.project(this.camera);
    out[0] = (v.x * 0.5 + 0.5) * this.W;
    out[1] = (0.5 - v.y * 0.5) * this.H;
    out[2] = dist;
    out[3] = v.z;
    return out;
  }
}
