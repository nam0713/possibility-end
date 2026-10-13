# v9 Universe engine (v9.1)

The site's single, fixed, full-viewport particle universe (brief §1, API §3, and the v9.1 contract
additions in `design/V9.1-FEEDBACK.md`). Source lives in `src/universe/` (ES modules, three r186);
`node tools/build-universe.mjs` bundles it into `src/generated/universe.js` (IIFE, minified, ~815 KB
including the ending film), which `npm run build` inlines into `index.html`. The lab at
`/tools/lab/universe-lab.html` drives every API call.

**v9.1 in short.** One cold hue family everywhere (no warm colour left in any formation, accent,
starfield, grade or handover); `Universe.setScatter(v)` — the reading starfield the formation
scatters into behind the body text and gathers back from; `Universe.ending.arm(bool)`; exactly one
light at the end of ch.8, handed to the film as `focus` + `focusLight`.

## Files

| file | role |
|---|---|
| `index.js` | `window.Universe`. Probes WebGL2 on the canvas before three touches it; every call is guarded (never throws); no-op API with well-formed returns when unavailable (`dataset.universe='none'`). In a worker scope the same bundle serves formation builds instead (see `formations/worker.js`). |
| `engine.js` | Renderer, scene/layout state machine, on-demand rAF loop, resize/DPR, context loss, async program compile, prewarm, film handover snapshot. |
| `config.js` | **Tuning knobs**: palette, quality tiers, adaptive steps, compositions, morph timings, easing, post, the reading starfield (`SCATTER`). |
| `particles/shaders.js` | Morph vertex shader (living motion, stagger, flow, DOF sprites, the reading starfield), the BAKE/GPU_STATE variants, star shaders, attribute packing constants. |
| `particles/field.js` | The shared particle system: GPU attributes for both morph sides, morph clock, buffer swap, GPU bake + snapshot (float MRT targets), exact CPU mirror (scatter included) as fallback. |
| `formations/*.js` | Cover, ch.1–8, `seed` (ending-ready), `origin` (load-in dust). `builder.js` = authoring API, sort + permutation; `index.js` = registry + LRU cache (worker requests or resumable main-thread jobs); `worker.js` = the build worker (both sides). |
| `accents/*.js` | Non-particle accents (lines with travelling pulses, glows, star, black hole, cover nodes) with cross-faded presence. |
| `camera.js` | Compositions via `setViewOffset`, damped springs (composition, target, focal point), parallax, ambient drift, explore controls; the starfield's reference frame. |
| `nodes.js` | Cover nodes + the formation's anchor → `subscribe` frames (only when changed), `pick`. |
| `post.js` | RenderPass → UnrealBloomPass (reduced res) → post-bloom overlay → FinishPass (OutputPass subclass). |
| `input.js` | Window parallax, explore drag/pinch/wheel/keys, coarse-pointer touch-scroll tracking (30 fps cap). |
| `quality.js` | Tier detection, GPU timer, adaptive controller. |
| `film-host.js` | Engine side of the ending film contract (`ending-*.js` belong to the ending agent). |

## Palette (v9.1: one theme colour)

`config.js → HEX` holds only the palette of `design/V9.1-FEEDBACK.md` — space `#04070b`, fg `#eaf2f8`,
ink `#dde6ed`, accent (ice cyan) `#a9e7f2`, accent-hi `#e6fbff`, accent-deep `#4f8fb0`, deepest
`#1b3a52` — plus two mixes computed in linear light (`C.steel` = deep→white 15 %, `C.mist` =
deepest→deep 50 %); every hue lies in ~189–211°. Formations vary luminance and saturation, never
hue: what used to be ember (hot cores, chokepoints, factories, seeds) is now **white-hot**
(accent-hi, brighter than its surroundings); what used to be "warm vs cold" is **bright/pale vs
deep/saturated**. Tints for the background lift are deep/ice. The ch.5 star is blue-white (white-hot
granules, ice-cyan lanes, limb darkening to deep blue), the ch.7 disc ice-white (white-hot rim, pale
ice, deep-blue outskirts), the background stars cold white / ice / deep blue, the cover's selected
node ice cyan. Verified on rendered frames: 0 pixels with R > B + 3 in every formation at 1440×900
and 390×844, and in the reading starfield.

## Particle model

