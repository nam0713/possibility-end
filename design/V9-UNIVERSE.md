# v9 Universe engine (v9.1)

The site's single, fixed, full-viewport particle universe (brief §1, API §3, and the v9.1 contract
additions in `design/V9.1-FEEDBACK.md`). Source lives in `src/universe/` (ES modules, three r186);
`node tools/build-universe.mjs` bundles it into `src/generated/universe.js` (IIFE, minified, ~815 KB
including the ending film), which `npm run build` inlines into `index.html`. The lab at
`/tools/lab/universe-lab.html` drives every API call.

**v9.1 in short.** Physically motivated colour for the universe (amendment 2: ice/white structure,
blackbody light for everything that emits, astrophotography colours for gas and dust; the UI keeps
its single ice accent); `Universe.setScatter(v)` — the reading starfield the formation
scatters into behind the body text and gathers back from; `Universe.ending.arm(bool)`; exactly one
light at the end of ch.8, handed to the film as `focus` + `focusLight`.

## Files

| file | role |
|---|---|
| `index.js` | `window.Universe`. Probes WebGL2 on the canvas before three touches it; every call is guarded (never throws); no-op API with well-formed returns when unavailable (`dataset.universe='none'`). In a worker scope the same bundle serves formation builds instead (see `formations/worker.js`). |
| `engine.js` | Renderer, scene/layout state machine, on-demand rAF loop, resize/DPR, context loss, async program compile, prewarm, film handover snapshot. |
| `config.js` | **Tuning knobs**: colour (structure palette, emitter temperatures `K`), quality tiers, adaptive steps, compositions, morph timings, easing, post, the reading starfield (`SCATTER`). |
| `particles/shaders.js` | Morph vertex shader (living motion, stagger, flow, DOF sprites, the reading starfield), the BAKE/GPU_STATE variants, star shaders, attribute packing constants. |
| `particles/field.js` | The shared particle system: GPU attributes for both morph sides, morph clock, buffer swap, GPU bake + snapshot (float MRT targets), exact CPU mirror (scatter included) as fallback. |
| `formations/*.js` | Cover, ch.1–8, `seed` (ending-ready), `origin` (load-in dust). `builder.js` = authoring API, sort + permutation; `index.js` = registry + LRU cache (worker requests or resumable main-thread jobs); `worker.js` = the build worker (both sides). |
| `accents/*.js` | Non-particle accents (lines with travelling pulses, glows, star, black hole, cover nodes) with cross-faded presence. |
| `camera.js` | Compositions via `setViewOffset`, damped springs (composition, target, focal point), parallax, ambient drift, explore controls; the starfield's reference frame. |
| `nodes.js` | Cover nodes + the formation's anchor → `subscribe` frames (only when changed), `pick`. |
| `focus.js` | The cover's chapter dial (`focusNode`): the node orbit's spin, the front angle, the turn spring. |
| `post.js` | RenderPass → UnrealBloomPass (reduced res) → post-bloom overlay → FinishPass (OutputPass subclass). |
| `input.js` | Window parallax, explore drag/pinch/wheel/keys, coarse-pointer touch-scroll tracking (30 fps cap). |
| `quality.js` | Tier detection, GPU timer, adaptive controller. |
| `film-host.js` | Engine side of the ending film contract (`ending-*.js` belong to the ending agent). |

## Colour (v9.1 amendment 2: physically right)

The owner's second amendment to `design/V9.1-FEEDBACK.md` replaces the four-hue palette: colour in the
three.js universe is physically motivated (the UI keeps its single ice accent). Three sources:

- **Structure — ice / white / deep blue** (`config.js → HEX`: `ice #a9e7f2`, `iceHi #e6fbff`, `white #eaf2f8`,
  `deep #4f8fb0`, `deepest #1b3a52`, + `C.steel`, `C.mist`). The abstract formations (cover ring, ch.1 loops,
  ch.2 lattice, ch.3 conveyor, ch.4 crystal), the signals between the ch.6 minds, the last threads of matter.
  This is what makes the UI's ice feel native to the universe.
