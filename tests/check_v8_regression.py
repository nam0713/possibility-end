"""V8 inherited functional regression suite. Exact built HTML; real touch emulation, not width alone.
Run: python tests/check_v8_regression.py [--webgl]
Needs Playwright Python and Chromium. --webgl also needs DISPLAY (e.g. Xvfb).
No font resources are redistributed. Network fonts are blocked to test the system fallback.
"""
from pathlib import Path
from playwright.sync_api import sync_playwright
import json,sys,hashlib,os,time,traceback
ROOT=Path(__file__).resolve().parents[1]
HTML=(ROOT/'index.html').read_text()
WEBGL='--webgl' in sys.argv
report={'environment':('Headed Chromium / ANGLE software WebGL' if WEBGL else 'Headless Chromium / Canvas2D fallback')+'; mobile viewport, touch, DPR; built HTML inserted with set_content', 'limitations':['Not a physical iPhone or Android hardware benchmark','Safari/WebKit not tested'], 'checks':[],'errors':[], 'html_sha256':hashlib.sha256(HTML.encode()).hexdigest()}
OUT=ROOT/'tests'/('v8-regression-webgl-report.json' if WEBGL else 'v8-regression-report.json')
def flush():OUT.write_text(json.dumps(report,ensure_ascii=False,indent=2))
def check(name,passed,details=None):
 report['checks'].append({'name':name,'pass':bool(passed),'details':details});flush();print(('PASS ' if passed else 'FAIL ')+name,flush=True)
def load(b,w=390,h=844,**opts):
 mobile=opts.pop('mobile',True)
 c=b.new_context(viewport={'width':w,'height':h},is_mobile=mobile,has_touch=mobile,device_scale_factor=opts.pop('dpr',3 if mobile else 1),reduced_motion=opts.pop('reduced','no-preference'))
 p=c.new_page();p.set_default_timeout(18000)
 p.on('pageerror',lambda e:report['errors'].append(str(e)))
 p.route('https://fonts.**/*',lambda route:route.abort())
 p.set_content(HTML,wait_until='domcontentloaded');p.wait_for_timeout(200)
 return c,p
def go(p,n):
 p.evaluate('(n)=>document.querySelector(`#chapter-list [data-chapter="${n}"]`).click()',n)
 p.wait_for_function('(n)=>!SceneFlow.getState().navigationBusy&&document.body.dataset.view==="reader"&&document.querySelector("#reader-art").dataset.chapter===String(n)',arg=n)
def tap(p,selector,mobile=True):
 if mobile:p.locator(selector).tap()
 else:p.locator(selector).click()
def bottom(p):
 p.evaluate('scrollTo({top:document.documentElement.scrollHeight,behavior:"instant"})');p.wait_for_timeout(100)
def end(p):
 go(p,8);bottom(p);p.locator('.continuum-trigger').tap();p.wait_for_function('BigBang.getState()?.started&&SceneFlow.getState().phase==="playing"',timeout=20000)
def close(p):
 p.keyboard.press('Escape');p.wait_for_function('!document.querySelector("#ending-view").open',timeout=15000)
def snap(p):return p.evaluate('({y:scrollY,height:document.documentElement.scrollHeight,url:location.href,history:history.length})')
def boxes(p,selector):return p.locator(selector).evaluate_all('(es)=>es.map(e=>{const r=e.getBoundingClientRect();return {id:e.id,x:r.x,y:r.y,w:r.width,h:r.height,visible:!!r.width&&!!r.height};})')
def no_overlap(rects):
 for i,a in enumerate(rects):
  for b in rects[i+1:]:
   if min(a['x']+a['w'],b['x']+b['w'])-max(a['x'],b['x'])>.5 and min(a['y']+a['h'],b['y']+b['h'])-max(a['y'],b['y'])>.5:return False
 return True
def stable_tail(p,last):
 samples=[]
 for _ in range(3):
  bottom(p);samples.append(p.evaluate('(selector)=>({h:document.documentElement.scrollHeight,y:scrollY,bottom:document.querySelector(selector).getBoundingClientRect().bottom+scrollY})',last))
 return max(x['h'] for x in samples)-min(x['h'] for x in samples)<2,samples
