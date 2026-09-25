"""Additional checks of the unmodified HTML with headed Chromium + WebGL.
Requires DISPLAY (Xvfb works), Python Playwright, and /usr/bin/chromium.
"""
import os,json,time
from pathlib import Path
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[1]
report={'environment':'Headed Chromium / ANGLE SwiftShader (software WebGL, not a device benchmark)','checks':[],'errors':[]}
def check(n,ok,detail=None):
 report['checks'].append({'name':n,'pass':bool(ok),'details':detail});print(('PASS ' if ok else 'FAIL ')+n,flush=True)
 (ROOT/'tests/webgl-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2))
try:
 with sync_playwright() as p:
  b=p.chromium.launch(executable_path='/usr/bin/chromium',headless=False,args=['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader'])
  page=b.new_page(viewport={'width':1280,'height':900},device_scale_factor=1)
  page.set_default_timeout(25000)
  page.on('pageerror',lambda e:report['errors'].append(str(e)))
  page.route('https://fonts.**/*',lambda r:r.abort())
  page.set_content((ROOT/'index.html').read_text(),wait_until='domcontentloaded')
  page.evaluate('document.querySelector("#chapter-list [data-chapter=\\"8\\"]").click()')
  page.wait_for_function('!SceneFlow.getState().navigationBusy&&document.querySelector(".continuum-trigger")')
  page.locator('.continuum-trigger').scroll_into_view_if_needed()
  before=page.evaluate('({y:scrollY,url:location.href})')
  page.locator('.continuum-trigger').click()
  page.wait_for_function('SceneFlow.getState().phase==="playing"&&BigBang.getState().started',timeout=30000)
  check('Original live WebGL renderer compiles and starts',page.evaluate('BigBang.getState().renderer==="webgl"'),page.evaluate('BigBang.getState()'))
  page.evaluate('BigBang.seek(8)');page.wait_for_timeout(750)
  page.screenshot(path=str(ROOT/'design/v6-universe.png'))
  check('Full-screen projection reaches the normal camera scale',page.evaluate('BigBang.getState().entrance===1'))
  page.evaluate('BigBang.seek(28)');page.wait_for_timeout(2000)
  page.screenshot(path=str(ROOT/'design/v6-finale.png'))
  check('Final words remain available',page.locator('#ending-finale').is_visible())
  page.mouse.move(1230,45);page.locator('#ending-close').click();page.wait_for_timeout(650)
  detail=page.evaluate('''()=>{const r=document.querySelector('#transition-core').getBoundingClientRect();const c=BigBang.getCenter();return {phase:SceneFlow.getState().phase,error:Math.hypot(r.left+r.width/2-c[0]*innerWidth,r.top+r.height/2-c[1]*innerHeight),textOpacity:getComputedStyle(document.querySelector('#ending-finale')).opacity};}''')
  check('Return light follows the actual final-universe center',detail['error']<1,detail)
  check('Finale text dissolves during return',float(detail['textOpacity'])<.1,detail)
  page.screenshot(path=str(ROOT/'design/v6-return-webgl.png'))
  page.wait_for_function('!document.querySelector("#ending-view").open')
  check('WebGL return restores the reading position',before==page.evaluate('({y:scrollY,url:location.href})'))
  check('WebGL is stopped after return',not page.evaluate('BigBang.getState().active'))
  b.close()
except Exception as e:
 report['errors'].append(str(e));print('EXCEPTION',str(e),flush=True)
finally:
 check('No uncaught WebGL/JavaScript test errors',not report['errors'],report['errors'])
 report['summary']={'passed':sum(c['pass'] for c in report['checks']),'total':len(report['checks'])}
 (ROOT/'tests/webgl-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2))