One `THREE.Points` with a fixed count per tier (high 163,840 · medium 65,536 · low 24,576). Each
particle carries two complete states, *from* and *to* (≈92 bytes/particle):

- position (f32×3), look (u8×4: gamma-2 colour + size code), aux (u8×4: evolve threshold, twinkle, glint)
- **living motion #1 — orbit**: spin (i16×4: axis + angular speed) about pivot (i16×3). Galaxies rotate,
  Dyson collectors orbit on hundreds of inclined planes, loops in ch.1 turn about their own axes, the
  cover ribbon slides its twist around the loop.
- **living motion #2 — stream**: stream (i16×4: vector + rate). A particle travels the vector and wraps,
  faded at both ends: signals between galaxies, pulses on connections, the ch.3 conveyor, infall into
  the ch.8 seed, accelerating expansion in ch.7.
- `aMeta` (seed, carried flow envelope).

The vertex shader animates both sides, blends them with a per-particle **staggered** progress
(random, optionally ordered by distance from the target centre), and adds a divergence-free flow
field (analytic curl of sinusoidal potentials, sampled by position so neighbours move as coherent
streams) plus a swirl, enveloped to peak mid-morph. Sprites are soft Gaussians; size is depth
attenuated with fake depth of field (bigger + dimmer away from the focus plane, energy conserving),
and sub-minimum sprites keep their size but lose energy, so nothing aliases to 1-px mush. The living
clock is uploaded wrapped (20 min period) and every rate it drives is quantised to that period, so
the wrap is seamless and float32 never loses precision.

**Morph start.** If the previous morph has settled, the from/to attribute *buffers are swapped*
(no CPU work, no re-upload of the current state, living motion continues) and the outgoing
formation's reading controls are frozen into `uFrom*` uniforms. If a morph is still running (rapid
retarget), the displayed state is **baked on the GPU**: one point per particle renders the exact
displayed state into four float targets (MRT: position + carried flow, colour + size, orbit pivot +
speed, orbit axis + twinkle/glint), each position re-expressed in the dominant side's orbit so it
keeps living; the from side then reads that state by `gl_VertexID` (`uFromTex`). No CPU work, no
upload of the from side, and the interrupted flow is carried with its own amplitude, so the retarget
is seamless. Without float colour buffers (`EXT_color_buffer_float`) the same maths runs as an exact
CPU mirror (`field.bake()`, then one upload). Reduced motion: 0.24 s cross-dissolve (a ghost draw of
the same geometry).

**Correspondence.** Each formation is sorted by a key (azimuth by default; knot parameter for ch.3)
and laid out through one fixed random permutation, so particle *j* has the same rank in every
formation: neighbourhoods flow into neighbourhoods, and any prefix of the buffer is a uniform
subsample (adaptive quality trims the draw range).

## Formation builds

Formations are pure functions of (spec, count, seed). They are built in a **Worker** that runs the
same bundle: `index.js` detects the worker scope and serves build requests; the main side posts
`{id, count}` and receives the typed arrays as transferables (the load-in dust is derived there too).
The worker is created from the bundle's own `<script>` (its URL, or its inline text as a Blob — the
site inlines it). Any failure (no Worker, CSP, no answer within 4 s) falls back to main-thread
builds: resumable generators stepped in idle slices of ≤ 4 ms when prewarming, synchronous only when
a scene needs a formation that is not cached.

A scene change whose formation is not cached yet waits for it (`pending`) and morphs when it
arrives. Prewarm order follows the reader (current chapter, next, previous, cover, the rest, seed);
the LRU cache keeps 9 formations on the high tier (≈6.9 MB each), 12 below. Every shader program
(particles, stars, accents, overlay, bake, each post pass) is compiled with `compileAsync`
(KHR_parallel_shader_compile) in idle-spaced stages before the first frame, and its uniforms and
attributes are queried in idle slices, so neither the first frame nor the first visit to a chapter
compiles anything.

## Formations (all deterministic, exactly N particles; leftovers become faint dust)

