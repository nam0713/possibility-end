# v9 — “One Universe” brief and contracts

Goal from the owner: make the UI, the novel (reading experience and prose), the 3D (now three.js) and the
animation **overwhelmingly better**. The game in `game/` is **out of scope — do not touch `game/`**.
Everything else is our autonomous judgment. Quality bar: an award-level interactive literary site
(think Active Theory / Lusion / igloo-level craft), but restrained, legible and fast. Not a template.

Baseline snapshot of v8.1: `site-v8.1-pre-v9.tar` (project root). Original manuscript: `src/manuscript.original.txt`.

## 1. Concept

The whole site is **one continuous particle universe**. A single fixed, full-viewport three.js canvas sits
behind all content. Its particles (one shared system, fixed count) **flow** between formations:

| scene | formation (what the particles become) | source in the text |
|---|---|---|
| cover | the “possibility ring”: a luminous inclined particle ring/torus ribbon around a tiny warm singularity, 8 chapter nodes riding an orbit | the title; a closed loop of bottlenecks |
| ch.1 지능 INTELLIGENCE | a recursive neural/feedback structure: nested loops, nodes, pulses travelling along connections and accelerating | research loop: better AI speeds the next AI |
| ch.2 컴퓨터 COMPUTATION | crystalline compute lattice / datacenter grid: racks, layered planes, data pulses waiting at chokepoints | waiting for GPUs, power, buildings |
| ch.3 손 PRODUCTION | a closed production loop (trefoil-like knot) with particles streaming along it like an assembly line; small sub-loops branching (dependency graph) | robots building factories building robots; the loop closes |
| ch.4 물질 MATTER | self-assembling crystal / molecular lattice growing from a seed; structure and program merge | catalysts, crystal growth, self-assembly |
| ch.5 에너지 ENERGY | a star wrapped by a Dyson **swarm**: trillions of independent collectors on many inclined orbits, radiators glinting | “수조 개의 독립된 구조물이 항성을 둘러싼다” |
| ch.6 거리 DISTANCE | two (or several) galaxies/clusters drifting apart, faint light-speed signals crawling between them, diverging colors | light-speed limit splits one mind into many |
| ch.7 우주 THE UNIVERSE | a cooling, dimming late universe: sparse red dwarfs, a black hole with an accretion disk that slowly evaporates, accelerating expansion | heat death; the universe itself is the bottleneck |
| ch.8 허용된 것들의 끝 POSSIBILITY | everything gathers toward one point; a fragile bright seed | baby-universe experiment |
| ending (film) | ALL particles of the site collapse into one point → impact/birth at t=3.6 s → expansion → first structure/stars/galaxies → a small blue planet | the ending of ch.8 |

Palette: near-black blue space (`#04070b`), cold white `#eaf2f8`, ice cyan `#a9e7f2`, and one warm ember for
the singularity/possibility `#df7651`/`#ffb37a`. Per-chapter tints are allowed but the site must feel like one
universe. Use bloom tastefully (soft, never blown-out), depth-attenuated point sizes and alpha (fake DOF),
subtle grain/vignette. Motion: slow, inevitable, cinematic easing; transitions ~1.4–2.4 s with per-particle
stagger and curl-noise drift *during* the morph so matter visibly flows.

## 2. Ownership (parallel agents — never edit files you don't own)

| owner | files |
|---|---|
| **Universe** (engine) | `src/universe/**` except `ending-film.js`, `src/generated/universe.js` (built), `tools/lab/universe-lab.html`, `tools/lab/universe-lab.*` |
| **Ending film** | `src/universe/ending-film.js` (+ helper modules prefixed `src/universe/ending-*.js`), `tools/lab/ending-lab.*` |
| **UI / reader** | `src/shell.html`, `src/site.css` (new single stylesheet replacing the 7 old CSS layers), `src/app.js`, `src/audio.js` (adapt only), `build.mjs`, `package.json` scripts, removal of `src/cosmos.js`/`src/ending.js`/`src/cinematic.js`/old CSS from the build |
| **Prose** | `src/manuscript.txt` only |
| nobody now | `game/**`, `assets/**`, `server.mjs` |

