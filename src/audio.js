/* V7 — original embedded stereo score; default-on intent, no tracking or participation data.
 * The score follows the monotonic visual clock. Muting or audio interruption never stops the film.
 * v9: the film clock is the Universe ending (Universe.ending.state()); app.js drives
 * playFilm/syncFilm/pauseFilm/stillFilm/visualEnd and keeps `offset` current for the
 * no-WebGL fallback clock.
 * Nothing heavy happens at start-up: the AudioContext is created and the two embedded scores are
 * decoded either on the first eligible gesture or in an idle period after the page has painted and
 * its entrance has played (that idle attempt is also the autoplay attempt; a blocked context then
 * resumes on the first eligible gesture). Decoding yields to the page between steps.
 * This module deliberately writes nothing to localStorage or sessionStorage.
 */
(() => {
  'use strict';
  let ctx=null, master=null, ambientGain=null, limiter=null, analyser=null, capture=null;
  let loading=null, buffers=null, ambient=null, score=null;
  let enabled=true, choice=null, volume=.45, mode='home', status='idle', offset=0;
  let enableRevision=0, error='', lastChime=0,lastSync=0;
  // A context that has only just started may still be warming up its device clock: the first
  // seconds of a score are checked sooner and more tightly (at most twice per film start).
  let scoreBorn=0, warmFixes=0;
  // The film time last seen by syncFilm, and when it last moved (a stalled film stills the score).
  let filmSeen=-1, filmMoved=0;
  const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
  const $=id=>document.getElementById(id);
  const panels=()=>document.querySelectorAll('.sound-panel');
  const silence=param=>{const now=ctx.currentTime;param.cancelScheduledValues(now);param.setTargetAtTime(0,now,.06);};
  // The running ending film, or null (no film, or the no-WebGL fallback clock: then `offset` is current).
  const filmState=()=>{try{const s=window.Universe?.ending?.state?.();return s&&s.active?s:null;}catch{return null;}};
  function changeGain(param,value,seconds=.35){
    if(!ctx||!param)return;
    const now=ctx.currentTime;param.cancelScheduledValues(now);
    param.setTargetAtTime(value,now,Math.max(.012,seconds/3));
  }
  function context(){
    if(ctx)return ctx;
    const Constructor=window.AudioContext||window.webkitAudioContext;
    if(!Constructor)throw new Error('Web Audio is not supported');
    ctx=new Constructor({latencyHint:'interactive'});
    master=ctx.createGain();master.gain.value=0;
    limiter=ctx.createDynamicsCompressor();
    limiter.threshold.value=-5;limiter.knee.value=8;limiter.ratio.value=5;
    limiter.attack.value=.004;limiter.release.value=.20;
    analyser=ctx.createAnalyser();analyser.fftSize=2048;
    master.connect(limiter);limiter.connect(analyser);analyser.connect(ctx.destination);
    ambientGain=ctx.createGain();ambientGain.gain.value=0;ambientGain.connect(master);
    ctx.addEventListener('statechange',()=>{
      updateUI();
      if(ctx.state==='running'&&enabled&&mode==='ending'&&status==='playing'){
        const f=filmState();if(f?.started&&!f.paused&&!f.finished)newScore(f.time);
      }
    });
    return ctx;
  }
  /** Give the page a turn (input, a frame) before the next piece of work. */
  const yieldToPage=()=>new Promise(resolve=>{
    try{if(window.scheduler?.yield){window.scheduler.yield().then(resolve,()=>setTimeout(resolve,0));return;}}catch{}
    setTimeout(resolve,0);
  });
  function bytesOf(base64){
    if(typeof Uint8Array.fromBase64==='function'){try{return Uint8Array.fromBase64(base64);}catch{}}
    const text=atob(base64),bytes=new Uint8Array(text.length);
    for(let i=0;i<text.length;i++)bytes[i]=text.charCodeAt(i);
    return bytes;
  }
  let soundData=null;
  function load(){
    if(buffers)return Promise.resolve(buffers);
    if(loading)return loading;
    loading=(async()=>{
      // Never inside the gesture that asked for sound: the context is resumed there, the work follows.
      await yieldToPage();
      if(!soundData)soundData=JSON.parse($('sound-data').textContent);
      const ambientBytes=bytesOf(soundData.ambient);
      await yieldToPage();
      // MP3 decoding itself runs off the main thread; the two scores decode side by side.
      const a=ctx.decodeAudioData(ambientBytes.buffer);
      const endingBytes=bytesOf(soundData.ending);
      const e=ctx.decodeAudioData(endingBytes.buffer);
      const [ambientBuffer,endingBuffer]=await Promise.all([a,e]);
      buffers={ambient:ambientBuffer,ending:endingBuffer};loading=null;
      // The embedded copies are no longer needed (about 3.6 MB of text).
      soundData=null;try{$('sound-data').textContent='';}catch{}
      return buffers;
    })().catch(e=>{loading=null;throw e;});
    return loading;
  }
  function startAmbient(){
    if(!buffers||ambient)return;
    const source=ctx.createBufferSource();source.buffer=buffers.ambient;
    source.loop=true;source.loopStart=0;source.loopEnd=buffers.ambient.duration;
    source.connect(ambientGain);source.start();ambient=source;
  }
  function ambientLevel(){
    if(mode==='ending')return status==='playing'||status==='paused' ? 0 : .34;
    return mode==='reader'?.52:.92;
  }
  function balance(seconds=1.1){changeGain(ambientGain?.gain,ambientLevel(),seconds);}
  function retireScore(fade=.07){
    if(!score)return;
    const old=score;score=null;
    const now=ctx.currentTime;old.gain.gain.cancelScheduledValues(now);
    old.gain.gain.setValueAtTime(old.gain.gain.value,now);old.gain.gain.linearRampToValueAtTime(0,now+fade);
    try{old.source.stop(now+Math.max(.045,fade)+.01);}catch{}
    old.source.onended=()=>{try{old.source.disconnect();old.gain.disconnect();}catch{}};
  }
  function newScore(time){
    retireScore();
    if(!ctx||!buffers||!enabled||ctx.state!=='running')return;
    const source=ctx.createBufferSource(),gain=ctx.createGain();
    source.buffer=buffers.ending;source.connect(gain);gain.connect(master);
    const now=ctx.currentTime,when=now+.035;
    time=clamp(time,0,buffers.ending.duration-.001);
    gain.gain.setValueAtTime(0,now);gain.gain.linearRampToValueAtTime(1,when+.025);
    score={source,gain,when,offset:time};scoreBorn=filmMoved=performance.now();
    source.start(when,time);
    source.onended=()=>{if(score?.source===source){score=null;if(mode==='ending'){status='still';balance(1.2);}}source.disconnect();gain.disconnect();};
    // Let the final chord decay beyond the last frame, then return to the ambience.
    ambientGain.gain.cancelScheduledValues(now);
    ambientGain.gain.setTargetAtTime(0,now,.22);
    const crossfade=when+Math.max(0,34-time);
    ambientGain.gain.setValueAtTime(0,crossfade);
    ambientGain.gain.linearRampToValueAtTime(.34,crossfade+4.8);
  }
  function filmTime(){
    if(!score||!ctx||ctx.state!=='running'||status!=='playing')return null;
    return Math.max(0,score.offset+ctx.currentTime-score.when);
  }
  async function enable(setChoice=true){
    const rev=++enableRevision;
    if(setChoice)choice='on';enabled=true;error='';
    try{
      context();
      // Resume must be invoked before the first await (mobile user activation).
      const resumed=ctx.resume();const decoded=load();updateUI();
      await Promise.all([resumed,decoded]);
      if(rev!==enableRevision||!enabled)return false;
      startAmbient();
      balance();
      if(mode==='ending'&&status==='playing'&&!score){
        newScore(filmState()?.time??offset);
      }
      changeGain(master.gain,volume,.65);updateUI();return true;
    }catch(e){
      if(rev!==enableRevision)return false;
      enabled=false;error='소리를 재생할 수 없습니다. 다시 눌러 시도해 주세요.';
      updateUI();console.warn('Sound unavailable; the story remains usable.',e.message);
      return false;
    }
  }
  function mute(){
    ++enableRevision;enabled=false;choice='off';
    if(master)changeGain(master.gain,0,.16);
    updateUI();
  }
  function setVolume(v){
    volume=clamp(Number(v)||0,0,1);
    if(master)changeGain(master.gain,enabled?volume:0,.12);
    updateUI();
  }
  function updateUI(){
    const preparing=enabled&&!buffers;
    const waiting=enabled&&ctx?.state!=='running';
    document.querySelectorAll('[data-audio-toggle]').forEach(button=>{
      // One stable name with a pressed state (on = sound on); the state words are not repeated in it.
      button.setAttribute('aria-pressed',String(enabled));
      button.setAttribute('aria-label',error||(enabled&&waiting?'소리, 첫 조작 후 재생':'소리'));
      button.dataset.audioState=error?'unavailable':!enabled?'muted':waiting?'waiting':'playing';
      button.title=error||'소리 · 음량';
      const label=button.querySelector('[data-audio-label]');
      if(label)label.textContent=enabled?'소리 켜짐':'소리 꺼짐';
      button.classList.toggle('is-on',enabled);button.classList.remove('is-loading');
    });
    document.querySelectorAll('[data-audio-switch]').forEach(button=>{
      button.setAttribute('aria-pressed',String(enabled));button.textContent=enabled?'켜짐':'꺼짐';
      button.setAttribute('aria-label',enabled?'소리 켜짐. 누르면 끕니다':'소리 꺼짐. 누르면 켭니다');
    });
    document.querySelectorAll('[data-audio-volume]').forEach(input=>{input.value=String(Math.round(volume*100));input.setAttribute('aria-valuetext',`${Math.round(volume*100)}퍼센트`);});
    document.querySelectorAll('[data-volume-value]').forEach(out=>out.textContent=`${Math.round(volume*100)}%`);
  }
  function closePanels(){panels().forEach(p=>p.hidden=true);}
  /* The speaker icon: sound that is on but not yet heard (no gesture has unlocked it) starts when
   * pressed, rather than being turned off unheard. Otherwise it toggles. The settings switch, whose
   * label names the state it changes, always toggles. */
  const silentYet=()=>enabled&&(!ctx||ctx.state!=='running'||!ambient);
  document.querySelectorAll('[data-audio-toggle]').forEach(button=>{
    button.addEventListener('click',()=>{
      const panel=$(button.getAttribute('aria-controls'));closePanels();panel.hidden=false;
      if(enabled&&!silentYet())mute();else enable();
    });
  });
  document.querySelectorAll('[data-audio-switch]').forEach(button=>button.addEventListener('click',()=>{if(enabled)mute();else enable();}));
  document.querySelectorAll('[data-audio-volume]').forEach(input=>input.addEventListener('input',()=>setVolume(Number(input.value)/100)));
  document.addEventListener('pointerdown',e=>{if(!e.target.closest('[data-sound-widget]'))closePanels();});
  document.addEventListener('focusin',e=>{if(!e.target.closest('[data-sound-widget]'))closePanels();});
  document.querySelectorAll('[data-sound-widget]').forEach(widget=>widget.addEventListener('keydown',e=>{
    if(e.key==='Escape'&&widget.querySelector('.sound-panel:not([hidden])')){e.preventDefault();e.stopPropagation();closePanels();widget.querySelector('[data-audio-toggle]').focus();}
  }));
  function chime(n=1){
    if(!enabled||!ctx||ctx.state!=='running'||mode==='ending'||ctx.currentTime-lastChime<.35)return;
    lastChime=ctx.currentTime;
    const notes=[62,65,69,72,74,77,81,86],freq=440*2**((notes[(n-1)%8]-69)/12);
    const oscillator=ctx.createOscillator(),gain=ctx.createGain(),pan=ctx.createStereoPanner();
    oscillator.type='sine';oscillator.frequency.value=freq;
    pan.pan.value=(n-4.5)/7;
    gain.gain.setValueAtTime(0,ctx.currentTime);gain.gain.linearRampToValueAtTime(.016,ctx.currentTime+.025);gain.gain.exponentialRampToValueAtTime(.0001,ctx.currentTime+1.45);
    oscillator.connect(gain);gain.connect(pan);pan.connect(master);
    oscillator.start();oscillator.stop(ctx.currentTime+1.5);
    oscillator.onended=()=>{oscillator.disconnect();gain.disconnect();pan.disconnect();};
  }
  document.addEventListener('click',e=>{
    const target=e.target.closest('.node');
    if(target)chime(Number(target.dataset.chapter||1));
    if(enabled&&ctx&&ctx.state!=='running')ctx.resume().catch(()=>{});
  });
  document.addEventListener('novel:chapter',()=>{mode='reader';balance(1.8);closePanels();});
  document.addEventListener('novel:home',()=>{mode='home';balance(1.8);closePanels();});
  document.addEventListener('novel:ending',()=>{mode='ending';status='ready';balance(.6);closePanels();});
  document.addEventListener('novel:ending-close',()=>{
    mode=document.body.dataset.view==='reader'?'reader':'home';status='idle';offset=0;
    retireScore(.65);balance(1.6);closePanels();
  });
  document.addEventListener('visibilitychange',()=>{
    if(!ctx)return;
    if(document.hidden)ctx.suspend().catch(()=>{});
    else ctx.resume().catch(()=>{});
  });
  window.addEventListener('pagehide',()=>ctx?.suspend().catch(()=>{}));
  window.addEventListener('pageshow',()=>{if(ctx&&!document.hidden)ctx.resume().catch(()=>{});});
  window.NovelSound={
    prepareEnding:()=>choice==='off'?Promise.resolve(false):enable(false),
    // Saved preferences (applied by app.js at start-up).
    mute,unmute:()=>enable(true),setVolume,
    beginReturn(){mode=document.body.dataset.view==='reader'?'reader':'home';status='idle';offset=0;retireScore(1.3);balance(1.9);},
    playFilm(time=0){mode='ending';status='playing';offset=time;warmFixes=0;filmSeen=time;filmMoved=performance.now();balance(.4);newScore(time);},
    pauseFilm(time,paused){offset=time;status=paused?'paused':'playing';balance(.15);if(paused)retireScore(.04);else newScore(time);},
    stillFilm(){offset=28;status='still';retireScore(.6);balance(1.8);},
    visualEnd(){status='tail';/* The score decays beyond the film's 28-second timeline. */},
    filmTime,
    syncFilm(time){
      offset=time;
      if(!enabled||!buffers||!ctx||mode!=='ending'||status!=='playing')return;
      if(ctx.state!=='running')return;
      const now=performance.now();
      // A film whose clock stopped (its renderer stalled) must not keep restarting the score at the
      // same instant: the score rests until the film moves again, then rejoins it.
      if(time!==filmSeen){filmSeen=time;filmMoved=now;}
      else if(now-filmMoved>450){if(score)retireScore(.25);return;}
      const warm=warmFixes<2&&now-scoreBorn<4000;
      if(now-lastSync<(warm?400:750))return;lastSync=now;
      const audioTime=filmTime();
      if(audioTime===null){newScore(time);return;}
      const drift=Math.abs(audioTime-time);
      if(drift>.38||warm&&drift>.08){if(warm&&drift<=.38)warmFixes++;newScore(time);}
    },
    // Introspection and a local recording output, never remote transmission.
    getState(){
      let rms=0;if(analyser){const a=new Float32Array(analyser.fftSize);analyser.getFloatTimeDomainData(a);rms=Math.sqrt(a.reduce((v,n)=>v+n*n,0)/a.length);}
      return {enabled,choice,volume,mode,status,context:ctx?.state??'not-created',loaded:!!buffers,loading:!!loading,error,scoreTime:filmTime(),scoreActive:!!score,ambientActive:!!ambient,outputRms:rms,ambientDuration:buffers?.ambient.duration??0,endingDuration:buffers?.ending.duration??0};
    },
    recordingStream(){if(!ctx)return null;if(!capture){capture=ctx.createMediaStreamDestination();limiter.connect(capture);}return capture.stream;}
  };
  function unlockOnGesture(event){
    if(!enabled||choice==='off'||event.target?.closest?.('[data-audio-toggle],[data-audio-switch]'))return;
    // A key only counts when it activates something (Enter). Moving around the page (Tab, arrows,
    // Space, Page keys, Escape) never starts the score under a screen reader's voice; activating
    // a button or link with Space or Enter still does, through its click.
    if(event.type==='keydown'&&event.key!=='Enter')return;
    if(!ctx){enable(false);return;}
    if(ctx.state!=='running')ctx.resume().catch(()=>{});
    if(buffers&&mode==='ending'&&status==='playing'&&!score)newScore(filmState()?.time??offset);
    // The initial enable Promise also resumes here, once the browser unlocks it.
    if(buffers&&!ambient){startAmbient();balance();changeGain(master.gain,volume,.9);}
  }
  for(const event of ['pointerdown','pointerup','click','keydown'])document.addEventListener(event,unlockOnGesture,{capture:true,passive:true});
  updateUI();
  /* No timer can grant autoplay permission; this is only the attempt, made when the page is idle
   * (after load, the first paint and the cover's entrance), never during start-up. A gesture before
   * then starts the same work at once (unlockOnGesture). A saved “off” (app.js applies it at boot)
   * skips it entirely until the reader turns sound on. */
  function prepareWhenIdle(){
    // Opening the audio device blocks the main thread (150–450 ms on Windows): never during the
    // entrance, never while the universe is still forming (its first morph runs well past the
    // cover's copy), and never while the reader is scrolling.
    let lastMove=0;
    const moved=()=>{lastMove=performance.now();};
    for(const type of ['scroll','wheel','touchmove'])window.addEventListener(type,moved,{passive:true});
    const done=()=>{for(const type of ['scroll','wheel','touchmove'])window.removeEventListener(type,moved);};
    const since=performance.now();
    const forming=()=>{
      try{
        const s=window.Universe?.getState?.();
        if(!s||s.renderer!=='webgl'||s.contextLost||!s.visible)return false;
        return !!(s.morphing||s.pendingFormation||s.compiling);
      }catch{return false;}
    };
    const attempt=()=>{
      if(ctx||!enabled||choice==='off'){done();return;}
      if(document.hidden||performance.now()-lastMove<900){setTimeout(idle,900);return;}
      // (A universe that never settles is not waited for beyond 20 s.)
      if(forming()&&performance.now()-since<20000){setTimeout(idle,400);return;}
      done();enable(false);
    };
    const idle=()=>{
      if(typeof window.requestIdleCallback==='function')window.requestIdleCallback(attempt,{timeout:3000});
      else setTimeout(attempt,200);
    };
    const afterLoad=()=>setTimeout(()=>requestAnimationFrame(idle),3500);
    if(document.readyState==='complete')afterLoad();
    else window.addEventListener('load',afterLoad,{once:true});
  }
  prepareWhenIdle();
})();
