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