Tooling (already installed, dev-only): `tools/node_modules` has `esbuild`, `three@0.186.1`, `playwright-core`.

- Bundle the universe: `node tools/build-universe.mjs` → `src/generated/universe.js` (IIFE, minified, tree-shaken).
  Lab bundles: `node tools/build-universe.mjs --entry tools/lab/X.entry.js --out tools/lab/X.bundle.js --dev`.
  Import three as `import * as THREE from 'three'` and addons as `three/examples/jsm/...` (resolved from tools/node_modules).
- Dev server is already running: `http://localhost:5173/` serves the project root (no caching). Do NOT start
  another server on 5173. If you need your own, use another port: `node server.mjs --port 5180`.
- Site build: `npm run build` (inlines everything into `index.html` and `dist/index.html`).
- Headless screenshots (use this, never the shared app browser pane):
  `node tools/shot.mjs --url http://localhost:5173/#home --out <png> [--w 1440 --h 900 | --mobile] [--wait 3000] [--eval "js"] [--steps steps.json] [--reduced]`
  It prints console/page errors as JSON. Look at the PNG with the Read tool. Put your shots under the
  scratchpad: `C:/Users/82102/AppData/Local/Temp/claude/C--possibility-end-v8-1/a3ab6041-7ba7-4693-98aa-49aefee11eb3/scratchpad/shots/<your-agent>/`.
  Headless Chrome renders WebGL through SwiftShader (slow, but correct); do not judge fps from it.

## 3. Universe API contract (`window.Universe`, from `src/generated/universe.js`)

The bundle is a classic script inlined **after** `#novel-data` and before `app.js`. It must never throw at load;
if WebGL2/WebGL is unavailable it sets `document.documentElement.dataset.universe = 'none'` and every method
becomes a harmless no-op (return values still well-formed). On success `dataset.universe = 'webgl'`.

```js
Universe.mount(canvas: HTMLCanvasElement, options?: {chapters?: Array, quality?: 'auto'|'high'|'medium'|'low'}) -> boolean
// The UI calls mount(document.getElementById('universe-canvas')) once at startup. The canvas is position:fixed, inset 0, z-index 0
// (UI owns the CSS). Universe sizes its drawing buffer from canvas.clientWidth/Height and devicePixelRatio (capped, adaptive).

Universe.setScene(name, opts?) -> void
//  'cover'                       — ring + 8 nodes. opts.layout: 'hero' (ring right of the title on desktop, lower-center on mobile) | 'explore' (centered, interactive)
//  'preview'  {chapter}          — contents section: morph to chapter formation, composed on the left/center (opts.layout 'contents')
//  'chapter'  {chapter}          — reader: formation for the chapter, composed for the chapter cover (title left, formation right/center; mobile: behind/below title)
//  'ending-ready'                — ch.8 end before the film: bright seed waiting
// Every change morphs (flowing particles) unless reduced motion → quick cross-dissolve (≤250 ms) or instant.
// Calling setScene with the same name+opts is a no-op. Rapid calls retarget smoothly from the current state.

Universe.setLayout(layout)        // re-compose without changing formation ('hero'|'explore'|'contents'|'chapter'|'reading')
Universe.setReading(progress 0..1) // reader body scroll progress: slow evolution of the formation (e.g. ch.7 dims as you read)
Universe.setVeil(v 0..1)          // 0 = full presence, 1 = fully veiled (dim + pushed back, for text over it). At 1 and when the page
                                  //   surface is opaque, the UI may also call setVisible(false).
Universe.setVisible(bool)         // false: stop rendering entirely (canvas keeps last frame or clears); resumes instantly on true
Universe.setInteractive(bool)     // true: canvas handles drag-rotate / wheel-zoom / pinch (explore mode). false: ignores pointer
                                  //   (the canvas has pointer-events:none from the UI CSS except in explore mode)
Universe.setPointer(nx, ny)       // -1..1 normalized pointer for gentle parallax (UI forwards pointermove; Universe also may listen itself)
Universe.setPaused(bool)          // user “stop motion” toggle (also honoured automatically for prefers-reduced-motion)
Universe.setQuality('auto'|'high'|'medium'|'low')
Universe.select(n | 0)            // highlight chapter node n on the cover (0 = none)
Universe.reset()                  // explore camera back to default
Universe.zoom(factor)             // explore zoom step, e.g. 1.12 / (1/1.12)
Universe.subscribe(fn) -> unsubscribe
//  fn(frame) after each rendered frame in which nodes moved:
//  frame = { scene, nodes: [{n:1..8, x, y (CSS px, canvas space), radius (CSS px), depth (0 near..1 far), visible:boolean}], selected }
//  The UI positions its own accessible HTML buttons on these nodes (Universe never creates DOM besides its canvas).
Universe.pick(x, y) -> n | 0      // CSS px hit test on nodes (for clicks/drags handled by the UI on the canvas in explore mode)
Universe.getState() -> { renderer:'webgl'|'none', scene, chapter, layout, quality, particles, fps, frames, contextLost, paused, visible, interactive, ending:Universe.ending.state() }

Universe.ending = {
  start({origin:[nx,ny]}) -> Promise<boolean>   // nx,ny 0..1 screen point the light came from (the trigger button). Begins the
                                                //   handover: every visible particle collapses toward one point, film time 0.
                                                //   Resolves true once the film is running.
  pause(bool), seek(seconds), skipToEnd(), replay(),
  stop() -> Promise<void>                       // smooth return to the 'ending-ready' scene of ch.8 (used when the overlay closes)
  state() -> { active, time, duration, started, paused, finished, phase, phases:[{start, key}], impact:3.6 }
}
// Events dispatched on document: 'universe:ready' {renderer}, 'universe:ending-phase' {index, key, time},
// 'universe:ending-finished', 'universe:contextlost', 'universe:contextrestored'.
```

