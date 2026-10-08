"""Original deterministic score for Possibility's End. No samples / existing music.
Requires numpy, scipy and ffmpeg. Run from any directory: python tools/make_audio.py
Generates two stereo MP3 masters used by build.mjs. No network or service required.
All times in seconds; the expansion impact is aligned to the film at 3.600 s.
"""
from pathlib import Path
import json, subprocess, tempfile
import numpy as np
from scipy import signal, fft

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'assets/audio'
OUT.mkdir(parents=True, exist_ok=True)
SR = 32000
RNG = np.random.default_rng(921642)
TAU = 2 * np.pi

def note(midi):
    return 440.0 * 2 ** ((midi - 69) / 12)

def gate(t, dur, attack=1, release=2):
    a = np.clip(t / max(attack, .0001), 0, 1)
    r = np.clip((dur - t) / max(release, .0001), 0, 1)
    return (a*a*(3-2*a)) * (r*r*(3-2*r))

def mix(dst, wav, start, gain=1, pan=0, wrap=False):
    """Equal-power panning and optional circular accumulation for a seamless loop."""
    if wav.ndim == 1:
        theta = (pan + 1) * np.pi / 4
        wav = np.column_stack((wav * np.cos(theta), wav * np.sin(theta)))
    wav = np.asarray(wav * gain, dtype=np.float32)
    offset = int(round(start * SR))
    if wrap:
        offset %= len(dst)
        while len(wav):
            n = min(len(wav), len(dst) - offset)
            dst[offset:offset+n] += wav[:n]
            wav = wav[n:]
            offset = 0
    else:
        left = max(0, -offset)
        right = min(len(wav), len(dst)-offset)
        if right > left:
            dst[max(0, offset):offset+right] += wav[left:right]

def pad(midi, dur, brightness=.4):
    t = np.arange(int(SR*dur), dtype=np.float64) / SR
    f = note(midi)
    audio = np.zeros((len(t), 2), dtype=np.float32)
    for ch in range(2):
        out = np.zeros(len(t))
        for detune in [-.055, 0, .047]:
            phase = RNG.uniform(0, TAU)
            for h, amp in [(1,.72),(2,.15*brightness),(3,.11*brightness),(4,.045*brightness),(5,.02*brightness)]:
                out += amp/3*np.sin(TAU*(f*h+detune*(ch*2-1))*t + phase + .035*np.sin(TAU*.13*t))
        audio[:,ch] = out * (.84+.10*np.sin(TAU*.087*t+ch*.8)) * gate(t,dur,4.5,8)
    return audio

def glass(midi, dur=9):
    t = np.arange(int(SR*dur), dtype=np.float64)/SR
    f = note(midi)
    # Soft felt-like attack, pitched body and a very restrained inharmonic glint.
    y = np.zeros(len(t))
    for ratio,amp,decay in [(1,1,3.4),(2,.24,1.9),(3,.075,1.5),(4.008,.026,.85)]:
        y += amp*np.sin(TAU*f*ratio*t)*np.exp(-t/decay)
    return y * (1-np.exp(-t/.035)) * gate(t,dur,.01,1.8)

def noise(dur, low=50, high=4500):
    x = RNG.normal(size=int(SR*dur)).astype(np.float32)
    sos = signal.butter(2, [low,high], btype='bandpass', fs=SR, output='sos')
    x = signal.sosfilt(sos,x)
    return x / (np.sqrt(np.mean(x*x))+1e-9)

def space_reverb(x, mix_amount=.32, decay=3.8, circular=False):
    length = int(SR*7.5)
    t=np.arange(length)/SR
    ir=np.zeros((length,2),np.float32)
    for c in range(2):
        n=RNG.normal(size=length)
        n=signal.sosfilt(signal.butter(2,4600,fs=SR,output='sos'),n)
        n *= np.exp(-t/decay)*(1-np.exp(-t/.08))
        n[:int(.038*SR)]=0
        n /= np.sqrt(np.sum(n*n))+1e-9
        ir[:,c]=n
        for delay,level in [(.079,.13),(.137,.09),(.237,.07),(.419,.045)]:
            ir[int((delay+c*.009)*SR),c] += level
    wet=np.zeros_like(x)
    for c in range(2):
        # Crossfeed preserves width while preventing one-sided tails.
        src=x[:,c]*.84+x[:,1-c]*.16
        if circular:
            kernel=np.zeros(len(src),np.float32);kernel[:length]=ir[:,c]
            wet[:,c]=fft.irfft(fft.rfft(src)*fft.rfft(kernel),n=len(src))
        else:
            wet[:,c]=signal.fftconvolve(src,ir[:,c])[:len(src)]
    return x*(1-mix_amount)+wet*mix_amount