| scene | formation | reading (`setReading`) |
|---|---|---|
| cover | Möbius-like ribbon of 26 filaments (1.5 twists, the inner side whitening toward the centre) around a white-hot singularity in an ice-cyan corona; inner accretion spiral whitening as it falls; faint halo. Accent: node orbit with comets, 8 node sprites (ice-cyan ring on `select`), singularity glow. | — |
| ch.1 | Recursive feedback: core → great loop with 5 nodes → threaded loops → tiny loops; each level turns faster. Pulses stream along links. Accent: links whose pulses accelerate over a 12 s cycle and with reading. | pulses speed up |
| ch.2 | Three datacenter floors of racks as point lattices, status lights (a few white-hot), packets down the aisles queueing — brightening as they near it — at a white-hot chokepoint (the floor's brightest light), one shared column (one rack slot is empty). Accent: lattice hairlines, aisle pulses that step and wait, chokepoint glows. | — |
| ch.3 | Trefoil knot with five conveyor lanes streaming along it, "products", six white-hot factories with deeper ice-cyan dependency loops. Accent: spine with flowing light, factory glows. | the open last stretch fills in: **the loop closes** |
| ch.4 | Dendritic crystal (octahedral core, six arms, fishbone branches), atoms = nucleus + shell (white-hot near the seed, cooling to ice outward), loose matter falling onto the growth front, white-hot seed. Accent: bonds, seed glow. | grows outward from the seed |
| ch.5 | Blue-white granulated star (accent sphere + corona) wrapped by a Dyson swarm: 84 rings in 7 inclined families (white-hot near the star, ice/deep outward) + free collectors (Keplerian speeds), glinting radiators, a pale wind. | the swarm fills in |
| ch.6 | Two spiral galaxies told apart by luminance, saturation and structure — *bright*: a tight two-armed grand design with a large white-hot bulge, pale; *deep*: three loose arms beaded with saturated ice-cyan knots fading to deep blue, a small core, dimmer — plus a small steel third, each rotating; signal threads in their sender's light. Accent: thread pulses, core glows. | galaxies drift apart (threads fall short) |
| ch.7 | Black hole (horizon re-drawn after bloom, ice-white Doppler-beamed disc, lensed arcs + photon ring), 70 dim deep-blue cinders, receding cosmic-web remnants, dead galaxies (deep behind the hole, inside the framing circle on screen). | disc evaporates, light dims, space expands, horizon shrinks |
| ch.8 | Seven logarithmic filament arms streaming along their own tangents into a fragile seed, brightening and whitening as they near it; falling outer shell. Accent: flickering seed glow. | everything draws tighter |
| ending-ready | **Exactly one light** (see below): a seething white-hot core in an ice-cyan corona, faint spark arcs (no bright heads) on orbits that never turn edge-on, spiral infall. Accent: breathing seed glow with soft rays + a wide halo, brighter and breathing deeper while armed. | — |

## Reading starfield — `Universe.setScatter(v)`

`0` = the formation (covers, home sections), `1` = a sparse, calm starfield filling the viewport (the
reader's body text). The UI calls it on every scroll frame; `Engine.setScatter` stores the target and
the value eases toward it with a critically damped spring (`EASE.scatter` 0.42 s, 0.2 s with reduced
motion) that lands exactly on the target, so scroll jitter never shows and "moving" ends cleanly.
`getState().scatter` reports the eased value (`scatterTarget`, `scatterStars` for diagnostics).
Everything is a pure function of that value: scrolling back reverses it exactly.

**Stars.** Every particle owns a star, hashed from its index (PCG; `SCATTER_SEED`): NDC (u, v) in
±`margin` of the *reference camera* — the rig's camera without pointer parallax, ambient sway,
explore rotation or zoom (`camera.js refMatrix`, same off-axis projection) — at a depth of
`near…far` × its distance. The field therefore fills the viewport whatever the composition, layout or
formation, and stays put on screen while the composition eases; the remaining (calmed) parallax and
sway move near and far stars differently, which reads as depth. Only `density` stars per CSS
megapixel stay visible (1490 at 1440×900, the 420 minimum on phones), as a share of the *drawn*
particles: the tier's count and the adaptive draw range are compensated, so every tier shows the same
field. Magnitudes are `rand^steep` (a few bright stars), colours cold white / ice / accent-hi with
faint far stars leaning deep blue; sprites are fixed-size Gaussians (`px`…`pxBright` CSS px, σ ≈
px/6.5) — wide enough that sub-pixel drift never flickers, crisp enough to read as points. They pan
slowly leftward (nearer stars faster: 1…`drift` cycles per 20-min clock period, so the wrap is
seamless), twinkle subtly, and on wide screens stars behind the text column keep `calm` of their
light. The composition's dim (layout, veil) is released by the scatter (the field is designed to sit
behind text), the bloom drops to `bloom` of its strength, the formation's tinted background glow
fades, and every accent leaves with its matter (`ctx.solid`).

**Transition.** Per particle a staggered threshold — outer matter first (distance from the formation
centre), then region by region (slow spatial blobs of the formation position), spread a little at
random — gives its own progress `sp`. Its path first follows a *stream displacement* D shared by its
neighbours (an outward push plus the living curl field, sampled where it left from), then spreads to
its own star: `pos += D·smoothstep(0, .62, sp) + (star − pos − D)·smoothstep(.42, 1, sp)`. So a
region peels away as one coherent, curling stream before thinning into stars; reversed, the stars
converge into streams that flow back into the formation. Matter that does not stay as a star stays lit
along its stream and fades as it spreads; a kept particle cross-fades into its star on the same
sprite.

**Composition with everything else.**
- *Morphs*: the scatter is applied on top of the morph. A scene change while scattered morphs the
  (invisible) formation underneath; gathering then flows into the *new* formation (verified: rapid
  retargets ch.2 → 7 → 3 → 5 at S = 1, then gather → ch.5 settled).
- *GPU retarget bake*: the bake writes the formation state (the scatter block comes after it); the
  film snapshot includes the scatter (displayed state). The CPU mirror implements both.
- *S = 1 fast path*: every vertex evaluates only its star (no living motion, no morph) and 98 % are
  culled before rasterisation — the reading state is the cheapest frame of the site.
- *Layouts / pointer / quality / context loss*: see above; context loss mid-ease recovers and settles
  (the eased value lives in JS).
- *Reduced motion*: no travel — the formation (and its accents) fade out in place over S 0…0.6 while
  the stars fade in in theirs over 0.4…1 (a kept particle switches sides at 0.5, ~7 % bright either
  way); no drift, no twinkle.
- *Loop*: easing renders even when paused (and is never capped to the ambient 30 fps); during a
  touch-scroll hold it renders at 30 fps only while the value moves, then the hold resumes.

Knobs (`config.js → SCATTER`): `stagger` (share of the range over which particles start leaving),
`flow` / `outward` (curl and radial parts of the stream displacement, × formation radius),
`near` / `far` (star depths × camera distance), `margin`, `density` / `minStars` / `maxStars`,
`px` / `pxBright`, `gain`, `steep`, `drift`, `twinkle`, `parallax` / `sway` (kept at S = 1),
`bloom` (kept at S = 1), `calm` / `column` (text-column light). Easing: `EASE.scatter`,
`EASE.scatterReduced`.

Measured (RTX 2060, headless, 1440×900, render + 1-px readback, p10 of 120 runs — the GPU was shared
with other work): formations 1.2–1.7 ms, mid-transition 1.5–1.6 ms, scattered 0.9–1.2 ms.

## Compositions

`config.js → LAYOUTS`: each layout gives a screen point (cx, cy) and a framing radius in CSS px for
wide and tall (portrait: `W < 640 || W/H ≤ 0.8`, the UI's own test) viewports. The camera orbits the
formation centre at the distance that makes the formation's `radius` span that many pixels;
`setViewOffset` shifts the projection so the centre lands on (cx, cy) — the camera target is always
exactly on the composition point, whatever the parallax, drift or explore rotation.

| layout | wide (cx, cy · radius) | tall | use (UI) |
|---|---|---|---|
| hero | 0.675, 0.47 · min(0.255 W, 0.4 H) | 0.5, 0.66 · min(0.44 W, 0.24 H) | cover beside / below the title |
| explore | 0.5, 0.49 · min(0.33 W, 0.41 H) | 0.5, 0.46 | cover, interactive |
| contents | 0.245, 0.52 · min(0.19 W, 0.37 H) | 0.5, 0.2 · min(0.4 W, 0.17 H) | contents left column / top band; interlude |
| chapter | 0.655, 0.5 · min(0.27 W, 0.42 H) | 0.5, 0.34 · min(0.45 W, 0.24 H) | chapter cover, litany, next-chapter card |
| reading | 0.5, 0.5 · min(0.5 W, 0.8 H), dim 0.5 | 0.5, 0.46 · min(0.5 W, 0.3 H), pushed back ×1.45 | behind the text column, reaching into the margins (the UI scrims the column) |

A formation may adjust a layout (`spec.compose[layout].wide|tall = {cx, cy, scale}`): ch.8 steps
right and tightens beside its long title (chapter 0.75 · 0.8); ch.6, whose bright galaxy sits far left
of centre, steps right in `chapter` (0.7 · 0.8) and tightens in `contents` (0.86); ch.1 tightens in
`contents` (0.93); the ending-ready seed stays small and central in `reading` (0.37), where the UI
rests the trigger on it. Checked at 1440×900, 1280×720 and 390×844 against the UI's text (the
title column, the contents list, the litany, the next-chapter card, the reading column): the lit
formation stays out of every text box; the one designed exception is ch.8's last screen, where the
seed's faint outer spark arcs pass behind “단 하나의 가능성.”. The reading starfield (scatter) ignores
the layout: it always fills the viewport (the UI keeps the cover's composition while reading, so
scrolling back gathers the formation where the cover shows it).

`setVeil(v)` pushes the camera back (×(1 + 0.42 v)) and dims to 14 % at 1 (the scatter releases this
dim: at S = 1 the starfield shows at its own designed brightness). Everything eases with
critically damped springs (0.62 s; 0.06 s with reduced motion). Pointer parallax ±4° and a slow
ambient sway stop when paused / reduced.

## Subscribe frames and the anchor

`Universe.subscribe(fn)` delivers one reused object after each rendered frame in which something the
UI positions moved, and on the frame after `subscribe()`:

```js
{ scene, selected,
  nodes:  [{ n, x, y, radius, depth, visible }],   // the eight cover nodes (CSS px, canvas space)
  anchor: { x, y, visible } }                       // the formation's focal point (CSS px, canvas space)
```

The **anchor** is the current formation's focal point on screen: the cover singularity, the ch.8 /
ending-ready seed, a chapter formation's centre (`spec.focus`, default `spec.center`; it eases with
the composition). Because the camera target sits on the composition point, the anchor moves only with
the composition — layout easing, a resize, a formation change — never with parallax or drift, and
it is delivered on every frame it moves. `visible` is false before the first formation arrives and
when the point is off screen. The UI rests ch.8's trigger (“단 하나의 가능성.”) on it.