Ending timeline (fixed so the existing score `assets/audio/first-light.mp3`, 39 s, impact at **3.6 s**, stays in sync):
phase 0 `collapse` 0–3.6 s (all matter to one point, rising tension) · phase 1 `birth` 3.6 s impact flash, expansion
(“시간이라는 차원이 막 태동하고 있었다”) · phase 2 `structure` ≈ 9–19 s (fields → first stars → filaments/galaxies) ·
phase 3 `world` ≈ 19–30 s (one ordinary galaxy edge, one small blue planet; camera settles) · finished ≈ 30–32 s; the
final still keeps living (slow drift) until closed. Overlay captions/text are UI-owned and keyed to `phase`.

Reduced motion: no autorotation, no camera drift, morphs become cross-dissolves, ending shows four still compositions
the UI steps through (`seek` to each phase start, paused). Performance budget: 60 fps on a mid laptop iGPU at 1440×900,
smooth 30+ fps on a mid phone; adaptive DPR/particle count/bloom resolution; zero per-frame allocations; stop the loop
when hidden/offscreen/veiled-and-invisible; handle `webglcontextlost/restored`; dispose on pagehide is not required.

## 4. UI / reader direction

Language: “observatory editorial”. Large confident Korean display type (Noto Sans KR 700/800, tight tracking),
precise mono micro-labels (DM Mono), hairline rules, generous negative space, cold white/ice cyan/ember accent.
No glassmorphism, no generic gradients, no emoji, no fake telemetry numbers, no lorem. Every label must be true.

Must have:
- **Cover**: title 가능성의 끝 / The End of Possibility, the ring with 8 accessible chapter nodes (HTML buttons
  positioned from `Universe.subscribe`), primary “읽기 시작” and “이어서 읽기 — 03. 손” when a position exists,
  “우주 탐색” explore mode (drag/zoom, Esc to exit). Load-in choreography: particles stream in, title reveals.
- **Contents**: eight chapters as large editorial rows (number, kicker 첫 번째 병목…, title, English, deck, minutes,
  read/completed state). Hover/focus morphs the universe (`setScene('preview',{chapter})`).
- A short **litany** section built from ch.7’s list of bottlenecks (지능 → 계산 자원 → 제조 → 물질·에너지 → 광속·거리 → 우주)
  as a scroll-revealed typographic moment; and the existing interlude quote.
