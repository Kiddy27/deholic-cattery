# Deholic Cattery — Blog Seputar Merawat Anabul Kucing

Situs blog statis Deholic Cattery (HTML + CSS + sedikit JavaScript) untuk menerbitkan artikel tentang anabul kucing. Tampilannya terang dan ceria: latar krem, aksen pastel, dan dekorasi jejak kaki kucing. Tidak perlu *build step*: cukup buka `index.html` di browser, atau unggah seluruh folder ke Netlify, GitHub Pages, Vercel, atau hosting statis lainnya.

> **Catatan:** keenam artikel yang ada saat ini adalah **konten contoh** (bertanda "Contoh"). Silakan ganti atau hapus dan isi dengan tulisanmu sendiri.

## Struktur folder

```
kucing-site/
├── index.html          → Beranda (hero, sorotan, grid artikel + filter kategori)
├── article.html        → Template halaman artikel (dibuka lewat article.html?slug=...)
├── tentang.html        → Halaman Tentang
├── assets/
│   ├── css/style.css   → Seluruh gaya tampilan
│   ├── js/articles.js  → ★ DATA SEMUA ARTIKEL (edit di sini)
│   ├── js/main.js      → Header/footer bersama, render kartu & artikel, animasi
│   └── img/            → favicon.svg & hero-cat.svg (ilustrasi buatan sendiri)
└── README.md
```

Header dan footer dibuat sekali di `assets/js/main.js` (fungsi `renderChrome`) dan dipakai di semua halaman.

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
  accent: ["#ffc6da", "#ffd9bd"],           // dua warna pastel gradien sampul
  featured: false,                          // true = tampil di "Sorotan" (pilih satu saja)
  sample: false,                            // true = muncul label "Contoh"
  content: `
    <p>Paragraf pembuka...</p>
    <h2>Subjudul</h2>
    <p>Isi...</p>
    <ul><li>Poin satu</li><li>Poin dua</li></ul>
    <blockquote>Kutipan atau tips penting.</blockquote>
  `,
},
```

4. Simpan, lalu muat ulang browser. Artikel otomatis muncul di grid beranda, footer kategori, dan bisa dibuka di `article.html?slug=kucing-dan-musim-hujan`.

Tips:
- Pastikan setiap blok diakhiri koma `},` dan `slug` tidak sama dengan artikel lain.
- Isi `content` memakai tanda backtick `` ` `` sehingga boleh beberapa baris. Hindari menulis backtick di dalam isi artikel.
- Untuk menghapus label "Contoh" dan catatan konten sampel, ubah `sample: true` menjadi `false` (dan hapus kalimat catatan di `index.html` bagian `sample-banner` bila semua artikel sudah asli).

## Menjalankan secara lokal

```bash
cd kucing-site
python3 -m http.server 8080
# buka http://localhost:8080
```

(Membuka `index.html` langsung dengan klik ganda juga berfungsi.)

## Publikasi

- **Netlify:** seret folder `kucing-site` ke https://app.netlify.com/drop
- **GitHub Pages:** unggah isi folder ke repositori, lalu aktifkan Pages di *Settings → Pages*.

## Kredit & lisensi aset

- Ilustrasi kucing (`hero-cat.svg`), favicon, kucing "mengintip" di footer, ikon, jejak kaki, dan sampul artikel dibuat sendiri dengan SVG/CSS — tidak ada foto atau gambar berhak cipta pihak ketiga.
- Font: [Fredoka](https://fonts.google.com/specimen/Fredoka) (judul) dan [Nunito](https://fonts.google.com/specimen/Nunito) (teks) via Google Fonts (SIL Open Font License).
- Ingin memakai foto? Simpan file secara lokal di `assets/img/` (jangan *hotlink*) dan cantumkan atribusinya di sini dan di footer.
