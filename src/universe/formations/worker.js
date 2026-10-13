// Formation builds in a Worker. The universe bundle is one classic script; the worker runs that same
// script (its URL, or its inline text as a Blob), whose entry detects the worker scope and serves
// build requests instead of installing window.Universe. Results come back as transferables.
// Any failure (no Worker, CSP, a script that does not answer) falls back to main-thread builds.

import { buildNow, deriveOrigin } from './index.js';

const READY_TIMEOUT = 4000;

/** Worker side: answer build requests. */
export function serveFormations(scope) {
  scope.onmessage = (e) => {
    const m = e.data || {};
    if (m.type !== 'build') return;
    try {
      const data = buildNow(m.id, m.count);
      const transfer = [data.pos.buffer, data.look.buffer, data.spin.buffer, data.pivot.buffer, data.stream.buffer, data.aux.buffer];
      let origin = null;
      if (m.origin) {
        origin = deriveOrigin(data, m.count);
        transfer.push(origin.pos.buffer, origin.look.buffer, origin.spin.buffer, origin.pivot.buffer, origin.stream.buffer, origin.aux.buffer);
      }
      scope.postMessage({ type: 'built', req: m.req, data, origin }, transfer);
    } catch (err) {
      scope.postMessage({ type: 'error', req: m.req, message: String((err && err.message) || err) });
    }
  };
  scope.postMessage({ type: 'ready' });
}

/** True when this script is running as a dedicated worker. */
export function isWorkerScope() {
  return typeof window === 'undefined' && typeof self !== 'undefined' && typeof self.postMessage === 'function' && typeof importScripts === 'function';
}

/** Main side: one worker, requests answered in order. */
export class FormationWorker {
  /** script: the bundle's own <script> element (captured at load). Returns null when impossible. */
  static create(script) {
    if (typeof Worker === 'undefined' || !script) return null;
    let url = null;
    let revoke = false;
    try {
      if (script.src) {
        url = script.src;
      } else {
        const text = script.text || script.textContent || '';
        if (text.length < 1000 || typeof Blob === 'undefined' || typeof URL === 'undefined' || !URL.createObjectURL) return null;
        url = URL.createObjectURL(new Blob([text], { type: 'text/javascript' }));
        revoke = true;
      }
      return new FormationWorker(new Worker(url), revoke ? url : null);
    } catch {
      if (revoke && url) URL.revokeObjectURL(url);
      return null;
    }
  }

  constructor(worker, blobUrl) {
    this.worker = worker;
    this.blobUrl = blobUrl;
    this.alive = true;
    this.ready = false;
    this.seq = 0;
    this.jobs = new Map();
    this.timer = setTimeout(() => {
      if (!this.ready) this.fail(new Error('formation worker did not start'));
    }, READY_TIMEOUT);
    worker.onmessage = (e) => this.onMessage(e.data || {});
    worker.onerror = (e) => {
      e.preventDefault?.();
      this.fail(new Error((e && e.message) || 'formation worker error'));
    };
  }

  onMessage(m) {
    if (m.type === 'ready') {
      this.ready = true;
      clearTimeout(this.timer);
      if (this.blobUrl) {
        URL.revokeObjectURL(this.blobUrl);
        this.blobUrl = null;
      }
      return;
    }
    const job = this.jobs.get(m.req);
    if (!job) return;
    this.jobs.delete(m.req);
    if (m.type === 'built') {
      const data = m.data;
      if (m.origin) data.origin = m.origin;
      job.resolve(data);
    } else {
      job.reject(new Error(m.message || 'build failed'));
    }
  }

  build(id, count, origin) {
    if (!this.alive) return Promise.reject(new Error('formation worker unavailable'));
    return new Promise((resolve, reject) => {
      const req = ++this.seq;
      this.jobs.set(req, { resolve, reject });
      try {
        this.worker.postMessage({ type: 'build', req, id, count, origin: !!origin });
      } catch (err) {
        this.jobs.delete(req);
        reject(err);
      }
    });
  }

  fail(err) {
    if (!this.alive) return;
    this.alive = false;
    clearTimeout(this.timer);
    try {
      this.worker.terminate();
    } catch {
      /* ignore */
    }
    if (this.blobUrl) URL.revokeObjectURL(this.blobUrl);
    for (const job of this.jobs.values()) job.reject(err);
    this.jobs.clear();
  }

  dispose() {
    this.fail(new Error('disposed'));
  }
}
