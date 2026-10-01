/* Data kucing Deholic Cattery.
   peran: "induk" atau "kitten". status kitten: "tersedia" | "dipesan" | "diadopsi".
   contoh: true = data fiktif untuk uji tampilan, WAJIB diganti data asli sebelum tayang. */
window.KUCING = [
  {
    slug: "baileys", nama: "Baileys", peran: "induk",
    warna: "Blue (abu-abu kebiruan polos)",
    foto: ["assets/img/kucing/baileys.webp"],
    alt: "Baileys, kucing British Shorthair abu-abu kebiruan bermata tembaga",
  },
  {
    slug: "everclear", nama: "Everclear", peran: "induk",
    warna: "Blue and white (abu-abu dan putih)",
    foto: ["assets/img/kucing/everclear.webp"],
    alt: "Everclear, kucing British Shorthair abu-abu dan putih sedang menjilat bibir",
  },
  {
    slug: "hennessy", nama: "Hennessy", peran: "induk",
    warna: "Blue and white (abu-abu dan putih)",
    foto: ["assets/img/kucing/hennessy.webp"],
    alt: "Hennessy, kucing British Shorthair abu-abu dan putih dengan pita World Cat Federation",
  },
  {
    slug: "absolute-vodka", nama: "Absolute Vodka", peran: "kitten",
    kelamin: "Jantan", warna: "Blue solid", lahir: "2026-04-05", status: "tersedia",
    vaksin: "Lengkap", cacing: "Sudah",
    sifat: "Si pipi chubby yang lincah dan hobi makan. Kalau nggak lagi main, ya lagi makan.",
    deskripsi: "Kenalan sama Absolute Vodka, kitten blue solid dengan pipi chubby yang bikin susah berhenti dilihat. Dia lincah, suka main, dan punya hobi yang dia jalani dengan sepenuh hati: makan. Cocok buat hooman yang siap diajak main tiap hari dan siap mendengar \u201cmeong\u201d saat jam makan tiba.",
    harga: "Tanya via DM",
    foto: ["assets/img/kucing/vodka-1.webp", "assets/img/kucing/vodka-2.webp", "assets/img/kucing/vodka-bayi.webp"],
    alt: "Absolute Vodka, kitten British Shorthair blue solid bermata tembaga",
    altFoto: ["Absolute Vodka rebahan di bean bag abu-abu", "Absolute Vodka duduk di lantai", "Absolute Vodka waktu masih bayi"],
  },
  {
    slug: "mochi", nama: "Mochi", peran: "kitten", contoh: true,
    kelamin: "Jantan", warna: "Blue", lahir: "2026-07-12", status: "tersedia",
    vaksin: "Vaksin pertama sudah (contoh)", cacing: "Sudah obat cacing (contoh)",
    sifat: "Kalem tapi kepo; tiap ada kardus baru, dia yang pertama \u201cinspeksi\u201d. Suka tidur di pangkuan setelah main.",
    harga: "Tanya via DM",
  },
  {
    slug: "kopi", nama: "Kopi", peran: "kitten", contoh: true,
    kelamin: "Betina", warna: "Lilac", lahir: "2026-07-12", status: "dipesan",
    vaksin: "Vaksin pertama sudah (contoh)", cacing: "Sudah obat cacing (contoh)",
    sifat: "Si cerewet kecil yang menyambut setiap orang datang dengan meong panjang. Paling semangat kalau lihat mainan bulu.",
    harga: "Tanya via DM",
  },
  {
    slug: "tofu", nama: "Tofu", peran: "kitten", contoh: true,
    kelamin: "Jantan", warna: "Blue", lahir: "2026-05-03", status: "diadopsi",
    vaksin: "Vaksin lengkap (contoh)", cacing: "Sudah obat cacing (contoh)",
    sifat: "Pemalu di menit pertama, manja di menit kelima. Hobinya mengikuti hooman ke mana pun, termasuk ke kamar mandi.",
    harga: "Tanya via DM",
  },
];
