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
    slug: "rutinitas-harian-kucing",
    title: "Alarm Berbulu Jam 5 Pagi: Kenapa Rutinitas Harian Bikin Kucing Lebih Tenang",
    category: "Perilaku",
    excerpt:
      "Anabul suka membangunkanmu subuh-subuh? Ini cara santai menyusun jadwal makan, main, dan istirahat supaya kucing lebih tenang dan rumah lebih damai.",
    date: "2026-10-15",
    readTime: 5,
    author: "Tim Deholic Cattery",
    icon: "paw",
    accent: ["#d9e1ea", "#f3d2b5"],
    content: `
      <p>Kalau kamu pernah dibangunkan jam lima pagi oleh kaki berbulu yang menepuk-nepuk pipi, atau suara meong yang makin lama makin dramatis di depan pintu kamar, selamat: kamu sudah kenal "alarm" paling setia di dunia. Alarm ini tidak bisa di-snooze, dan kadang malah naik volume kalau diabaikan.</p>
      <p>Banyak pemilik kucing mengira anabul cuma rewel. Padahal, sering kali kucing sedang menagih sesuatu yang dia anggap sudah "jadwalnya". Di sinilah rutinitas harian berperan. Bukan untuk bikin hidupmu kaku, tapi supaya anabul tahu apa yang akan terjadi, dan kamu bisa tidur sedikit lebih nyenyak.</p>

      <h2>Kenapa kucing suka hal yang bisa ditebak?</h2>
      <p>Kucing pada umumnya adalah makhluk kebiasaan. Mereka cenderung merasa lebih aman ketika lingkungan dan kegiatan sehari-harinya bisa ditebak: makan kira-kira di jam yang sama, main di waktu yang sama, dan punya tempat tidur yang tidak tiba-tiba pindah. Perubahan mendadak memang tidak selalu jadi masalah, tapi untuk sebagian kucing, hal itu bisa membuatnya lebih waspada atau gelisah.</p>
      <p>Rutinitas yang teratur membantu anabul "membaca" harinya. Dia tahu kapan waktunya makan, jadi tidak perlu terus-terusan protes. Dia tahu kapan waktunya main, jadi energinya tersalurkan. Hasilnya, banyak pemilik merasa kucingnya jadi lebih kalem dan tidak terlalu banyak menuntut.</p>

      <h2>Jadwal makan: fondasi utama</h2>
      <p>Untuk banyak kucing, makan adalah acara paling penting dalam sehari. Coba tentukan jam makan yang kurang lebih tetap, lalu usahakan untuk konsisten. Tidak harus tepat sampai hitungan menit, kok. Yang penting polanya jelas.</p>
      <ul>
        <li><strong>Pilih jam yang realistis untukmu.</strong> Kalau kamu biasa bangun jam enam, jangan bikin jadwal sarapan anabul jam lima. Nanti kamu sendiri yang menyesal.</li>
        <li><strong>Jangan langsung memberi makan begitu dibangunkan.</strong> Kalau setiap kali dia mengeong subuh-subuh kamu langsung mengisi mangkuk, dia belajar bahwa strategi itu berhasil. Bangun, cuci muka, baru siapkan makanannya.</li>
        <li><strong>Soal porsi dan frekuensi,</strong> setiap kucing bisa berbeda tergantung usia dan kondisinya. Kalau ragu, tanyakan ke dokter hewan berapa kali makan dan seberapa banyak yang cocok untuk anabulmu.</li>
      </ul>

      <h2>Waktu main yang terjadwal</h2>
      <p>Banyak kucing cenderung lebih aktif di pagi hari dan menjelang malam. Kalau energinya tidak tersalurkan, jangan heran kalau tengah malam ada sesi lari-lari keliling rumah seperti sedang latihan maraton.</p>
      <p>Coba sisihkan waktu main singkat setiap hari, misalnya sekali di pagi hari dan sekali di sore atau malam. Pakai mainan pancing atau bola kecil, biarkan dia mengejar, menerkam, dan "menangkap" buruannya. Setelah sesi main, beri makan atau camilan. Urutan main lalu makan ini sering membuat kucing merasa puas, lalu lanjut membersihkan diri dan tidur. Lumayan, kan, kalau bisa jadi trik supaya malammu lebih tenang?</p>

      <h2>Jangan lupa jadwal "me time" anabul</h2>
      <p>Rutinitas bukan cuma soal makan dan main. Kucing juga butuh waktu tenang untuk tidur, berjemur, atau sekadar memandangi dunia dari jendela. Pastikan dia punya tempat istirahat favorit yang tidak sering diganggu, terutama oleh tamu kecil yang gemas ingin memeluk.</p>
      <p>Kotak pasir juga bagian dari rutinitas. Membersihkannya di jam yang kurang lebih sama setiap hari membantu menjaga kotak tetap nyaman dipakai, dan kamu juga jadi tidak lupa.</p>

      <h2>Contoh rutinitas sederhana</h2>
      <p>Ini cuma contoh, ya. Sesuaikan dengan jam kerja dan kebiasaan di rumahmu:</p>
      <ul>
        <li><strong>Pagi:</strong> sesi main singkat, lalu sarapan, lalu cek air minum.</li>
        <li><strong>Siang:</strong> waktunya anabul tidur siang dengan khidmat. Kamu cukup jangan mengganggunya.</li>
        <li><strong>Sore:</strong> bersihkan kotak pasir, sisir bulu sebentar kalau dia mau.</li>
        <li><strong>Malam:</strong> sesi main yang lebih seru, lalu makan malam, lalu lampu mulai diredupkan.</li>
      </ul>

      <h2>Kalau rutinitas harus berubah</h2>
      <p>Hidup tidak selalu sesuai rencana. Ada kalanya kamu pindah kerja, pindah rumah, atau sedang liburan. Kalau memungkinkan, ubah jadwal pelan-pelan, misalnya geser jam makan sedikit demi sedikit setiap beberapa hari, bukan langsung berubah drastis. Kalau anabul dititipkan atau dijaga orang lain, tuliskan jadwal hariannya supaya penjaganya bisa mengikuti.</p>
      <p>Perhatikan juga perubahan perilaku yang tidak biasa. Kalau anabul tiba-tiba tidak mau makan, terlihat lesu, atau kebiasaan di kotak pasirnya berubah, jangan cuma menyalahkan jadwal yang berantakan. Lebih baik hubungi dokter hewan untuk memastikan semuanya baik-baik saja.</p>

      <h2>Penutup</h2>
      <p>Rutinitas harian adalah cara sederhana untuk bilang ke anabul, "Tenang, semuanya terkendali." Jadwal makan yang konsisten, waktu main yang rutin, dan tempat istirahat yang aman bisa membuat hari-hari bersama kucing terasa lebih damai. Siapa tahu, alarm berbulu jam lima pagi itu pelan-pelan mau mengalah jadi jam enam.</p>
      <p>Kami di Deholic Cattery, cattery British Shorthair di Jakarta Barat, senang berbagi tips sederhana seputar merawat anabul. Yuk, mampir dan ngobrol bareng kami di Instagram atau TikTok @deholic.cattery.</p>
    `,
  },
  {
    slug: "membawa-kucing-ke-vet-pertama-kali",
    title: "Ke Vet Pertama Kali: Biar Anabul (dan Kamu) Nggak Panik",
    category: "Perawatan",
    excerpt:
      "Mau bawa anabul ke dokter hewan untuk pertama kali? Ini panduan santai soal persiapan, barang bawaan, dan apa yang biasanya terjadi di klinik.",
    date: "2026-10-14",
    readTime: 5,
    author: "Tim Deholic Cattery",
    icon: "shield",
    accent: ["#d9e1ea", "#f3d2b5"],
    content: `
      <p>Kunjungan pertama ke dokter hewan sering terasa seperti hari pertama sekolah, cuma bedanya yang deg-degan bukan cuma muridnya, tapi juga orang tuanya. Anabul mengeong protes di jalan, kamu sibuk memikirkan mau tanya apa, dan tiba-tiba sudah sampai di ruang tunggu dengan tangan sedikit gemetar. Tenang, itu wajar banget.</p>
      <p>Kabar baiknya, dengan sedikit persiapan, kunjungan pertama ke vet bisa berjalan jauh lebih santai. Anggap saja ini perkenalan: anabul kenalan dengan dokternya, dan kamu dapat teman diskusi untuk urusan kesehatan si kecil ke depannya.</p>

      <h2>Kenapa kunjungan pertama itu penting?</h2>
      <p>Kunjungan pertama biasanya jadi kesempatan dokter hewan untuk mengenal kondisi umum kucingmu. Dari situ, kamu bisa ngobrol soal jadwal vaksin, obat cacing, makanan, dan pertanyaan lain yang selama ini cuma kamu simpan di kepala. Kalau kucingmu baru diadopsi, kunjungan ini juga membantu kamu punya gambaran awal tentang kesehatannya.</p>
      <p>Selain itu, kunjungan saat anabul sedang sehat bisa membuat pengalaman ke klinik terasa lebih netral. Jadi dokter hewan tidak hanya identik dengan momen sakit atau darurat.</p>

      <h2>Pilih klinik dan buat janji dulu</h2>
      <p>Sebelum berangkat, luangkan waktu untuk memilih klinik yang lokasinya cukup terjangkau dari rumah. Perjalanan yang tidak terlalu jauh biasanya lebih nyaman untuk kucing. Kalau bisa, telepon atau hubungi klinik dulu untuk menanyakan jam praktik dan apakah perlu membuat janji.</p>
      <p>Beberapa klinik juga punya jam yang lebih sepi. Kalau tersedia, pilih waktu itu supaya anabul tidak terlalu lama menunggu di ruang yang ramai dengan suara dan bau hewan lain.</p>

      <h2>Barang yang sebaiknya dibawa</h2>
      <p>Supaya tidak ada drama "aduh, ketinggalan", siapkan daftar kecil ini sehari sebelumnya:</p>
      <ul>
        <li><strong>Carrier yang aman dan tertutup.</strong> Jangan menggendong kucing tanpa carrier ke klinik, karena dia bisa kaget dan kabur. Kalau anabul sudah dibiasakan masuk carrier sebelumnya, perjalanan biasanya jauh lebih lancar.</li>
        <li><strong>Alas atau handuk yang berbau rumah.</strong> Aroma yang familiar bisa membantu anabul merasa sedikit lebih tenang.</li>
        <li><strong>Catatan kesehatan yang kamu punya.</strong> Misalnya buku vaksin, catatan obat cacing, atau informasi dari pemilik sebelumnya kalau kucingmu hasil adopsi.</li>
        <li><strong>Daftar pertanyaan.</strong> Tulis di HP supaya tidak lupa begitu masuk ruang periksa.</li>
        <li><strong>Info kebiasaan sehari-hari.</strong> Merek makanan, pola makan dan minum, serta kebiasaan di kotak pasir. Hal-hal kecil ini sering berguna saat ngobrol dengan dokter.</li>
        <li><strong>Camilan favorit</strong>, kalau dokter mengizinkan, untuk hadiah kecil setelah pemeriksaan.</li>
      </ul>

      <h2>Bikin perjalanan lebih tenang</h2>
      <p>Di perjalanan, banyak kucing akan mengeong panjang seolah sedang menyampaikan pidato protes. Itu hal yang cukup umum, jadi jangan langsung ikut panik. Beberapa hal sederhana yang bisa membantu:</p>
      <ul>
        <li><strong>Tutupi sebagian carrier dengan kain tipis</strong> supaya anabul tidak terlalu banyak melihat hal yang mengejutkan, tapi pastikan udara tetap mengalir.</li>
        <li><strong>Letakkan carrier di posisi stabil</strong>, misalnya di lantai mobil atau dipangku dengan rapat, supaya tidak terguncang.</li>
        <li><strong>Jaga suara tetap pelan dan santai.</strong> Ajak bicara dengan nada lembut. Kucing sering ikut membaca suasana hati pemiliknya.</li>
        <li><strong>Hindari musik keras atau AC yang terlalu dingin</strong> langsung ke arah carrier.</li>
      </ul>

      <h2>Di ruang tunggu</h2>
      <p>Ruang tunggu bisa jadi tempat yang cukup menegangkan buat kucing, apalagi kalau ada anjing yang sedang semangat menyapa semua orang. Usahakan carrier tetap tertutup dan letakkan di kursi atau pangkuanmu, bukan di lantai. Kalau memungkinkan, duduk agak menjauh dari hewan lain. Tahan dulu keinginan untuk membuka carrier dan memeluk anabul, karena di tempat asing, carrier justru bisa jadi "benteng" yang membuatnya merasa aman.</p>

      <h2>Apa yang biasanya terjadi saat diperiksa?</h2>
      <p>Setiap klinik dan dokter bisa punya cara yang berbeda, tapi pemeriksaan awal umumnya cukup sederhana. Dokter hewan mungkin akan menimbang berat badan, melihat mata, telinga, mulut, dan bulu, lalu memeriksa tubuh secara umum. Dokter juga biasanya akan bertanya tentang riwayat dan kebiasaan anabul di rumah.</p>
      <p>Kalau anabul tampak takut, kamu bisa bertanya ke dokter apakah boleh membantu menenangkan atau mengelus kepalanya. Biarkan dokter dan perawat yang memegang kendali, karena mereka sudah terbiasa menangani kucing yang sedang gugup. Jangan sungkan juga untuk menanyakan hal yang menurutmu sepele. Untuk pemilik pemula, tidak ada pertanyaan yang terlalu "receh".</p>

      <h2>Setelah pulang</h2>
      <p>Sesampainya di rumah, buka carrier di ruangan yang tenang dan biarkan anabul keluar sendiri. Wajar kalau dia ingin menyendiri sebentar, tidur lebih lama, atau sedikit jutek padamu. Beri waktu, sediakan makanan dan air, dan tawarkan camilan kalau dia mau.</p>
      <p>Kalau kamu punya lebih dari satu kucing, perkenalkan kembali pelan-pelan, karena bau klinik kadang membuat kucing lain bingung. Dan kalau ada perubahan yang membuatmu khawatir setelah kunjungan, misalnya dia tidak mau makan cukup lama atau tampak lemas, segera hubungi dokter hewanmu untuk bertanya.</p>

      <h2>Penutup</h2>
      <p>Kunjungan pertama ke dokter hewan tidak harus jadi momen menegangkan. Pilih klinik yang nyaman, siapkan barang bawaan dan daftar pertanyaan, jaga perjalanan tetap tenang, lalu beri anabul waktu istirahat setelah pulang. Lama-lama, kalian berdua akan lebih santai menghadapi kunjungan berikutnya.</p>
      <p>Kami di Deholic Cattery, cattery British Shorthair di Jakarta Barat, senang berbagi tips sederhana seputar merawat anabul. Yuk, mampir dan ngobrol bareng kami di Instagram atau TikTok @deholic.cattery.</p>
    `,
  },
  {
    slug: "spot-jendela-berjemur-kucing",
    title: "Kucing dan Jendela: Bikin Spot Berjemur yang Aman dan Seru buat Anabul",
    category: "Gaya Hidup",
    excerpt:
      "Anabul betah nongkrong di jendela sambil berjemur? Begini cara menyiapkan spot jendela yang nyaman, seru, dan tetap aman untuk kucing rumahan.",
    date: "2026-10-13",
    readTime: 5,
    author: "Tim Deholic Cattery",
    icon: "sparkle",
    accent: ["#d9e1ea", "#f3d2b5"],
    content: `
      <p>Pagi-pagi kamu mencari anabul ke seluruh rumah, ternyata dia sedang rebahan di depan jendela, mata setengah terpejam, bulu hangat kena sinar matahari, dan wajahnya seolah berkata, "Jangan ganggu, aku lagi liburan." Kalau kucingmu begitu, selamat, kamu memelihara penggemar berat jendela.</p>
      <p>Bagi banyak kucing rumahan, jendela itu semacam televisi gratis sekaligus tempat spa. Ada burung lewat, daun bergoyang, tetangga jalan pagi, dan cahaya hangat untuk tidur siang. Kabar baiknya, dengan sedikit persiapan, kamu bisa menjadikan jendela sebagai spot favorit yang seru dan tetap aman.</p>

      <h2>Kenapa kucing suka banget nongkrong di jendela?</h2>
      <p>Kucing pada dasarnya hewan yang suka mengamati. Duduk di tempat yang agak tinggi sambil memantau sekitar memberi mereka rasa aman dan hiburan sekaligus. Jendela juga sering jadi tempat paling hangat di rumah saat pagi atau sore. Jadi jangan heran kalau anabul rela meninggalkan kasur empuk yang kamu beli demi sepetak lantai yang kena sinar matahari.</p>
      <p>Untuk kucing indoor, pemandangan dari jendela bisa jadi salah satu sumber stimulasi yang menyenangkan. Mengamati gerakan di luar bisa membantu mengusir rasa bosan, apalagi saat kamu sedang sibuk kerja.</p>

      <h2>Keamanan dulu, baru estetika</h2>
      <p>Sebelum menata spot yang cantik, pastikan dulu jendelanya aman. Ini bagian yang paling penting, terutama kalau kamu tinggal di lantai atas atau apartemen.</p>
      <ul>
        <li><strong>Pasang kasa atau teralis yang kokoh.</strong> Kucing bisa saja melompat saat melihat burung atau kaget mendengar suara. Kasa nyamuk biasa kadang tidak cukup kuat menahan dorongan kucing, jadi pilih yang benar-benar terpasang erat.</li>
        <li><strong>Jangan biarkan jendela terbuka lebar tanpa pengaman.</strong> Kalau ingin sirkulasi udara, buka sedikit saja dan pastikan celahnya tidak cukup lebar untuk diselipi kepala atau badan kucing.</li>
        <li><strong>Rapikan tali tirai atau tali gorden.</strong> Tali yang menjuntai bisa jadi mainan yang menggoda, tapi juga berisiko membelit. Gulung atau ikat di tempat yang tinggi.</li>
        <li><strong>Cek balkon juga.</strong> Kalau jendelanya mengarah ke balkon, pastikan pagar balkon tidak punya celah yang bisa diterobos anabul.</li>
      </ul>

      <h2>Bikin tempat duduk yang nyaman</h2>
      <p>Kalau ambang jendelamu sempit, kucing mungkin harus duduk sambil menahan keseimbangan seperti pesenam. Kamu bisa bantu dengan beberapa pilihan sederhana:</p>
      <ul>
        <li><strong>Rak atau papan kecil di depan jendela</strong> yang dipasang kuat ke dinding.</li>
        <li><strong>Cat tree atau menara kucing</strong> yang diletakkan dekat jendela, supaya dia bisa memantau dari ketinggian.</li>
        <li><strong>Kursi atau meja kecil</strong> dengan alas empuk, kalau kamu ingin solusi tanpa beli apa-apa.</li>
      </ul>
      <p>Apa pun pilihannya, pastikan stabil dan tidak goyang saat dinaiki. Kucing biasanya kurang suka tempat yang terasa labil, dan kamu juga pasti tidak mau ada drama jatuh di tengah sesi berjemur.</p>

      <h2>Jangan sampai kepanasan</h2>
      <p>Matahari pagi memang enak, tapi siang hari di Indonesia bisa sangat terik, dan area dekat kaca bisa terasa jauh lebih panas dari bagian rumah lainnya. Beberapa hal yang bisa kamu lakukan:</p>
      <ul>
        <li><strong>Sediakan area teduh di dekatnya</strong>, supaya anabul bisa pindah sendiri kalau mulai gerah.</li>
        <li><strong>Taruh air minum tidak jauh dari spot jendela.</strong> Siapa tahu dia malas jalan jauh setelah berjemur.</li>
        <li><strong>Pakai tirai tipis atau kerai</strong> untuk meredam sinar di jam-jam paling panas.</li>
      </ul>
      <p>Perhatikan juga tanda-tanda kucing kepanasan, misalnya terengah-engah dengan mulut terbuka, tampak lemas, atau gelisah. Kalau itu terjadi, segera pindahkan dia ke tempat yang lebih sejuk, dan hubungi dokter hewan bila kondisinya tidak membaik. Kucing dengan bulu tebal atau kucing berwarna terang mungkin butuh perhatian ekstra, jadi kalau ragu, tanyakan saja ke dokter hewan langgananmu.</p>

      <h2>Bikin pemandangannya makin seru</h2>
      <p>Mau upgrade televisi alami anabul? Kalau ada halaman atau pot di luar jendela, tanaman yang bergoyang tertiup angin saja sudah cukup menarik perhatian. Sebagian pemilik juga memasang tempat makan burung di luar jendela. Kalau kamu mencobanya, perhatikan reaksi kucingmu. Ada kucing yang menikmatinya dengan santai, tapi ada juga yang jadi terlalu bersemangat sampai mengeong dan menggaruk kaca. Kalau dia terlihat frustrasi, kurangi saja rangsangannya dan ajak dia main pakai mainan tongkat supaya energinya tersalurkan.</p>

      <h2>Kalau ada lebih dari satu kucing</h2>
      <p>Spot jendela terbaik di rumah bisa jadi rebutan yang serius. Supaya tidak ada perang dingin antaranabul, sediakan lebih dari satu tempat duduk di dekat jendela atau di beberapa jendela berbeda. Dengan begitu, semua kebagian kursi VIP tanpa harus saling melotot.</p>

      <h2>Penutup</h2>
      <p>Spot jendela yang aman bisa jadi tempat favorit anabul untuk berjemur, mengamati dunia, dan tidur siang tanpa beban. Mulai dari memastikan jendela dan balkon aman, lalu tambahkan tempat duduk yang nyaman, area teduh, dan air minum di dekatnya. Setelah itu, siap-siap saja kalau kamu sering "kalah saing" dengan jendela.</p>
      <p>Kami di Deholic Cattery, cattery British Shorthair di Jakarta Barat, senang berbagi tips sederhana seputar kehidupan bareng anabul. Mampir dan sapa kami di Instagram atau TikTok @deholic.cattery.</p>
    `,
  },
  {
    slug: "kucing-nyaman-saat-ada-tamu",
    title: "Rumah Ramai, Anabul Ngumpet? Cara Bikin Kucing Tetap Nyaman saat Ada Tamu",
    category: "Perilaku",
    excerpt:
      "Tamu datang, anabul langsung hilang ke kolong kasur? Begini cara menyiapkan rumah supaya kucing tetap tenang saat rumah lagi ramai.",
    date: "2026-10-12",
    readTime: 5,
    author: "Tim Deholic Cattery",
    icon: "heart",
    accent: ["#d9e1ea", "#f3d2b5"],
    content: `
      <p>Bel pintu berbunyi, suara orang mengobrol mulai terdengar, dan dalam hitungan detik anabul kesayanganmu sudah lenyap. Yang tersisa cuma sehelai bulu di sofa dan sepasang mata bulat yang mengintip dari kolong kasur. Sementara itu, tamumu bertanya dengan polos, "Lho, katanya punya kucing? Mana?"</p>
      <p>Tenang, ini bukan berarti kucingmu antisosial atau tidak sayang sama kamu. Bagi banyak kucing, rumah yang tiba-tiba ramai itu seperti wilayah pribadinya mendadak diserbu orang asing yang berisik dan baunya aneh. Wajar kalau dia memilih mundur dulu. Tugas kita bukan memaksa dia ikut pesta, tapi memastikan dia tetap merasa aman di rumahnya sendiri.</p>

      <h2>Kenapa kucing sering kabur saat ada tamu?</h2>
      <p>Kucing umumnya menyukai rutinitas dan lingkungan yang bisa ditebak. Tamu membawa banyak hal baru sekaligus: suara yang lebih keras, langkah kaki yang tidak dikenal, bau parfum atau bau hewan lain, dan kadang tangan-tangan yang langsung ingin mengelus. Setiap kucing punya kadar keberanian yang berbeda. Ada yang langsung menyapa tamu seperti tuan rumah profesional, ada juga yang butuh waktu lama sebelum berani keluar. Keduanya sama-sama normal.</p>

      <h2>Siapkan "zona aman" sebelum tamu datang</h2>
      <p>Langkah paling sederhana dan paling berguna adalah menyiapkan satu ruangan atau sudut tenang khusus untuk anabul. Isinya bisa berupa:</p>
      <ul>
        <li><strong>Tempat tidur atau kardus favoritnya</strong>, supaya ada bau yang familiar.</li>
        <li><strong>Air minum dan sedikit makanan</strong>, jadi dia tidak perlu melewati keramaian hanya untuk minum.</li>
        <li><strong>Kotak pasir</strong>, terutama kalau tamunya akan lama, supaya dia tetap bisa buang air dengan tenang.</li>
        <li><strong>Tempat sembunyi</strong> seperti kardus, carrier yang pintunya terbuka, atau rak yang tinggi.</li>
      </ul>
      <p>Kalau memungkinkan, tutup pintu ruangan itu sebagian dan beri tahu tamu bahwa ruangan tersebut adalah "kamar VIP" anabul yang sebaiknya tidak dimasuki. Percayalah, kucingmu akan menghargainya, walaupun tentu saja dia tidak akan bilang terima kasih.</p>

      <h2>Biarkan kucing yang memutuskan</h2>
      <p>Ini aturan emasnya: jangan menarik kucing keluar dari persembunyian hanya supaya tamu bisa melihatnya. Menggendong kucing yang sedang takut ke tengah keramaian biasanya justru membuatnya makin waspada pada kunjungan berikutnya. Kalau dia mau keluar sendiri, bagus. Kalau dia memilih tetap di kolong kasur sampai tamu pulang, itu juga tidak apa-apa.</p>
      <p>Banyak kucing akan mengintip dulu dari kejauhan, lalu pelan-pelan mendekat kalau suasananya terasa aman. Beri dia kesempatan itu tanpa didesak.</p>

      <h2>Briefing singkat untuk tamu</h2>
      <p>Tamu yang tidak terbiasa dengan kucing kadang langsung menghampiri sambil berseru "Ih lucunyaaa!" lalu mengulurkan tangan ke kepala. Niatnya baik, tapi buat anabul yang pemalu, itu bisa terasa menakutkan. Kamu bisa titip beberapa pesan sederhana:</p>
      <ul>
        <li><strong>Tunggu kucing mendekat duluan.</strong> Duduk santai dan biarkan dia yang memulai.</li>
        <li><strong>Sodorkan jari, jangan langsung mengelus.</strong> Biarkan dia mengendus dulu. Kalau dia menggosokkan pipinya, itu tanda boleh elus pelan.</li>
        <li><strong>Hindari menatap tajam terlalu lama.</strong> Bagi sebagian kucing, tatapan lurus bisa terasa seperti tantangan. Kedipan pelan biasanya lebih bersahabat.</li>
        <li><strong>Jangan mengejar atau menggendong</strong> tanpa izin kamu dan tanpa kucingnya terlihat nyaman.</li>
      </ul>

      <h2>Kalau tamunya anak-anak</h2>
      <p>Anak-anak biasanya sangat antusias dengan kucing, dan itu menggemaskan. Supaya semuanya aman, dampingi mereka saat berinteraksi dengan anabul. Ajarkan cara mengelus yang lembut, misalnya di pipi atau punggung, dan jelaskan bahwa kalau kucing pergi, artinya dia sedang ingin sendiri dulu. Pengalaman positif seperti ini bagus untuk anak dan untuk kucingnya.</p>

      <h2>Jaga pintu tetap aman</h2>
      <p>Saat tamu keluar-masuk, pintu depan lebih sering terbuka. Kucing yang kaget bisa saja nekat lari keluar. Ingatkan tamu untuk menutup pintu, atau taruh kucing di zona amannya saat tamu sedang datang dan pulang. Perhatikan juga makanan di meja, karena tidak semua makanan manusia aman untuk kucing, dan tamu kadang tergoda memberi "sedikit saja".</p>

      <h2>Setelah tamu pulang</h2>
      <p>Begitu rumah kembali sepi, biarkan anabul keluar dengan sendirinya. Kembalikan rutinitas seperti biasa: jam makan, sesi main, dan waktu bermalas-malasan di sofa. Beberapa kucing mungkin butuh waktu sebentar untuk mengendus ke sana kemari, memeriksa apakah wilayahnya masih aman. Anggap saja dia sedang inspeksi pasca-acara.</p>

      <h2>Kapan perlu bertanya ke dokter hewan?</h2>
      <p>Kalau kucingmu terlihat sangat stres setiap kali ada orang lain di rumah, misalnya tidak mau makan dalam waktu lama, buang air sembarangan, atau terus bersembunyi sampai berhari-hari, ada baiknya konsultasi ke dokter hewan. Mereka bisa membantu mencari tahu apakah ada masalah kesehatan atau perilaku yang perlu ditangani.</p>

      <h2>Penutup</h2>
      <p>Tidak semua kucing harus jadi bintang tamu. Yang penting, anabul tahu bahwa rumahnya tetap tempat paling aman, seramai apa pun suasananya. Dengan zona aman, tamu yang pengertian, dan sedikit kesabaran, bukan tidak mungkin suatu hari dia sendiri yang datang menyapa tamumu sambil menggosokkan kepala ke kaki mereka.</p>
      <p>Kami di Deholic Cattery, cattery British Shorthair di Jakarta Barat, senang berbagi tips sederhana seputar kehidupan bareng anabul. Mampir dan sapa kami di Instagram atau TikTok @deholic.cattery.</p>
    `,
  },
  {
    slug: "membiasakan-kucing-masuk-carrier",
    title: "Carrier Bukan Musuh: Cara Membiasakan Kucing Masuk Kandang Travel Tanpa Drama",
    category: "Perawatan",
    excerpt:
      "Anabul langsung kabur tiap carrier keluar dari gudang? Begini cara pelan-pelan bikin kandang travel jadi tempat yang aman dan nyaman buat kucing.",
    date: "2026-10-11",
    readTime: 5,
    author: "Tim Deholic Cattery",
    icon: "home",
    accent: ["#d9e1ea", "#f3d2b5"],
    content: `
      <p>Begitu kandang travel dikeluarkan dari gudang, suasana rumah langsung berubah jadi film aksi. Anabul yang tadinya tidur pulas mendadak punya kekuatan super: menghilang ke kolong lemari, menempel di sudut paling jauh, atau berubah jadi gumpalan bulu yang kaku dengan empat kaki terbuka lebar di depan pintu carrier. Lima belas menit kemudian, kamu sudah berkeringat, dan janji ke dokter hewan atau grooming sudah hampir telat.</p>
      <p>Kalau ini terdengar familiar, tenang dulu. Banyak kucing tidak suka carrier bukan karena carrier-nya seram, tapi karena benda itu biasanya cuma muncul sebelum hal-hal yang kurang menyenangkan. Kabar baiknya, kesan itu bisa diubah pelan-pelan.</p>

      <h2>Kenapa kucing sering takut carrier?</h2>
      <p>Coba lihat dari sudut pandang anabul. Kotak itu muncul tiba-tiba, dia dimasukkan dengan buru-buru, lalu diajak naik kendaraan yang bergoyang dan berbunyi aneh, dan berakhir di tempat penuh bau asing. Wajar kalau dia mengingat carrier sebagai "tanda bahaya".</p>
      <p>Jadi tujuan kita sederhana: mengubah carrier dari "kotak tanda bahaya" menjadi "furnitur biasa yang kadang ada camilannya".</p>

      <h2>Pilih carrier yang nyaman</h2>
      <p>Sebelum latihan, pastikan carrier-nya sendiri bersahabat. Beberapa hal yang bisa jadi pertimbangan:</p>
      <ul>
        <li><strong>Ukuran pas:</strong> cukup lega untuk berdiri, berbalik badan, dan berbaring, tapi tidak terlalu besar sampai dia terguling-guling di jalan.</li>
        <li><strong>Mudah dibuka:</strong> carrier yang bagian atasnya bisa dibuka biasanya memudahkan kucing masuk dan keluar tanpa harus ditarik-tarik.</li>
        <li><strong>Kokoh dan berventilasi:</strong> pintu terkunci rapat, ada lubang udara yang cukup, dan alasnya tidak licin.</li>
      </ul>

      <h2>Langkah 1: Jadikan carrier bagian dari rumah</h2>
      <p>Ini rahasia paling sederhana tapi sering terlewat. Jangan simpan carrier di gudang. Taruh di ruangan yang sering dipakai anabul, dengan pintu terbuka atau dilepas sementara. Biarkan dia mengendus, melirik, atau bahkan mengabaikannya selama beberapa hari. Lama-lama carrier jadi benda membosankan yang memang ada di situ, sama seperti sofa atau rak buku.</p>

      <h2>Langkah 2: Bikin bagian dalamnya menggoda</h2>
      <p>Lapisi bagian dalam carrier dengan selimut atau handuk yang sudah ada bau anabul atau baumu. Sesekali, selipkan camilan kesukaannya atau mainan kecil di dalam. Jangan didorong masuk, cukup biarkan dia "menemukan" hadiah itu sendiri. Kucing suka merasa ide itu datang dari dirinya, bukan dari kita.</p>
      <p>Kalau anabul suka tidur di kardus, besar kemungkinan suatu hari kamu akan menemukannya tidur siang di dalam carrier. Di momen itu, rasanya seperti menang lotre kecil.</p>

      <h2>Langkah 3: Latihan menutup pintu, sebentar saja</h2>
      <p>Setelah dia santai masuk-keluar sendiri, mulai tutup pintunya sebentar saat dia sedang asyik makan camilan di dalam. Cukup beberapa detik, lalu buka lagi. Pelan-pelan, perpanjang waktunya. Kalau dia mulai gelisah, mundur selangkah ke latihan sebelumnya. Tidak ada lomba di sini.</p>

      <h2>Langkah 4: Angkat dan ajak jalan-jalan kecil</h2>
      <p>Kalau menutup pintu sudah aman, coba angkat carrier sebentar lalu taruh lagi. Berikutnya, bawa keliling rumah, kemudian ke teras, lalu duduk sebentar di dalam kendaraan tanpa pergi ke mana-mana. Tutup setiap sesi dengan hal menyenangkan, misalnya camilan atau sesi elus-elus. Tujuannya supaya perjalanan tidak selalu berarti tujuan yang bikin deg-degan.</p>

      <h2>Tips saat hari keberangkatan tiba</h2>
      <ul>
        <li><strong>Siapkan carrier lebih awal:</strong> jangan baru mencarinya lima menit sebelum berangkat.</li>
        <li><strong>Tetap tenang:</strong> kucing cukup peka dengan suasana di sekitarnya. Kalau kita panik, dia ikut curiga.</li>
        <li><strong>Pegang carrier dengan stabil:</strong> peluk di depan badan atau pegang dari bawah, jangan diayun-ayun seperti tas belanja.</li>
        <li><strong>Tutup sebagian dengan kain tipis:</strong> banyak kucing merasa lebih aman kalau pemandangan di sekitarnya tidak terlalu ramai, asal udara tetap mengalir.</li>
        <li><strong>Pastikan aman di kendaraan:</strong> taruh carrier di tempat yang stabil supaya tidak bergeser atau jatuh saat mengerem.</li>
      </ul>

      <h2>Yang sebaiknya dihindari</h2>
      <p>Jangan memasukkan kucing ke carrier dengan cara mengejar, menyudutkan, atau memaksa sambil marah. Cara itu mungkin berhasil sekali, tapi biasanya membuat latihan berikutnya jauh lebih sulit. Jangan juga membuka pintu carrier di tempat terbuka saat tiba di tujuan, karena kucing yang kaget bisa kabur dengan sangat cepat.</p>

      <h2>Kapan perlu bertanya ke dokter hewan?</h2>
      <p>Kalau anabul terlihat sangat stres setiap kali bepergian, misalnya terus-menerus mengeong keras, muntah, atau terengah-engah, ceritakan ke dokter hewan. Mereka bisa membantu mencari tahu penyebabnya dan menyarankan langkah yang cocok untuk kucingmu. Jangan memberi obat atau suplemen penenang apa pun tanpa saran dokter hewan, ya.</p>

      <h2>Penutup</h2>
      <p>Membiasakan kucing dengan carrier memang butuh waktu, mungkin beberapa hari, mungkin beberapa minggu. Tapi usaha kecil ini bisa membuat setiap perjalanan ke dokter hewan, grooming, atau pindah rumah terasa jauh lebih ringan, baik buat anabul maupun buat punggungmu yang tidak perlu lagi merangkak ke kolong lemari.</p>
      <p>Kami di Deholic Cattery, cattery British Shorthair di Jakarta Barat, senang berbagi tips sederhana seputar kehidupan bareng anabul. Mampir dan sapa kami di Instagram atau TikTok @deholic.cattery.</p>
    `,
  },
  {
    slug: "kucing-takut-suara-bising",
    title: "Petir, Bor Tetangga, dan Kembang Api: Bikin Anabul Tetap Tenang saat Rumah Bising",
    category: "Perilaku",
    excerpt:
      "Anabul langsung ngumpet tiap ada petir atau suara bor? Cara sederhana bikin kucing tetap tenang saat rumah berisik, tanpa dipaksa dan tanpa panik.",
    date: "2026-10-10",
    readTime: 5,
    author: "Tim Deholic Cattery",
    icon: "shield",
    accent: ["#d9e1ea", "#f3d2b5"],
    content: `
      <p>Langit mendung, lalu tiba-tiba terdengar suara petir menggelegar. Dalam sepersekian detik, anabul yang tadinya rebahan santai di sofa sudah lenyap. Sepuluh menit kemudian kamu menemukannya di kolong tempat tidur, mata bulat besar, badan menempel ke lantai seperti sedang menyamar jadi karpet. Kalau adegan ini terasa akrab, tenang, kamu tidak sendirian.</p>
      <p>Telinga kucing umumnya jauh lebih peka daripada telinga kita. Suara yang buat kita cuma "agak berisik" bisa terasa jauh lebih mengagetkan buat mereka. Kabar baiknya, ada banyak cara sederhana untuk membantu anabul melewati hari-hari bising dengan lebih tenang.</p>

      <h2>Suara apa saja yang sering bikin kucing kaget?</h2>
      <p>Setiap kucing beda-beda, tapi beberapa "tersangka" yang sering muncul antara lain:</p>
      <ul>
        <li><strong>Hujan deras dan petir:</strong> apalagi di musim hujan, saat suara gemuruh bisa datang berkali-kali dalam sehari.</li>
        <li><strong>Renovasi:</strong> bor, palu, gerinda, dan tukang yang bolak-balik. Kombinasi suara keras dan orang asing sekaligus.</li>
        <li><strong>Kembang api dan petasan:</strong> biasanya muncul mendadak, keras, dan berulang.</li>
        <li><strong>Peralatan rumah:</strong> vacuum cleaner, blender, atau mesin cuci saat masuk mode putar kencang. Ada kucing yang cuek, ada juga yang menganggap vacuum sebagai musuh bebuyutan.</li>
      </ul>

      <h2>Tanda anabul sedang takut atau stres</h2>
      <p>Kucing jarang bilang terus terang, jadi kita perlu jeli membaca tandanya. Beberapa yang sering terlihat:</p>
      <ul>
        <li>Langsung bersembunyi dan susah dibujuk keluar.</li>
        <li>Telinga menempel ke belakang, pupil membesar, badan merendah.</li>
        <li>Ekor diselipkan ke bawah badan atau bulu terlihat mengembang.</li>
        <li>Mendesis, menggeram, atau justru diam membeku.</li>
        <li>Untuk sementara tidak mau makan atau tidak mau ke kotak pasir.</li>
      </ul>

      <h2>Sediakan tempat persembunyian yang aman</h2>
      <p>Saat takut, naluri pertama kucing adalah mencari tempat sembunyi. Jadi daripada melawan naluri itu, bantu saja. Sediakan satu "bunker" yang nyaman: kardus yang dilapisi kain, kandang yang ditutup selimut tipis, atau sudut lemari yang bisa dia akses. Taruh di ruangan yang paling jauh dari sumber suara kalau memungkinkan.</p>
      <p>Yang penting, biarkan dia memilih sendiri. Kalau anabul sudah nyaman di kolong kasur, jangan ditarik keluar. Buat dia, kolong kasur itu benteng pertahanan terakhir, bukan tempat ngambek.</p>

      <h2>Redam suaranya sebisa mungkin</h2>
      <ul>
        <li><strong>Tutup jendela dan tirai:</strong> sedikit membantu meredam suara, sekaligus menutupi kilatan petir atau kembang api.</li>
        <li><strong>Nyalakan suara latar yang lembut:</strong> musik pelan, TV dengan volume wajar, atau kipas angin bisa membantu menyamarkan suara dari luar.</li>
        <li><strong>Atur jadwal renovasi:</strong> kalau kamu yang sedang renovasi, coba siapkan satu ruangan tenang untuk anabul selama tukang bekerja. Pastikan pintunya tertutup supaya dia tidak kabur saat panik.</li>
      </ul>

      <h2>Tetap tenang, jadilah teladan</h2>
      <p>Kucing cukup peka dengan suasana di sekitarnya. Kalau kita ikut panik, anabul bisa makin bingung. Usahakan tetap bersikap biasa saja: bicara dengan suara pelan, tetap beraktivitas seperti biasa, dan jangan memaksa memeluk kucing yang sedang ketakutan. Kalau dia datang sendiri minta ditemani, silakan dielus pelan. Kalau dia memilih menyendiri, hormati keputusannya.</p>
      <p>Satu hal yang penting: jangan pernah memarahi atau menghukum kucing yang ketakutan. Rasa takut bukan kenakalan, dan hukuman justru bisa membuatnya makin cemas.</p>

      <h2>Latihan pelan-pelan untuk suara yang bisa diprediksi</h2>
      <p>Untuk suara yang sumbernya ada di rumah, seperti vacuum cleaner, kamu bisa mencoba membiasakan anabul secara bertahap. Misalnya, biarkan vacuum diam di ruangan dalam keadaan mati supaya dia bisa mengendus dan mengenalnya. Setelah dia santai, nyalakan sebentar dari kejauhan sambil memberi camilan atau mengajak bermain. Lakukan sedikit demi sedikit, dan berhenti kalau dia mulai terlihat takut.</p>
      <p>Proses ini butuh kesabaran, dan tidak semua kucing akan jadi sahabat vacuum. Tapi naik level dari "kabur ke kolong" menjadi "melirik sinis dari atas kursi" pun sudah termasuk kemajuan.</p>

      <h2>Setelah suara mereda</h2>
      <p>Begitu suasana kembali tenang, biarkan anabul keluar dari persembunyian dengan sendirinya. Siapkan makanan, air minum, dan kotak pasir yang mudah dijangkau. Ajak main sebentar atau beri camilan kecil supaya suasana kembali menyenangkan. Biasanya, setelah beberapa waktu, dia akan kembali ke rutinitas: makan, tidur, dan menatapmu seolah tidak pernah terjadi apa-apa.</p>

      <h2>Kapan perlu ke dokter hewan?</h2>
      <p>Kalau rasa takut anabul terlihat sangat berat, misalnya dia tidak mau makan lebih dari sehari, terus-menerus bersembunyi bahkan setelah suara hilang, atau sampai melukai diri sendiri, sebaiknya konsultasikan ke dokter hewan. Dokter hewan bisa membantu mencari tahu apakah ada masalah lain dan menyarankan langkah yang sesuai untuk kucingmu. Jangan memberi obat penenang atau produk apa pun tanpa saran dokter hewan, ya.</p>

      <h2>Penutup</h2>
      <p>Kita memang tidak bisa menghentikan petir, mengatur jadwal tukang tetangga, atau melarang kembang api. Tapi kita bisa membuat rumah tetap terasa aman buat anabul. Dengan tempat sembunyi yang nyaman, suasana yang tenang, dan sedikit kesabaran, hari-hari bising pun bisa dilewati bersama, meskipun dia tetap memilih melewatinya dari kolong kasur.</p>
      <p>Kami di Deholic Cattery, cattery British Shorthair di Jakarta Barat, senang berbagi tips sederhana seputar kehidupan bareng anabul. Mampir dan sapa kami di Instagram atau TikTok @deholic.cattery.</p>
    `,
  },
  {
    slug: "mainan-stimulasi-kucing-indoor",
    title: "Anabul Bosan di Rumah? Ide Mainan dan Stimulasi untuk Kucing Indoor",
    category: "Gaya Hidup",
    excerpt:
      "Kucing indoor juga butuh hiburan, bukan cuma makan dan tidur. Ide mainan, permainan cari makan, dan trik rotasi biar anabul tetap aktif dan senang.",
    date: "2026-10-09",
    readTime: 5,
    author: "Tim Deholic Cattery",
    icon: "sparkle",
    accent: ["#d9e1ea", "#f3d2b5"],
    content: `
      <p>Jam tiga pagi. Rumah sunyi. Tiba-tiba terdengar suara gedebak-gedebuk dari ruang tengah, disusul suara sesuatu jatuh dari meja. Kamu keluar kamar dan menemukan anabul sedang berlari dari ujung ke ujung rumah seperti dikejar deadline. Kalau ini sering terjadi, bisa jadi anabulmu sedang menyampaikan pesan sederhana: "Hooman, aku bosan."</p>
      <p>Kucing yang tinggal di dalam rumah memang lebih terlindung dari banyak risiko di luar. Tapi dunia mereka juga jadi lebih kecil. Di sinilah tugas kita: membuat rumah tetap terasa seru, tanpa harus mengubahnya jadi taman bermain mahal.</p>

      <h2>Kenapa kucing indoor butuh stimulasi?</h2>
      <p>Kucing pada dasarnya adalah pemburu kecil. Mengintai, mengejar, menerkam, lalu "menangkap" sesuatu adalah bagian dari naluri mereka, walaupun mangsanya cuma bulu di ujung tongkat. Kalau naluri ini tidak punya saluran, energinya bisa keluar dalam bentuk lain: mencakar sofa, menggigit kaki yang lewat, atau menjatuhkan barang dengan tatapan tanpa dosa.</p>
      <p>Stimulasi bukan cuma soal fisik, tapi juga soal pikiran. Kucing yang punya kegiatan biasanya terlihat lebih santai dan puas. Bonusnya, kamu juga jadi lebih kenal karakter anabulmu.</p>

      <h2>Kenali dulu tipe pemburu di rumahmu</h2>
      <p>Setiap kucing punya selera mainan sendiri. Coba amati, anabulmu lebih semangat saat:</p>
      <ul>
        <li><strong>Mengejar sesuatu di udara:</strong> bulu, kupu-kupu mainan, atau tali yang melayang. Tipe ini sering suka mainan tongkat (wand toy).</li>
        <li><strong>Mengejar sesuatu di lantai:</strong> bola kecil, tikus-tikusan, atau tutup botol yang menggelinding. Si pemburu "darat" ini biasanya senang dengan mainan yang bisa dipukul-pukul.</li>
        <li><strong>Menyerang lalu memeluk:</strong> mainan panjang yang bisa dipeluk sambil ditendang-tendang dengan kaki belakang. Kelihatannya brutal, padahal dia sedang bahagia.</li>
      </ul>
      <p>Jangan kaget kalau mainan termahal justru dicuekin, sementara karet rambutmu jadi primadona. Itu bukan penghinaan, itu riset pasar.</p>

      <h2>Ide mainan yang gampang dicoba</h2>
      <ul>
        <li><strong>Mainan tongkat:</strong> salah satu cara paling seru untuk main bareng. Gerakkan ujungnya seperti mangsa sungguhan: bersembunyi di balik kursi, diam sebentar, lalu kabur. Mangsa yang langsung lompat ke muka kucing justru kurang meyakinkan.</li>
        <li><strong>Bola dan mainan kecil:</strong> pilih yang ukurannya tidak terlalu kecil supaya tidak mudah tertelan.</li>
        <li><strong>Kardus dan kantong kertas:</strong> mainan gratis yang tidak pernah gagal. Lubangi kardus di beberapa sisi, dan kamu punya terowongan petualangan. Gunting dulu pegangan kantong kertas supaya kepala anabul tidak tersangkut.</li>
        <li><strong>Mainan puzzle atau cari makan:</strong> wadah yang harus diputar, digoyang, atau dikorek supaya camilan keluar. Kamu juga bisa bikin sendiri dari gulungan tisu bekas yang ujungnya dilipat, lalu diisi beberapa butir makanan kering.</li>
      </ul>

      <h2>Bikin makan jadi petualangan kecil</h2>
      <p>Di alam, kucing harus berusaha dulu sebelum makan. Kucing rumahan? Tinggal duduk manis di depan mangkuk sambil menatap kita penuh harap. Supaya ada sedikit tantangan, coba sembunyikan beberapa butir makanan kering atau camilan di beberapa sudut rumah, atau masukkan ke mainan puzzle tadi.</p>
      <p>Mulai dari yang gampang dulu supaya anabul tidak frustrasi, baru naikkan tingkat kesulitannya pelan-pelan. Ingat juga untuk menghitung camilan ini sebagai bagian dari porsi makan hariannya, ya. Tujuannya biar anabul aktif, bukan biar dia makin bulat.</p>

      <h2>Rumah juga bisa jadi taman bermain</h2>
      <p>Stimulasi tidak selalu harus berupa mainan. Beberapa hal sederhana di rumah juga bisa bikin hari anabul lebih menarik:</p>
      <ul>
        <li><strong>Tempat tinggi:</strong> rak dinding, cat tree, atau lemari rendah yang aman memberi kucing tempat untuk memanjat dan mengamati "wilayah kekuasaannya".</li>
        <li><strong>Pemandangan jendela:</strong> melihat burung, daun bergoyang, atau tetangga lewat bisa jadi tontonan favorit. Pastikan jendela dan teralisnya aman.</li>
        <li><strong>Aroma baru:</strong> sebagian kucing tertarik pada catnip atau mainan beraroma, sebagian lagi biasa saja. Coba sedikit dulu dan lihat reaksinya.</li>
      </ul>

      <h2>Rahasia kecil: rotasi mainan</h2>
      <p>Mainan yang tergeletak setiap hari lama-lama terasa seperti perabot. Coba simpan sebagian mainan di laci, lalu keluarkan beberapa saja secara bergantian setiap beberapa hari. Mainan lama yang "menghilang" sebentar sering terasa seperti barang baru saat muncul lagi. Hemat, dan anabul tetap penasaran.</p>

      <h2>Soal keamanan, jangan dilewatkan</h2>
      <ul>
        <li>Simpan mainan bertali, benang, pita, dan karet setelah sesi main selesai. Mainan seperti ini sebaiknya dipakai hanya saat kamu ikut mengawasi.</li>
        <li>Cek mainan secara berkala. Kalau sudah sobek, ada bagian yang lepas, atau isinya keluar, sebaiknya dibuang.</li>
        <li>Hindari laser sebagai satu-satunya mainan. Banyak hooman mengakhiri sesi laser dengan mengarahkan titiknya ke mainan sungguhan supaya kucing tetap bisa "menangkap" sesuatu.</li>
      </ul>
      <p>Kalau anabulmu tiba-tiba kehilangan minat bermain sama sekali, terlihat lesu, atau perilakunya berubah drastis, sebaiknya konsultasikan ke dokter hewan. Kadang perubahan seperti ini bukan cuma soal bosan.</p>

      <h2>Penutup</h2>
      <p>Membuat kucing indoor tetap senang tidak butuh rumah besar atau mainan mahal. Yang dibutuhkan hanyalah sedikit kreativitas, beberapa menit waktu bermain setiap hari, dan kesediaan menerima kenyataan bahwa kardus bekas mungkin akan selalu jadi mainan nomor satu. Siapa tahu, setelah energinya tersalurkan di siang hari, konser jam tiga pagi pun ikut berkurang.</p>
      <p>Kami di Deholic Cattery, cattery British Shorthair di Jakarta Barat, senang berbagi tips sederhana seputar kehidupan bareng anabul. Mampir dan sapa kami di Instagram atau TikTok @deholic.cattery.</p>
    `,
  },
  {
    slug: "memilih-tempat-tidur-kucing",
    title: "Kasur Mahal Dicuekin, Kardus Dipeluk: Cara Memilih Tempat Tidur Kucing",
    category: "Gaya Hidup",
    excerpt:
      "Beli kasur kucing cantik, eh anabul malah tidur di kardusnya. Tips santai memilih bentuk, bahan, dan lokasi tempat tidur yang benar-benar dipakai.",
    date: "2026-10-08",
    readTime: 5,
    author: "Tim Deholic Cattery",
    icon: "home",
    accent: ["#d9e1ea", "#f3d2b5"],
    content: `
      <p>Kamu sudah scroll marketplace berjam-jam, membandingkan warna, membaca ulasan, lalu akhirnya check out kasur kucing paling empuk dan paling estetik. Paket datang, kasur ditata rapi, kamu memanggil anabul dengan penuh harap. Dia datang, mengendus kasurnya sebentar, lalu dengan mantap masuk ke... kardus bekas paketnya. Kasurnya? Dilewati begitu saja, seperti mantan.</p>
      <p>Kalau ini terdengar akrab, kamu tidak sendirian. Kucing memang punya pendapat yang kuat soal tempat tidur. Kabar baiknya, dengan sedikit pengamatan, kamu bisa memilih tempat tidur yang jauh lebih mungkin dipakai, bukan cuma jadi pajangan.</p>

      <h2>Kenapa tempat tidur itu penting buat kucing?</h2>
      <p>Kucing dikenal sebagai makhluk yang hobi tidur. Sebagian besar harinya bisa habis untuk tidur dan bermalas-malasan, apalagi kucing rumahan yang hidupnya santai. Karena itu, punya tempat istirahat yang terasa aman dan nyaman bisa membantu anabul lebih tenang di rumah.</p>
      <p>Tapi ingat, "nyaman" menurut kucing belum tentu sama dengan "nyaman" menurut kita. Yang kita lihat lucu dan empuk, belum tentu lolos seleksi juri berkumis.</p>

      <h2>Kenali dulu gaya tidur anabulmu</h2>
      <p>Sebelum belanja, coba jadi detektif selama beberapa hari. Perhatikan di mana dan bagaimana anabulmu biasanya tidur:</p>
      <ul>
        <li><strong>Si penggulung:</strong> tidur melingkar seperti donat. Biasanya cocok dengan kasur bundar berpinggiran (sering disebut donut bed) yang bisa jadi sandaran.</li>
        <li><strong>Si pembentang:</strong> tidur telentang atau memanjang tanpa malu. Kasur datar yang cukup lebar atau matras tipis mungkin lebih pas.</li>
        <li><strong>Si penyembunyi:</strong> suka tidur di kolong, lemari, atau kardus. Tipe ini sering menyukai tempat tidur tertutup seperti cat cave atau rumah-rumahan kecil.</li>
        <li><strong>Si pengawas:</strong> selalu tidur di tempat tinggi, misalnya di atas lemari atau sandaran sofa. Coba pertimbangkan tempat tidur di cat tree atau rak yang aman.</li>
      </ul>
      <p>Satu kucing bisa saja punya beberapa gaya tergantung mood dan cuaca. Namanya juga kucing, konsistensi bukan keahlian utamanya.</p>

      <h2>Bahan dan ukuran: jangan cuma lihat fotonya</h2>
      <p>Foto produk memang menggoda, tapi beberapa hal praktis ini lebih penting:</p>
      <ul>
        <li><strong>Gampang dicuci:</strong> pilih tempat tidur dengan sarung yang bisa dilepas atau yang bisa langsung dicuci. Bulu, debu, dan sesekali muntahan bola bulu itu bagian dari paket hidup bareng kucing.</li>
        <li><strong>Sesuaikan dengan cuaca:</strong> di Jakarta yang sering gerah, bahan yang terlalu tebal dan berbulu bisa terasa panas. Bahan yang lebih adem atau matras tipis bisa jadi alternatif, terutama di siang hari.</li>
        <li><strong>Ukuran yang pas:</strong> kucing sering suka tempat yang terasa "memeluk" badannya. Terlalu besar bisa terasa kurang aman, terlalu kecil ya bikin badannya tumpah ke mana-mana.</li>
        <li><strong>Cek jahitan dan hiasan:</strong> hindari pompom, tali, atau manik-manik yang gampang lepas dan bisa dikunyah.</li>
      </ul>

      <h2>Lokasi menentukan segalanya</h2>
      <p>Kasur sebagus apa pun bisa gagal kalau ditaruh di tempat yang salah. Beberapa hal yang bisa kamu coba:</p>
      <ul>
        <li><strong>Taruh di spot favoritnya:</strong> kalau dia selalu tidur di ujung sofa, letakkan kasurnya di dekat situ. Jangan memaksanya pindah ke pojok yang menurutmu lebih rapi.</li>
        <li><strong>Pilih tempat yang tenang:</strong> jauhkan dari mesin cuci, pintu yang sering dibanting, atau jalur lalu-lalang.</li>
        <li><strong>Jauh dari kotak pasir dan mangkuk makan:</strong> kucing umumnya suka area tidur, makan, dan buang air yang terpisah.</li>
        <li><strong>Manfaatkan sinar matahari pagi:</strong> banyak kucing senang berjemur. Spot dekat jendela yang kena cahaya hangat bisa jadi lokasi idaman, asal tidak terlalu panas dan jendelanya aman.</li>
      </ul>

      <h2>Trik biar kasur baru mau dipakai</h2>
      <p>Kalau kasurnya masih dicuekin, jangan langsung menyerah atau merasa ditolak secara pribadi. Coba beberapa trik ini:</p>
      <ul>
        <li><strong>Kasih aroma yang familiar:</strong> letakkan selimut kecil atau kain yang biasa ia tiduri di dalam kasur baru. Bau yang dikenalnya bisa membuat tempat baru terasa lebih "miliknya".</li>
        <li><strong>Pakai camilan atau mainan:</strong> taruh satu dua camilan atau mainan favoritnya di sana, lalu biarkan dia menjelajah sendiri.</li>
        <li><strong>Jangan dipaksa:</strong> mengangkat kucing lalu menaruhnya di kasur berulang kali justru bisa bikin dia makin curiga.</li>
        <li><strong>Sabar sedikit:</strong> beberapa kucing butuh waktu untuk menerima benda baru. Ada yang langsung suka, ada yang baru mau setelah beberapa hari.</li>
        <li><strong>Gabungkan dengan kardus:</strong> kalau dia memang fans berat kardus, kenapa tidak taruh alas empuk di dalam kardus? Hemat, dan juri berkumis pun puas.</li>
      </ul>

      <h2>Satu tempat tidur cukup?</h2>
      <p>Tidak ada aturan baku, tapi banyak hooman menyediakan lebih dari satu tempat istirahat di beberapa sudut rumah. Kucing suka berpindah-pindah, dan punya pilihan bisa membuatnya lebih leluasa. Kalau di rumah ada lebih dari satu kucing, menyediakan beberapa spot juga bisa mengurangi rebutan "kursi VIP".</p>
      <p>Jangan lupa cuci tempat tidurnya secara rutin. Kalau kamu melihat perubahan kebiasaan tidur yang mencolok, misalnya anabul tiba-tiba terus bersembunyi, tampak lemas, atau tidak mau bergerak seperti biasanya, sebaiknya konsultasikan ke dokter hewan supaya penyebabnya bisa diperiksa.</p>

      <h2>Penutup</h2>
      <p>Memilih tempat tidur kucing itu bukan soal mencari yang paling mahal, tapi soal memahami gaya tidur, selera, dan spot favorit anabulmu. Amati dulu, pilih yang praktis, taruh di tempat yang tepat, dan beri dia waktu. Kalau ujung-ujungnya dia tetap memilih kardus... anggap saja kamu dapat bonus tempat tidur gratis setiap kali belanja online.</p>
      <p>Kami di Deholic Cattery, cattery British Shorthair di Jakarta Barat, senang berbagi tips sederhana seputar kehidupan bareng anabul. Mampir dan sapa kami di Instagram atau TikTok @deholic.cattery.</p>
    `,
  },
  {
    slug: "tips-air-minum-kucing-rumahan",
    title: "Biar Anabul Cukup Minum: Tips Air Minum untuk Kucing Rumahan",
    category: "Perawatan",
    excerpt:
      "Kucingmu jarang kelihatan minum? Tips santai soal mangkuk, posisi, air segar, dan kebiasaan kecil biar anabul rumahan lebih rajin minum.",
    date: "2026-10-07",
    readTime: 5,
    author: "Tim Deholic Cattery",
    icon: "bowl",
    accent: ["#d9e1ea", "#f3d2b5"],
    content: `
      <p>Kamu sudah menyiapkan mangkuk air yang bersih, diisi penuh, ditaruh rapi di samping mangkuk makan. Lalu anabul lewat, melirik sebentar, dan... memilih minum dari gelas kopimu yang ketinggalan di meja. Atau dari keran wastafel. Atau dari genangan air bekas siram tanaman. Selamat, kamu resmi bergabung dengan klub hooman yang bingung kenapa kucing begitu pemilih soal air.</p>
      <p>Tenang, ini cerita yang sangat umum. Banyak kucing memang tidak terlihat "rajin minum" seperti anjing yang langsung menyeruput air sampai lantai basah. Kabar baiknya, ada beberapa trik sederhana yang bisa membuat air minum jadi lebih menarik di mata (dan kumis) mereka.</p>

      <h2>Kenapa kucing sering terlihat malas minum?</h2>
      <p>Kucing punya selera yang cukup spesifik. Mereka bisa peduli pada rasa air, bau mangkuk, posisi tempat minum, sampai apakah kumisnya tersentuh pinggiran mangkuk atau tidak. Kalau ada satu hal yang terasa kurang pas, mereka bisa saja cuek dan mencari sumber air lain yang menurut mereka lebih "berkelas".</p>
      <p>Selain itu, jenis makanan juga berpengaruh. Kucing yang banyak makan makanan basah biasanya sudah mendapat sebagian cairan dari makanannya, jadi wajar kalau ia tidak terlalu sering mampir ke mangkuk air. Sementara kucing yang lebih banyak makan makanan kering umumnya perlu lebih banyak minum dari mangkuk. Jadi jangan langsung panik hanya karena kamu jarang memergokinya minum, tapi tetap perhatikan pola keseluruhannya.</p>

      <h2>Mangkuk yang tepat: kumis juga punya perasaan</h2>
      <p>Banyak kucing kurang suka mangkuk yang sempit dan dalam, karena kumisnya jadi menyentuh pinggiran setiap kali menunduk. Bayangkan minum sambil pipimu digesek-gesek terus. Agak menyebalkan, kan?</p>
      <ul>
        <li><strong>Pilih mangkuk lebar dan tidak terlalu dalam:</strong> supaya kumis tidak terganggu dan anabul bisa melihat sekelilingnya saat minum.</li>
        <li><strong>Pertimbangkan bahan:</strong> mangkuk keramik, kaca, atau stainless steel umumnya lebih mudah dibersihkan dan tidak gampang menyimpan bau dibanding plastik yang sudah tergores.</li>
        <li><strong>Isi sampai cukup penuh:</strong> beberapa kucing lebih suka permukaan air yang dekat dengan bibir mangkuk, jadi tidak perlu menunduk terlalu dalam.</li>
      </ul>

      <h2>Lokasi, lokasi, lokasi</h2>
      <p>Di dunia properti, lokasi itu penting. Ternyata di dunia anabul juga. Beberapa hal yang bisa kamu coba:</p>
      <ul>
        <li><strong>Jauhkan dari kotak pasir:</strong> kamu juga pasti nggak mau minum di sebelah toilet. Kucing pun begitu.</li>
        <li><strong>Coba pisahkan dari mangkuk makan:</strong> sebagian kucing lebih suka tempat minum yang tidak menempel dengan tempat makannya. Tidak semua kucing begini, tapi layak dicoba.</li>
        <li><strong>Sediakan lebih dari satu titik air:</strong> taruh mangkuk di beberapa sudut rumah, misalnya dekat tempat tidurnya, di ruang tengah, atau dekat jendela favoritnya. Semakin gampang ditemukan, semakin besar peluang ia mampir.</li>
        <li><strong>Pilih tempat yang tenang:</strong> hindari lorong yang ramai lalu-lalang atau dekat mesin cuci yang tiba-tiba bergemuruh.</li>
      </ul>

      <h2>Air segar itu wajib, bukan bonus</h2>
      <p>Air yang sudah didiamkan seharian, apalagi yang ada bulu atau remah makanan mengapung, bisa jadi alasan anabul mogok minum. Ganti air setiap hari, dan cuci mangkuknya secara rutin dengan sabun lalu bilas sampai bersih supaya tidak tersisa bau sabun. Hidung kucing itu sensitif, jadi aroma yang menurut kita samar bisa terasa mengganggu buat mereka.</p>
      <p>Kalau anabulmu suka minum dari gelasmu, mungkin itu pertanda ia suka air yang baru dituang. Coba isi ulang mangkuknya di depan dia. Kadang, melihat air "baru" saja sudah cukup bikin dia penasaran.</p>

      <h2>Air mancur kucing: perlu atau tidak?</h2>
      <p>Kucing yang hobi minum dari keran biasanya tertarik pada air yang bergerak. Untuk tipe ini, air mancur khusus kucing (cat water fountain) bisa jadi pilihan menarik. Gemericiknya sering memancing rasa ingin tahu, dan banyak hooman merasa kucingnya jadi lebih sering mampir.</p>
      <p>Tapi ini bukan kewajiban. Ada juga kucing yang malah curiga dengan benda berisik baru di rumahnya. Kalau mau mencoba, kenalkan pelan-pelan, tetap sediakan mangkuk biasa di dekatnya, dan bersihkan air mancur serta filternya sesuai petunjuk produsen. Air mancur yang jarang dibersihkan justru bisa lebih jorok daripada mangkuk biasa.</p>

      <h2>Trik kecil yang sering berhasil</h2>
      <ul>
        <li><strong>Tambahkan makanan basah ke menu:</strong> kalau cocok untuk anabulmu, ini cara mudah menambah asupan cairan. Untuk perubahan pola makan, sebaiknya diskusikan dulu dengan dokter hewan.</li>
        <li><strong>Jadikan momen minum menyenangkan:</strong> sebagian kucing suka kalau ditemani. Duduk di dekatnya sambil ngobrol pelan bisa membuatnya lebih santai.</li>
        <li><strong>Perhatikan suhu ruangan:</strong> saat cuaca panas, pastikan ada air di tempat yang sejuk dan teduh, bukan di bawah sinar matahari langsung.</li>
        <li><strong>Jangan pakai air yang aneh-aneh:</strong> air minum bersih yang biasa kamu konsumsi sudah cukup. Tidak perlu menambahkan susu, kaldu berbumbu, atau minuman manis ke mangkuknya.</li>
      </ul>

      <h2>Kapan harus ke dokter hewan?</h2>
      <p>Tips di atas untuk kucing sehat yang sekadar pemilih. Kalau kamu melihat perubahan yang mencolok, jangan ditebak sendiri. Misalnya anabul tiba-tiba minum jauh lebih banyak dari biasanya, atau malah hampir tidak minum sama sekali, buang air kecil jadi lebih sering atau justru sedikit sekali, terlihat lemas, kehilangan nafsu makan, atau gusinya terasa kering. Hal-hal seperti ini sebaiknya segera dikonsultasikan ke dokter hewan, karena bisa jadi tanda ada sesuatu yang perlu diperiksa.</p>
      <p>Mengenali kebiasaan normal anabulmu sejak awal akan sangat membantu. Dengan begitu, kamu lebih cepat sadar kalau ada yang berubah.</p>

      <h2>Penutup</h2>
      <p>Membuat kucing rajin minum itu bukan soal memaksa, melainkan soal membuat air terasa menarik dan mudah dijangkau. Mangkuk lebar, air segar, lokasi yang tenang, dan sedikit kesabaran sering sudah membawa perubahan. Dan kalau anabulmu tetap bersikeras minum dari gelas kopimu... ya, mungkin saatnya kamu yang mengalah dan menutup gelas rapat-rapat.</p>
      <p>Kami di Deholic Cattery, cattery British Shorthair di Jakarta Barat, senang berbagi tips sederhana seputar kehidupan bareng anabul. Mampir dan sapa kami di Instagram atau TikTok @deholic.cattery.</p>
    `,
  },
  {
    slug: "mengenal-british-shorthair",
    title: "Mengenal British Shorthair: Si Boneka Hidup yang Kalem",
    category: "Pemula",
    excerpt:
      "Mau kenalan sama British Shorthair? Panduan santai soal watak, bulu, dan kehidupan sehari-hari si boneka hidup yang kalem buat calon hooman pemula.",
    date: "2026-10-06",
    readTime: 5,
    author: "Tim Deholic Cattery",
    icon: "heart",
    accent: ["#d9e1ea", "#f3d2b5"],
    content: `
      <p>Pernah lihat kucing yang wajahnya bulat, matanya besar, tubuhnya seperti boneka yang bisa berjalan sendiri? Itu kemungkinan besar British Shorthair, atau yang sering disingkat BSH. Ras ini sering bikin orang bilang "aduh lucu banget", lalu dua detik kemudian bertanya, "emang dia selalu semahal itu diamnya?"</p>
      <p>Artikel ini buat kamu yang baru mulai penasaran. Bukan ensiklopedia panjang, melainkan kenalan santai: seperti apa wataknya, kenapa bulunya terasa mewah, dan apa yang perlu disiapkan kalau suatu hari kamu ingin hidup bareng si boneka hidup ini.</p>

      <h2>Siapa British Shorthair itu?</h2>
      <p>British Shorthair adalah ras kucing berbulu pendek yang dikenal dengan tubuh padat, wajah bulat, pipi yang terasa "penuh", dan mata yang ekspresif. Banyak orang menggambarkan mereka seperti boneka berbulu yang punya pendapat sendiri. Tidak semua BSH berwarna abu-abu kebiruan (blue), meski warna itu yang paling sering muncul di foto dan meme. Ada juga solid, bicolor, dan variasi warna lain yang sama-sama menggemaskan.</p>
      <p>Secara umum, BSH terkesan tenang dibanding beberapa ras yang lebih hiperaktif. Tapi "tenang" bukan berarti patung. Mereka tetap suka main, naik ke tempat tinggi, dan mengawasi rumah dari sudut favorit. Hanya saja, drama kejar-kejaran seharian biasanya bukan gaya hidup utama mereka.</p>

      <h2>Watak: kalem, setia, tapi tetap punya selera</h2>
      <p>Kalau kamu berharap kucing yang selalu nempel di pangkuan 24 jam, BSH bisa mengejutkan. Banyak BSH lebih suka jadi teman dekat yang duduk di dekatmu, bukan di atas kepala. Mereka sering digambarkan mandiri, tapi tetap senang ada di ruangan yang sama dengan keluarganya. Semacam teman kost yang jarang ribut, tapi selalu tahu kalau kamu lagi di rumah.</p>
      <ul>
        <li><strong>Umumnya ramah dengan keluarga:</strong> banyak BSH nyaman dengan rutinitas rumah dan orang yang sudah dikenal.</li>
        <li><strong>Tidak selalu clingy:</strong> kasih sayang mereka sering datang dengan cara halus, misalnya tidur di samping laptopmu atau mengikuti dari jauh.</li>
        <li><strong>Cocok untuk rumah yang tidak terlalu gaduh:</strong> mereka biasanya lebih enjoy suasana yang relatif tenang, meski tiap individu beda.</li>
        <li><strong>Punya mood sendiri:</strong> ada hari "mau dipeluk", ada hari "cukup lihat dari sofa saja, terima kasih".</li>
      </ul>
      <p>Yang penting diingat: karakter kucing itu individu. Dua BSH dari latar belakang sama sekalipun bisa punya selera bermain, tingkat keakraban, dan preferensi tempat tidur yang berbeda. Jadi kenali satu-satu, jangan hanya dari foto di internet.</p>

      <h2>Bulu dan perawatan sehari-hari</h2>
      <p>Bulu BSH pendek, padat, dan terasa "mewah" saat disentuh. Banyak orang bilang seperti menyentuh boneka yang baru dicuci. Kabar baiknya, perawatan biasanya tidak serumit ras berbulu panjang. Kabar realistisnya, bulu pendek padat tetap butuh perhatian supaya tidak kusut atau menumpuk di sofa favoritmu.</p>
      <ul>
        <li><strong>Sikat rutin:</strong> beberapa kali seminggu biasanya cukup untuk banyak BSH, terutama saat berganti bulu. Pilih sisir atau sikat yang nyaman di kulitnya.</li>
        <li><strong>Jangan dipaksa:</strong> sesi pendek yang menyenangkan lebih baik daripada maraton sikat yang bikin trauma.</li>
        <li><strong>Cuci tangan setelah main:</strong> bulu ini enak disentuh, tapi juga rajin nempel di baju hitam. Itu bagian dari paket romansa.</li>
      </ul>
      <p>Kalau kamu baru punya kucing, biasakan menyikat pelan-pelan sambil kasih camilan. Tujuannya supaya anabul mengaitkan perawatan dengan momen positif, bukan dengan "oh tidak, alat aneh itu lagi".</p>

      <h2>Aktivitas: bukan atlet, tapi tetap butuh main</h2>
      <p>Karena BSH sering tampak santai, banyak hooman pemula mengira mereka cukup dibiarkan tidur seharian. Padahal kucing, termasuk BSH, tetap butuh stimulasi. Mainan bulu, karton bekas, atau sesi kejar laser singkat (dengan aturan: selalu akhiri dengan mainan fisik yang bisa ditangkap) bisa membantu tubuh dan otaknya tetap aktif.</p>
      <p>Mereka juga suka tempat tinggi yang aman. Rak dinding yang kokoh, cat tree, atau jendela dengan pemandangan burung di luar sering jadi spot favorit. Anggap saja BSH butuh kantor kecil sebagai manajer keamanan rumah tangga.</p>

      <h2>Makan dan berat badan: pantau dengan lembut</h2>
      <p>Banyak BSH cenderung mudah gemuk kalau porsi dan camilan tidak dijaga. Tubuh mereka memang terlihat padat dan "berisi", jadi kadang sulit membedakan mana yang proporsional dan mana yang sudah kelebihan. Timbang rutin, ukur pakan sesuai panduan di kemasan atau saran dokter hewan, dan jangan jadikan camilan sebagai alat negosiasi sepanjang hari.</p>
      <p>Kalau kamu ragu soal porsi, bentuk tubuh, atau pola makan, tanyakan ke dokter hewan. Mereka yang paling tepat menilai apakah anabulmu berada di jalur yang sehat.</p>

      <h2>Kesehatan: observasi + dokter hewan, bukan tebak-tebakan</h2>
      <p>Seperti kucing lain, BSH tetap butuh vaksinasi, obat cacing sesuai jadwal, dan pemeriksaan rutin. Jangan mengandalkan artikel internet untuk mendiagnosis. Kalau nafsu makan berubah drastis, ia jadi lesu, susah buang air, atau ada perubahan perilaku yang mencolok, hubungi dokter hewan. Lebih baik "salah-salah waspada" daripada menunggu terlalu lama.</p>

      <h2>Apakah BSH cocok buat pemula?</h2>
      <p>Banyak pemilik pemula merasa BSH relatif "lebih mudah diajak kompromi" dibanding ras yang sangat aktif atau sangat vokal. Tapi "cocok" tetap bergantung pada rumahmu: apakah kamu siap menyediakan waktu bermain, tempat yang aman, kotak pasir bersih, dan kunjungan ke dokter hewan? Kucing kalem pun tetap makhluk hidup dengan kebutuhan, bukan dekorasi bulu yang bisa dibiarkan di pojok ruang tamu.</p>
      <p>Kalau kamu sedang menimbang, mulailah dari belajar kebutuhan dasar: kotak pasir, makanan yang sesuai, scratching post, dan ruang yang ramah kucing. Artikel-artikel lain di situs ini bisa jadi bekal sebelum keputusan besar diambil.</p>

      <h2>Penutup</h2>
      <p>British Shorthair itu kombinasi wajah boneka, tubuh padat, dan kepribadian yang sering terasa tenang tapi tetap penuh karakter. Mereka bukan robot pengikut perintah, melainkan teman rumah yang punya selera sendiri. Kenali individunya, rawat bulunya dengan sabar, ajak main secukupnya, dan selalu libatkan dokter hewan untuk urusan kesehatan.</p>
      <p>Kami di Deholic Cattery, cattery British Shorthair di Jakarta Barat yang berdiri sejak 2025 dengan tiga kucing BSH di awal perjalanan, senang sekali berbagi cerita seputar anabul. Sapa kami di Instagram atau TikTok @deholic.cattery.</p>
    `,
  },
  {
    slug: "scratching-post-kucing-biar-dipakai",
    title: "Scratching Post Mahal tapi Dicuekin? Begini Biar Anabul Mau Pakai",
    category: "Perilaku",
    excerpt:
      "Scratching post cantik malah dicuekin, sofa yang jadi korban? Tips santai memilih, menaruh, dan mengenalkan tiang garukan biar benar-benar dipakai anabul.",
    date: "2026-10-05",
    readTime: 5,
    author: "Tim Deholic Cattery",
    icon: "paw",
    accent: ["#d9e1ea", "#f3d2b5"],
    content: `
      <p>Kamu sudah survei berhari-hari, membandingkan model, lalu akhirnya membeli scratching post yang cantik. Dipasang di sudut ruang tamu, difoto, dipamerkan ke grup keluarga. Lalu anabul lewat di depannya tanpa menoleh sedikit pun, dan langsung mengasah kuku di sandaran sofa. Sakit, tapi bukan di kulit. Di hati.</p>
      <p>Tenang, ini kisah yang sangat umum di kalangan hooman. Scratching post yang dicuekin biasanya bukan karena kucingmu keras kepala, tapi karena ada yang belum pas: bentuknya, bahannya, atau lokasinya. Yuk kita bahas pelan-pelan supaya tiang garukan itu benar-benar dipakai, bukan cuma jadi pajangan mahal.</p>

      <h2>Kenapa kucing hobi mencakar?</h2>
      <p>Pertama, terima dulu kenyataannya: mencakar itu perilaku normal, bukan kenakalan. Kucing umumnya mencakar untuk beberapa alasan sekaligus.</p>
      <ul>
        <li><strong>Merawat kuku:</strong> mengasah membantu melepas lapisan luar kuku yang sudah tua.</li>
        <li><strong>Peregangan:</strong> coba perhatikan, kucing sering mencakar sambil meregangkan badan dari ujung kaki sampai punggung. Semacam yoga pagi versi anabul.</li>
        <li><strong>Menandai wilayah:</strong> selain bekas goresan yang terlihat, kaki kucing juga meninggalkan aroma yang menandakan "ini daerahku".</li>
        <li><strong>Melepas energi atau emosi:</strong> banyak kucing mencakar saat bangun tidur, saat senang menyambutmu pulang, atau saat sedang bersemangat.</li>
      </ul>
      <p>Jadi tujuan kita bukan menghentikan kebiasaan mencakar, melainkan mengarahkannya ke tempat yang kita setujui bersama.</p>

      <h2>Pilih scratching post yang lolos seleksi</h2>
      <p>Kucing itu juri yang cukup pemilih. Beberapa hal ini biasanya menentukan apakah produkmu dapat nilai sempurna atau langsung didiskualifikasi.</p>

      <h3>Kokoh dulu, cantik belakangan</h3>
      <p>Scratching post yang goyang atau gampang terguling sering langsung masuk daftar hitam. Bayangkan kamu sedang menggaruk punggung di tembok, lalu temboknya ikut bergoyang. Kurang meyakinkan, kan? Pilih yang alasnya lebar dan berat, atau yang bisa ditempel dengan aman ke dinding.</p>

      <h3>Cukup tinggi untuk peregangan penuh</h3>
      <p>Banyak kucing suka mencakar sambil berdiri dan meregang maksimal. Kalau tiangnya terlalu pendek, ia tidak bisa meregang dengan puas, lalu mencari alternatif yang lebih tinggi. Sandaran sofa, misalnya. Sebagai patokan kasar, pilih tiang yang lebih tinggi dari panjang badan kucingmu saat ia berdiri meregang.</p>

      <h3>Bahan dan arah: tiap kucing punya selera</h3>
      <p>Ada kucing yang cinta tali sisal, ada yang lebih suka kardus bergelombang, ada juga yang tergila-gila pada karpet tertentu. Arah juga penting: sebagian suka mencakar tegak, sebagian lebih senang di permukaan datar di lantai.</p>
      <p>Petunjuk terbaik ada di rumahmu sendiri. Kalau ia sering menyerang karpet, mungkin ia tipe horizontal. Kalau sasarannya sisi sofa atau kusen pintu, kemungkinan ia tipe vertikal. Kalau masih bingung, coba sediakan satu tiang tegak dan satu papan kardus datar, lalu lihat mana yang menang.</p>

      <h2>Lokasi, lokasi, lokasi</h2>
      <p>Ini kesalahan paling sering: scratching post ditaruh di pojok yang sepi supaya tidak mengganggu pemandangan. Padahal karena mencakar juga berfungsi menandai wilayah, kucing cenderung ingin melakukannya di area yang penting dan sering dilewati.</p>
      <ul>
        <li>Taruh di dekat tempat ia tidur, karena banyak kucing langsung mencakar setelah bangun.</li>
        <li>Letakkan di samping "korban" favoritnya, misalnya tepat di sebelah sudut sofa yang sudah compang-camping.</li>
        <li>Pilih area tempat keluarga sering berkumpul, bukan gudang atau balkon belakang.</li>
        <li>Kalau rumahmu cukup luas, satu scratching post mungkin tidak cukup. Beberapa titik di ruangan berbeda biasanya lebih efektif.</li>
      </ul>

      <h2>Cara mengenalkan supaya dilirik</h2>
      <p>Sudah pilih yang kokoh dan menaruhnya di lokasi strategis? Saatnya promosi. Anggap kamu sedang membuka toko baru dan kucingmu adalah pelanggan pertama yang harus dibujuk.</p>
      <ol>
        <li><strong>Ajak bermain di sekitarnya.</strong> Gerakkan mainan bulu atau tali di sekitar dan di atas tiang supaya kaki anabul ikut mencengkeramnya.</li>
        <li><strong>Gunakan catnip atau silvervine bila ia suka.</strong> Taburkan sedikit di permukaannya. Tidak semua kucing bereaksi, jadi jangan kecewa kalau hasilnya biasa saja.</li>
        <li><strong>Beri pujian dan camilan</strong> setiap kali ia mencakar di tempat yang benar. Momen positif membuatnya lebih mungkin kembali.</li>
        <li><strong>Jangan paksa kakinya menggaruk.</strong> Memegang kaki kucing lalu menggosokkannya ke tiang justru bisa membuatnya tidak nyaman dan menjauh.</li>
        <li><strong>Bersabar.</strong> Ada kucing yang langsung jatuh cinta, ada yang butuh waktu berminggu-minggu untuk berubah pikiran.</li>
      </ol>

      <h2>Kalau sofa tetap jadi incaran</h2>
      <p>Hindari memarahi, membentak, atau menyemprot air. Kucing umumnya tidak mengaitkan hukuman dengan perbuatannya, malah bisa jadi takut padamu. Lebih baik buat sofa kurang menarik dan scratching post jauh lebih menggoda.</p>
      <ul>
        <li>Tutup sementara area favoritnya dengan selimut tebal atau pelindung furnitur.</li>
        <li>Saat ia mulai mencakar sofa, alihkan dengan tenang ke scratching post di sebelahnya.</li>
        <li>Rajin ajak bermain supaya energinya tersalurkan, bukan dilampiaskan ke furnitur.</li>
      </ul>
      <p>Menjaga kuku tetap rapi juga membantu mengurangi kerusakan. Baca juga artikel kami sebelumnya, "Potong Kuku Kucing Tanpa Drama: Tips Biar Anabul Nggak Kabur", untuk panduan lengkapnya.</p>

      <h2>Kapan perlu ke dokter hewan?</h2>
      <p>Mencakar memang normal, tapi perubahan mendadak patut diperhatikan. Hubungi dokter hewan kalau kucingmu tiba-tiba mencakar jauh lebih sering dan intens dari biasanya, terus-menerus menjilati atau menggigit kakinya, pincang, atau kamu melihat kuku patah, kuku tumbuh masuk ke bantalan, bengkak, atau luka. Sebaliknya, kucing yang dulu rajin mencakar lalu mendadak berhenti, terutama bila ia tampak enggan melompat, juga sebaiknya diperiksakan. Bisa jadi ada rasa tidak nyaman yang tidak terlihat dari luar, dan dokter hewan yang paling tepat menilainya.</p>

      <h2>Penutup</h2>
      <p>Scratching post yang dicuekin bukan tanda kamu gagal jadi hooman. Biasanya hanya perlu sedikit penyesuaian: tiang yang lebih kokoh, bahan yang sesuai selera, lokasi yang strategis, dan banyak kesabaran plus camilan. Begitu anabul menemukan scratching post idamannya, sofa pun bisa bernapas lega.</p>
      <p>Punya cerita anabul yang akhirnya mau pakai scratching post? Kami di Deholic Cattery, cattery British Shorthair di Jakarta Barat, senang sekali mendengarnya. Sapa kami di Instagram atau TikTok @deholic.cattery.</p>
    `,
  },
  {
    slug: "arti-suara-kucing-meong-dengkur-desis",
    title: "Meong, Dengkur, Desis: Arti Suara Kucing buat Pemula",
    category: "Perilaku",
    excerpt:
      "Meong, dengkur, desis, sampai trill: panduan santai membaca suara kucing biar kamu nggak salah paham sama anabul.",
    date: "2026-10-04",
    readTime: 5,
    author: "Tim Deholic Cattery",
    icon: "eye",
    accent: ["#d9e1ea", "#f3d2b5"],
    content: `
      <p>Rumah dengan kucing jarang benar-benar sunyi. Ada meong pendek di depan kulkas, dengkur lembut di pangkuan, kadang desis singkat saat main terlalu kasar. Buat pemilik pemula, semua suara itu sering terdengar sama: "anabul lagi ngomong." Padahal tiap bunyi punya nuansa sendiri. Belum tentu marah, belum tentu lapar, dan belum tentu minta dipeluk seketika.</p>
      <p>Ini bukan kamus ilmiah, melainkan panduan santai: kapan meong berarti "perhatikan aku", kapan dengkur berarti nyaman, dan kapan desis artinya "berhenti dulu". Kalau suara berubah drastis atau kucing terlihat kesakitan, itu wilayah dokter hewan, bukan tebak-tebakan di sofa.</p>

      <h2>Meong: bahasa serbaguna yang tergantung konteks</h2>
      <p>Meong paling sering terdengar, dan justru karena itu paling mudah disalahartikan. Meong pendek di pagi hari bisa berarti "sarapan dong". Meong panjang di depan pintu bisa berarti ingin keluar atau masuk. Meong beruntun saat kamu pulang kerja sering lebih ke "ayo interaksi".</p>
      <p>Triknya sederhana: lihat situasi, bukan hanya bunyinya.</p>
      <ul>
        <li><strong>Dekat mangkuk atau kulkas:</strong> kemungkinan terkait makan atau kebiasaan minta camilan.</li>
        <li><strong>Dekat pintu atau jendela:</strong> biasanya soal akses, penasaran, atau ingin ikut.</li>
        <li><strong>Saat kamu diam di laptop:</strong> sering jadi pengingat bahwa perhatian sedang diminta.</li>
        <li><strong>Meong di malam hari:</strong> bisa bosan, ingin main, atau memastikan kamu masih ada.</li>
      </ul>
      <p>Jangan langsung menyimpulkan lapar setiap kali ada suara. Kalau jadwal makan sudah teratur dan mangkuk masih ada isinya, cek dulu: apakah ia ingin main, ingin pintu dibuka, atau hanya ingin kamu menoleh? Menoleh dan menyapa sering sudah cukup. Memberi camilan tiap meong bisa membuat kebiasaan minta jadi lebih rajin dari yang kamu siap tangani.</p>

      <h2>Dengkur: nyaman, tapi bukan jaminan mutlak</h2>
      <p>Dengkur biasanya jadi favorit manusia. Getaran halus di dada kucing saat dipeluk terasa seperti pujian hidup. Banyak kucing memang dengkur saat senang, aman, atau menikmati usapan di tempat favorit. Itu sinyal menyenangkan untuk kalian berdua.</p>
      <p>Tetap ada catatan kecil: dengkur juga bisa muncul saat kucing ingin menenangkan diri, misalnya di situasi baru. Jadi dengkur bukan stempel "semua baik-baik saja" tanpa melihat bahasa tubuh. Kalau badan rileks, mata setengah terpejam, dan ia mendekat sendiri, kemungkinan besar ia nyaman. Kalau badan kaku, telinga gelisah, atau ia mencoba menjauh sambil tetap berdengkur, hormati ruangnya.</p>
      <blockquote>Dengkur itu seperti senyum: sering berarti senang, tapi konteks tetap raja. Lihat seluruh kucingnya, bukan cuma getaran di tenggorokan.</blockquote>

      <h2>Desis, geram, dan "jangan dekati dulu"</h2>
      <p>Desis adalah sinyal jelas: jarak dibutuhkan. Bisa muncul saat kucing kaget, merasa terpojok, menjaga mainan atau makanan, atau tidak suka cara dipegang. Geraman rendah sering jadi peringatan sebelum reaksi lebih tegas. Ini bukan kucing "jahat". Ini kucing yang sedang bilang batasnya.</p>
      <ul>
        <li>Berhenti mendekat atau menyentuh. Mundur pelan, jangan balas dengan teriakan.</li>
        <li>Beri jalur kabur. Kucing yang merasa terjebak lebih mudah panik.</li>
        <li>Jangan paksa interaksi "supaya terbiasa". Paksaan biasanya memperburuk rasa tidak aman.</li>
        <li>Kalau desis muncul saat bermain, mainnya mungkin terlalu kasar atau terlalu lama. Ganti ke mainan, bukan tanganmu.</li>
      </ul>
      <p>Anak kecil di rumah perlu diajari sinyal ini lebih awal. Desis bukan tantangan untuk diuji, melainkan lampu kuning yang harus dihormati. Kalau desis muncul tiba-tiba tanpa pemicu jelas, atau disertai perubahan nafsu makan, konsultasikan ke dokter hewan.</p>

      <h2>Trill, kicau kecil, dan suara "ngobrol"</h2>
      <p>Selain meong klasik, banyak kucing punya suara pendek mirip trill atau kicau saat menyapa. Bunyi itu sering muncul saat kamu masuk ruangan, saat ia berjalan di depanmu menuju mangkuk, atau saat mengajak ikut ke tempat favoritnya. Nuansanya biasanya ramah: semacam "hai" atau "ikut sini".</p>
      <p>Ada juga kucing yang "bicara" panjang saat kamu berbicara padanya, membalas dengan rangkaian meong dan trill seolah rapat keluarga sedang berlangsung. Itu normal dan sering jadi momen lucu. Balas dengan suara tenang. Kamu tidak perlu menerjemahkan tiap suku kata; yang penting interaksi terasa dua arah dan tidak memaksa.</p>
      <p>Suara saat melihat burung di jendela juga umum: semacam gertakan gigi atau bunyi "kuk-kuk" pelan, biasanya terkait naluri berburu. Tidak perlu panik. Tutup tirai bila ia terlalu fokus sampai stres, atau alihkan ke mainan bulu supaya energinya punya saluran aman di dalam rumah.</p>

      <h2>Cara "mendengar" yang lebih akurat</h2>
      <p>Suara kucing jauh lebih mudah dibaca kalau digabung dengan waktu, tempat, dan bahasa tubuh. Meong di dapur jam makan beda artinya dengan meong di kamar mandi saat kamu mandi lama. Ekor tenang dan telinga maju mendukung arti ramah. Ekor besar dan telinga mundur mendukung arti "saya tidak nyaman".</p>
      <ol>
        <li>Catat pola harian: kapan ia paling vokal, di lokasi mana, dan apa yang biasanya kamu lakukan sesudahnya.</li>
        <li>Respons konsisten lebih membantu daripada tebak-tebakan tiap hari. Kalau meong pintu biasanya ingin ikut, putuskan batasan yang sama tiap kali.</li>
        <li>Jangan hadiahi semua suara dengan makanan. Sesekali cukup sapa, main sebentar, atau biarkan ia punya waktu sendiri.</li>
        <li>Perhatikan perubahan mendadak. Kucing yang biasanya diam lalu tiba-tiba sangat berisik, atau sebaliknya, pantas dicermati.</li>
      </ol>
      <p>Kalau suara menjadi serak terus-menerus, napas terdengar berat, ia berteriak tanpa sebab jelas, atau tampak kesakitan saat bersuara, hubungi dokter hewan. Panduan di sini hanya untuk komunikasi sehari-hari yang sehat, bukan untuk mendiagnosis gangguan.</p>

      <h2>Penutup</h2>
      <p>Meong, dengkur, dan desis bukan kode rahasia yang harus dihafal sempurna. Itu cara kucing mengatur jarak, meminta perhatian, dan menjaga rasa amannya di rumah yang ia bagi denganmu. Dengarkan konteksnya, hormati batas saat ada desis, nikmati dengkur saat ia memilih dekat, dan jangan anggap setiap meong sebagai alarm lapar. Lama-lama kamu akan punya "kamus rumah" sendiri: bukan dari teori rumit, melainkan dari kebiasaan saling menyimak yang tumbuh tiap hari.</p>
    `,
  },
  {
    slug: "potong-kuku-kucing-tanpa-drama",
    title: "Potong Kuku Kucing Tanpa Drama: Tips Biar Anabul Nggak Kabur",
    category: "Perawatan",
    excerpt:
      "Potong kuku kucing bisa tenang kalau setup-nya nyaman. Tips santai biar anabul kooperatif, sofa aman, dan kamu tetap utuh.",
    date: "2026-10-03",
    readTime: 5,
    author: "Tim Deholic Cattery",
    icon: "paw",
    accent: ["#d9e1ea", "#f3d2b5"],
    content: `
      <p>Ada momen di rumah yang membuat waktu seakan melambat: kamu membawa gunting kuku, kucing langsung menghilang ke bawah sofa. Seolah ia punya radar khusus untuk benda kecil yang mengkilap. Padahal potong kuku bukan hukuman. Ini perawatan biasa supaya kaki anabul nyaman, sofa tetap utuh, dan lenganmu tidak jadi papan goresan berjalan.</p>
      <p>Kabar baiknya, drama itu bisa dikurangi. Kuncinya bukan mengejar, melainkan menyiapkan suasana yang tenang, memotong sedikit demi sedikit, dan berhenti sebelum kucing panik. Yuk mulai dari dasar yang ramah pemula.</p>

      <h2>Kenapa kuku perlu dipotong?</h2>
      <p>Kucing memang punya kebiasaan mengasah kuku di scratching post atau karpet. Itu bagus dan tetap perlu didukung. Tapi kuku yang terlalu panjang tetap bisa mengganjal saat berjalan, menyangkut di kain, atau tidak sengaja mencakar kulit saat ia loncat ke pangkuanmu.</p>
      <ul>
        <li><strong>Furnitur dan kain:</strong> kuku tajam lebih mudah menyangkut di sofa, selimut, atau baju.</li>
        <li><strong>Kulit manusia:</strong> main atau naik ke pangkuan jadi lebih aman kalau ujung kuku tidak terlalu tajam.</li>
        <li><strong>Kenyamanan kaki:</strong> kuku yang terlalu panjang bisa membuat langkah terasa kurang nyaman, terutama pada kucing yang jarang keluar atau kurang sering mengasah.</li>
      </ul>
      <p>Scratching post tetap penting. Memotong kuku bukan pengganti mengasah, melainkan pelengkap supaya panjang kuku tetap terkendali.</p>

      <h2>Kenali bagian yang boleh dan tidak boleh dipotong</h2>
      <p>Ini bagian paling penting. Pada kuku berwarna terang, kamu biasanya bisa melihat area merah muda di dalam kuku. Itu disebut quick, bagian yang berisi pembuluh darah dan saraf. <strong>Jangan memotong sampai ke situ.</strong> Potong hanya ujung kuku yang transparan atau putih, sedikit di depan area merah muda.</p>
      <p>Pada kuku gelap, quick lebih sulit dilihat. Lebih aman memotong sangat sedikit saja, lalu periksa lagi lain waktu. Kalau tidak yakin, berhenti. Memotong terlalu pendek bisa membuat kuku berdarah dan kucing sakit, lalu ia semakin takut dipotong di kemudian hari.</p>
      <blockquote>Lebih baik potong sedikit dan sering daripada sekali potong terlalu dalam. Kuku yang agak panjang masih bisa diperbaiki. Trust yang rusak jauh lebih sulit diperbaiki.</blockquote>

      <h2>Siapkan dulu, baru panggil anabul</h2>
      <p>Jangan mulai saat kucing lagi mode "buronan". Pilih waktu ia sudah santai: setelah makan, setelah bermain ringan, atau saat sedang tidur siang di pangkuan. Siapkan semua alat sebelum kamu menyentuh kakinya.</p>
      <ul>
        <li>Gunting atau gunting kuku khusus kucing yang tajam dan nyaman dipegang.</li>
        <li>Cahaya yang cukup supaya kamu jelas melihat kuku.</li>
        <li>Camilan kecil atau mainan favorit sebagai hadiah.</li>
        <li>Handuk lembut bila perlu, untuk menenangkan tanpa memaksa.</li>
        <li>Tempat duduk yang stabil, bukan di tepi meja yang goyah.</li>
      </ul>
      <p>Suasana rumah sebaiknya tenang. Matikan TV yang keras, minta anggota keluarga lain tidak tiba-tiba muncul dengan vacuum cleaner. Kamu yang tenang akan lebih mudah ditiru kucing.</p>

      <h2>Satu kaki dulu, jangan targetkan semua sekaligus</h2>
      <p>Banyak pemilik pemula gagal karena ingin selesai dalam satu sesi heroik: delapan kuku depan, delapan kuku belakang, semua tuntas sekarang juga. Kucing tidak setuju dengan rencana itu. Mulai dari satu kaki saja, atau bahkan satu-dua kuku saja di hari pertama.</p>
      <ol>
        <li>Duduk nyaman, biarkan kucing di pangkuan atau di sampingmu dalam posisi yang ia sukai.</li>
        <li>Pegang kaki dengan lembut. Tekan pelan bantalan jari supaya kuku keluar.</li>
        <li>Potong hanya ujung kuku, lurus dan cepat, jauh tapi aman dari quick.</li>
        <li>Lepas sejenak, beri pujian atau camilan, lalu lanjut bila ia masih tenang.</li>
        <li>Kalau ia mulai gelisah, berhenti. Selesaikan sisanya besok atau lusa.</li>
      </ol>
      <p>Kuku belakang sering lebih sensitif karena kucing kurang terbiasa kakinya dipegang dari belakang. Boleh dikerjakan terpisah di hari lain. Yang penting rutinitasnya terasa aman, bukan seperti misi darurat.</p>

      <h2>Hadiah, pujian, dan latihan singkat</h2>
      <p>Kucing belajar dari pengalaman. Kalau setiap kali kaki dipegang berakhir dengan panik, ia akan kabur lebih cepat. Kalau setiap sesi pendek diakhiri camilan, pujian lembut, atau usapan di tempat favoritnya, ia mulai menghubungkan potong kuku dengan hal yang menyenangkan.</p>
      <ul>
        <li>Latih dulu hanya memegang kaki beberapa detik tanpa memotong, lalu beri hadiah.</li>
        <li>Setelah ia tenang, lanjut tekan bantalan jari supaya kuku terlihat, tanpa gunting dulu.</li>
        <li>Baru kemudian masukkan gunting ke sesi singkat. Jangan buru-buru.</li>
      </ul>
      <p>Konsistensi lebih berharga daripada kecepatan. Beberapa minggu sekali biasanya sudah cukup bagi banyak kucing rumahan, tapi tiap kucing beda. Perhatikan ujung kuku: kalau sudah mulai melengkung tajam atau sering menyangkut di kain, saatnya potong lagi.</p>

      <h2>Kapan harus minta bantuan</h2>
      <p>Tidak semua situasi cocok ditangani sendiri di rumah. Segera hubungi dokter hewan bila kamu melihat kuku tumbuh masuk ke bantalan kaki, kuku patah, kaki bengkak, kucing pincang, atau ada darah yang tidak berhenti. Begitu juga kalau kucing sangat panik atau bereaksi seolah kesakitan saat kaki disentuh. Bisa jadi ada rasa nyeri yang perlu diperiksa.</p>
      <p>Kalau kamu sendiri kurang percaya diri memotong, tidak apa-apa minta demo singkat ke dokter hewan atau perawat hewan. Belajar sekali dengan benar sering lebih aman daripada nekat berkali-kali.</p>

      <h2>Penutup</h2>
      <p>Potong kuku tanpa drama bukan soal trik rahasia. Ini soal sabar, cahaya yang cukup, potongan yang dangkal, dan keberanian untuk berhenti saat anabul bilang "cukup". Siapkan alat, pilih waktu tenang, kerjakan satu kaki dulu, lalu rayakan dengan camilan. Lama-lama, gunting kuku tidak lagi jadi sinyal kabur ke bawah sofa, melainkan bagian biasa dari perawatan yang membuat rumah lebih nyaman untuk kalian berdua.</p>
    `,
  },
  {
    slug: "panduan-kotak-pasir-kucing",
    title: "Kotak Pasir Kucing: Memilih, Menaruh, dan Merawatnya biar Nggak Bau",
    category: "Perawatan",
    excerpt:
      "Kotak pasir yang tepat bikin anabul betah dan rumah tetap wangi. Panduan santai memilih wadah, pasir, dan lokasi yang disukai kucing.",
    date: "2026-10-02",
    readTime: 5,
    author: "Tim Deholic Cattery",
    icon: "home",
    accent: ["#d9e1ea", "#f3d2b5"],
    content: `
      <p>Kalau kucing punya ulasan bintang lima untuk fasilitas rumah, kotak pasir pasti masuk daftar teratas. Bagi kita, ini cuma wadah berisi pasir. Bagi kucing, ini toilet pribadi yang harus bersih, tenang, dan sesuai selera. Kalau ada yang tidak cocok, ia tidak akan menulis keluhan. Ia akan langsung memilih keset kamar mandimu.</p>
      <p>Supaya drama itu tidak terjadi, yuk kenalan dengan dasar-dasar kotak pasir yang bikin anabul betah dan rumah tetap wangi.</p>

      <h2>Memilih wadah: lega itu nomor satu</h2>
      <p>Kucing suka berputar dulu sebelum "beraksi", lalu menggali dan menimbun dengan serius. Jadi pilih kotak yang cukup lega untuk badannya, bukan yang pas-pasan. Kucing yang masih kecil atau sudah tua lebih nyaman dengan kotak yang pinggirannya rendah supaya mudah keluar-masuk.</p>
      <ul>
        <li><strong>Kotak terbuka:</strong> mudah dibersihkan dan disukai banyak kucing karena ia bisa melihat sekeliling.</li>
        <li><strong>Kotak tertutup:</strong> pasir tidak berhamburan dan lebih privat, tapi bau bisa terperangkap di dalam. Kalau baunya mengganggu hidungmu, bayangkan hidung kucing yang jauh lebih sensitif.</li>
      </ul>
      <p>Tidak ada jawaban mutlak. Kalau ragu, perhatikan saja: kucing akan menunjukkan pilihannya dengan sangat jelas.</p>

      <h2>Memilih pasir: banyak pilihan, satu juri</h2>
      <p>Di toko hewan, kamu akan menemukan pasir gumpal (bentonit), pasir tofu, pasir kayu atau pelet, zeolit, hingga kristal silika. Masing-masing punya kelebihan, misalnya ada yang mudah diciduk, ada yang lebih ringan, ada yang bisa dibuang sedikit-sedikit. Tapi juri terakhirnya tetap kaki si anabul.</p>
      <ul>
        <li>Banyak kucing menyukai pasir bertekstur halus yang nyaman diinjak.</li>
        <li>Pasir beraroma kuat memang wangi menurut kita, tapi tidak semua kucing suka. Pilihan tanpa aroma sering lebih aman.</li>
        <li>Kalau mau ganti jenis pasir, campurkan sedikit demi sedikit dengan pasir lama selama beberapa hari, sama seperti saat mengganti makanan.</li>
      </ul>

      <h2>Lokasi: jangan di "jalan tol"</h2>
      <p>Bayangkan toilet kita ada di tengah ruang tamu saat ada arisan. Kurang nyaman, kan? Kucing juga begitu. Taruh kotak pasir di sudut yang tenang tapi mudah dijangkau, jauh dari mesin cuci yang berisik dan jalur lalu-lalang.</p>
      <ul>
        <li><strong>Jauhkan dari tempat makan dan minum.</strong> Kucing tidak suka makan di dekat toiletnya, dan kita pun sama.</li>
        <li><strong>Jangan sering dipindah.</strong> Kucing suka rutinitas, dan lokasi yang berubah-ubah bisa membuatnya bingung.</li>
        <li><strong>Punya lebih dari satu kucing?</strong> Sediakan beberapa kotak di lokasi berbeda. Aturan yang sering dianjurkan adalah jumlah kotak sama dengan jumlah kucing ditambah satu, supaya tidak ada yang harus antre atau merasa "dijaga" kucing lain.</li>
      </ul>

      <h2>Rutinitas bersih-bersih</h2>
      <p>Rahasia rumah tidak bau sebenarnya sederhana: konsisten. Ciduk gumpalan dan kotoran setiap hari, idealnya sekali atau dua kali. Tambahkan pasir baru bila sudah berkurang, lalu sesekali ganti seluruh pasir dan cuci kotaknya.</p>
      <ul>
        <li>Cuci kotak dengan air hangat dan sabun lembut, lalu keringkan sebelum diisi lagi.</li>
        <li>Hindari pembersih beraroma tajam. Bau yang menyengat bisa membuat kucing enggan masuk.</li>
        <li>Sediakan sekop, kantong sampah, dan tempat sampah bertutup di dekatnya, supaya tugas ini terasa cepat dan tidak malas dilakukan.</li>
      </ul>

      <blockquote>Kotak pasir yang bersih adalah undangan. Kotak pasir yang kotor adalah alasan kucing mencari tempat lain, dan biasanya tempat itu adalah barang favoritmu.</blockquote>

      <h2>Kalau kucing buang air di luar kotak</h2>
      <p>Jangan langsung dimarahi. Hukuman hanya membuat kucing takut, bukan paham. Coba cek dulu hal-hal sederhana: apakah kotaknya cukup bersih, apakah pasirnya baru diganti jenis, apakah lokasinya terlalu ramai, atau apakah ada kucing lain yang menghalangi. Bersihkan area "kecelakaan" sampai baunya benar-benar hilang, supaya ia tidak kembali ke tempat yang sama.</p>
      <p>Perhatikan juga tanda kesehatan. Kalau kucing bolak-balik ke kotak tapi hanya sedikit atau tidak keluar sama sekali, tampak mengejan, mengeong kesakitan, atau ada darah di urinenya, segera bawa ke dokter hewan. Hal ini bisa jadi tanda masalah yang perlu ditangani cepat.</p>

      <h2>Penutup</h2>
      <p>Kotak pasir mungkin bukan bagian paling glamor dari memelihara kucing, tapi justru di sinilah kenyamanan anabul dan kesegaran rumahmu dipertaruhkan. Pilih wadah yang lega, pasir yang disukai kakinya, lokasi yang tenang, dan bersihkan dengan rutin. Imbalannya? Rumah yang wangi, kucing yang tenang, dan keset kamar mandi yang selamat.</p>
    `,
  },
  {
    slug: "kebiasaan-aneh-kucing-yang-normal",
    title: "7 Kebiasaan Aneh Kucing yang Ternyata Normal (dan Diam-Diam Menggemaskan)",
    category: "Perilaku",
    excerpt:
      "Menjatuhkan gelas dari meja, mengulen selimut, sampai balapan keliling rumah jam tiga pagi. Tenang, anabulmu tidak rusak. Kebanyakan tingkah ini justru sangat 'kucing'.",
    date: "2026-10-01",
    readTime: 5,
    author: "Tim Deholic Cattery",
    icon: "sparkle",
    featured: false,
    sample: false,
    accent: ["#ffe3a8", "#d4c5ff"],
    content: `
      <p>Kalau kamu baru tinggal serumah dengan kucing, pasti ada saatnya kamu menatap anabul dan bertanya dalam hati, "Kamu kenapa, sih?" Ia menatap tembok kosong lama sekali, menolak kasur empuk yang baru kamu beli demi kardus bekas paket, lalu tiba-tiba lari keliling rumah seperti dikejar tagihan.</p>
      <p>Kabar baiknya, sebagian besar tingkah ajaib ini normal. Berikut tujuh kebiasaan yang sering bikin pemilik pemula garuk-garuk kepala, lengkap dengan penjelasan sederhananya.</p>

      <h2>1. Mengulen seperti tukang roti</h2>
      <p>Kucing menekan-nekan selimut, bantal, atau perutmu dengan kaki depan secara bergantian. Gerakan ini sudah muncul sejak ia masih bayi dan menyusu pada induknya. Pada kucing dewasa, kebiasaan ini umumnya dikaitkan dengan rasa nyaman dan santai. Jadi kalau ia mengulen pahamu, anggap saja itu pujian, walaupun kukunya kadang ikut menyumbang.</p>
      <p><strong>Tip:</strong> taruh selimut tebal di pangkuan dan rutin potong kukunya. Pahamu akan berterima kasih.</p>

      <h2>2. Menjatuhkan barang dari meja</h2>
      <p>Ia menatapmu. Menatap gelas. Menatapmu lagi. Lalu... <em>tuk</em>. Kucing adalah pemburu yang penuh rasa ingin tahu, dan menyenggol benda adalah caranya mengecek "ini bisa bergerak, nggak?" Selain itu, kucing cepat belajar bahwa setiap ada barang jatuh, kamu langsung datang. Perhatian didapat, misi tercapai.</p>
      <p><strong>Tip:</strong> simpan barang yang mudah pecah, dan sediakan waktu bermain setiap hari agar rasa penasarannya tersalurkan ke mainan, bukan ke gelas kesayanganmu.</p>

      <h2>3. Lebih memilih kardus daripada kasur mahal</h2>
      <p>Jangan tersinggung. Ruang sempit dan tertutup membuat kucing merasa aman: punggungnya terlindungi, dan ia bisa mengintip dunia dari tempat persembunyian. Bagi kucing, kardus bukan sampah, melainkan benteng pribadi. Makin sempit kardusnya, entah kenapa, makin menggoda untuk dicoba, meski badannya jelas tidak muat.</p>
      <p><strong>Tip:</strong> letakkan kasur barunya di dalam kardus. Semua pihak senang, dan uangmu tidak terasa sia-sia.</p>

      <h2>4. Zoomies tengah malam</h2>
      <p>Lari kencang, lompat ke sofa, rem mendadak, lalu duduk menjilati kaki seolah tidak terjadi apa-apa. Kucing cenderung paling aktif saat senja dan menjelang subuh. Ledakan energi ini juga sering muncul kalau seharian ia kurang bergerak dan energinya menumpuk.</p>
      <p><strong>Tip:</strong> ajak bermain dengan semangat sebelum kamu tidur, lalu beri makan setelahnya. Urutan "berburu, makan, lalu tidur" sering membantu malam jadi lebih tenang.</p>

      <h2>5. Menatap ruang kosong</h2>
      <p>Tenang, rumahmu (kemungkinan besar) tidak berhantu. Kucing lebih peka terhadap suara pelan dan gerakan kecil dibandingkan kita. Bisa jadi ia sedang mengawasi cicak di plafon, serangga mungil di sudut ruangan, atau bunyi dari balik tembok yang tidak terdengar olehmu.</p>
      <p><strong>Tip:</strong> ikuti arah tatapannya. Sering kali kamu akan menemukan "tersangkanya", dan kamu jadi tahu ada tamu kecil yang perlu diusir dari rumah.</p>

      <h2>6. Membawakan "hadiah"</h2>
      <p>Kucing yang sering keluar rumah kadang pulang membawa cicak atau serangga. Kucing rumahan pun tak mau kalah: kaus kaki atau mainan tiba-tiba sudah tergeletak di depan pintu kamarmu. Ini bagian dari naluri berburunya.</p>
      <p><strong>Tip:</strong> jangan dimarahi, karena ia tidak akan paham kenapa kamu kesal. Singkirkan "hadiahnya" dengan tenang, lalu salurkan naluri berburunya lewat mainan tongkat berbulu.</p>

      <h2>7. Tidur di mana saja, kapan saja</h2>
      <p>Di atas keyboard, di dalam wastafel, di atas baju yang baru disetrika. Kucing memang menghabiskan sebagian besar harinya untuk tidur dan tidur-tidur ayam. Pilihan tempatnya biasanya soal kehangatan, bau pemiliknya, atau posisi yang strategis untuk mengawasi rumah. Laptop yang hangat dan beraroma kamu? Kombinasi sempurna, menurut kucing.</p>
      <p><strong>Tip:</strong> sediakan beberapa tempat tidur di sudut yang hangat dan tenang, lalu taruh kaus bekas pakaimu di atasnya. Siapa tahu keyboard-mu bisa bebas lagi.</p>

      <blockquote>Cara gampang memahami tingkah kucing: tanyakan "apa yang ia dapat dari ini?" Rasa aman, kehangatan, perhatian, atau kesempatan berburu. Hampir selalu salah satunya.</blockquote>

      <h2>Kapan "aneh" berarti perlu waspada?</h2>
      <p>Yang perlu diperhatikan bukan kebiasaan anehnya, melainkan perubahannya. Kalau kucing yang biasanya aktif mendadak terus-menerus tidur dan tidak mau bermain, berhenti makan, sering bersembunyi, atau tingkahnya berubah drastis dalam beberapa hari, sebaiknya periksakan ke dokter hewan.</p>

      <h2>Penutup</h2>
      <p>Hidup bersama kucing berarti menerima bahwa sesekali gelasmu akan jatuh dan tidurmu terganggu oleh balapan pukul tiga pagi. Tapi di balik semua itu, ada makhluk kecil yang memilih tidur di dekatmu dan mengulen pangkuanmu dengan sepenuh hati. Rasanya, itu pertukaran yang adil. Nah, kebiasaan aneh apa yang paling sering dilakukan anabulmu?</p>
    `,
  },
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
