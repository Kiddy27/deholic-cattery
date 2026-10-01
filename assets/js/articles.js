/* =========================================================
   DATA ARTIKEL — Deholic Cattery
   ---------------------------------------------------------
   Semua artikel di situs ini dibaca dari array di bawah.
   Untuk menambah artikel: salin satu objek { ... }, tempel
   di bagian ATAS array, lalu ubah isinya. Lihat README.md.

   Kolom:
   - slug      : id unik untuk URL (huruf kecil, pakai tanda -)
   - title     : judul artikel
   - category  : nama kategori (bebas, mis. "Perawatan")
   - excerpt   : ringkasan singkat (1–2 kalimat)
   - date      : tanggal terbit, format "YYYY-MM-DD"
   - readTime  : perkiraan waktu baca (menit)
   - author    : nama penulis
   - icon      : paw | bowl | eye | home | shield | sparkle | heart
   - accent    : dua warna gradien sampul, mis. ["#ffc6da", "#ffd9bd"] (warna pastel paling cocok)
   - featured  : true untuk dijadikan "Sorotan" di beranda (pilih satu)
   - sample    : true = konten contoh (tampil label "Contoh"). Hapus/false untuk artikel asli.
   - content   : isi artikel dalam HTML (<p>, <h2>, <ul>, <blockquote>, dll.)
   ========================================================= */

