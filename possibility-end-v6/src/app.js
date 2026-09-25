(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const chapters = JSON.parse($('novel-data').textContent);
  const pad = n => String(n).padStart(2, '0');
  const clamp = (n, lo, hi) => Math.min(hi, Math.max(lo, n));
  const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const richText = text => escapeHTML(text).replace(/10\^\{(\d+)\}/g, '10<sup>$1</sup>').replace(/\n/g, '<br>');
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  const key = 'possibility-end-edition-v2';
  // Failure to access localStorage never prevents reading (private mode/file restrictions).
  let storageAvailable = true;
  let raw = {};
  try { raw = JSON.parse(localStorage.getItem(key) || '{}') || {}; }
  catch { storageAvailable = false; }
  const validPosition = value => value && Number.isInteger(value.chapter) && value.chapter >= 1 && value.chapter <= 8 && Number.isInteger(value.paragraph) && value.paragraph >= 0 && value.paragraph < chapters[value.chapter - 1].paragraphs.length;
  const state = {
    size: [16,18,20,22,24,26].includes(raw.size) ? raw.size : (window.innerWidth <= 760 ? 18 : 20),
    font: raw.font === 'serif' ? 'serif' : 'sans',
    theme: ['paper','light','dark'].includes(raw.theme) ? raw.theme : 'dark',
    paused: typeof raw.paused === 'boolean' ? raw.paused : media.matches,
    position: validPosition(raw.position) ? {...raw.position, percent: clamp(Number(raw.position.percent) || 0, 0, 100)} : null,
    bookmark: validPosition(raw.bookmark) ? raw.bookmark : null,
    completed: Array.isArray(raw.completed) ? raw.completed.filter(n => Number.isInteger(n) && n > 0 && n < 9) : []
  };
  // Migrate the old participation flag out of storage; endings have no saved state.
  if (storageAvailable && Object.prototype.hasOwnProperty.call(raw, 'seed')) {
    try { localStorage.setItem(key, JSON.stringify(state)); }
    catch { storageAvailable = false; }
  }
  let current = 0;
  let restoring = false;
  let scrollTimer;
  let toastTimer;
  let lastRoute = '';
  let homeScroll = 0;
  let activePosition = null;
  let navigationVersion = 0;
  let endingOpen=false, endingScroll=0, endingOpener=null;
  let endingRevision=0, endingClosing=null;
  function persist() {
    try { localStorage.setItem(key, JSON.stringify(state)); }
    catch { storageAvailable = false; }
  }
  function toast(text) {
    clearTimeout(toastTimer);
    $('toast').textContent = text;
    $('toast').classList.add('visible');
    toastTimer = setTimeout(() => $('toast').classList.remove('visible'), 2700);
  }
  function setText(id, text) { $(id).textContent = text; }

  // Original parametric illustrations. SVG, not an icon font or a downloaded asset.
  // Each diagram is decorative: the corresponding meaning is given in real text.
  const artCache = new Map();
  function plate(n) {
    if (artCache.has(n)) return artCache.get(n);
    let lines = '';
    const poly = (pts, opacity = .55, width = .65, color = 'currentColor') => `<polyline points="${pts.map(p => p.map(v => v.toFixed(2)).join(',')).join(' ')}" fill="none" stroke="${color}" stroke-opacity="${opacity}" stroke-width="${width}"/>`;
    const circle = (x,y,r,opacity=.4,color='currentColor',fill='none') => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${color}" stroke-opacity="${opacity}" stroke-width=".65"/>`;
    const rot = (x,y,z) => {
      const a=.67, b=-.34, c=-.3;
      const y1=y*Math.cos(a)-z*Math.sin(a), z1=y*Math.sin(a)+z*Math.cos(a);
      const x1=x*Math.cos(b)+z1*Math.sin(b);
      return [170+x1*Math.cos(c)-y1*Math.sin(c),170+x1*Math.sin(c)+y1*Math.cos(c)];
    };
    if(n===1) {
      for(let j=0;j<33;j++) {
        const v=j/33*Math.PI*2, pts=[];
        for(let i=0;i<=180;i++) { const u=i/180*Math.PI*2; pts.push(rot((91+35*Math.cos(v))*Math.cos(u),(91+35*Math.cos(v))*Math.sin(u),35*Math.sin(v))); }
        lines += poly(pts,.35+(Math.sin(v)+1)*.11,.65);
      }
      lines += circle(255,104,4,1,'#b77150','#b77150');
    } else if(n===2) {
      for(let z=-63;z<=63;z+=21) for(let y=-63;y<=63;y+=21) {
        lines += poly([rot(-63,y,z),rot(63,y,z)],.27,.65);
        lines += poly([rot(y,-63,z),rot(y,63,z)],.27,.65);
        lines += poly([rot(y,z,-63),rot(y,z,63)],.27,.65);
      }
      for(let x=-63;x<=63;x+=21) for(let y=-63;y<=63;y+=21) for(let z=-63;z<=63;z+=21) {
        const p=rot(x,y,z);lines += circle(p[0],p[1],1.15,.65,'currentColor','currentColor');
      }
    } else if(n===3) {
      for(let j=0;j<24;j++) {
        let pts=[];const v=j/24*Math.PI*2;
        for(let i=0;i<=180;i++) {
          const u=i/180*Math.PI*2, r=72+15*Math.cos(v);
          pts.push(rot(r*Math.cos(u)*(1+.4*Math.sin(3*u)),r*Math.sin(u)*(1+.4*Math.sin(3*u)),20*Math.sin(v)+38*Math.sin(3*u)));
        }
        lines += poly(pts,.46);
      }
    } else if(n===4) {
      for(let z=-1;z<=1;z++) for(let x=-1;x<=1;x++) for(let y=-1;y<=1;y++) {
        const a=rot(x*63,y*63,z*63);
        if(x<1)lines+=poly([a,rot((x+1)*63,y*63,z*63)],.25);
        if(y<1)lines+=poly([a,rot(x*63,(y+1)*63,z*63)],.25);
        if(z<1)lines+=poly([a,rot(x*63,y*63,(z+1)*63)],.25);
        lines+=circle(a[0],a[1],5,.65,'currentColor');
        lines+=circle(a[0],a[1],1.5,.7,'#b77150','#b77150');
      }
    } else if(n===5) {
      for(let j=0;j<28;j++) {
        const a=j/28*Math.PI, pts=[];
        for(let i=0;i<=180;i++) {
          const u=i/180*Math.PI*2;
          pts.push([170+112*Math.cos(u)*Math.cos(a)-32*Math.sin(u)*Math.sin(a),170+112*Math.cos(u)*Math.sin(a)+32*Math.sin(u)*Math.cos(a)]);
        }
        lines += poly(pts,.22);
      }
      lines+=circle(170,170,20,.8,'#b77150','none');
      lines+=circle(170,170,6,1,'#b77150','#b77150');
    } else if(n===6) {
      for(let center of [[91,126],[246,215]]) {
        for(let r=12;r<86;r+=11) lines+=circle(center[0],center[1],r,.5-r*.004);
        lines+=circle(center[0],center[1],3,1,'#b77150','#b77150');
      }
      lines+='<path d="M91 126L246 215" stroke="currentColor" stroke-dasharray="3 6" stroke-opacity=".4" stroke-width=".7"/>';
    } else if(n===7) {
      for(let j=0;j<39;j++) {
        const radius=26+j*2.6;let pts=[];
        for(let i=0;i<=210;i++) {const a=i/210*Math.PI*2;pts.push([170+radius*Math.cos(a),170+radius*Math.sin(a)*(1+.055*Math.sin(a*5+j*.1))]);}
        lines+=poly(pts,.8-j*.017,.7);
      }
      lines+=circle(170,170,3,1,'#b77150','#b77150');
    } else {
      for(let i=0;i<120;i++) {
        const a=i*2.39996, r=10+Math.sqrt(i)*10;
        const p=[170+Math.cos(a)*r,170+Math.sin(a)*r];
        if(i%2===0)lines+=poly([[170,170],p],.15,.6);
        lines+=circle(p[0],p[1],i%7===0?2.4:1,.3+(i%5)*.1,i%7===0?'#b77150':'currentColor',i%7===0?'#b77150':'currentColor');
      }
      lines+=circle(170,170,7,1,'#b77150','#b77150');
    }
    const art = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340" focusable="false" aria-hidden="true"><g fill="none"><path d="M170 16v17m0 274v17M16 170h17m274 0h17" stroke="currentColor" stroke-opacity=".3" stroke-width=".65"/>${lines}</g></svg>`;
    artCache.set(n,art);
    return art;
  }
  function previewChapter(n) {
    const c=chapters[n-1];
    $('preview-figure').dataset.chapter=n;
    if(window.CosmosScenes) window.CosmosScenes.preview(n); else $('preview-figure').innerHTML=plate(n);
    setText('preview-index',`FIG. ${pad(n)}`);
    setText('preview-caption',c.figure);
    $('preview-quote').innerHTML=richText(c.deck);
    document.querySelectorAll('#chapter-list .chapter-row').forEach(el=>el.classList.toggle('is-selected',Number(el.dataset.chapter)===n));
  }
  document.querySelectorAll('#chapter-list .chapter-row').forEach(el=> {
    el.addEventListener('mouseenter',()=>previewChapter(Number(el.dataset.chapter)));
    el.addEventListener('focus',()=>previewChapter(Number(el.dataset.chapter)));
  });
  previewChapter(1);

  function closeDialogs() { document.querySelectorAll('dialog[open]:not(#ending-view)').forEach(d=>d.close()); }
  function openDialog(id) {
    closeDialogs();
    if(id==='contents-dialog') {
      $('saved-location').hidden=!state.bookmark;
      for(const link of document.querySelectorAll('#dialog-chapters .chapter-row')) {
        const selected=Number(link.dataset.chapter)===current;
        if(selected)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');
        link.classList.toggle('is-selected',selected);
      }
    }
    document.body.style.overflow='hidden';
    $(id).showModal();
    if(!media.matches)$(id).animate([{opacity:0,transform:'translateY(10px)'},{opacity:1,transform:'translateY(0)'}],{duration:240,easing:'cubic-bezier(.22,1,.36,1)'});
  }
  $('menu-open').addEventListener('click',()=>openDialog('contents-dialog'));
  $('reader-menu-open').addEventListener('click',()=>openDialog('contents-dialog'));
  $('settings-open').addEventListener('click',()=>openDialog('settings-dialog'));
  for(const button of document.querySelectorAll('[data-close]'))button.addEventListener('click',()=>$(button.dataset.close).close());
  for(const dialog of document.querySelectorAll('dialog')){
    dialog.addEventListener('close',()=>{if(!document.querySelector('dialog[open]'))document.body.style.overflow='';});
  }
  for(const dialog of document.querySelectorAll('dialog'))dialog.addEventListener('click',e=>{
    if(e.target!==dialog)return;
    const r=dialog.getBoundingClientRect();
    if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();
  });

  function currentPosition() {
    if(!current) return null;
    const paragraphs=$('reader-prose').querySelectorAll('[data-paragraph]');
    let index=0;
    // Only on a throttled scroll event; not an animation loop.
    for(const p of paragraphs) { if(p.getBoundingClientRect().top<=145)index=Number(p.dataset.paragraph);else break; }
    const rect=$('reader-prose').getBoundingClientRect();
    const total=rect.height-window.innerHeight+160;
    const percent=Math.round(clamp((125-rect.top)/Math.max(1,total),0,1)*100);
    return {chapter:current,paragraph:index,percent};
  }
  function updateProgress(save=true) {
    if(!current||restoring||endingOpen)return;
    const pos=currentPosition();activePosition=pos;
    const p=pos.percent;
    $('top-progress').style.transform=`scaleX(${p/100})`;
    setText('reader-percent',`${p}% READ`);
    $('reader-menu-open').innerHTML=`${pad(current)} <span>／</span> 08 <span>·</span> ${p}%`;
    $('reader-menu-open').setAttribute('aria-label',`${current}장, ${p}% 읽음. 목차 열기`);
    if(p>=98&&!state.completed.includes(current))state.completed.push(current);
    if(save){state.position=pos;persist();}
  }
  function onScroll() {
    if(!current||restoring||endingOpen)return;
    clearTimeout(scrollTimer);
    scrollTimer=setTimeout(()=>updateProgress(true),120);
  }
  window.addEventListener('scroll',onScroll,{passive:true});
  window.addEventListener('pagehide',()=>{if(current&&!restoring)updateProgress(true);persist();});
  function renderResume() {
    const pos=state.position;
    $('resume-link').hidden=!pos;
    if(pos)$('resume-link').innerHTML=`${pad(pos.chapter)}. ${escapeHTML(chapters[pos.chapter-1].short)} · 이어서 읽기 <span aria-hidden="true">↗</span>`;
  }
  function updateBookmark() {
    const selected=!!state.bookmark&&state.bookmark.chapter===current;
    $('bookmark-button').setAttribute('aria-pressed',String(selected));
    $('bookmark-button').querySelector('span').textContent=selected?'책갈피 있음':'책갈피';
    $('bookmark-button').setAttribute('aria-label',selected?'이 장의 책갈피 해제':'현재 읽는 위치에 책갈피 추가');
  }
  function remember() {if(current&&!restoring&&!endingOpen){state.position=currentPosition();persist();}}
  function renderChapter(n, resume) {
    closeEnding(false);
    const version=++navigationVersion;
    if(!current)homeScroll=window.scrollY;
    remember();
    current=n;restoring=true;
    closeDialogs();
    document.body.dataset.view='reader';
    $('home-view').hidden=true;$('reader-view').hidden=false;$('ending-view').hidden=true;
    window.BigBang?.leave();
    const c=chapters[n-1];
    document.title=`${pad(n)}. ${c.title} — 가능성의 끝`;
    setText('header-edition',`${pad(n)} / 08　${c.short}`);
    setText('reader-chapter-meta',`CHAPTER ${pad(n)} / 08`);
    setText('reader-kicker',n===8?'마지막 장':c.kicker);
    setText('reader-title',c.short);
    $('reader-title').classList.toggle('long-title',n===8);
    setText('reader-deck',c.deck.replace(/\n/g,' '));
    setText('reader-english',c.english);
    setText('reader-time',`약 ${c.minutes}분`);
    $('reader-art').dataset.chapter=n;
    if(window.CosmosScenes) window.CosmosScenes.chapter(n); else $('reader-art').innerHTML=plate(n);
    document.dispatchEvent(new CustomEvent('novel:chapter',{detail:n}));
    setText('reader-aside-title',c.figure);
    document.querySelector('.autosave-label').textContent=storageAvailable?'읽던 곳이 자동 저장됩니다.':'저장 권한이 없어 현재 화면에서만 읽을 수 있습니다.';
    $('reader-prose').innerHTML=c.paragraphs.map((p,i)=>p==='✦'
      ?`<div class="scene-break" role="separator" aria-label="장면 전환" data-paragraph="${i}">· · ·</div>`
      :`<p data-paragraph="${i}" id="paragraph-${i}"${p===c.pull?' class="quoted"':''}>${richText(p)}</p>`).join('');
    const next=chapters[n];
    $('chapter-end').dataset.last=String(n===8);
    $('chapter-end').innerHTML=next
      ? `<span class="eyebrow">${pad(n+1)} / 08</span><a class="next-chapter-link" href="#chapter-${n+1}"><span>${escapeHTML(next.short)}</span><span class="next-arrow" aria-hidden="true">↗</span></a><div class="end-actions"><a href="#contents">목차</a><button class="quiet-button" id="share-chapter">링크 복사 ↗</button></div>`
      : `<div class="continuum"><button class="continuum-trigger" data-ending-open aria-haspopup="dialog" aria-label="마지막 빛을 펼치기. 빛이 확산되는 연출입니다."><span class="continuum-line">단 하나의 가능성.</span><span class="continuum-star" aria-hidden="true"><i class="seed-core"></i></span></button></div>`;
    $('share-chapter')?.addEventListener('click',copyChapter);
    $('previous-chapter').disabled=n===1;
    $('next-chapter').hidden=n===8;
    $('next-chapter').innerHTML='다음 장 <span aria-hidden="true">→</span>';
    updateBookmark();
    document.querySelector('meta[name="theme-color"]').content=state.theme==='dark'?'#0b0b0b':state.theme==='light'?'#fafaf7':'#eeeae0';
    // Reset without inheriting global smooth scrolling, then restore by paragraph.
    window.scrollTo({top:0,behavior:'instant'});
    $('reader-title').focus({preventScroll:true});
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      if(version!==navigationVersion)return;
      if(resume&&resume.chapter===n&&resume.paragraph>0) {
        const el=$(`paragraph-${resume.paragraph}`)||$('reader-prose').querySelector(`[data-paragraph="${resume.paragraph}"]`);
        if(el)window.scrollTo({top:window.scrollY+el.getBoundingClientRect().top-110,behavior:'instant'});
      }
      restoring=false;
      updateProgress(true);
    }));
  }
  function showHome(target='home') {
    closeEnding(false);
    ++navigationVersion;remember();clearTimeout(scrollTimer);current=0;restoring=false;
    closeDialogs();document.body.dataset.view='home';
    document.dispatchEvent(new Event('novel:home'));
    $('home-view').hidden=false;$('reader-view').hidden=true;$('ending-view').hidden=true;
    window.BigBang?.leave();
    document.title='가능성의 끝 — 여덟 개의 장, 하나의 질문';
    $('header-edition').innerHTML='AN ONLINE NOVEL <span>—</span> DIGITAL EDITION';
    document.querySelector('meta[name="theme-color"]').content='#050505';
    renderResume();
    requestAnimationFrame(()=>{
      if(current)return;
      if(target==='return')window.scrollTo({top:homeScroll,behavior:'instant'});
      else if(target==='contents'||target==='about')$(target).scrollIntoView({behavior:'instant',block:'start'});
      else window.scrollTo({top:0,behavior:'instant'});
    });
  }
  // The finale is a top-layer presentation of this page, never a route.
  // Underlying chapter DOM, URL, history, camera and exact scroll position survive.
  function showEnding(source) {
    if(endingOpen)return;
    remember();clearTimeout(scrollTimer);closeDialogs();
    endingScroll=window.scrollY;endingOpener=source||document.activeElement;
    endingOpen=true;endingClosing=null;const revision=++endingRevision;
    window.SceneFlow.prime(endingOpener);
    document.body.classList.add('ending-open');
    document.documentElement.classList.add('ending-open');
    const dialog=$('ending-view');dialog.hidden=false;dialog.showModal();
    document.dispatchEvent(new Event('novel:ending'));
    // The click grants audio permission while the visual passage is still beginning.
    window.NovelSound?.prepareEnding().catch(()=>{});
    window.BigBang?.enter();window.BigBang?.setEntrance(0,window.SceneFlow.getState().origin);
    window.SceneFlow.enter().then(ok=>{
      if(ok&&endingOpen&&revision===endingRevision)window.BigBang?.play();
    });
  }
  function closeEnding(restore=true) {
    if(!endingOpen)return Promise.resolve();
    if(endingClosing&&restore)return endingClosing;
    ++endingRevision;
    const finish=()=>{
      endingOpen=false;window.BigBang?.leave();
      const dialog=$('ending-view');if(dialog.open)dialog.close();dialog.hidden=true;
      window.SceneFlow.reset();
      document.body.classList.remove('ending-open');
      document.documentElement.classList.remove('ending-open');
      document.dispatchEvent(new Event('novel:ending-close'));
      if(restore){
        window.scrollTo({top:endingScroll,behavior:'instant'});
        endingOpener?.isConnected&&endingOpener.focus({preventScroll:true});
      }
      endingClosing=null;
    };
    if(!restore){finish();return Promise.resolve();}
    window.NovelSound?.beginReturn();
    endingClosing=window.SceneFlow.exit().then(ok=>{if(ok)finish();});
    return endingClosing;
  }
  $('ending-close').addEventListener('click',()=>closeEnding());
  $('ending-view').addEventListener('cancel',e=>{e.preventDefault();closeEnding();});
  $('ending-view').addEventListener('close',()=>{if(endingOpen)closeEnding(false);});
  document.addEventListener('click',e=>{
    const trigger=e.target.closest('[data-ending-open]');
    if(trigger){e.preventDefault();showEnding(trigger);}
  });
  function navigate(hash, resume=null, replace=false) {
    const match=/^#chapter-([1-8])$/.exec(hash);
    const allowed=match||['#home','#contents','#about'].includes(hash);
    if(!allowed)return;
    const apply=()=>{
      try {history[replace?'replaceState':'pushState'](null,'',hash);}catch{}
      lastRoute=hash;
      if(match)renderChapter(Number(match[1]),resume);
      else showHome(resume?.returnHome?'return':hash.slice(1));
    };
    closeDialogs();
    const change=()=>window.SceneFlow.change(apply);
    if(endingOpen)closeEnding().then(change);else change();
  }
  // Native anchors retain their targets for no-JavaScript readers and opening a new tab.
  document.addEventListener('click',event=>{
    const link=event.target.closest('a[href^="#"]');
    if(!link||event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
    const hash=link.getAttribute('href');
    if(hash==='#main')return;
    if(hash==='#reader-prose'){event.preventDefault();$('reader-prose').scrollIntoView({behavior:media.matches?'instant':'smooth',block:'start'});return;}
    if(/^#chapter-[1-8]$/.test(hash)||['#home','#contents','#about'].includes(hash)) {
      event.preventDefault();
      if(document.body.dataset.view==='home'&&['#contents','#about'].includes(hash)){
        closeDialogs();try{history.pushState(null,'',hash);}catch{}lastRoute=hash;
        $(hash.slice(1)).scrollIntoView({behavior:media.matches?'instant':'smooth'});
      }else navigate(hash);
    }
  });
  function historyRoute() {
    if(location.hash===lastRoute)return;
    const hash=location.hash;lastRoute=hash;
    const apply=()=>{
      const m=/^#chapter-([1-8])$/.exec(hash);
      if(m)renderChapter(Number(m[1]),null);
      else if(hash==='#ending'){try{history.replaceState(null,'','#chapter-8');}catch{}lastRoute='#chapter-8';renderChapter(8,null);}
      else showHome(hash.slice(1));
    };
    closeDialogs();
    const change=()=>window.SceneFlow.change(apply);
    if(endingOpen)closeEnding().then(change);else change();
  }
  window.addEventListener('popstate',historyRoute);
  window.addEventListener('hashchange',historyRoute);
  $('reader-back').addEventListener('click',()=>{
    navigate('#home',{returnHome:true});
  });
  $('previous-chapter').addEventListener('click',()=>{if(current>1)navigate(`#chapter-${current-1}`);});
  $('next-chapter').addEventListener('click',()=>{if(current<8)navigate(`#chapter-${current+1}`);});
  $('resume-link').addEventListener('click',()=>{if(state.position)navigate(`#chapter-${state.position.chapter}`,{...state.position});});
  $('saved-location').addEventListener('click',()=>{if(state.bookmark)navigate(`#chapter-${state.bookmark.chapter}`,{...state.bookmark});});
  $('bookmark-button').addEventListener('click',()=>{
    if(!current)return;
    if(state.bookmark?.chapter===current){state.bookmark=null;toast('책갈피를 해제했습니다.');}
    else {state.bookmark=currentPosition();toast(storageAvailable?'현재 위치에 책갈피를 꽂았습니다.':'현재 세션에 책갈피를 꽂았습니다. 브라우저 저장은 사용할 수 없습니다.');}
    persist();updateBookmark();
  });
  async function copyChapter() {
    if(!/^https?:$/.test(location.protocol)) {toast('온라인으로 배포한 뒤에는 이 장의 주소를 공유할 수 있습니다.');return;}
    try {await navigator.clipboard.writeText(location.href);toast('이 장의 링크를 복사했습니다.');}
    catch {toast('복사 권한이 없습니다. 주소 표시줄의 주소를 복사해 주세요.');}
  }
  function applySettings() {
    document.documentElement.style.setProperty('--reading-size',`${state.size}px`);
    document.documentElement.style.setProperty('--reading-font',state.font==='serif'?'var(--serif)':'var(--sans)');
    document.body.dataset.readerTheme=state.theme;
    setText('font-size-output',`${state.size} px`);
    $('font-smaller').disabled=state.size<=16;$('font-larger').disabled=state.size>=26;
    document.querySelectorAll('[data-font]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.font===state.font)));
    document.querySelectorAll('[data-theme]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.theme===state.theme)));
    if(current)document.querySelector('meta[name="theme-color"]').content=state.theme==='dark'?'#0b0b0b':state.theme==='light'?'#fafaf7':'#eeeae0';
  }
  function changeTypography(change) {
    const pos=current?currentPosition():null;
    change();applySettings();persist();
    // Keep the paragraph, not an obsolete absolute pixel offset.
    if(pos&&pos.paragraph>0)requestAnimationFrame(()=>{
      const el=$('reader-prose').querySelector(`[data-paragraph="${pos.paragraph}"]`);
      if(el)window.scrollTo({top:window.scrollY+el.getBoundingClientRect().top-110,behavior:'instant'});
      updateProgress(true);
    });
  }
  $('font-smaller').addEventListener('click',()=>changeTypography(()=>state.size=clamp(state.size-2,16,26)));
  $('font-larger').addEventListener('click',()=>changeTypography(()=>state.size=clamp(state.size+2,16,26)));
  document.querySelectorAll('[data-font]').forEach(b=>b.addEventListener('click',()=>changeTypography(()=>state.font=b.dataset.font)));
  document.querySelectorAll('[data-theme]').forEach(b=>b.addEventListener('click',()=>{state.theme=b.dataset.theme;applySettings();persist();}));
  function applyMotion() {
    const paused=state.paused||media.matches;
    document.body.classList.toggle('motion-paused',paused);
    $('motion-toggle').setAttribute('aria-pressed',String(paused));
    $('motion-toggle').setAttribute('aria-label',media.matches?'기기의 움직임 줄이기 설정이 적용되어 있습니다.':paused?'그래픽 움직임 재생':'그래픽 움직임 멈추기');
    $('motion-toggle').querySelector('.pause-glyph').textContent=paused?'▷':'Ⅱ';
    $('motion-toggle').querySelector('.motion-text').textContent=paused?'움직임 재생':'움직임 멈추기';
  }
  $('motion-toggle').addEventListener('click',()=>{
    if(media.matches){toast('기기의 ‘움직임 줄이기’ 설정을 존중하여 정지 상태로 표시합니다.');return;}
    state.paused=!state.paused;applyMotion();persist();
  });
  media.addEventListener?.('change',applyMotion);
  if('IntersectionObserver' in window) {
    const observer=new IntersectionObserver(entries=>{document.body.classList.toggle('hero-offscreen',!entries[0].isIntersecting);},{threshold:0});
    observer.observe(document.querySelector('.hero'));
  }
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden){document.body.classList.add('hero-offscreen');remember();}
    else document.body.classList.toggle('hero-offscreen',current!==0||window.scrollY>document.querySelector('.hero').offsetHeight);
  });
  window.addEventListener('resize',()=>{if(current){clearTimeout(scrollTimer);scrollTimer=setTimeout(()=>updateProgress(true),200);}},{passive:true});
  applySettings();applyMotion();renderResume();
  // Old v4 deep links migrate to the final chapter; opening a file never autoplays.
  const legacyEnding=location.hash==='#ending';
  if(legacyEnding){try{history.replaceState(null,'','#chapter-8');}catch{}}
  const initial=/^#chapter-([1-8])$/.exec(location.hash);
  lastRoute=location.hash;
  if(initial){const n=Number(initial[1]);renderChapter(n,state.position?.chapter===n?{...state.position}:null);}
  else if(['#contents','#about'].includes(location.hash))showHome(location.hash.slice(1));
  if(legacyEnding)requestAnimationFrame(()=>requestAnimationFrame(()=>$('chapter-end').scrollIntoView({behavior:'instant',block:'start'})));
})();