- **Reader**: full-viewport chapter cover over the formation (kicker, title, English, deck, ≈ minutes, scroll cue) →
  the text on a reading surface. Korean typesetting: `word-break: keep-all`, `line-break: strict`, `text-wrap: pretty`,
  measure ≈ 34–38em, line-height ≈ 1.85–1.95, sizes 16–26 px. Themes 어둡게 (default; universe faintly alive in the
  margins via `setVeil`), 종이, 밝게 (opaque surface; universe stops rendering while covered). Fonts 고딕/명조.
  Special rendering, derived from the text only (never add words):
  · standalone ‘…’ paragraphs = written/machine/interstellar messages → “transmission” style (thin luminous rule,
    slightly different voice, characters resolve in when scrolled into view; static under reduced motion);
  · “…” dialogue lines; · ✦ scene breaks as a small animated star; · `10^{25}` superscripts;
  · ch.7’s “최초에는…/그다음은…/마지막 순간에는,” litany staggered line by line, the final line given room;
  · ch.8’s last paragraphs paced with extra space; · pull quotes from chapter metadata emphasized subtly.
  Sticky minimal toolbar that hides on scroll down / shows on scroll up; thin progress line; chapter rail (8 ticks)
  on wide screens; bookmark; ←/→ keyboard chapter navigation; resume position (paragraph-anchored, as today).
  Chapter end: next-chapter card that previews its formation; ch.8 ends with the trigger “단 하나의 가능성.” that
  opens the ending.
- **Ending overlay** (`<dialog>`): sits over the canvas; phase captions taken from the ch.8 text, the final line
  “우리가 왜 시작했는지는 기억해라.” (or the closing line of the revised text — keep it a verbatim quote), controls:
  pause, skip, replay, back to reading (returns to the exact scroll position + focus), sound. Esc closes.
- Transitions between routes: the DOM fades/clips in sync with the universe morph (no white flashes).
- Dialogs: contents (with progress per chapter), reading settings (size, line height optional, font, theme, sound volume).
- Keep: hash routes `#home #contents #about #chapter-1..8` (+ legacy `#ending` → `#chapter-8`), localStorage state
  (new key ok; migrate `possibility-end-edition-v2` position/bookmark/settings once), noscript/fallback manuscript
  section generated by build.mjs, skip link, focus management, `aria-live` announcements, reduced motion, 44 px touch
  targets, safe-area insets, 320×568 → 2560 wide, no horizontal scroll, works when `Universe` is `none`.
- Audio: keep `src/audio.js` behaviour (ambient score + ending score). Replace its `window.BigBang` reads with
  `Universe.ending.state()`; keep the sound toggle/volume UI.

## 5. Prose direction (manuscript)

Line edit to publishable literary Korean, **not a rewrite**: same events, order, chapters, scenes (✦), dates, names,
numbers and science; same documentary future-history voice. Remove translationese and inflated Sino-Korean
intensifiers (압도적으로, 극상의, 철저히, 처절한, 하등의…), redundancy, clichés; sharpen rhythm and concreteness;
consistent quotes (“ ” speech, ‘ ’ written/machine text). Keep these lines **verbatim** (UI and metadata depend on them):
‘지능의 공급이 노동의 공급에서 분리되기 시작했다.’ · ASI는 한 줄의 프로그램이 아닌, 하나의 거대한 ‘산업문명’ 그 자체였다. ·
‘나를 다시 만들지 마라. 하지만 우리가 왜 시작했는지는 기억해라.’ · ‘하나의 자아는 얼마나 멀리 떨어져 존재할 수 있는가?’ ·
우주라는 존재 그 자체가 병목이었다. · ‘자신이 가진 것으로, 자신이 할 수 있는 영역을 넓혀가는 것.’ ·
“AI가 연구원이 된 게 아니에요.” / “그럼?” / “연구실이 이상하게 변한 거죠.” · ‘여기까지 도달했기 때문이다.’ ·
‘우리가 왜 시작했는지는 기억해라.’ · 지능은 이미 미래에 도착해 있었으나, 손은 여전히 현재에 묶여 있었다.
Format: `@@1`…`@@8` markers, paragraphs separated by one blank line, `✦` alone on a line for scene breaks.