window.ARTICLES = [
  {
    slug: "memahami-bahasa-tubuh-kucing",
    title: "Memahami Bahasa Tubuh Kucing: Membaca Ekor, Telinga, dan Mata",
    category: "Perilaku",
    excerpt:
      "Kucing jarang 'bicara' dengan suara, tetapi tubuhnya bercerita banyak. Kenali sinyal-sinyal kecil agar hubunganmu dengan anabul makin dekat.",
    date: "2026-09-28",
    readTime: 6,
    author: "Tim Deholic Cattery",
    icon: "paw",
    accent: ["#d4c5ff", "#a8d8ff"],
    featured: true,
    sample: true,
    content: `
      <p>Kucing adalah komunikator yang halus. Alih-alih menggonggong atau melompat kegirangan, mereka menyampaikan perasaan lewat posisi ekor, arah telinga, bentuk pupil, hingga cara mereka berbaring. Memahami sinyal ini membantu kita tahu kapan anabul ingin dimanja dan kapan ia butuh ruang.</p>

      <h2>Ekor: barometer suasana hati</h2>
      <p>Ekor yang tegak dengan ujung sedikit melengkung umumnya menandakan kucing merasa nyaman dan ramah. Sebaliknya, ekor yang dikibas-kibaskan dengan cepat atau dipukul-pukulkan ke lantai sering berarti ia sedang kesal atau terlalu terstimulasi.</p>
      <ul>
        <li><strong>Tegak lurus:</strong> percaya diri, senang menyapa.</li>
        <li><strong>Mengembang (seperti sikat botol):</strong> kaget atau merasa terancam.</li>
        <li><strong>Melingkar di tubuh:</strong> sedang santai atau ingin menyendiri.</li>
      </ul>

      <h2>Telinga: antena yang jujur</h2>
      <p>Telinga yang menghadap ke depan menunjukkan rasa ingin tahu. Bila telinga diputar ke samping atau dilipat rata ke belakang, itu tanda ketidaknyamanan — saat seperti ini, sebaiknya beri kucing jarak.</p>

      <h2>Mata dan "kedipan pelan"</h2>
      <p>Kedipan mata yang lambat sering dianggap sebagai tanda kepercayaan. Coba balas dengan kedipan pelan juga — banyak pemilik merasa cara ini membuat kucing lebih rileks di dekat mereka. Pupil yang tiba-tiba membesar bisa berarti bersemangat, takut, atau sedang dalam mode berburu, jadi perhatikan juga konteksnya.</p>

      <blockquote>Bahasa tubuh selalu dibaca sebagai satu kesatuan. Satu sinyal saja bisa menyesatkan; lihat ekor, telinga, mata, dan postur sekaligus.</blockquote>

      <h2>Postur tubuh</h2>
      <p>Kucing yang berguling memperlihatkan perutnya sedang menunjukkan rasa aman — tetapi itu belum tentu undangan untuk mengelus perut. Banyak kucing justru tidak suka disentuh di area tersebut. Biarkan anabul yang menentukan batasnya.</p>

      <h2>Kapan perlu waspada?</h2>
      <p>Perubahan perilaku yang mendadak — misalnya kucing yang biasanya ramah jadi sering bersembunyi atau agresif — bisa menjadi tanda ia sedang tidak enak badan. Jika perubahan itu berlangsung lebih dari beberapa hari, konsultasikan dengan dokter hewan.</p>
    `,
  },
  {
    slug: "merawat-bulu-kucing",
    title: "Merawat Bulu Kucing: Rutinitas Sederhana agar Tetap Lembut dan Berkilau",
    category: "Perawatan",
    excerpt:
      "Menyisir bukan sekadar soal penampilan. Rutinitas grooming yang konsisten membantu mengurangi bulu rontok dan menjadi momen bonding yang menyenangkan.",
    date: "2026-09-24",
    readTime: 5,
    author: "Tim Deholic Cattery",
    icon: "sparkle",
    accent: ["#ffc6da", "#ffd9bd"],
    sample: true,
    content: `
      <p>Kucing memang dikenal rajin menjilati tubuhnya sendiri, tetapi bantuan dari pemilik tetap penting — terutama untuk kucing berbulu panjang, kucing yang sudah tua, atau saat musim rontok.</p>

      <h2>Pilih sisir yang tepat</h2>
      <p>Kucing berbulu pendek biasanya cukup dengan sisir karet atau sikat berbulu halus. Kucing berbulu panjang membutuhkan sisir bergigi lebih jarang untuk mengurai kusut, lalu sisir bergigi rapat untuk merapikan.</p>

      <h2>Bangun rutinitas yang menyenangkan</h2>
      <ul>
        <li>Mulai dengan sesi singkat, lalu tambah durasinya perlahan.</li>
        <li>Sisir searah pertumbuhan bulu dengan gerakan lembut.</li>
        <li>Pilih waktu saat kucing sedang santai, misalnya setelah makan.</li>
        <li>Akhiri dengan pujian atau camilan kecil agar ia mengingatnya sebagai hal positif.</li>
      </ul>

      <h2>Bagaimana dengan mandi?</h2>
      <p>Sebagian besar kucing tidak perlu sering dimandikan. Mandi biasanya hanya diperlukan bila bulunya sangat kotor atau atas saran dokter hewan. Gunakan sampo khusus kucing — jangan sampo manusia — dan pastikan tubuhnya benar-benar kering setelahnya.</p>

      <blockquote>Sesi menyisir juga kesempatan emas untuk memeriksa kulit: perhatikan kutu, luka, benjolan, atau area kemerahan.</blockquote>

      <h2>Tanda yang perlu diperhatikan</h2>
      <p>Bulu yang tiba-tiba kusam, rontok berlebihan hingga terlihat botak, atau kucing yang berhenti merawat dirinya sendiri bisa menjadi petunjuk adanya masalah kesehatan. Jika kamu melihat hal ini, ada baiknya memeriksakan anabul ke dokter hewan.</p>
    `,
  },
  {
    slug: "makanan-sehat-untuk-kucing",
    title: "Makanan Sehat untuk Kucing: Dasar-Dasar yang Perlu Kamu Ketahui",
    category: "Nutrisi",
    excerpt:
      "Kucing adalah karnivora sejati. Pahami kebutuhan dasarnya, pentingnya air minum, dan makanan manusia yang sebaiknya dijauhkan dari mangkuknya.",
    date: "2026-09-19",
    readTime: 7,
    author: "Tim Deholic Cattery",
    icon: "bowl",
    accent: ["#bdf2dc", "#c8e9ff"],
    sample: true,
    content: `
      <p>Apa yang masuk ke mangkuk anabul berpengaruh besar pada energi, bulu, dan kesehatannya dalam jangka panjang. Kabar baiknya, prinsip dasarnya cukup sederhana.</p>

      <h2>Kucing adalah karnivora</h2>
      <p>Tubuh kucing dirancang untuk mendapatkan nutrisi utama dari protein hewani. Karena itu, pilihlah makanan kucing komersial yang diformulasikan "lengkap dan seimbang" sesuai tahap usianya — anak kucing, dewasa, atau senior.</p>

      <h2>Basah, kering, atau kombinasi?</h2>
      <p>Makanan kering praktis dan tahan lama, sedangkan makanan basah membantu menambah asupan cairan. Banyak pemilik memilih kombinasi keduanya. Yang terpenting adalah kualitas makanan dan porsi yang sesuai dengan kebutuhan kucingmu.</p>

      <h2>Jangan lupakan air</h2>
      <ul>
        <li>Sediakan air bersih yang selalu diganti setiap hari.</li>
        <li>Letakkan mangkuk air terpisah dari tempat makan dan kotak pasir.</li>
        <li>Sebagian kucing lebih suka air mengalir — air mancur khusus kucing bisa dicoba.</li>
      </ul>

      <h2>Makanan manusia yang sebaiknya dihindari</h2>
      <p>Beberapa makanan yang aman bagi kita bisa berbahaya bagi kucing, misalnya bawang merah, bawang putih, cokelat, anggur dan kismis, serta minuman beralkohol atau berkafein. Susu sapi juga sering membuat perut kucing dewasa tidak nyaman.</p>

      <blockquote>Setiap kucing unik. Untuk menentukan jenis makanan dan porsi yang tepat — apalagi jika kucingmu punya kondisi kesehatan tertentu — diskusikan dengan dokter hewan.</blockquote>

      <h2>Mengganti makanan secara bertahap</h2>
      <p>Jika ingin beralih ke merek atau jenis makanan baru, campurkan sedikit demi sedikit dengan makanan lama selama beberapa hari. Perubahan mendadak bisa memicu gangguan pencernaan.</p>
    `,
  },
  {
    slug: "tips-untuk-pemilik-kucing-pertama",
    title: "Tips untuk Pemilik Kucing Pertama: Persiapan Sebelum Anabul Datang",
    category: "Pemula",
    excerpt:
      "Baru pertama kali memelihara kucing? Berikut daftar persiapan dan kebiasaan sederhana agar hari-hari pertama terasa tenang bagi kalian berdua.",
    date: "2026-09-14",
    readTime: 6,
    author: "Tim Deholic Cattery",
    icon: "heart",
    accent: ["#ffbccd", "#e3cfff"],
    sample: true,
    content: `
      <p>Membawa pulang kucing pertama adalah momen yang membahagiakan. Sedikit persiapan akan membuat masa adaptasinya jauh lebih mulus — baik untuk anabul maupun untukmu.</p>

      <h2>Perlengkapan dasar</h2>
      <ul>
        <li>Tempat makan dan minum yang mudah dibersihkan.</li>
        <li>Kotak pasir beserta pasirnya, diletakkan di sudut yang tenang.</li>
        <li>Tempat tidur atau selimut yang nyaman.</li>
        <li>Garukan (scratching post) agar sofa tetap aman.</li>
        <li>Mainan sederhana dan kandang/tas untuk dibawa ke dokter hewan.</li>
      </ul>

      <h2>Siapkan "ruang aman"</h2>
      <p>Di hari-hari pertama, lingkungan baru bisa terasa menakutkan. Siapkan satu ruangan kecil berisi semua kebutuhannya. Biarkan kucing menjelajah dengan ritmenya sendiri sebelum diperkenalkan ke seluruh rumah.</p>

      <h2>Bersabar dan beri waktu</h2>
      <p>Wajar jika kucing bersembunyi atau belum mau dipegang. Duduklah di dekatnya, bicara dengan suara lembut, dan biarkan ia yang mendekat lebih dulu. Kepercayaan dibangun pelan-pelan.</p>

      <blockquote>Jadwalkan kunjungan pertama ke dokter hewan sejak awal untuk pemeriksaan umum, serta diskusi tentang vaksin, obat cacing, dan sterilisasi.</blockquote>

      <h2>Kebiasaan kecil yang berdampak besar</h2>
      <p>Beri makan pada jam yang kurang lebih sama setiap hari, bersihkan kotak pasir secara rutin, dan luangkan waktu bermain setiap hari. Rutinitas yang konsisten membuat kucing merasa aman.</p>
    `,
  },
  {
    slug: "kesehatan-dan-vaksin-kucing",
    title: "Kesehatan & Vaksin: Menjaga Anabul Tetap Prima",
    category: "Kesehatan",
    excerpt:
      "Pemeriksaan rutin, vaksinasi, dan perawatan pencegahan adalah investasi terbaik untuk umur panjang kucingmu. Ini gambaran umumnya.",
    date: "2026-09-08",
    readTime: 6,
    author: "Tim Deholic Cattery",
    icon: "shield",
    accent: ["#b3e0ff", "#c4f3e2"],
    sample: true,
    content: `
      <p>Kucing pandai menyembunyikan rasa sakit. Itulah sebabnya perawatan pencegahan dan pemeriksaan berkala sangat berharga — masalah bisa terdeteksi sebelum menjadi serius.</p>

      <h2>Mengapa vaksin penting?</h2>
      <p>Vaksin membantu melindungi kucing dari sejumlah penyakit menular yang bisa berbahaya. Jenis vaksin dan jadwalnya dapat berbeda untuk setiap kucing, tergantung usia, riwayat kesehatan, dan gaya hidupnya (misalnya kucing rumahan atau yang sering keluar rumah).</p>
      <p><strong>Dokter hewan adalah sumber terbaik</strong> untuk menentukan jadwal vaksinasi yang tepat bagi anabulmu.</p>

      <h2>Perawatan pencegahan lainnya</h2>
      <ul>
        <li><strong>Obat cacing dan antikutu</strong> sesuai anjuran dokter hewan.</li>
        <li><strong>Sterilisasi</strong> — diskusikan manfaat dan waktu yang tepat.</li>
        <li><strong>Kesehatan gigi</strong> — perhatikan bau mulut atau kesulitan mengunyah.</li>
        <li><strong>Pemeriksaan berkala</strong>, termasuk saat kucing tampak sehat.</li>
      </ul>

      <h2>Tanda-tanda kucing perlu diperiksa</h2>
      <p>Segera hubungi dokter hewan bila kucing tidak mau makan, terlihat sangat lesu, muntah atau diare berulang, kesulitan buang air kecil, sesak napas, atau mengalami perubahan perilaku yang mencolok.</p>

      <blockquote>Simpan catatan kesehatan anabul — tanggal vaksin, obat cacing, dan hasil pemeriksaan — dalam satu buku atau aplikasi agar mudah dilacak.</blockquote>

      <h2>Penutup</h2>
      <p>Artikel ini bersifat informasi umum dan bukan pengganti konsultasi medis. Setiap kucing berbeda; keputusan medis sebaiknya selalu diambil bersama dokter hewan terpercaya.</p>
    `,
  },
  {
    slug: "membuat-rumah-ramah-kucing",
    title: "Membuat Rumah Ramah Kucing: Ruang Vertikal, Mainan, dan Ketenangan",
    category: "Gaya Hidup",
    excerpt:
      "Kucing rumahan tetap butuh tantangan dan tempat bersembunyi. Ide-ide sederhana untuk menciptakan rumah yang nyaman dan memperkaya hari-hari anabul.",
    date: "2026-09-02",
    readTime: 5,
    author: "Tim Deholic Cattery",
    icon: "home",
    accent: ["#ffe3a8", "#ffc6da"],
    sample: true,
    content: `
      <p>Bagi kucing, rumah bukan hanya tempat tinggal — melainkan seluruh wilayah kekuasaannya. Lingkungan yang menarik membantu kucing tetap aktif, percaya diri, dan jauh dari rasa bosan.</p>

      <h2>Manfaatkan ruang vertikal</h2>
      <p>Kucing senang mengamati dunia dari tempat tinggi. Rak dinding, menara kucing (cat tree), atau sekadar ambang jendela yang aman bisa menjadi tempat favorit untuk bersantai dan mengawasi sekitar.</p>

      <h2>Tempat bersembunyi</h2>
      <p>Kardus sederhana sering kali menjadi mainan terbaik. Sediakan beberapa sudut tertutup yang tenang agar kucing punya tempat untuk menenangkan diri ketika rumah sedang ramai.</p>

      <h2>Waktu bermain setiap hari</h2>
      <ul>
        <li>Mainan tongkat berbulu meniru gerakan mangsa dan memancing naluri berburu.</li>
        <li>Puzzle feeder membuat waktu makan lebih menantang.</li>
        <li>Rotasi mainan secara berkala agar tetap terasa baru.</li>
      </ul>

      <blockquote>Akhiri sesi bermain dengan membiarkan kucing "menangkap" mainannya. Rasa berhasil itu penting bagi pemburu kecil di rumahmu.</blockquote>

      <h2>Keamanan rumah</h2>
      <p>Periksa tanaman hias — beberapa jenis, seperti bunga lili, beracun bagi kucing. Simpan tali, karet gelang, dan benda kecil di tempat tertutup, serta pastikan jendela atau balkon aman dari risiko jatuh.</p>
    `,
  },
];
