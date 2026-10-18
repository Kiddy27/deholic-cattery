#!/usr/bin/env python3
"""Generator halaman statis Deholic Cattery (Python 3 stdlib + node tanpa dependensi).

Membaca assets/js/articles.js dan assets/js/kucing-data.js, lalu menulis:
  artikel/index.html            → daftar SEMUA artikel (+ chip filter kategori)
  artikel/<slug>/index.html     → satu halaman per artikel non-sample
  kucing/<slug>/index.html      → satu halaman per kucing
Isi HTML (header, artikel, kartu, footer) dirender oleh templat yang SAMA dengan yang dipakai
browser: createTemplates() di assets/js/main.js dan createKucingTemplates() di assets/js/kucing.js.
Jadi tampilan halaman statis identik dengan render JS, dan main.js hanya "menghidupkan" (tema,
menu, tombol bagikan, filter) tanpa mengganti isinya.

Pakai:  python3 tools/gen-static.py            (dari root repo; atau DEHOLIC_SITE=/path/ke/repo)
Aman dijalankan berulang (idempoten); folder artikel/kucing yang slug-nya sudah tidak ada dihapus
(hanya folder yang berisi penanda generator)."""
import html, json, os, re, shutil, subprocess, sys

SITE = os.path.abspath(os.environ.get('DEHOLIC_SITE') or os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
BASE = 'https://deholic.id/'
MARK = '<meta name="generator" content="deholic gen-static" />'
OG_FALLBACK = BASE + 'assets/img/og-deholic.jpg'
ORG = {"@type": "Organization", "@id": BASE + "#organization", "name": "Deholic Cattery", "url": BASE,
       "logo": {"@type": "ImageObject", "url": BASE + "assets/img/logo-deholic.webp"}}

NODE = r"""
const site = process.argv[1];
global.window = {};
require(site + '/assets/js/articles.js');
try { require(site + '/assets/js/kucing-data.js'); } catch (e) {}
const { createTemplates } = require(site + '/assets/js/main.js');
const { createKucingTemplates } = require(site + '/assets/js/kucing.js');
const arts = (window.ARTICLES || []);
const T = (page) => createTemplates({ root: '/', page, articles: arts });
const TA = T('article'), TL = T('articles'), TK = T('kucing');
const K = createKucingTemplates({ root: '/', data: window.KUCING || [] });
const out = {
  headers: { article: TA.header(), articles: TL.header(), kucing: TK.header() },
  footer: TA.footer(),
  categories: TA.categories(),
  list: { chips: TL.filterChips('Semua'), cards: TL.ARTICLES.filter(a => !a.sample).map(TL.card).join('') },
  articles: TA.ARTICLES.filter(a => !a.sample).map(a => ({
    slug: a.slug, title: a.title, excerpt: a.excerpt || '', category: a.category, date: a.date,
    readTime: a.readTime, author: a.author, image: a.image || '', imageAlt: TA.imgAlt(a), inner: TA.articleInner(a),
  })),
  cats: (window.KUCING || []).map(k => ({
    slug: k.slug, nama: k.nama, peran: k.peran, contoh: !!k.contoh, title: K.title(k), description: K.description(k),
    foto: (k.foto && k.foto[0]) || '', alt: k.alt || k.nama, inner: K.profilInner(k),
  })),
};
process.stdout.write(JSON.stringify(out));
"""

THEME_FALLBACK = '''    <!-- Tema terang/gelap: dipasang sebelum CSS agar tidak berkedip -->
    <script>(function(){var t=null;try{t=localStorage.getItem("deholic-tema")}catch(e){}if(t!=="dark"&&t!=="light"){t=window.matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}var d=document.documentElement;d.setAttribute("data-theme",t);d.style.colorScheme=t;var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",t==="dark"?"#241f25":"#fff8f1")})();</script>'''
GOAT_FALLBACK = '''    <!-- GoatCounter: penghitung pengunjung tanpa cookie -->
    <script data-goatcounter="https://deholic.goatcounter.com/count" async src="https://gc.zgo.at/count.js"></script>'''


def snippets():
    """Ambil skrip tema anti-kedip & GoatCounter dari article.html supaya selalu sama dengan halaman lain."""
    try:
        src = open(os.path.join(SITE, 'article.html'), encoding='utf-8').read()
    except OSError:
        src = ''
    m = re.search(r'[ \t]*<!-- Tema terang/gelap[^\n]*-->\s*<script>.*?</script>', src, re.S)
    g = re.search(r'[ \t]*<!-- GoatCounter[^\n]*-->\s*<script data-goatcounter[^>]*></script>', src, re.S)
    return (m.group(0) if m else THEME_FALLBACK), (g.group(0) if g else GOAT_FALLBACK)


THEME, GOAT = snippets()
a_ = lambda s: html.escape(str(s), quote=True)


def ld(obj):
    return '    <script type="application/ld+json">\n' + json.dumps(obj, ensure_ascii=False, indent=2).replace('</', '<\\/') + '\n    </script>'


def absu(p):
    if not p: return ''
    if re.match(r'^https?://', p): return p
    return BASE + p.lstrip('/')


def head(title, desc, canon, og_type, image, image_alt, img_wh, extra_meta='', jsonld=()):
    w, h = img_wh
    return f'''<!doctype html>
<html lang="id">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#fff8f1" />
{THEME}
    <link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:ital,wght@0,400;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/assets/css/style.css" />
    <link rel="stylesheet" href="/assets/css/theme-british.css" />
    <link rel="stylesheet" href="/assets/css/theme-dark.css" />
    <noscript><style>.reveal {{ opacity: 1; transform: none; }}</style></noscript>
    {MARK}
    <title>{a_(title)}</title>
    <meta name="description" content="{a_(desc)}" />
{extra_meta}    <link rel="canonical" href="{a_(canon)}" />
    <meta property="og:type" content="{og_type}" />
    <meta property="og:site_name" content="Deholic Cattery" />
    <meta property="og:locale" content="id_ID" />
    <meta property="og:title" content="{a_(title)}" />
    <meta property="og:description" content="{a_(desc)}" />
    <meta property="og:url" content="{a_(canon)}" />
    <meta property="og:image" content="{a_(image)}" />
    <meta property="og:image:width" content="{w}" />
    <meta property="og:image:height" content="{h}" />
    <meta property="og:image:alt" content="{a_(image_alt)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="{a_(title)}" />
    <meta name="twitter:description" content="{a_(desc)}" />
    <meta name="twitter:image" content="{a_(image)}" />
{chr(10).join(ld(j) for j in jsonld)}
{GOAT}
  </head>
'''


def body(page, header, main, footer, scripts, progress=False):
    return f'''  <body data-page="{page}" data-root="/">
    <a class="skip" href="#konten">Lewati ke konten</a>
{'    <div class="progress" aria-hidden="true"><span></span></div>' + chr(10) if progress else ''}    <div class="bg" aria-hidden="true"><span class="orb o1"></span><span class="orb o2"></span><span class="orb o3"></span><span class="bg-dots"></span></div>
    <header id="site-header" class="site-header" data-prerendered>{header}</header>
    <main id="konten">
{main}
    </main>
    <footer id="site-footer" class="site-footer" data-prerendered>{footer}</footer>
{chr(10).join(f'    <script src="{s}"></script>' for s in scripts)}
  </body>
</html>
'''


def crumbs(items):
    return {"@type": "BreadcrumbList", "itemListElement": [
        {"@type": "ListItem", "position": i + 1, "name": n, "item": u} for i, (n, u) in enumerate(items)]}


def write(rel, content, written):
    path = os.path.join(SITE, rel)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    old = open(path, encoding='utf-8').read() if os.path.exists(path) else None
    if old != content:
        with open(path, 'w', encoding='utf-8') as f: f.write(content)
    written.add(os.path.normpath(rel))


def prune(folder, keep):
    """Hapus artikel/<x>/ atau kucing/<x>/ lama (hanya yang dibuat generator ini)."""
    base = os.path.join(SITE, folder)
    if not os.path.isdir(base): return []
    gone = []
    for name in sorted(os.listdir(base)):
        d = os.path.join(base, name); idx = os.path.join(d, 'index.html')
        if name in keep or not os.path.isdir(d) or not os.path.isfile(idx): continue
        if MARK in open(idx, encoding='utf-8').read():
            shutil.rmtree(d); gone.append(f'{folder}/{name}/')
    return gone


def main():
    data = json.loads(subprocess.run(['node', '-e', NODE, SITE], check=True, capture_output=True, text=True).stdout)
    written = set()
    footer = data['footer']
    slugs = [a['slug'] for a in data['articles']]
    if len(set(slugs)) != len(slugs): sys.exit('ERROR: slug artikel ganda: ' + ', '.join(s for s in slugs if slugs.count(s) > 1))

    # ---- /artikel/<slug>/ ----
    for a in data['articles']:
        if not re.fullmatch(r'[a-z0-9][a-z0-9-]*', a['slug']): sys.exit(f"ERROR: slug tidak valid: {a['slug']!r}")
        canon = f"{BASE}artikel/{a['slug']}/"
        title = f"{a['title']} — Deholic Cattery"
        img = absu(a['image']) or OG_FALLBACK
        wh = (1200, 750) if a['image'] else (1200, 630)
        posting = {"@context": "https://schema.org", "@type": "BlogPosting", "headline": a['title'], "description": a['excerpt'],
                   "image": [img], "datePublished": a['date'], "dateModified": a['date'], "inLanguage": "id-ID",
                   "articleSection": a['category'], "author": {"@type": "Organization", "name": "Deholic Cattery", "url": BASE},
                   "publisher": ORG, "mainEntityOfPage": {"@type": "WebPage", "@id": canon}, "url": canon}
        bc = {"@context": "https://schema.org", **crumbs([("Beranda", BASE), ("Artikel", BASE + "artikel/"), (a['title'], canon)])}
        extra = (f'    <meta property="article:published_time" content="{a_(a["date"])}" />\n'
                 f'    <meta property="article:section" content="{a_(a["category"])}" />\n')
        main_html = f'      <article id="article" class="article" data-prerendered data-slug="{a_(a["slug"])}">{a["inner"]}\n      </article>'
        page = head(title, a['excerpt'], canon, 'article', img, a['imageAlt'] if a['image'] else 'Deholic Cattery', wh, extra, (posting, bc)) \
            + body('article', data['headers']['article'], main_html, footer, ['/assets/js/main.js'], progress=True)
        write(f"artikel/{a['slug']}/index.html", page, written)

    # ---- /artikel/ (semua artikel) ----
    n = len(data['articles'])
    canon = BASE + 'artikel/'
    title = 'Semua Artikel Kucing — Deholic Cattery'
    desc = f'Kumpulan {n} artikel Deholic Cattery seputar merawat anabul kucing: perawatan, perilaku, kesehatan, dan tips British Shorthair.'
    coll = {"@context": "https://schema.org", "@type": "CollectionPage", "name": title, "description": desc, "url": canon, "inLanguage": "id-ID",
            "isPartOf": {"@type": "WebSite", "@id": BASE + "#website", "url": BASE, "name": "Deholic Cattery"},
            "mainEntity": {"@type": "ItemList", "numberOfItems": n, "itemListElement": [
                {"@type": "ListItem", "position": i + 1, "url": f"{BASE}artikel/{a['slug']}/", "name": a['title']} for i, a in enumerate(data['articles'])]}}
    bc = {"@context": "https://schema.org", **crumbs([("Beranda", BASE), ("Artikel", canon)])}
    main_html = f'''      <section class="page-hero">
        <div class="container narrow">
          <p class="eyebrow reveal">Arsip artikel</p>
          <h1 class="reveal">Semua <span class="grad">artikel</span> Deholic Cattery</h1>
          <p class="lead reveal">Catatan seputar merawat anabul, dari perawatan bulu dan kesehatan sampai memahami tingkah lucu kucing. Pilih kategori untuk menyaring artikel.</p>
        </div>
      </section>
      <section class="section" id="artikel" aria-labelledby="artikel-title">
        <div class="container">
          <div class="section-head reveal">
            <div><p class="eyebrow">{n} artikel</p><h2 id="artikel-title">Semua artikel</h2></div>
            <div class="filters" id="filters" role="tablist" aria-label="Filter kategori">{data['list']['chips']}</div>
          </div>
          <div class="grid" id="grid">{data['list']['cards']}
          </div>
          <p class="muted empty" id="grid-empty" hidden>Belum ada artikel di kategori ini.</p>
        </div>
      </section>'''
    page = head(title, desc, canon, 'website', OG_FALLBACK, 'Deholic Cattery', (1200, 630), '', (coll, bc)) \
        + body('articles', data['headers']['articles'], main_html, footer, ['/assets/js/main.js'])
    write('artikel/index.html', page, written)

    # ---- /kucing/<slug>/ ----
    for k in data['cats']:
        if not re.fullmatch(r'[a-z0-9][a-z0-9-]*', k['slug']): sys.exit(f"ERROR: slug kucing tidak valid: {k['slug']!r}")
        canon = f"{BASE}kucing/{k['slug']}/"
        img = absu(k['foto']) or OG_FALLBACK
        wh = (800, 800) if k['foto'] else (1200, 630)
        bc = {"@context": "https://schema.org", **crumbs([("Beranda", BASE), ("Adopsi", BASE + "adopsi.html"), (k['nama'], canon)])}
        extra = '    <meta name="robots" content="noindex" />\n' if k['contoh'] else ''
        main_html = f'      <div id="profil" data-prerendered data-slug="{a_(k["slug"])}">{k["inner"]}\n      </div>'
        page = head(k['title'], k['description'], canon, 'website', img, k['alt'], wh, extra, (bc,)) \
            + body('kucing', data['headers']['kucing'], main_html, footer, ['/assets/js/kucing.js', '/assets/js/main.js'])
        write(f"kucing/{k['slug']}/index.html", page, written)

    gone = prune('artikel', set(slugs)) + prune('kucing', {k['slug'] for k in data['cats']})
    print(f"gen-static: {len(data['articles'])} artikel + 1 daftar + {len(data['cats'])} kucing = {len(written)} halaman"
          + (f"; dihapus: {' '.join(gone)}" if gone else ''))


if __name__ == '__main__':
    main()