def master(x, name, target_db=-23, ceiling=-2.2, loop=False):
    # DC/subsonic removal, no aggressive crushing; preserve the score's dynamics.
    x=signal.sosfilt(signal.butter(2,28,btype='highpass',fs=SR,output='sos'),x,axis=0)
    rms=float(np.sqrt(np.mean(x*x)))
    gain=10**(target_db/20)/(rms+1e-12)
    gain=min(gain,10**(ceiling/20)/(np.max(np.abs(x))+1e-12))
    x=(x*gain).astype(np.float32)
    if not loop:
        x*=gate(np.arange(len(x))/SR,len(x)/SR,.03,4)[:,None]
    # Tiny boundary smoothing is inaudible and suppresses any residual DC edge.
    if loop:
        for c in range(2):
            diff=float(x[-1,c]-x[0,c])
            x[-320:,c]-=np.linspace(0,diff,320)
    with tempfile.TemporaryDirectory() as td:
        raw=Path(td)/'master.f32';x.tofile(raw)
        subprocess.run(['ffmpeg','-y','-hide_banner','-loglevel','error','-f','f32le','-ar',str(SR),'-ac','2','-i',str(raw),'-c:a','libmp3lame','-b:a','160k','-ar','48000','-map_metadata','-1',str(OUT/f'{name}.mp3')],check=True)
    stats={'duration':len(x)/SR,'sample_rate':SR,'channels':2,'peak_dbfs':round(float(20*np.log10(np.max(np.abs(x))+1e-12)),3),'rms_dbfs':round(float(20*np.log10(np.sqrt(np.mean(x*x))+1e-12)),3),'loop':loop,'bytes':(OUT/f'{name}.mp3').stat().st_size}
    print(name,stats,flush=True)
    return stats

def ambient():
    D=96.;a=np.zeros((int(SR*D),2),np.float32)
    chords=[[50,57,60,64,65],[46,53,57,60,64],[41,53,57,60,67],[48,55,57,62,64]]
    for i,chord in enumerate(chords):
        for j,n in enumerate(chord):
            mix(a,pad(n,36,brightness=.55),i*24-5+j*.29,gain=.055/(1+j*.17),wrap=True)
    # Distant small notes rather than a repeating arpeggiator.
    motif=[(5,74),(13,69),(28,65),(36,72),(50,76),(62,69),(76,67),(85,74)]
    for k,(at,n) in enumerate(motif):
        g=glass(n)
        p=(-.45 if k%2==0 else .45)
        mix(a,g,at,.025,p,True)
        mix(a,g,at+.81,.009,-p,True)
        mix(a,g,at+1.63,.003,p,True)
    # Long noise grains overlap across the seam. No broadband steady hiss.
    for k in range(8):
        dur=21;t=np.arange(int(SR*dur))/SR
        mix(a,noise(dur,95,950)*gate(t,dur,9,9),k*12-8,.0018,(-1)**k*.4,True)
    a=space_reverb(a,.38,3.0,True)
    return master(a,'horizon',-23.5,-5,True)

def ending():
    D=39.;a=np.zeros((int(SR*D),2),np.float32)
    # 00:00–00:03.600: energy contracting into a single point.
    dur=3.6;t=np.arange(int(SR*dur))/SR
    sweep=(np.sin(TAU*(41*t+42*t*t))*.13 + np.sin(TAU*(83*t+66*t*t))*.045)
    inhale=noise(dur,100,4700)*.085
    env=(t/dur)**2.35*gate(t,dur,.7,.085)
    mix(a,(sweep+inhale)*env,0,.8)
    mix(a,pad(38,9,.22),-3.3,.018)
    # Expansion: a rounded transient, deep body and wide debris; no harsh gunshot.
    dur=7;t=np.arange(int(SR*dur))/SR
    phase=TAU*(34*t+90*.5*(1-np.exp(-t/.5)))
    body=(np.sin(phase)+.2*np.sin(phase*1.501))*np.exp(-t/1.6)*(1-np.exp(-t/.014))
    mix(a,body,3.6,.25)
    for c,p in enumerate([-.72,.72]):
        dust=noise(dur,85,5200)
        env=(1-np.exp(-t/.035))*np.exp(-t/1.9)*gate(t,dur,.01,2)
        mix(a,dust*env,3.6+c*.014,.085,p)
    dur=13;t=np.arange(int(SR*dur))/SR
    air=noise(dur,420,5800)*gate(t,dur,1.8,7)*np.exp(-t/4)
    mix(a,air,3.72,.025,-.25)
    # Expanding harmonic field. Every voice is synthesized from scratch.
    scenes=[(3.5,20,[38,50,57,62,65,69,76],.047),(10.5,19,[46,53,57,62,65,72],.039),(17.8,17,[41,53,57,60,64,69],.039),(23.2,15.8,[50,57,62,64,69,74],.038)]
    for at,dur,chord,level in scenes:
        for j,n in enumerate(chord):
            mix(a,pad(n,dur,brightness=.78),at+j*.115,level*2.0/(1+j*.13))
    for k,(at,n) in enumerate([(8.4,74),(12.0,69),(15.7,77),(18.6,76),(22.3,72),(25.2,74),(28.3,81)]):
        g=glass(n,10)
        mix(a,g,at,.09 if k<4 else .065,(-1)**k*.4)
        mix(a,g,at+.73,.022,(-1)**(k+1)*.55)
        mix(a,g,at+1.48,.010,(-1)**k*.3)
    a=space_reverb(a,.37,3.4,False)
    return master(a,'first-light',-19,-2.2,False)

if __name__=='__main__':
    stats={'horizon':ambient(),'first-light':ending(),'composition':'Original procedural ambient score, no third-party audio','impact_seconds':3.6}
    (OUT/'audio-metrics.json').write_text(json.dumps(stats,ensure_ascii=False,indent=2))
