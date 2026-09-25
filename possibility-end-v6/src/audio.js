/* V6 — original embedded stereo score; default-on intent, no tracking or participation data.
 * Web Audio playback clock is shared with the film. Muting never changes visuals.
 * Autoplay is attempted; a blocked context resumes on the first eligible gesture.
 * This module deliberately writes nothing to localStorage or sessionStorage.
 */
(() => {
  'use strict';
  let ctx=null, master=null, ambientGain=null, limiter=null, analyser=null, capture=null;
  let loading=null, buffers=null, ambient=null, score=null;
  let enabled=true, choice=null, volume=.45, mode='home', status='idle', offset=0;
  let enableRevision=0, error='', lastChime=0;
  const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
  const $=id=>document.getElementById(id);
  const panels=()=>document.querySelectorAll('.sound-panel');
  const silence=param=>{const now=ctx.currentTime;param.cancelScheduledValues(now);param.setTargetAtTime(0,now,.06);};
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
    ctx.addEventListener('statechange',updateUI);
    return ctx;
  }
  function decode(base64){
    const text=atob(base64),bytes=new Uint8Array(text.length);
    for(let i=0;i<text.length;i++)bytes[i]=text.charCodeAt(i);
    return ctx.decodeAudioData(bytes.buffer);
  }
  function load(){
    if(buffers)return Promise.resolve(buffers);
    if(loading)return loading;
    loading=(async()=>{
      const data=JSON.parse($('sound-data').textContent);
      const [a,e]=await Promise.all([decode(data.ambient),decode(data.ending)]);
      buffers={ambient:a,ending:e};loading=null;return buffers;
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
    score={source,gain,when,offset:time};
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
        const state=window.BigBang?.getState();newScore(state?.time??offset);
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
      button.setAttribute('aria-pressed',String(enabled));
      button.setAttribute('aria-label',error||(enabled?(waiting?'소리 켜짐. 첫 조작 후 재생. 끄기':'소리 끄기'):'소리 켜기'));
      button.dataset.audioState=error?'unavailable':!enabled?'muted':waiting?'waiting':'playing';
      button.title=error||(enabled?'사운드 끄기 / 볼륨 조절':'사운드 켜기 / 볼륨 조절');
      const label=button.querySelector('[data-audio-label]');
      if(label)label.textContent=enabled?'소리 켜짐':'소리 꺼짐';
      button.classList.toggle('is-on',enabled);button.classList.remove('is-loading');
    });
    document.querySelectorAll('[data-audio-volume]').forEach(input=>{input.value=String(Math.round(volume*100));input.setAttribute('aria-valuetext',`${Math.round(volume*100)}퍼센트`);});
    document.querySelectorAll('[data-volume-value]').forEach(out=>out.textContent=`${Math.round(volume*100)}%`);
  }
  function closePanels(){panels().forEach(p=>p.hidden=true);}
  document.querySelectorAll('[data-audio-toggle]').forEach(button=>{
    button.addEventListener('click',()=>{
      const panel=$(button.getAttribute('aria-controls'));closePanels();panel.hidden=false;
      if(enabled)mute();else enable();
    });
  });
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
    const target=e.target.closest('.star-hotspot,.constellation-nav button');
    if(target)chime(Number(target.dataset.chapter||target.dataset.star||target.dataset.selectStar||1));
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
    beginReturn(){mode=document.body.dataset.view==='reader'?'reader':'home';status='idle';offset=0;retireScore(1.3);balance(1.9);},
    playFilm(time=0){mode='ending';status='playing';offset=time;balance(.4);newScore(time);},
    pauseFilm(time,paused){offset=time;status=paused?'paused':'playing';balance(.15);if(paused)retireScore(.04);else newScore(time);},
    stillFilm(){offset=28;status='still';retireScore(.6);balance(1.8);},
    visualEnd(){status='tail';/* The score decays beyond the film's 28-second timeline. */},
    filmTime,
    // Introspection and a local recording output, never remote transmission.
    getState(){
      let rms=0;if(analyser){const a=new Float32Array(analyser.fftSize);analyser.getFloatTimeDomainData(a);rms=Math.sqrt(a.reduce((v,n)=>v+n*n,0)/a.length);}
      return {enabled,choice,volume,mode,status,context:ctx?.state??'not-created',loaded:!!buffers,loading:!!loading,error,scoreTime:filmTime(),scoreActive:!!score,ambientActive:!!ambient,outputRms:rms,ambientDuration:buffers?.ambient.duration??0,endingDuration:buffers?.ending.duration??0};
    },
    recordingStream(){if(!ctx)return null;if(!capture){capture=ctx.createMediaStreamDestination();limiter.connect(capture);}return capture.stream;}
  };
  function unlockOnGesture(event){
    if(!enabled||choice==='off'||event.target?.closest?.('[data-audio-toggle]'))return;
    if(event.type==='keydown'&&(event.metaKey||event.ctrlKey||event.altKey||['Shift','Control','Alt','Meta'].includes(event.key)))return;
    if(!ctx){enable(false);return;}
    if(ctx.state!=='running')ctx.resume().catch(()=>{});
    // The initial enable Promise also resumes here, once the browser unlocks it.
    if(buffers&&!ambient){startAmbient();balance();changeGain(master.gain,volume,.9);}
  }
  for(const event of ['pointerdown','pointerup','click','keydown'])document.addEventListener(event,unlockOnGesture,{capture:true,passive:true});
  updateUI();
  // No timer can grant autoplay permission. The same graph simply waits for a gesture.
  queueMicrotask(()=>enable(false));
})();