try:
 with sync_playwright() as pw:
  args=['--no-sandbox']
  if WEBGL:args+=['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']
  b=pw.chromium.launch(executable_path=os.getenv('CHROMIUM','/usr/bin/chromium'),headless=not WEBGL,args=args)
  # Layout suite checks actual document height and control hit targets at top and bottom.
  sizes=[(390,844)] if WEBGL else [(320,568),(360,740),(375,667),(390,844),(412,915),(430,932),(768,1024),(844,390),(1280,900),(1920,1080)]
  if '--quick' in sys.argv:
   sizes=[(320,568),(390,844),(844,390)]
   report['suite']='3-viewport inherited regression; dedicated cover/scroll suite covers 12 viewports'
  for w,h in sizes:
   mobile=w<1000;c,p=load(b,w,h,mobile=mobile)
   check(f'{w}x{h}: home has no horizontal overflow',p.evaluate('document.documentElement.scrollWidth<=innerWidth+1'))
   hero=p.locator('.hero').bounding_box();check(f'{w}x{h}: mobile cover bounded to viewport',not mobile or abs(hero['height']-h)<2,hero)
   actions=boxes(p,'.hero-dock button,.cover-actions button')
   check(f'{w}x{h}: home camera controls do not overlap',no_overlap(actions),actions)
   check(f'{w}x{h}: camera hit targets stay on screen',all(a['x']>=0 and a['x']+a['w']<=w+1 and a['y']>=0 and a['y']+a['h']<=h+1 for a in actions))
   check(f'{w}x{h}: no redundant cover story links',p.locator('.opening-line,.explore-link,.chapter-scroll-cue,.hero-intro,.hero-topline,.primary-link').count()==0)
   stable,samples=stable_tail(p,'.site-footer');check(f'{w}x{h}: home stops at footer without growing',stable and abs(samples[-1]['h']-samples[-1]['bottom'])<2,samples)
   p.evaluate('scrollTo({top:0,behavior:"instant"})');tap(p,'#menu-open',mobile);tap(p,'#dialog-chapters [data-chapter="1"]',mobile)
   p.wait_for_function('!SceneFlow.getState().navigationBusy&&document.body.dataset.view==="reader"')
   for n in ([1,2,3,4,5,6,7,8] if w==390 else [1,8]):
    if n!=1:go(p,n)
    controls=boxes(p,'.chapter-space-controls button')
    check(f'{w}x{h}, chapter {n}: distinct 44px controls',len(controls)==4 and no_overlap(controls) and all(a['w']>=44 and a['h']>=44 for a in controls),controls)
    check(f'{w}x{h}, chapter {n}: no extra horizontal scrolling',p.evaluate('document.documentElement.scrollWidth<=innerWidth+1'))
    safe=p.evaluate('''()=>{const bar=document.querySelector('.reader-bottom-bar').getBoundingClientRect();return [...document.querySelectorAll('.chapter-space-controls button')].every(e=>{const r=e.getBoundingClientRect();return r.right<=innerWidth+.5 && r.left>=0 && (r.bottom<=bar.top+1 || r.top>=innerHeight);});}''')
    check(f'{w}x{h}, chapter {n}: controls do not straddle fixed reading bar',safe)
    expected=json.loads((ROOT/'src/chapters.json').read_text())[n-1]['paragraphs']
    check(f'{w}x{h}, chapter {n}: complete edited manuscript',p.locator('#reader-prose [data-paragraph]').count()==len(expected))
    if w==390 and n in [1,8]:p.screenshot(path=str(ROOT/f'design/v8-regression-mobile-chapter-{n}.png'))
    stable,samples=stable_tail(p,'#reader-view');check(f'{w}x{h}, chapter {n}: no growing bottom overflow',stable and abs(samples[-1]['h']-samples[-1]['bottom'])<2,samples)
   if w==390:
    p.screenshot(path=str(ROOT/'design/v8-regression-mobile-last-line.png'))
   c.close()
  # Actual touch interaction, independent transport and return.
  c,p=load(b)
  p.locator('#explore-universe').tap();check('Touch opens exploration without JS errors',p.evaluate('PossibilityCosmos.getState().exploring'))
  p.locator('[data-select-star="3"]').tap();check('Star selection survives simplified cover',p.evaluate('PossibilityCosmos.getState().selected')==3)
  p.locator('#exit-universe').tap()
  go(p,1);old=p.evaluate('PossibilityCosmos.getState().reader.zoom');p.locator('#chapter-zoom-in').tap();check('Mobile plus changes actual camera zoom',p.evaluate('PossibilityCosmos.getState().reader.zoom')>old)
  p.locator('#chapter-reset').tap();check('Mobile reset restores camera',p.evaluate('PossibilityCosmos.getState().reader.zoom')==1)
  p.locator('#chapter-motion').tap();check('Mobile pause toggles actual motion',not p.evaluate('PossibilityCosmos.getState().reader.auto'))
  go(p,8);bottom(p);before=snap(p)
  p.locator('.continuum-trigger').tap();p.wait_for_timeout(600)
  check('Entry still crossfades the live reading surface',p.evaluate('SceneFlow.getState().phase==="entering"&&SceneFlow.getState().progress>0&&SceneFlow.getState().progress<1'))
  p.wait_for_function('BigBang.getState()?.started&&SceneFlow.getState().phase==="playing"');p.wait_for_timeout(1700)
  a=p.evaluate('BigBang.getState()');check('Real touch starts animated ending',a['time']>.8 and a['frames']>5,a)
  check('Fullscreen is the same document and history',p.evaluate('({url:location.href,history:history.length})')=={'url':before['url'],'history':before['history']})
  check('Fullscreen geometry fits mobile viewport',p.locator('#ending-view').evaluate('(e)=>{const r=e.getBoundingClientRect();return Math.abs(r.top)<1&&Math.abs(r.left)<1&&Math.abs(r.width-innerWidth)<1&&Math.abs(r.height-innerHeight)<1;}'))
  check('Ending blocks background scroll',p.evaluate('scrollY===0 && document.body.style.position==="fixed"'))
  p.evaluate('window.__soundTime=NovelSound.filmTime;NovelSound.filmTime=()=>0')
  t=p.evaluate('BigBang.getState().time');p.wait_for_timeout(1100)
  check('Frozen audio clock cannot freeze the mobile film',p.evaluate('BigBang.getState().time')>t+.6)
  p.evaluate('NovelSound.filmTime=window.__soundTime')
  p.evaluate('()=>{window.__sync=NovelSound.syncFilm;NovelSound.syncFilm=()=>{throw new Error("Injected audio failure")};}')
  t=p.evaluate('BigBang.getState().time');p.wait_for_timeout(700)
  check('Audio callback failure cannot halt drawing',p.evaluate('BigBang.getState().time')>t+.35)
  p.evaluate('()=>{NovelSound.syncFilm=window.__sync;}')
  if WEBGL:
   check('Live shader actually compiled',p.evaluate('BigBang.getState().renderer==="webgl"'),p.evaluate('BigBang.getState()'))
   p.evaluate('document.querySelector("#bigbang-canvas").getContext("webgl").getExtension("WEBGL_lose_context").loseContext()')
   p.wait_for_function('BigBang.getState().renderer==="canvas2d"');t=p.evaluate('BigBang.getState().time');p.wait_for_timeout(850)
   check('Graphics loss switches to a continuing animation',p.evaluate('BigBang.getState().time')>t+.35)
  p.touchscreen.tap(12,120);p.locator('#bigbang-pause').tap();t=p.evaluate('BigBang.getState().time');p.wait_for_timeout(450)
  check('Pause stops the visual transport',abs(p.evaluate('BigBang.getState().time')-t)<.01)
  p.locator('#bigbang-pause').tap();p.wait_for_timeout(450);check('Resume continues from same time',p.evaluate('BigBang.getState().time')>t+.2)
  close(p);check('Close restores exact scroll, height and URL',snap(p)==before,{'before':before,'after':snap(p)})
  check('Close returns focus to the last light',p.evaluate('document.activeElement.matches(".continuum-trigger")'))
  check('No running ending remains underneath',not p.evaluate('BigBang.getState().active'))
  # Never-resolving audio preparation is a regression fixture, not a browser-specific claim.
  p.evaluate('()=>{window.__prepare=NovelSound.prepareEnding;NovelSound.prepareEnding=()=>new Promise(()=>{});}')
  p.locator('.continuum-trigger').tap();p.wait_for_function('BigBang.getState()?.started&&SceneFlow.getState().phase==="playing"');p.wait_for_timeout(1100)
  check('Pending audio preparation cannot block entry',p.evaluate('BigBang.getState().time')>.7)
  close(p);p.evaluate('()=>{NovelSound.prepareEnding=window.__prepare;}')
  # Cancel mid-transition and reopen: no stale promise may restart it after closing.
  p.locator('.continuum-trigger').tap();p.wait_for_timeout(200);close(p);p.wait_for_timeout(1600)
  check('Early cancellation does not restart an invisible ending',not p.evaluate('BigBang.getState().active') and snap(p)==before)
  # Theme regression: requested in previous iteration, kept here.
  for theme in ['paper','light','dark']:
   p.locator('#settings-open').tap();p.locator(f'[data-theme="{theme}"]').tap();p.keyboard.press('Escape');p.locator('#menu-open').tap()
   check(f'{theme}: menu and navigation share one surface',p.evaluate('getComputedStyle(document.querySelector("#contents-dialog")).backgroundColor===getComputedStyle(document.querySelector(".reader-bottom-bar")).backgroundColor'))
   p.keyboard.press('Escape')
  c.close()
  if not WEBGL:
   # Full playback: no seek shortcut substitutes for advancement through all four acts.
   c,p=load(b);end(p);p.wait_for_function('BigBang.getState().time>7',timeout=15000)
   p.screenshot(path=str(ROOT/'design/v8-regression-mobile-ending.png'))
   p.wait_for_function('BigBang.getState().finished',timeout=35000)
   check('Mobile ending reaches its final words without seeking',p.evaluate('BigBang.getState().time===28') and p.locator('#ending-finale').is_visible())
   p.locator('#bigbang-replay').tap();p.wait_for_timeout(800);check('Replay restarts on touch',0<p.evaluate('BigBang.getState().time')<3)
   close(p);c.close()
   c,p=load(b,reduced='reduce');end(p)
   check('Reduced-motion preference deliberately shows a still ending',p.evaluate('BigBang.getState().still&&BigBang.getState().finished'))
   close(p);c.close()
  b.close()
except Exception as e:
 report['errors'].append(str(e));print('EXCEPTION',traceback.format_exc(),flush=True)
finally:
 check('No uncaught JavaScript or test errors',not report['errors'],report['errors'])
 report['summary']={'passed':sum(x['pass'] for x in report['checks']),'total':len(report['checks'])};flush()
 print(report['summary'],flush=True)