- **Heat — the blackbody.** Everything that emits takes the colour of its temperature, from a real
  Kelvin → linear-sRGB function, never a hand-picked hex: `math.js kelvin(T, sat?)` integrates Planck's
  law against the CIE 1931 2° colour-matching functions (Wyman–Sloan–Shirley multi-lobe fit, 5 nm steps),
  converts XYZ → linear sRGB (D65), clips the out-of-gamut negatives of the reddest embers and normalises
  the brightest channel to 1 (`kelvinY` normalises luminance instead; results cached per kelvin). It
  matches the standard tables (1000 K `#ff2f00`, 3000 K `#ffb96e`, 6500 K `#fff9fe`, 10000 K `#cdd9ff`).
  `math.js blackbodyGlsl()` is the same curve for shaders — `vec3 blackbody(float K)`, 32 entries on a
  log-T grid 1000–40000 K — used where the temperature varies per fragment (granulation, Doppler shift).
  `config.js → K` names the temperatures (`C.<name>` = `kelvin(K.<name>)`):

  | K | kelvin | linear rgb | use |
  |---|---|---|---|
  | `ember` | 1800 | 1, .218, 0 | dull red embers (spare) |
  | `cinder` | 2700 | 1, .423, .100 | spare (sparks run 2300–3600 K, dwarfs 2400–3300 K) |
  | `orange` | 3900 | 1, .643, .355 | factory furnaces (ch.3) |
  | `yellow` | 4800 | 1, .771, .579 | warm pulses (ch.1), products, chokepoint heat halos, the seed's corona and outer halo |
  | `sun` | 5800 | 1, .882, .828 | coronas of cores, photosphere sparks, sunlit collectors |
  | `hot` | 5900 | 1, .892, .852 | white-hot (slightly warm) |
  | `whiteStar` / `blueStar` | 7200 / 12000 | | star classes |

  `C.core` = `hot` bleached 45 % toward white `[1, .940, .919]` (`#fff8f6`): the heart of every white-hot
  light (the seed, the singularities, ch.1/ch.2 cores) — a light far brighter than its surroundings
  saturates toward white on film.
