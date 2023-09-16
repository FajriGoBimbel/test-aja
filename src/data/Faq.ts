interface FaqContentProps {
  id: number;
  title: string;
  description: any;
}

interface FaqProps {
  category: string;
  content: FaqContentProps[];
}

const FaqDatas: FaqProps[] = [
  {
    category: "Pertanyaan Umum",
    content: [
      {
        id: 1,
        title:
          "Bagaimana GO Bimbel Online dapat meningkatkan prestasi para muridnya?",
        description: `GO selalu berusaha meningkatkan prestasi siswa-siswanya dengan menjalankan pembelajaran yang nyaman dan menyenangkan. Siswa dapat belajar dengan fasilitas-fasilitas yang memastikan pengajaran betul-betul terasa nyaman. Semenjak didirikan, GO juga telah menggunakan cara-cara kreatif yang menyenangkan bagi para siswa dalam memahami pelajaran dan mengerjakan soal. Seperti Konsep The King, adanya break dalam satu sesi kelasnya, dan cara-cara lainnya yang dapat kamu lihat di sini! Siswa pun tak perlu sungkan untuk meminta tambahan di luar kelas, guru-guru di GO akan menyambutnya dengan hangat. <br/><br/> GO juga saat ini memiliki inovasi terbaru yaitu aplikasi GO Kreasi! Aplikasi ini dapat digunakan oleh siswa dan orang tua untuk menunjang pembelajaran dan memantau perkembangan belajar. Di dalamnya juga terdapat banyak sekali soal yang dapat siswa kerjakan di mana saja dan kapan saja. Seru kan? Kalau masih penasaran, bisa lihat apa itu GO Kreasi di sini!`,
      },
      {
        id: 2,
        title:
          "Apa perbedaan GO Bimbel Online dengan bimbingan belajar lainnya?",
        description: `
        <ol style="list-style-type: number;" class="px-6">
          <li>GO merupakan satu-satunya bimbingan belajar yang berhasil meluluskan siswanya sebanyak 47.000 lebih lulus ke PTN & Kedinasan, 2.300 lebih diantaranya diterima di kedokteran.</li>
          <li>GO juga satu-satunya bimbingan belajar yang mengadakan TOBK (Try Out Berbasis Komputer) untuk persiapan Tes Skolastik (TS) SNBT menggunakan metode Blocking Time dan sistem penilaian menggunakan IRT (Item Response Theory) di mana bobot setiap soal ditentukan oleh jawaban-jawaban dari peserta tes. Metode ini valid untuk GO gunakan karena jumlah peserta TOBK diatas 10.000 siswa.</li>
          <li>GO memiliki aplikasi penunjang yang bernama GO Kreasi. Aplikasi ini bisa banget dimanfaatkan oleh siswa dan orangtua. Orang tua dan siswa dapat memantau kemampuan belajar siswa dengan sistem informasi akademik yang terpadu. Ada juga laporan try out, kehadiran siswa dan masih banyak lagi menu unggulan lainnya.</li>
          <li>Adanya EPB (Evaluasi Prestasi Belajar) yang dapat dimanfaatkan siswa dan orangtua untuk melihat perkembangan prestasi belajar siswa.</li>
        </ol>
      `,
      },
      {
        id: 3,
        title:
          "Siapa saja yang dapat mengikuti program pembelajaran di GO Bimbel Online?",
        description:
          "Pelajar mulai dari kelas 3 SD sampai kelas 12 SMA serta alumni dapat mengikuti program-program pembelajaran yang tersedia di GO. Program-programnya dapat kamu lihat di sini!",
      },
    ],
  },
  {
    category: "Kelas dan Pengajaran",
    content: [
      {
        id: 4,
        title: "Bagaimana GO menentukan kurikulum pengajarannya?",
        description:
          "GO mempertimbangkan kurikulum dan bahan ajar yang diajarkan di sekolah untuk memaksimalkan peluang lulus ke SMP/SMA Favorit maupun ke PTN melalui jalur SNBP/SNBT/UM. Khusus kelas 12, GO juga memberikan materi Tes Skolastik (TS) persiapan SNBT yang tidak diajarkan di sekolah maupun tempat lainnya. Kedua bahan ajar itu dipadukan untuk mendapatkan bahan pengajaran yang optimal baik untuk meningkatkan prestasi siswa di sekolah maupun mempersiapkannya mengikuti ujian menuju jenjang pendidikan selanjutnya.",
      },
      {
        id: 5,
        title: "Siapa saja tenaga-tenaga pengajar di GO?",
        description:
          "Tenaga-tenaga pengajar di GO dipilih dari lulusan kampus-kampus ternama yang juga menguasai pelajaran dan bagaimana cara mengajarkannya. GO pun turut mempersiapkan para pengajarnya untuk menjadi pengajar yang dapat membuat siswa paham dengan cara-cara yang menyenangkan.",
      },
      {
        id: 6,
        title: "Bagaimana kondisi ruangan pembelajaran di GO?",
        description:
          "Kenyamanan siswa merupakan salah satu hal utama yang kami anggap penting untuk menunjang kegiatan pembelajaran di Ganesha Operation. Siswa yang sudah pasti tidak akan berdesakan dalam ruangan kelas, dengan adanya satu meja untuk masing-masingnya. Papan tulis yang nyaman dilihat dengan penggunaan spidol tiga warna oleh para pengajar. Setiap cabang GO juga memiliki ruangan-ruangan khusus untuk menjadi tempat para siswa memperoleh tambahan pengajaran di luar kelas (kami menyebutnya TST!)",
      },
      {
        id: 7,
        title: "Apakah ada ujian dan tugas yang diberikan di pengajaran di GO?",
        description: `Hmm, ada sih kuis kecil setiap selesai pengajaran satu materi dan Try Out berkala. Eh, tapi jangan dikira ini seperti ujian yang dilangsungkan di sekolah! Justru dengan mengikutinya, kita dapat mengerti bagaimana pemahaman siswa terhadap materi yang diajarkan. Kalau masih belum begitu paham, kita bisa belajar lagi bareng-bareng, bukan?
            <br/><br/>
            GO juga mendorong para siswanya untuk rutin mengerjakan soal-soal yang terdapat di aplikasi GOKreasi semata-mata demi meningkatnya pemahaman dan prestasi siswa. Kamu juga dapat berkompetisi sama teman-teman siswa GO seluruh Indonesia, loh! Lumayan kan kalau peringkatnya atas-atas bisa makin eksis, ehe.`,
      },
    ],
  },
  {
    category: "Pendaftaran",
    content: [
      {
        id: 8,
        title: "Bagaimana prosedur pendaftaran di GO?",
        description:
          "Kamu dapat melihat dulu program-program yang terdapat di GO disini atau kalau mau lebih jelasnya kamu dapat langsung bertanya ke cabang GO terdekat. Setelah kamu sudah tahu mau ikut program yang mana, kamu dapat mendatangi cabang GO terdekat dan melanjutkan ke prosedur pembayaran. Kamu juga bisa mendaftar bareng teman-teman satu kelas atau satu sekolah loh! Jadi di GO nantinya, pelajaran-pelajaran yang diajarkan bisa makin pas dengan apa yang sedang diajarkan di sekolah.",
      },
      {
        id: 9,
        title: "Bagaimana prosedur pembayaran di GO?",
        description:
          "Pembayaran dapat dilakukan baik secara lunas atau dicicil. Baik melalui transfer ataupun pembayaran langsung di cabang terdekat. Informasi selengkapnya dapat langsung ditanyakan di cabang GO terdekat.",
      },
      {
        id: 10,
        title: "Kapan saya dapat mendaftar di GO?",
        description:
          "Pendaftaran dapat dilakukan kapan saja baik online maupun offline! Untuk pendaftaran online kamu bisa klik di sini . Sedangkan untuk pendaftaran offline kamu bisa langsung mengunjungi unit GO terdekat pada hari Senin sampai Sabtu pukul 10.00 s.d 18.00",
      },
      {
        id: 11,
        title: "Apa saja diskon-diskon yang dapat saya terima?",
        description:
          "Ada diskon untuk anak guru, ada juga diskon untuk yang langsung membayar lunas, untuk kamu yang pernah menjadi siswa GO, untuk yang langsung bareng-bareng daftarnya atau kamu-kamu yang berprestasi di sekolahnya. Informasi selengkapnya dapat dilihat di sini atau langsung tanya-tanya ke cabang terdekat!",
      },
    ],
  },
  {
    category: "Pertanyaan Lain",
    content: [
      {
        id: 12,
        title:
          "Untuk pertanyaan lain bisa hubungi Email dan Whatsapp kami di bawah ini",
        description: [
          {
            title: `What's App`,
            link: "https://api.whatsapp.com/send?phone=628112044722&text=&source=&data=",
          },
          {
            title: "Email",
            link: "https://mail.google.com/mail/u/0/?fs=1&to=officialgopusat@gmail.com&su=Tanya+minGO&tf=cm",
          },
        ],
      },
    ],
  },
];

export default FaqDatas;
