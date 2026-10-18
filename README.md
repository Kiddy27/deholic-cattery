# Deholic Cattery — Blog Seputar Merawat Anabul Kucing

Situs blog statis Deholic Cattery (HTML + CSS + sedikit JavaScript) untuk menerbitkan artikel tentang anabul kucing. Tampilannya terang dan ceria: latar krem, aksen pastel, dan dekorasi jejak kaki kucing. Tidak perlu *build step*: cukup buka `index.html` di browser, atau unggah seluruh folder ke Netlify, GitHub Pages, Vercel, atau hosting statis lainnya.

## Struktur folder

```
kucing-site/
├── index.html              → Beranda (hero, sorotan, 9 artikel terbaru + tombol "Lihat semua artikel")
├── artikel/                → ★ DIBUAT OTOMATIS oleh tools/gen-static.py (jangan diedit manual)
│   ├── index.html          → /artikel/ — semua artikel + chip filter kategori (/artikel/?kategori=Perawatan)
│   └── <slug>/index.html   → /artikel/<slug>/ — satu halaman HTML statis per artikel
├── kucing/<slug>/index.html→ /kucing/<slug>/ — profil kucing statis (DIBUAT OTOMATIS)
├── article.html            → URL lama article.html?slug=X → langsung dialihkan ke /artikel/X/
├── kucing.html             → URL lama kucing.html?nama=X → langsung dialihkan ke /kucing/X/
├── adopsi.html             → Daftar kitten & induk
├── tentang.html            → Halaman Tentang
├── sitemap.xml             → dibuat /workspace/tools/gen-sitemap.py
├── tools/gen-static.py     → generator halaman statis (Python 3 + node, tanpa dependensi)
├── assets/
│   ├── css/                → style.css, theme-british.css, theme-dark.css
│   ├── js/articles.js      → ★ DATA SEMUA ARTIKEL (edit di sini)
│   ├── js/kucing-data.js   → ★ DATA KUCING
│   ├── js/main.js          → templat HTML bersama (createTemplates) + header/footer, tema, bagikan, filter
│   ├── js/kucing.js        → templat & perilaku halaman adopsi/profil kucing
│   └── img/                → favicon, logo, foto kucing, artikel/<slug>.webp (sampul)
└── README.md
```

### Halaman statis (penting untuk SEO)

Setiap artikel dan profil kucing punya file HTML sendiri yang sudah berisi judul, meta description,
canonical (`https://deholic.id/artikel/<slug>/`), tag OG/Twitter (og:image = sampul artikel), JSON-LD
`BlogPosting` + `BreadcrumbList`, dan seluruh isi artikel — Google bisa membacanya tanpa menjalankan JavaScript.

- Templat HTML ada di **satu tempat**: `createTemplates()` di `assets/js/main.js` dan `createKucingTemplates()`
  di `assets/js/kucing.js`. Generator memanggil templat yang sama lewat node, jadi tampilan halaman statis
  identik dengan render di browser. Di halaman statis (`data-prerendered`), `main.js` hanya menambahkan perilaku
  (tema gelap/terang, menu, tombol bagikan, filter, bilah progres) tanpa mengganti isi.
- Halaman statis memakai path absolut (`/assets/...`, `data-root="/"`), karena situs berada di root domain.
  Karena itu buka situs lewat server lokal (lihat di bawah), bukan klik ganda file.
- Tautan lama di isi artikel (`article.html?slug=X`, `kucing.html?nama=X`) otomatis diubah ke `/artikel/X/` /
  `/kucing/X/` saat generate, jadi file antrian lama tetap aman.
- Artikel dengan `sample: true` tidak dibuat halaman statisnya (tetap tampil lewat `article.html?slug=`, noindex).
  Kucing `contoh: true` tetap dibuat halamannya tetapi diberi `noindex` dan tidak masuk sitemap.

**Regenerasi** (wajib setiap kali `articles.js`, `kucing-data.js`, templat di `main.js`/`kucing.js` berubah):

```bash
cd kucing-site
python3 tools/gen-static.py                 # tulis ulang artikel/ dan kucing/ (hapus slug yang sudah tidak ada)
python3 /workspace/tools/gen-sitemap.py     # perbarui sitemap.xml (DEHOLIC_SITE=$PWD bila bukan /workspace/kucing-site)
git add -A artikel kucing sitemap.xml
```

Rutinitas harian `/workspace/tools/publish-today.py` sudah otomatis menjalankan keduanya dan meng-commit hasilnya
bersama artikel baru, lalu memeriksa `https://deholic.id/artikel/<slug>/` (status 200 + judul ada di HTML mentah).

## Cara menambah artikel baru

1. Buka `assets/js/articles.js`.
2. Salin satu blok artikel `{ ... },` lalu tempel di **bagian atas** array `window.ARTICLES`.
3. Ubah isinya, contoh:

```js
{
  slug: "kucing-dan-musim-hujan",          // unik, huruf kecil, pakai tanda -
  title: "Menjaga Kucing Tetap Nyaman di Musim Hujan",
  category: "Perawatan",                    // kategori baru otomatis muncul di filter
  excerpt: "Ringkasan singkat 1–2 kalimat.",
  date: "2026-10-05",                       // format YYYY-MM-DD (urutan otomatis terbaru dulu)
  readTime: 4,                              // menit
  author: "Fransdiky",
  icon: "paw",                              // paw | bowl | eye | home | shield | sparkle | heart
  accent: ["#ffc6da", "#ffd9bd"],           // dua warna pastel gradien sampul (dipakai jika tanpa image)
  image: "assets/img/artikel/kucing-dan-musim-hujan.webp", // opsional: gambar sampul
  imageAlt: "Ilustrasi kucing abu-abu menatap hujan dari jendela", // opsional: deskripsi gambar (alt)
  featured: false,                          // true = tampil di "Sorotan" (pilih satu saja; jika tidak ada, artikel terbaru)
  content: `
    <p>Paragraf pembuka...</p>
    <h2>Subjudul</h2>
    <p>Isi...</p>
    <ul><li>Poin satu</li><li>Poin dua</li></ul>
    <blockquote>Kutipan atau tips penting.</blockquote>
  `,
},
```

4. Simpan, lalu jalankan `python3 tools/gen-static.py` (dan gen-sitemap). Artikel muncul di beranda (9 terbaru), di `/artikel/`, footer kategori, dan punya halaman sendiri `/artikel/kucing-dan-musim-hujan/`.

Tips:
- Pastikan setiap blok diakhiri koma `},` dan `slug` tidak sama dengan artikel lain.
- Isi `content` memakai tanda backtick `` ` `` sehingga boleh beberapa baris. Hindari menulis backtick di dalam isi artikel.

### Gambar sampul (`image`, opsional)

- Simpan gambar di `assets/img/artikel/<slug>.webp`, lalu isi `image: "assets/img/artikel/<slug>.webp"` (path relatif dari root situs).
- Format yang disarankan: WebP lanskap **1200×750 px (16:10)**, kualitas ±80, ukuran di bawah ±150 KB. Gaya ilustrasi saat ini: pastel lembut, flat ala buku anak, kucing British Shorthair abu-abu bermata tembaga, tanpa teks di gambar.
- `imageAlt` berisi deskripsi singkat isi gambar untuk pembaca layar. Jika kosong, alt memakai judul artikel.
- Gambar tampil di kartu artikel (lazy-load), blok "Sorotan", header halaman artikel, dan dipakai sebagai `og:image` di halaman statis artikel.
- Jika `image` tidak diisi, sampul otomatis memakai sampul ikon + gradien dari `icon` dan `accent` seperti biasa.
- Artikel antrian (`/workspace/drafts/antrian/YYYY-MM-DD-slug.js`) boleh memakai `image`; simpan gambarnya di `/workspace/drafts/antrian/img/<slug>.webp`. Skrip `publish-today.py` menyalinnya ke `assets/img/artikel/` dan ikut meng-commit. Jika gambar tidak ditemukan, artikel tetap terbit tanpa gambar.

## Menjalankan secara lokal

```bash
cd kucing-site
python3 -m http.server 8080
# buka http://localhost:8080
```

(Halaman statis memakai path absolut `/...`, jadi gunakan server lokal; klik ganda file tidak lagi didukung penuh.)

## Publikasi

- **Netlify:** seret folder `kucing-site` ke https://app.netlify.com/drop
- **GitHub Pages:** repo `Kiddy27/deholic-cattery` (domain https://deholic.id lewat file `CNAME`). Pastikan folder `artikel/` dan `kucing/` hasil generator ikut di-commit.
- Setelah struktur URL berubah, kirim ulang `https://deholic.id/sitemap.xml` di Google Search Console.

## Kredit & lisensi aset

- Ilustrasi kucing (`hero-cat.svg`), favicon, kucing "mengintip" di footer, ikon, jejak kaki, dan sampul ikon (fallback) dibuat sendiri dengan SVG/CSS.
- Gambar sampul artikel di `assets/img/artikel/` adalah ilustrasi yang dibuat dengan generator gambar AI khusus untuk situs ini (tanpa foto pihak ketiga).
- Font: [Fredoka](https://fonts.google.com/specimen/Fredoka) (judul) dan [Nunito](https://fonts.google.com/specimen/Nunito) (teks) via Google Fonts (SIL Open Font License).
- Ingin memakai foto? Simpan file secara lokal di `assets/img/` (jangan *hotlink*) dan cantumkan atribusinya di sini dan di footer.
