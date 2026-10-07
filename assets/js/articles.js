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
