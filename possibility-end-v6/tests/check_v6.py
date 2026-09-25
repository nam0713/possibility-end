"""Local browser checks. Run after npm run build; requires Python Playwright + Chromium.
The container blocks URL navigation, so the exact delivered HTML is loaded via set_content.
All viewports here are desktop Chromium emulations, not physical phone certification.
"""
from pathlib import Path
from playwright.sync_api import sync_playwright
import json,hashlib,time,os
ROOT=Path(__file__).resolve().parents[1]
HTML=(ROOT/'index.html').read_text()
report={'environment':'Chromium / exact generated document via set_content','checks':[],'errors':[],'html_sha256':hashlib.sha256(HTML.encode()).hexdigest()}
def check(name,ok,details=None):
 item={'name':name,'pass':bool(ok)}
 if details is not None:item['details']=details
 report['checks'].append(item)
 print(('PASS ' if ok else 'FAIL ')+name,flush=True)
 (ROOT/'tests/v6-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2))
def state(p):return p.evaluate('NovelSound.getState()')
def snapshot(p):return p.evaluate('({url:location.href,y:scrollY,history:history.length,view:document.body.dataset.view})')
def load(b,w=1280,h=900,reduced=False,noaudio=False,gate=False):
 c=b.new_context(viewport={'width':w,'height':h},device_scale_factor=1,reduced_motion='reduce' if reduced else 'no-preference')
 p=c.new_page();p.set_default_timeout(12000)
 p.on('pageerror',lambda e:report['errors'].append(str(e)))
 # Test storage writes explicitly without pretending about:blank has persistent origin storage.
 p.evaluate('''()=>{window.__saved={seed:true};window.__writes=[];Object.defineProperty(window,'localStorage',{configurable:true,value:{getItem:()=>JSON.stringify(window.__saved),setItem:(k,v)=>{window.__saved=JSON.parse(v);window.__writes.push(window.__saved);}}});}''')
 if noaudio:p.evaluate('window.AudioContext=undefined;window.webkitAudioContext=undefined')
 if gate:
  p.evaluate('''()=>{
   const Base=window.AudioContext;window.__contexts=[];window.__gate=true;
   window.AudioContext=class extends Base{
    constructor(...args){super(...args);window.__contexts.push(this);this.__wait=[];super.suspend();}
    get state(){return (window.__gate||!this.__resumed)?'suspended':super.state;}
    resume(){if(window.__gate)return new Promise(r=>this.__wait.push(r));this.__resumed=true;return super.resume().then(()=>{for(const r of this.__wait.splice(0))r();});}
   };
   document.addEventListener('click',e=>{if(e.isTrusted)window.__gate=false;},{capture:true});
  }''')
 p.route('https://fonts.**/*',lambda r:r.abort())
 p.set_content(HTML,wait_until='domcontentloaded');p.wait_for_timeout(250)
 if gate:p.evaluate("window.addEventListener('click',e=>{if(e.isTrusted)window.__gate=false;},{capture:true})")
 return c,p

def go(p,n):
 p.evaluate('(n)=>document.querySelector(`#chapter-list [data-chapter="${n}"]`).click()',n)
 p.wait_for_function('(n)=>!SceneFlow.getState().navigationBusy&&document.querySelector("#reader-art").dataset.chapter==n',arg=str(n))
def tail(p):
 go(p,8);p.locator('.continuum-trigger').scroll_into_view_if_needed()
 p.evaluate('scrollTo({top:document.documentElement.scrollHeight-innerHeight,behavior:"instant"})');p.wait_for_timeout(100)
def open_end(p):
 p.locator('.continuum-trigger').click();p.wait_for_function('BigBang.getState()?.started&&SceneFlow.getState().phase==="playing"',timeout=15000)
def close_end(p):
 p.keyboard.press('Escape');p.wait_for_function('!document.querySelector("#ending-view").open',timeout=12000)

try:
 with sync_playwright() as pw:
  b=pw.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader'])
  c,p=load(b)
  check('Default sound intent is on',state(p)['enabled'])
  p.locator('.primary-link').click();p.wait_for_function('!SceneFlow.getState().navigationBusy&&document.body.dataset.view==="reader"')
  p.wait_for_function('NovelSound.getState().loaded&&NovelSound.getState().context==="running"')
  p.wait_for_timeout(500)
  check('Ordinary story click plays the embedded score without a sound opt-in',state(p)['outputRms']>1e-5,state(p))
  source=json.loads((ROOT/'src/chapters.json').read_text())
  for n in range(1,9):
   go(p,n)
   texts=p.locator('#reader-prose [data-paragraph]').count()
   check(f'Chapter {n}: all original text blocks',texts==len(source[n-1]['paragraphs']))
  check('No ending shortcut in the persistent navigation',p.locator('#next-chapter').is_hidden())
  check('The last action contains only a narrative sentence',p.locator('.continuum-trigger').inner_text().strip()=='단 하나의 가능성.')
  check('Explanatory ending-launch card removed',p.locator('.ending-portal,.portal-link').count()==0)
  check('No separate ending page links',p.locator('a[href="#ending"],a[href="ending.html"]').count()==0)
  for theme in ['dark','paper','light']:
   p.locator('#settings-open').click();p.locator(f'[data-theme="{theme}"]').click()
   colors=p.evaluate('''()=>({reader:getComputedStyle(document.body).getPropertyValue('--reader-bg').trim(),settings:getComputedStyle(document.querySelector('#settings-dialog')).backgroundColor})''')
   p.keyboard.press('Escape');p.locator('#menu-open').click();p.wait_for_timeout(250)
   match=p.evaluate('getComputedStyle(document.querySelector("#contents-dialog")).backgroundColor===getComputedStyle(document.querySelector("#reader-view")).backgroundColor')
   # The reader container is transparent; compare a themed fixed reading bar instead.
   colors['menu']=p.locator('#contents-dialog').evaluate('(e)=>getComputedStyle(e).backgroundColor')
   colors['bar']=p.locator('.reader-bottom-bar').evaluate('(e)=>getComputedStyle(e).backgroundColor')
   check(f'{theme}: navigation and settings use the reading surface color',colors['settings']==colors['menu']==colors['bar'],colors)
   check(f'{theme}: selected chapter has no legacy orange ink',p.locator('#dialog-chapters [aria-current="page"] .row-title').evaluate('(e)=>getComputedStyle(e).color')==p.locator('#contents-dialog').evaluate('(e)=>getComputedStyle(e).color'))
   p.keyboard.press('Escape')
  p.locator('#settings-open').click();p.locator('[data-theme="dark"]').click();p.keyboard.press('Escape')
  tail(p);before=snapshot(p)
  p.locator('.continuum-trigger').click();p.wait_for_timeout(500)
  info=p.evaluate('({state:SceneFlow.getState(),alpha:getComputedStyle(document.querySelector("#bigbang-canvas")).opacity,article:getComputedStyle(document.querySelector("#reader-article")).opacity,backdrop:getComputedStyle(document.querySelector("#ending-view"),"::backdrop").backgroundColor})')
  check('Entry is an overlapping scene animation, not an instant replacement',info['state']['phase']=='entering' and 0<float(info['alpha'])<1 and 0<float(info['article'])<1,info)
  check('No opaque modal backdrop cuts in',info['backdrop']=='rgba(0, 0, 0, 0)',info['backdrop'])
  p.wait_for_function('SceneFlow.getState().phase==="playing"&&BigBang.getState().started')
  check('Entry retains URL, history and scroll',snapshot(p)==before,{'before':before,'after':snapshot(p)})
  check('The source sentence remains underneath, rather than being replaced',p.locator('#reader-prose [data-paragraph]').count()==len(source[7]['paragraphs']))
  check('Ending fills viewport',p.locator('#ending-view').evaluate('(e)=>{const r=e.getBoundingClientRect();return Math.abs(r.width-innerWidth)<1&&Math.abs(r.height-innerHeight)<1&&Math.abs(r.top)<1;}'))
  p.wait_for_timeout(500)
  check('Ending score output exists',state(p)['outputRms']>1e-5)
  check('Sound and film share time',p.evaluate('Math.abs(BigBang.getState().time-NovelSound.filmTime())')<.25)
  p.mouse.move(15,15);p.locator('#bigbang-pause').click();t=p.evaluate('BigBang.getState().time');p.wait_for_timeout(350)
  check('Pause holds film',abs(p.evaluate('BigBang.getState().time')-t)<.01)
  p.locator('#bigbang-pause').click();p.wait_for_timeout(350)
  check('Resume preserves score continuity',p.evaluate('BigBang.getState().time')>t)
  p.locator('#ending-close').click();p.wait_for_timeout(700)
  info=p.evaluate('({state:SceneFlow.getState(),alpha:getComputedStyle(document.querySelector("#bigbang-canvas")).opacity,article:getComputedStyle(document.querySelector("#reader-article")).opacity})')
  check('Exit is a reverse overlapping scene animation',info['state']['phase']=='returning' and 0<float(info['alpha'])<1 and 0<float(info['article'])<1,info)
  p.wait_for_function('!document.querySelector("#ending-view").open')
  check('Return restores the exact reading location',snapshot(p)==before)
  check('Keyboard focus returns to the light',p.evaluate('document.activeElement.matches(".continuum-trigger")'))
  check('Return disposes of ending playback',not p.evaluate('BigBang.getState().active') and not state(p)['scoreActive'])
  # Cancelling during the opening pass must not start an invisible film later.
  p.locator('.continuum-trigger').click();p.wait_for_timeout(350);p.keyboard.press('Escape');p.wait_for_function('!document.querySelector("#ending-view").open');p.wait_for_timeout(1500)
  check('Escape during entry cancels the future start',not p.evaluate('BigBang.getState().active') and not state(p)['scoreActive'])
  check('Cancellation still restores scroll and focus',snapshot(p)==before and p.evaluate('document.activeElement.matches(".continuum-trigger")'))
  p.locator('#header-sound-toggle').click();p.mouse.click(50,120);p.wait_for_timeout(300)
  check('Explicit mute overrides default-on',not state(p)['enabled'] and state(p)['choice']=='off')
  open_end(p);p.wait_for_timeout(450)
  check('A muted ending still advances visually',not state(p)['enabled'] and p.evaluate('BigBang.getState().time')>.2)
  close_end(p)
  check('No ending participation or audio choice is persisted',p.evaluate('window.__writes.every(s=>!["seed","ending","light","count","sound","volume"].some(k=>k in s))'))
  for w,h in [(320,740),(390,844),(768,1024),(1440,1000),(1920,1080)]:
   p.set_viewport_size({'width':w,'height':h});go(p,1)
   check(f'{w}px: no horizontal overflow',p.evaluate('document.documentElement.scrollWidth<=innerWidth+1'))
   p.locator('#menu-open').click();p.wait_for_timeout(250)
   r=p.locator('#contents-dialog').bounding_box();check(f'{w}px: themed menu stays within screen',r['x']>=0 and r['x']+r['width']<=w+1 and r['y']>=0 and r['y']+r['height']<=h+1,r)
   if w==390:p.screenshot(path=str(ROOT/'design/v6-menu-mobile.png'))
   if w==1440:p.screenshot(path=str(ROOT/'design/v6-menu-desktop.png'))
   p.keyboard.press('Escape');tail(p)
   if w==390:p.screenshot(path=str(ROOT/'design/v6-before-mobile.png'))
   if w==1440:p.screenshot(path=str(ROOT/'design/v6-before.png'))
   before=snapshot(p);open_end(p)
   check(f'{w}px: ending covers the viewport',p.locator('#ending-view').evaluate('(e)=>{const r=e.getBoundingClientRect();return Math.abs(r.width-innerWidth)<1&&Math.abs(r.height-innerHeight)<1;}'))
   close_end(p);check(f'{w}px: reading position survives the round trip',snapshot(p)==before)
  c.close()
  # Autoplay-restriction emulation is intentionally reported as emulation.
  c,p=load(b,gate=True);p.wait_for_timeout(250)
  check('Simulated autoplay block keeps on-intent without producing output',state(p)['enabled'] and state(p)['context']=='suspended',state(p))
  p.locator('.primary-link').click();p.wait_for_function('NovelSound.getState().context==="running"&&NovelSound.getState().ambientActive')
  check('First trusted story click releases a blocked context',state(p)['enabled'] and state(p)['loaded'])
  c.close()
  # Muting before unlock is the difficult lifecycle: visuals must never await frozen audio.
  c,p=load(b,gate=True);p.locator('#header-sound-toggle').click();go(p,8);p.locator('.continuum-trigger').scroll_into_view_if_needed();open_end(p);p.wait_for_timeout(600)
  check('Mute before autoplay unlock cannot freeze the ending',not state(p)['enabled'] and p.evaluate('BigBang.getState().time')>.4)
  close_end(p);c.close()
  c,p=load(b,reduced=True);tail(p);open_end(p)
  check('Reduced-motion opens a static finale',p.evaluate('BigBang.getState().finished&&BigBang.getState().still'))
  check('Reduced-motion avoids explosion audio',not state(p)['scoreActive'])
  close_end(p);c.close()
  c,p=load(b,noaudio=True);tail(p);open_end(p);p.wait_for_timeout(350)
  check('Missing Web Audio never blocks story or ending',p.evaluate('BigBang.getState().time')>.2 and not state(p)['enabled'])
  close_end(p);c.close();b.close()
except Exception as e:
 report['errors'].append(str(e));print('TEST EXCEPTION',str(e),flush=True)
finally:
 check('No uncaught JavaScript exceptions or test interruptions',not report['errors'],report['errors'])
 report['summary']={'passed':sum(x['pass'] for x in report['checks']),'total':len(report['checks'])}
 (ROOT/'tests/v6-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2))
 print(json.dumps(report['summary']),flush=True)
