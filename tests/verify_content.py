"""Verify generated chapters, fallback HTML and the recorded copy-edit provenance.
Run after npm run build. No original v6 source is redistributed or required for this check.
"""
from pathlib import Path
import json,re,hashlib
ROOT=Path(__file__).resolve().parents[1]
log=json.loads((ROOT/'tests/copyedits.json').read_text());text=(ROOT/'src/manuscript.txt').read_text()
chapters=json.loads((ROOT/'src/chapters.json').read_text());page=(ROOT/'index.html').read_text()
hash256=lambda t:hashlib.sha256(t.encode()).hexdigest()
assert hash256(text)==log['edited_sha256']
blocks=[t.strip().split('\n\n') for t in re.split(r'^@@\d+\s*$',text,flags=re.M) if t.strip()]
assert len(blocks)==len(chapters)==8
for blocks_in_chapter,c in zip(blocks,chapters):assert [p.strip() for p in blocks_in_chapter]==c['paragraphs']
# Compare the no-JS manuscript with the same escaped build representation.
def esc(s):return s.replace('&','&amp;').replace('<','&lt;').replace('>','&gt;').replace('"','&quot;').replace("'",'&#39;')
for c in chapters:
 fragment=f'<section id="chapter-{c["number"]}"><h2>{esc(c["title"])}</h2>'+ '\n'.join('<p>'+esc(p).replace('\n','<br>')+'</p>' for p in c['paragraphs'])+'</section>'
 assert fragment in page,c['number']
rep={'edited_manuscript_sha256':hash256(text),'original_manuscript_sha256':log['source_sha256'],'corrections':log['total_replacements'],'chapters':8,'blocks':sum(len(c['paragraphs']) for c in chapters),'chapter_data_matches_edited_manuscript':True,'no_js_fallback_matches_edited_manuscript':True,'html_sha256':hash256(page),'audio_sha256':{}}
for name in ['first-light.mp3','horizon.mp3']:rep['audio_sha256'][name]=hashlib.sha256((ROOT/'assets/audio'/name).read_bytes()).hexdigest()
(ROOT/'tests/content-integrity.json').write_text(json.dumps(rep,ensure_ascii=False,indent=2));print('PASS',rep)