- **Gas and dust — astrophotography.** `halpha #ec7f9c` (HII knots: H-alpha blended with H-beta reads pink),
  `reflection #86a9de` (blue reflection, scattered light), `dust #5e5047` (brown-grey lanes), `web #7d8fb4`
  (the cosmic web's neutral-blue haze). Mixes are computed in linear light.

| scene | structure | what emits (thermal) / gas |
|---|---|---|
| cover | the ice ribbon, wisps, node orbit, nodes (selected ring = the UI's ice) | the singularity: white-hot `core` heart in a `sun` corona + glow; the inner spiral starts as cold blue gas and heats as it falls — 1700 K dull red → orange → white-hot near the core; outer halo: faint `deep`/`reflection` dust |
| ch.1 intelligence | ice loops, cold-white threaded-loop nodes, glia | white-hot core (`core` in `sun`); great-loop nodes a barely warm white; the pulses along the links (particles and accent) 4800 K |
| ch.2 computation | ice racks, blades, floors; data packets ice-white; aisle pulses ice | the jam heats: queue packets run ice → 1900 K → 6600 K white-hot at the gate; white-hot chokepoints (`core` glow in a 4800 K heat halo); the shared column white-hot; 8 % of status lights 4800 K |
| ch.3 production | ice/white conveyor lanes, steel spine, deep-blue dependency loops | furnaces: clusters `orange`→`sun`, glows `sun` in `orange`; products 4800 K riding the lanes; sparks 2300–3600 K |
| ch.4 matter | deep core → ice lattice → white tips; ice bonds; neutral-blue gas | only the seed emits: a small `sun` cluster in a `hot`/`yellow` glow |
| ch.5 energy | the Dyson swarm: ice, sunlit warm-white near the star (`white`/`sun`), deep blue outward; radiators glint with reflected sunlight | the star (accent, per-fragment blackbody): photosphere `STAR_TEMP` 5000 K (5800 K reads plain white through the filmic shoulder; 5000 K is the yellow-white Sun of photographs), granules +~250 K, lanes −330 K, quadratic limb darkening (u₁ .47, u₂ .23) with the limb cooling to 0.7 T (orange edge), a thin H-alpha chromosphere, a pearly corona and faint halo (desaturated 5000 K); sparks white-hot; wind `sun` |
| ch.6 distance | ice signal threads, neutral-blue intergalactic haze | *bright* = older, yellower: bulge 4300 K, arms 5300 K → 6400 K, brown-grey dust disc, glow 4300/4500 K · *deep* = younger, bluer: core 5000 K, arms 15000 → 22000 K, knots pink HII (`halpha`, 45 %) or blue-white young clusters (25000 K), dust lit blue · *faint*: an old dwarf, desaturated 5200–6200 K |
| ch.7 universe | neutral-blue web remnants | the accretion disc, T = 7000 K·(r/r₀)^−¾ (white-hot inside → ~2700 K orange-red outside). Particles carry T(r); the disc surface (accent) is Doppler-shifted and beamed per fragment: δ = √(1−β²)/(1−β cosθ), β = 0.45·(r₀/r)^½, colour `blackbody(δT)`, light ×δ³ — the approaching side bluer and brighter. Photon ring `blackbody(7000 K·δ)`, lensed arcs `blackbody(0.72·7000 K·δ)`; 70 dull-red dwarfs 2400–3300 K; dead galaxies faint 3600 K starlight |
| ch.8 possibility | four ice arms; inflow, shell | three arms of warm, pale old starlight (4600 K at 50 % saturation): a cool and a warm white; every arm whitens toward the seed and only the heart turns white-hot (`core`); the seed `sun` + `core` |
| ending-ready | the last ice threads | **the one light**: a seething `sun` → `core` ball, a 4800 K corona, near-white arcs (`white` → `hot` 30 %); glow = `core` heart in a 5400 K halo + a wide faint 4800 K halo |
| background stars | | a realistic spread of stellar temperatures (`stars.js starTemperature`): B 10–26 kK 9 %, A 7.5–10 kK 17 %, F 6–7.5 kK 28 %, G 5.2–6 kK 28 %, K 3.8–5.2 kK 14 %, M 2.9–3.8 kK 4 %; luminance-normalised, 78 % saturation |
| reading starfield | | the same locus, calmer: tones `SCATTER.temps` 3400 / 5400 / 7400 / 15000 K at 80 % saturation, equal luminance, a per-star tone running piecewise between them (`SCATTER.tones` [0.12, 0.66]): a few orange, mostly yellow-white and white, some blue-white |

The background lift behind each formation follows its `tint` (ch.5 and the seed `kelvinHex(4800)`,
ch.7 `deepest`, the rest `deep`/`ice`). Post stays neutral: the filmic shoulder whitens only the
brightest highlights (as film does), no stage adds a hue.

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
| cover | Möbius-like ice ribbon of 26 filaments (1.5 twists, the inner side whitening toward the centre) around a white-hot singularity; an inner accretion spiral heating along the blackbody as it falls (cold blue gas → dull red → white-hot); faint blue halo dust. Accent: node orbit with comets, 8 node sprites (ice-cyan ring on `select`), white-hot singularity glow. | — |
| ch.1 | Recursive feedback: core → great loop with 5 nodes → threaded loops → tiny loops (ice); each level turns faster. Warm (4800 K) pulses stream along links from a white-hot core. Accent: ice links whose warm pulses accelerate over a 12 s cycle and with reading. | pulses speed up |
| ch.2 | Three datacenter floors of ice racks as point lattices, status lights (a few warm), ice-white packets down the aisles queueing — heating along the blackbody as they jam — at a white-hot chokepoint (the floor's brightest light), one shared white-hot column (one rack slot is empty). Accent: lattice hairlines, ice aisle pulses that step and wait, white-hot chokepoint glows in a warm heat halo. | — |
| ch.3 | Trefoil knot with five ice conveyor lanes streaming along it, warm "products", six furnace-hot factories (orange round a white heart, orange sparks) with deep-blue dependency loops. Accent: spine with flowing light, furnace glows. | the open last stretch fills in: **the loop closes** |
| ch.4 | Dendritic crystal (octahedral core, six arms, fishbone branches), atoms = nucleus + shell (deep blue near the seed, ice in the lattice, white at the growing tips), loose matter falling onto the growth front, a small warm seed, neutral-blue gas. Accent: ice bonds, warm seed glow. | grows outward from the seed |
| ch.5 | Sun-like granulated star (accent sphere, per-fragment blackbody: hot granules, cooler lanes, limb darkening toward orange, H-alpha chromosphere; pearly corona and halo) wrapped by an ice Dyson swarm: 84 rings in 7 inclined families (sunlit warm white near the star, ice/deep outward) + free collectors (Keplerian speeds), radiators glinting with reflected sunlight, white-hot photosphere sparks, a faint wind. | the swarm fills in |
| ch.6 | Two minds in two lights — *bright* (older, yellower): a tight two-armed grand design with a large yellowish bulge and brown-grey dust; *deep* (younger, bluer): three loose blue-white arms beaded with pink HII knots and blue-white young clusters round a small yellowish core, far — plus a small old dwarf, each rotating; ice signal threads between them. Accent: ice thread pulses, core glows in their stars' light. | galaxies drift apart (threads fall short) |
| ch.7 | Black hole (horizon re-drawn after bloom, a blackbody disc, white-hot inside to orange-red outside, Doppler-shifted and beamed — lensed arcs + a white-hot photon ring), 70 dull-red dwarfs, receding cosmic-web remnants in a neutral-blue haze, faint old reddened dead galaxies (deep behind the hole, inside the framing circle on screen). | disc evaporates, light dims, space expands, horizon shrinks |
| ch.8 | Seven logarithmic filament arms (four ice, three of pale warm starlight) streaming along their own tangents into a fragile white-hot seed, brightening and whitening as they near it, white-hot only at the heart; falling outer shell. Accent: flickering white-hot seed glow. | everything draws tighter |
| ending-ready | **Exactly one light** (see below): a seething white-hot core in a warmer 4800 K corona, faint near-white spark arcs (no bright heads) on orbits that never turn edge-on, ice spiral infall. Accent: breathing white-hot seed glow with soft rays + a wide, faint warm halo, brighter and breathing deeper while armed. | — |

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
field. Magnitudes are `rand^steep` (a few bright stars), colours real stellar temperatures along the blackbody
(`SCATTER.temps`/`tones`/`saturation`: a few orange, mostly yellow-white and white, some blue-white, at equal luminance and 80 % saturation); sprites are fixed-size Gaussians (`px`…`pxBright` CSS px, σ ≈
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
other local peaks are sky stars ≥ 190 px away). Armed, the same holds. Re-verified with the
white-gold seed (the former four-hue palette), UI hidden, 4 frames over ~5 s at 1440×900, 390×844 and 320×568:
one blob ≥ 95/255 of ≥ 3 px, its centroid ≤ 0.7 px from the anchor; only isolated single pixels
elsewhere (sky stars, arc pixels). The spark arcs are dimmed where they ride on the glow's bright
floor (r < 0.8, `seed.js`), so no arc fragment crosses into a light of its own at the glow's edge.

**`Universe.ending.arm(bool)`** (hover/focus on the trigger): the ready seed's glow brightens (×1.4),
grows (×1.1), its halo ×1.6 and its breath deepens, eased (`EASE.arm` 0.32 s). Only the seed accent
reacts, so it is a no-op elsewhere.

## Cover chapter dial — `Universe.focusNode(n)` (amendment 3)

The phone cover's dial (`design/V9.1-FEEDBACK.md`, amendment 3). `focusNode(n)` with n = 1…8 turns the
ring of nodes so node n arrives at the **front** of its orbit and highlights it exactly as `select(n)`
does; `focusNode(0)` releases it to free rotation. Desktop is untouched unless the UI calls it (free
rotation is the same formula as before: spin = living time × `RING.nodeOrbit.speed`).

- **What turns.** Only the nodes, along their own orbit (node i at orbit angle (i/8)·τ + phase + spin;
  `focus.js` owns the spin). The ribbon, the composition, the camera and the orbit line stay exactly as
  they are, so the cover keeps its look and every node's projection stays exact. Next to the front,
  node n+1 sits to the **right** (lower right) and n−1 to the left, so “next chapter” = the ring turning
  right → left (a leftward swipe). Measured at 390×844 (`hero`, tall): the front node at ≈ (205, 680)
  CSS px, n+1 at ≈ (320, 645), n−1 at ≈ (82, 640); the nodes keep their 45° spacing.
- **Front** = the orbit's lowest point on screen for the composition camera (the layout's view yaw and
  pitch, explore rotation and zoom; never pointer parallax or the ambient sway, which stay as gentle
  life around the held node). It is solved in closed form every frame (stationary point of the screen
  height along the orbit) — ~11° from the geometrically nearest point, because the orbit is tilted;
  when the camera looks from below the orbit plane it falls back to the nearest point. While held, the
  node breathes ±0.02 rad (≈ ±3 px) along its orbit and follows the front (an explore drag or a layout
  change eases it back to the front with the same spring); it never drifts away.
- **Timing.** A critically damped spring (`EASE.focus` 0.27 s smooth time): ~90 % of the turn in
  0.55 s, within 1 px at ≈ 0.9 s, settled (`focusMoving` false) by ≈ 1.0–1.2 s. A call while turning
  retargets from the current angle *and velocity* toward the nearest equivalent angle — the shortest
  way round (≤ 4 steps, either direction) — so rapid swipes chain smoothly. A release keeps the angle
  and fades the leftover speed into the free orbit speed (0.3 s), no jump. Reduced motion: instant (no
  breath). Also instant while the nodes are not on screen (cover accent presence < 0.05: before the
  cover has arrived, or fully scattered) — nothing to watch turn.
- **Highlight.** `focusNode(n)` sets the selection to n (`getState().selected`, subscribe `selected`).
  `focusNode(0)` clears it unless `select()` changed it since. `select(m)` while focused only moves
  the highlight; the dial stays on n.
- **Scenes.** Accepted only on the `cover` scene (any layout, any scatter); elsewhere `focusNode(n)` is
  a no-op returning `false`. Leaving the cover (`setScene` to any other scene) releases the dial and the
  highlight it set; coming back starts free — the UI calls `focusNode` again. Before `mount` the call is
  remembered for a pending cover scene (applied with it, instantly); without WebGL it is a no-op
  (`false`, `focusedNode: 0`).
- **Loop.** The turn renders even while paused (like the scatter) and is never subject to the ambient
  30 fps cap; under a touch-scroll hold it renders at the hold's 30 fps until settled. Subscribe
  frames carry the moving nodes every rendered frame (~60 per second during a turn on a phone, then
  the ambient cadence). Context loss mid-turn: the state lives in JS; it resumes and settles on
  restore.
- **Returns / state.** `focusNode` returns whether it applied. `getState().focusedNode` (0 = free;
  also in the no-WebGL state) and `focusMoving` (diagnostic: turning).

Verified (RTX 2060, `--gpu --mobile` 390×844, the real site at `#home` and the lab): for k = 1…8 node k
is the lowest visible node 1.5 s after the call, the highlight and `frame.selected` follow, subscribe
frames keep arriving during the turn; rapid 3 → 7 → 2 (130 ms apart) ends on 2 via the shortest way;
`0` releases (selection cleared, no jump). Also: paused (turns, settles), reduced motion (front on the
next frame), context loss mid-turn, a call while fully scattered then gathering, explore with the camera
yawed 1.2 rad (still front), leaving to ch.3 (released; `focusNode(3)` there → `false`), `?nowebgl=1`.

## Rendering & post

Light renders additively into a half-float target on black. UnrealBloomPass runs at a fraction of
the buffer (tier `bloomScale` × adaptive step) with a soft knee and small radius (no haze). An overlay
RenderPass re-draws the ch.7 horizon (and the disc band in front of it) *after* bloom so glow never
leaks into the shadow. FinishPass (an OutputPass with a replaced shader) applies an exponential filmic
shoulder with highlight desaturation, sRGB, then composes the `#04070b` background in display space
(exact colour, a faint lift behind the formation tinted by its `tint`), vignette, veil dimming, fades
and grain. No stage adds a hue: the grade is neutral; colour comes from the inputs (structure, blackbody, gas — see Colour).

## Loop & performance

- Renders only while needed: ambient motion (not paused / reduced), morph, camera easing, fades,
  the scatter, arm and dial (`focusNode`) easing (also while paused, never capped), explore input, the ending film. Stops
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
  **Seed colour (physical, amendment 2):** the ready seed's `glows` are
  `[{ core: C.core [1, 0.9403, 0.9187], halo: kelvin(5400) [1, 0.8409, 0.7300], scale 0.72, intensity
  0.85, breath 0.16, rays 0.3 }, { core: [0, 0, 0], halo: C.yellow = kelvin(4800) [1, 0.7709, 0.5792],
  scale 2.2, intensity 0.085, breath 0.1 }]` (linear rgb; unarmed values, × presence): a white-hot,
  slightly warm white heart in a warmer halo. The seed's particles (`colors`) run `sun` (5800 K) →
  `core`, its corona 4800 K, its arcs a near-white (`white` → `hot` 30 %), its last threads ice.
  Re-verified on the real site (GPU, 1440×900 and 390×844, UI visible): exactly one blob ≥ 95/255 (the
  seed, centred above the trigger); every other pixel that bright belongs to the trigger's text.

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

`getState()` returns the contract fields (now including `scatter` and `focusedNode`, both 0 without
WebGL) plus `formation, pendingFormation, morphing, morph, reducedMotion, selected, focusMoving, pixelRatio, adaptiveLevel,
adaptive {level, mode, metric, cadence, backoff}, gpuTimer, particlesTotal, bloom, veil, reading,
zoom, scatterTarget, scatterStars, armed, holding, compiling, worker, gpuBake, cached, lastBuildMs,
lastBakeMs, size`. `Universe._debug` (not contract): `settle()`, `setMorph(p, hold)`,
`freeze()`, `setTime(t)`, `loseContext()/restoreContext()`, `engine` (`engine.filmSizes`,
`engine.filmDof` switch the handover variants).

Lab URL flags: `?scene=&chapter=&layout=&quality=&adaptive=0&settle=1&reading=&veil=&scatter=&arm=1
&paused=1&time=&select=&focus=&ui=0&nodes=0&guides=1&nowebgl=1` (the panel has scatter and arm controls, and
a `focus` select with ◀ ▶ buttons for the dial). The node overlay also draws the anchor (crosshair) and the
status line prints it. `window.lab.still(scene, chapter, layout, t, scatter?)` gives deterministic stills for
`tools/shot.mjs --eval/--steps`; `lab.scatter(v, settle?)` drives the scatter; `lab.nodes()`,
`lab.anchor()`, `lab.frames()` read the subscription; `lab.focus(n)` calls `focusNode`, `lab.front()`
returns the lowest visible node.

## Known limits

- Without a GPU timer, sustained slowness that presents at an exact multiple of the display period
  is treated as a browser cap (never degraded); see also the stall note above.
- Ch.7's horizon overlay hides particles that pass in front of the shadow (the disc band is re-drawn).
- `options.chapters` passed to `mount()` is accepted but unused (formations are built in).