**One light at the end of ch.8.** The v9 'ending-ready' seed could show a second light: its comet
trains had bright heads, and a train whose orbit turned edge-on folded into a short, bright dash a
few dozen px from the core (the "second white dot"). The seed now keeps everything bright concentric
with its centre — which is its focus, the anchor, and the glow accent's position: the spark arcs are
faint with no bright heads, and their orbit planes stay within 50° of facing the camera (an orbit
can then bunch at most ~1.6×). Verified on the real site with the HTML trigger hidden, 8 frames over
6 s each at 1440×900, 390×844, 320×568 and 844×390: exactly one blob ≥ 95/255, centred 0.6–0.9 px
from the anchor (the half-pixel centre convention); no point-like peak within 120 px of it (the only
other local peaks are sky stars ≥ 190 px away). Armed, the same holds.

**`Universe.ending.arm(bool)`** (hover/focus on the trigger): the ready seed's glow brightens (×1.4),
grows (×1.1), its halo ×1.6 and its breath deepens, eased (`EASE.arm` 0.32 s). Only the seed accent
reacts, so it is a no-op elsewhere.

## Rendering & post

Light renders additively into a half-float target on black. UnrealBloomPass runs at a fraction of
the buffer (tier `bloomScale` × adaptive step) with a soft knee and small radius (no haze). An overlay
RenderPass re-draws the ch.7 horizon (and the disc band in front of it) *after* bloom so glow never
leaks into the shadow. FinishPass (an OutputPass with a replaced shader) applies an exponential filmic
shoulder with highlight desaturation, sRGB, then composes the `#04070b` background in display space
(exact colour, faint cold-tinted lift behind the formation), vignette, veil dimming, fades and grain.
No stage adds a hue: the grade is neutral, every input colour is in the palette's family.

