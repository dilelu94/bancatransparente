import os
import re
import urllib.request
import urllib.parse
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

DEPUTIES = [
    ("estela-mary-neder", "https://www.hcdn.gob.ar/diputados/eneder/"),
    ("paulo-agustin-tita", "https://www.hcdn.gob.ar/diputados/ptita/"),
    ("maria-florencia-de-sensi", "https://www.hcdn.gob.ar/diputados/mdesensi/"),
    ("alejandro-finocchiaro", "https://www.hcdn.gob.ar/diputados/afinocchiaro/"),
    ("cristian-a-ritondo", "https://www.hcdn.gob.ar/diputados/critondo/"),
    ("javier-sanchez-wrba", "https://www.hcdn.gob.ar/diputados/jsanchezw/"),
    ("martin-yeza", "https://www.hcdn.gob.ar/diputados/myeza/"),
    ("fernando-de-andreis", "https://www.hcdn.gob.ar/diputados/fdeandreis/"),
    ("daiana-fernandez-molero", "https://www.hcdn.gob.ar/diputados/dfernandezm/"),
    ("antonela-giampieri", "https://www.hcdn.gob.ar/diputados/agiampieri/"),
    ("alvaro-gonzalez", "https://www.hcdn.gob.ar/diputados/agonzalez/"),
    ("alicia-fregonese", "https://www.hcdn.gob.ar/diputados/afregonese/"),
    ("martin-ardohain", "https://www.hcdn.gob.ar/diputados/mardohain/"),
    ("emmanuel-bianchetti", "https://www.hcdn.gob.ar/diputados/rbianchetti/"),
    ("guillermo-cesar-aguero", "https://www.hcdn.gob.ar/diputados/gcaguero/"),
    ("gerardo-cipolini", "https://www.hcdn.gob.ar/diputados/gcipolini/"),
    ("diogenes-ignacio-gonzalez", "https://www.hcdn.gob.ar/diputados/digonzalez/"),
    ("dario-schneider", "https://www.hcdn.gob.ar/diputados/aschneider/"),
    ("lisandro-nieri", "https://www.hcdn.gob.ar/diputados/lnieri/"),
    ("pamela-fernanda-verasay", "https://www.hcdn.gob.ar/diputados/pverasay/"),
    ("eduardo-falcone", "https://www.hcdn.gob.ar/diputados/efalcone/"),
    ("oscar-zago", "https://www.hcdn.gob.ar/diputados/ozago/"),
    ("karina-banfi", "https://www.hcdn.gob.ar/diputados/kbanfi/"),
    ("jose-luis-garrido", "https://www.hcdn.gob.ar/diputados/jgarrido/"),
    ("jorge-antonio-avila", "https://www.hcdn.gob.ar/diputados/jaavila/"),
    ("alejandra-torres", "https://www.hcdn.gob.ar/diputados/ltorres/"),
    ("jorge-rizzotti", "https://www.hcdn.gob.ar/diputados/jrizzotti/"),
    ("maria-ines-zigaran", "https://www.hcdn.gob.ar/diputados/mzigaran/"),
    ("lourdes-micaela-arrieta", "https://www.hcdn.gob.ar/diputados/larrieta/"),
    ("sergio-eduardo-capozzi", "https://www.hcdn.gob.ar/diputados/scapozzi/"),
    ("jose-nunez", "https://www.hcdn.gob.ar/diputados/jnunez/"),
    ("gisela-scaglia", "https://www.hcdn.gob.ar/diputados/gscaglia/"),
    ("bernardo-biella", "https://www.hcdn.gob.ar/diputados/bbiellac/"),
    ("pablo-outes", "https://www.hcdn.gob.ar/diputados/poutes/"),
    ("yolanda-vega", "https://www.hcdn.gob.ar/diputados/yvega/"),
    ("claudio-alvarez", "https://www.hcdn.gob.ar/diputados/caalvarez/"),
    ("gerardo-gustavo-gonzalez", "https://www.hcdn.gob.ar/diputados/gggonzalez/"),
    ("elia-marina-fernandez", "https://www.hcdn.gob.ar/diputados/emfernandez/"),
    ("gladys-medina", "https://www.hcdn.gob.ar/diputados/gmedina/"),
    ("javier-noguera", "https://www.hcdn.gob.ar/diputados/mnoguera/"),
    ("carlos-gustavo-jaime-quiroga", "https://www.hcdn.gob.ar/diputados/cjaimeq/"),
    ("nancy-viviana-picon-martinez", "https://www.hcdn.gob.ar/diputados/npiconm/"),
    ("karina-maureira", "https://www.hcdn.gob.ar/diputados/kmaureira/")
]

os.makedirs("/tmp/deputies", exist_ok=True)

success_count = 0
for dep_id, url in DEPUTIES:
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        html = urllib.request.urlopen(req, context=ctx, timeout=10).read().decode('utf-8', errors='ignore')
        
        # Match parlamentaria image URL
        match = re.search(r'https://parlamentaria\.hcdn\.gob\.ar/image/[^\s"\']+', html)
        if match:
            img_url = match.group(0)
            img_req = urllib.request.Request(img_url, headers=HEADERS)
            img_data = urllib.request.urlopen(img_req, context=ctx, timeout=10).read()
            out_path = f"/tmp/deputies/{dep_id}.png"
            with open(out_path, "wb") as f:
                f.write(img_data)
            print(f"[OK] {dep_id} -> {img_url} ({len(img_data)} bytes)")
            success_count += 1
        else:
            print(f"[NO_IMAGE] {dep_id} at {url}")
    except Exception as e:
        print(f"[ERROR] {dep_id} at {url}: {e}")

print(f"\nTotal downloaded: {success_count}/{len(DEPUTIES)}")
