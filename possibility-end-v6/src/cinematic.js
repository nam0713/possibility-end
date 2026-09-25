/* Continuity, not a second page.
 * One shared point links the reading surface to the live universe and back.
 * All work stays local. Motion is cancellable, time-based and reduced-motion aware.
 */
(() => {
  'use strict';
  const $=id=>document.getElementById(id);
  const reduce=matchMedia('(prefers-reduced-motion: reduce)');
  const view=$('ending-view'), curtain=$('page-curtain');
  const clamp=(x,a=0,b=1)=>Math.min(b,Math.max(a,x));
  const ease=x=>x*x*(3-2*x);
  const span=(a,b,x)=>ease(clamp((x-a)/(b-a)));
  const lerp=(a,b,t)=>a+(b-a)*t;
  let controller=null, origin=[.5,.6], lineRect=null, source=null, line=null;
  let saved=[], state={phase:'idle',progress:0}, idleTimer=0;
  let navigationBusy=false, pendingNavigation=null;
  const snapshot=(node,props)=>{
    if(!node)return;
    const values=Object.fromEntries(props.map(p=>[p,node.style.getPropertyValue(p)]));
    saved.push(()=>Object.entries(values).forEach(([p,v])=>v?node.style.setProperty(p,v):node.style.removeProperty(p)));
  };
  function tween(duration,update,signal){
    return new Promise(resolve=>{
      if(signal?.aborted){resolve(false);return;}
      if(duration===0){update(1);resolve(true);return;}
      let id=0,last=0,elapsed=0,done=false;
      const finish=ok=>{if(done)return;done=true;cancelAnimationFrame(id);signal?.removeEventListener('abort',abort);document.removeEventListener('visibilitychange',visibility);resolve(ok);};
      const abort=()=>finish(false);
      const visibility=()=>{last=0;};
      document.addEventListener('visibilitychange',visibility);
      signal?.addEventListener('abort',abort,{once:true});
      function tick(now){
        if(signal?.aborted){finish(false);return;}
        // Do not skip the transition if a tab was backgrounded mid-frame.
        if(!document.hidden)elapsed+=last?now-last:0;
        last=now;
        const t=clamp(elapsed/duration);update(t);
        if(t>=1)finish(true);else id=requestAnimationFrame(tick);
      }
      update(0);id=requestAnimationFrame(tick);
    });
  }
  function fresh(){controller?.abort();controller=new AbortController();return controller.signal;}
  function underlying(p){
    const article=document.body.dataset.view==='reader'?$('reader-article'):$('home-view');
    const e=ease(p);
    if(article){
      article.style.opacity=String(1-span(.12,.84,p));
      article.style.transform=`translate3d(0,${-16*e}px,0) scale(${1+.022*e})`;
      article.style.filter=`blur(${1.6*e}px)`;
    }
    for(const el of document.querySelectorAll('.site-header,.reader-toolbar,.reader-bottom-bar')){
      el.style.opacity=String(1-span(0,.33,p));
    }
  }
  function paint(p){
    state.progress=p;
    const e=ease(p),target=[innerWidth<=760?.52:.5,innerWidth<=760?.53:.49];
    const x=lerp(origin[0],target[0],e)*innerWidth,y=lerp(origin[1],target[1],e)*innerHeight;
    const core=$('transition-core');
    core.style.left=`${x}px`;core.style.top=`${y}px`;
    core.style.opacity=String(1-span(.24,.76,p));
    core.style.transform=`translate(-50%,-50%) scale(${1+e*2.4})`;
    const verse=$('transition-verse');
    if(lineRect){
      verse.style.transform=`translate(-50%,-50%) translateY(${-18*e}px) scale(${1+.018*e})`;
      verse.style.opacity=String(1-span(.04,.53,p));
    }else verse.style.opacity='0';
    view.style.setProperty('--scene-alpha',String(span(.11,.94,p)));
    underlying(p);
    window.BigBang?.setEntrance(reduce.matches?1:e,origin);
    const center=window.BigBang?.getCenter?.();
    if(center){core.style.left=`${center[0]*innerWidth}px`;core.style.top=`${center[1]*innerHeight}px`;}
    if(reduce.matches){core.style.opacity='0';verse.style.opacity=String(1-p);}
  }
  function prime(node){
    reset();
    source=node?.closest?.('.continuum-trigger')||document.querySelector('.continuum-trigger');
    const dot=source?.querySelector('.seed-core');
    const r=dot?.getBoundingClientRect();
    const visible=r&&r.top>=48&&r.bottom<=innerHeight-30&&r.left>=0&&r.right<=innerWidth;
    origin=visible?[(r.left+r.width/2)/innerWidth,(r.top+r.height/2)/innerHeight]:[.5,.63];
    source=visible?source:null;
    line=source?.querySelector('.continuum-line');lineRect=line?.getBoundingClientRect()||null;
    const article=document.body.dataset.view==='reader'?$('reader-article'):$('home-view');
    snapshot(article,['opacity','transform','transform-origin','filter']);
    if(article){const a=article.getBoundingClientRect();article.style.transformOrigin=`${origin[0]*innerWidth-a.left}px ${origin[1]*innerHeight-a.top}px`;}
    for(const el of document.querySelectorAll('.site-header,.reader-toolbar,.reader-bottom-bar'))snapshot(el,['opacity']);
    if(source){snapshot(source,['visibility']);source.style.visibility='hidden';}
    const verse=$('transition-verse');
    if(lineRect){
      const style=getComputedStyle(line);
      verse.textContent=line.textContent;
      verse.style.left=`${lineRect.left+lineRect.width/2}px`;verse.style.top=`${lineRect.top+lineRect.height/2}px`;
      for(const p of ['font-family','font-size','font-weight','letter-spacing','line-height','color'])verse.style.setProperty(p,style.getPropertyValue(p));
    }
    view.classList.add('is-entering');view.classList.remove('is-returning','cinema-idle');
    view.style.setProperty('--scene-alpha','0');state={phase:'entering',progress:0};paint(0);
  }
  async function enter(){
    const signal=fresh();
    const ok=await tween(reduce.matches?240:2100,t=>paint(t),signal);
    if(!ok)return false;
    state.phase='playing';view.classList.remove('is-entering');wake();return true;
  }
  async function exit(){
    const from=state.progress,signal=fresh();
    state.phase='returning';view.classList.remove('is-entering','cinema-idle');view.classList.add('is-returning');
    clearTimeout(idleTimer);window.BigBang?.holdForTransition();
    const ok=await tween(reduce.matches?180:Math.max(300,from*1700),t=>paint(from*(1-t)),signal);
    if(ok)state.phase='closed';return ok;
  }
  function reset(){
    controller?.abort();controller=null;clearTimeout(idleTimer);
    saved.splice(0).reverse().forEach(restore=>restore());
    view.classList.remove('is-entering','is-returning','cinema-idle');
    view.style.removeProperty('--scene-alpha');
    $('transition-core').style.opacity='0';$('transition-verse').style.opacity='0';
    source=null;line=null;lineRect=null;state={phase:'idle',progress:0};
  }
  function wake(){
    if(state.phase!=='playing')return;
    clearTimeout(idleTimer);view.classList.remove('cinema-idle');
    idleTimer=setTimeout(()=>{
      if(view.open&&!view.classList.contains('is-finished')&&!view.querySelector('.sound-panel:not([hidden])')&&!view.querySelector('button:focus-visible'))view.classList.add('cinema-idle');
    },2600);
  }
  for(const event of ['pointermove','pointerdown','keydown','focusin'])view.addEventListener(event,wake,{passive:true});
  // Content navigation: the old scene leaves before the new one is revealed.
  // A queued request replaces an uncommitted destination rather than flashing two pages.
  async function change(task){
    pendingNavigation=task;
    if(navigationBusy)return;
    navigationBusy=true;
    try{
      while(pendingNavigation){
        let old=document.body.dataset.view==='reader'?$('reader-view'):$('home-view');
        const oldOpacity=old.style.opacity,oldTransform=old.style.transform;
        curtain.hidden=false;curtain.style.opacity='0';document.body.classList.add('scene-changing');
        await tween(reduce.matches?90:260,t=>{
          const p=ease(t);curtain.style.opacity=String(p);old.style.opacity=String(1-p*.8);old.style.transform=`translateY(${-12*p}px)`;
        });
        old.style.opacity=oldOpacity;old.style.transform=oldTransform;
        const apply=pendingNavigation;pendingNavigation=null;apply();
        await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
        let next=document.body.dataset.view==='reader'?$('reader-view'):$('home-view');
        const nextOpacity=next.style.opacity,nextTransform=next.style.transform;
        await tween(reduce.matches?120:540,t=>{
          const p=ease(t);curtain.style.opacity=String(1-p);next.style.opacity=String(p);next.style.transform=`translateY(${18*(1-p)}px)`;
        });
        next.style.opacity=nextOpacity;next.style.transform=nextTransform;
        curtain.hidden=true;document.body.classList.remove('scene-changing');
      }
    } finally {navigationBusy=false;curtain.hidden=true;document.body.classList.remove('scene-changing');}
  }
  window.SceneFlow={prime,enter,exit,reset,wake,change,getState:()=>({...state,navigationBusy,origin:[...origin]})};
})();