## Loop & performance

- Renders only while needed: ambient motion (not paused / reduced), morph, camera easing, fades,
  the scatter and arm easing (also while paused, never capped), explore input, the ending film. Stops
  when `document.hidden`, `setVisible(false)`, context lost.
- Coarse pointers (v9.1 mobile fix): a touch scroll never stops the loop — the universe keeps moving
  under the finger and its fling, capped at 30 fps until ~150 ms after the scroll settles (touch
  lifetime tracked), so the compositor keeps headroom for the scroll. Scene/layout/veil changes during
  the scroll simply ease in. (v8–v9.0 halted drawing during a scroll; the cover then froze on every
  swipe and jumped when it resumed.) A resize that arrives mid-scroll still waits for the end.
- The canvas is sized to the large viewport (`height: 100lvh`), so a phone's address bar collapsing or
  returning mid-scroll never resizes it. Compositions are framed in the visible part: `frameHeight`
  (the window height measured when the canvas size really changes) is passed to the camera rig,
  which places and sizes layouts in it, top-aligned (`setViewOffset` y = 0.5·H − cy·Hf), and the
  portrait test, the post glow centre and the starfield calm use it too.
- Ambient-only frames are capped at 30 fps on coarse pointers, when veiled > 0.6, at adaptive
  level ≥ 3, or in the steady reading starfield (fully scattered: its drift is ≤ 4 px/s).
- DPR caps 1.75 desktop / 1.5 coarse, plus a pixel budget per tier.
- The frame loop allocates nothing (reused ctx/scratch/frame objects, index loops, bound callbacks).
- `webglcontextlost/restored`: loop stops, events dispatched; on restore the post chain is rebuilt,
  the GPU timer re-acquired and every buffer re-sent (an interrupted morph whose from side lived in a
  baked texture completes instead).

**Adaptive quality** (`quality.js`) trims, cheapest first, bloom resolution, then pixel ratio (never
below min(device ratio, 1) until the last step), then the draw range (light loss compensated by gain)
— never the particle count. It measures *cost, not cadence*: with `EXT_disjoint_timer_query_webgl2`
(Chrome, Edge) it judges the 75th percentile of the render's GPU ms per 2 s window against 75 % of
a 60 Hz frame (12.5 ms); a CPU-bound frame never degrades the picture. Without a timer (Safari,
Firefox) it judges dropped frames against the median cadence — never against less than a 60 fps
frame, so a 120–240 Hz display is not chased — and treats a steady cadence at a multiple of the
display period as a browser cap (Low Power Mode, Energy Saver), not slowness. Frames with one-off
work (build, bake, compile, resize, loop restart) are never sampled. A degrade needs two over-budget
windows and must then cut the cost by 15 % or it is reverted and blocked for 60 s; an upgrade needs
5 s of headroom and backs off exponentially (10 s → 5 min) when it does not hold.

Measured on an RTX 2060 (headless Chrome, ANGLE/D3D11, high tier, 163,840 particles): GPU time
2.3–3.8 ms per frame in every scene at DPR 1 and 1.75; level 0 throughout 30–50 s runs at 60 Hz,
under a simulated 30 Hz browser cap, with injected frame jitter, while navigating every 3 s, at DPR 2,
and — after the 60 fps floor above — without the timer at an uncapped (>1000 Hz) cadence (before the
fix that case fell to level 3). Forced heavy fill (13 ms GPU) degrades to level 2 and holds at 8.5 ms;
the high tier forced onto SwiftShader steps down, reverts unhelpful steps and settles.
Known limit: without a timer, heavy irregular main-thread stalls from other code (not the GPU) can
still read as dropped frames; the 15 % verification usually reverts those steps, but not always.
(Chrome also delays rAF callbacks under real GPU back-pressure, so callback lag cannot tell the two
apart.)

## Ending

`Universe.ending.start({origin})` snapshots every drawn particle (+ the background stars) on the GPU
(the BAKE variant with `uSnapshot = 1`, read back once; CPU mirror without float read-back). Because
the engine uses an off-axis projection, positions are sheared in view space
(`x += P[8]/P[0]·z`, `y += P[9]/P[5]·z`) so the film's centred camera (same position, target, fov)
sees exactly the same picture. The handover carries

- `positions`, `colors` — world positions (flow included) and linear colours with the sprite energy
  folded in (`gain · min(4, code / 0.02 + 0.25)`), dimmed by the composition and veil;
- `energies` — exactly that folded factor, times blur² of the fake depth of field: `colors / energies`
  is the linear colour of each sprite's centre pixel as drawn (stars: 1);
- `sizes` — each sprite's drawn diameter in world units at its own depth (DOF included; the film
  applies its own pixel limits). **Sent only when the film declares `film.handover = { energies: true }`**
  (`engine.filmSizes = 'auto'`; `true` forces it for the lab): measured against the engine's last
  frame, the true sizes with the film's colour-based energy estimate make t = 0 1.7–1.9× too bright on
  the seed and ~4× on the cover, while the estimate alone stays at 0.74–0.8×;
- `camera`, `count`, `origin`, `width`, `height`, `pixelRatio`;
- **`focus`** `[x, y, z]` — the collapse point: the current formation's focal point (at the end of
  ch.8 the seed, the one light, = the UI's anchor) in the same sheared world space as `positions`, so
  the film collapses exactly onto the light the reader saw;
- **`focusLight`** — that light's glow as drawn this frame (or `null` when no seed glow shows):
  `{ glows: [{ scale (world half-size of the billboard), intensity (× presence), core, halo (linear
  rgb), breath, rays }], anchor: [x, y] CSS px, pxPerUnit (CSS px per world unit at the focus), dim
  (composition dim × light fade, already applied to `colors`), exposure }`. The billboard profile is
  `accents/materials.js glowFragment` (`SEED_GLOW` / `SEED_HALO` in `accents/chapters.js`). An armed
  seed hands over its armed brightness. The film declares `handover = { energies, focus, focusLight }`
  and, measured on the real site, its first ~1.4 s keep exactly one light on the anchor (≤ 0.8 px).

The engine owns the rAF loop and calls `film.update/render`, emits `universe:ending-phase` (index, key,
time) and `universe:ending-finished`. `stop()` fades to black over 0.6 s (overlay quad after the film),
calls `film.end()`, restores renderer state and hands the canvas back, always from black:

- **back to the text** (default): the `ending-ready` seed, after 0.25 s of black, fades in over 0.9 s;
- **navigation during the fade** — the page calls `setScene`/`setLayout` before the fade ends: that
  scene appears instead, completed behind the black (morph, accents, composition settled);
- **navigation staged after the fade** — a page scene that leaves the seed during its reveal (the UI
  swaps the page first, ~150 ms after the fade): the seed is dropped while still black and the page's
  scene takes over the same way;
- **`stop({ restore: false })`** (optional, backward compatible): the engine stays black until the
  page sets its scene or layout (2.5 s at most), then shows it settled.

A formation that is still being built holds the screen black until it arrives. The seed never
flashes on the way out. The film is constructed in idle time at `ending-ready` (or when ch.8 reading
passes 80 %), never during reading.

## Diagnostics & lab

`getState()` returns the contract fields (now including `scatter`, also 0 without WebGL) plus
`formation, pendingFormation, morphing, morph, reducedMotion, selected, pixelRatio, adaptiveLevel,
adaptive {level, mode, metric, cadence, backoff}, gpuTimer, particlesTotal, bloom, veil, reading,
zoom, scatterTarget, scatterStars, armed, holding, compiling, worker, gpuBake, cached, lastBuildMs,
lastBakeMs, size`. `Universe._debug` (not contract): `settle()`, `setMorph(p, hold)`,
`freeze()`, `setTime(t)`, `loseContext()/restoreContext()`, `engine` (`engine.filmSizes`,
`engine.filmDof` switch the handover variants).

Lab URL flags: `?scene=&chapter=&layout=&quality=&adaptive=0&settle=1&reading=&veil=&scatter=&arm=1
&paused=1&time=&select=&ui=0&nodes=0&guides=1&nowebgl=1` (the panel has scatter and arm controls). The node overlay also draws the anchor (crosshair) and the
status line prints it. `window.lab.still(scene, chapter, layout, t, scatter?)` gives deterministic stills for
`tools/shot.mjs --eval/--steps`; `lab.scatter(v, settle?)` drives the scatter; `lab.nodes()`,
`lab.anchor()`, `lab.frames()` read the subscription.

## Known limits

- Without a GPU timer, sustained slowness that presents at an exact multiple of the display period
  is treated as a browser cap (never degraded); see also the stall note above.
- Ch.7's horizon overlay hides particles that pass in front of the shadow (the disc band is re-drawn).
- `options.chapters` passed to `mount()` is accepted but unused (formations are built in).
