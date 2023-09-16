interface ListSubSubSubsProps {
  listSubSub: string;
}
interface ListSubSubsProps {
  listSub: string;
  listSubSubs?: ListSubSubSubsProps[];
}
interface ListSubsProps {
  list: string;
  listSubs?: ListSubSubsProps[];
}
interface ListsProps {
  content: string;
  lists?: ListSubsProps[];
}
interface KebijakanPrivasiProps {
  contents: ListsProps[];
}

const KebijakanPrivasiDatas: KebijakanPrivasiProps = {
  contents: [
    {
      content:
        "Kebijakan privasi adalah dokumen yang menjelaskan cara/metode pengambilan, jenis, dan tata kelola informasi yang diambil dari https://ganeshaoperation.com/ beserta subdomain-nya, https://ganesha-operation.com/ beserta subdomain-nya, https://go-learn.web.id beserta subdomain-nya, aplikasi mobile GO Kreasi, dan aplikasi mobile GO Team yang merupakan aplikasi yang dioperasikan oleh Ganesha Operation.",
    },
    {
      content:
        "Fitur di situs https://ganeshaoperation.com/ beserta subdomain-nya, https://ganesha-operation.com/ beserta subdomain-nya, https://go-learn.web.id beserta subdomain-nya, aplikasi mobile GO Kreasi, dan aplikasi mobile GO Team selanjutnya disebut Aplikasi sedangkan Ganesha Operation selanjutnya disebut Kami.",
    },
    {
      content:
        "Pengguna, pengunjung, atau siapa pun yang mengakses atau menggunakan Aplikasi selanjutnya disebut sebagai Anda.",
    },
    {
      content:
        "Dalam Kebijakan Privasi ini Anda dan Kami selanjutnya disebut sebagai Para Pihak.",
    },
    {
      content:
        "Aplikasi merupakan media yang dapat Anda gunakan untuk mengakses layanan/konten dari produk Kami yang disajikan secara daring.",
    },
    {
      content:
        "Produk adalah barang dan jasa yang disediakan oleh Kami secara gratis maupun berbayar, yang pemberiannya bisa dilakukan melalui Aplikasi maupun secara luring.",
    },
    {
      content:
        "Pembelian adalah kesepakatan harga yang terjadi antara Para Pihak yang ditandai dengan sudah terjadinya pembayaran.",
    },
    {
      content:
        "Pembayaran adalah penyerahan sejumlah uang yang dapat dibuktikan melalui bukti transaksi yang valid dan sudah diterima di rekening Kami. Dalam hal pembayaran dilakukan secara luring, transaksi yang valid dibuktikan dengan kuitansi pembayaran Kami.",
    },
    {
      content:
        "Kebijakan Privasi ini menjelaskan:a. Informasi yang Kami kumpulkan dan alasan Kami mengumpulkan.b. Cara atau metode Kami menggunakan informasi tersebut.c. Pilihan yang Kami tawarkan, termasuk cara mengakses dan memperbarui informasi. Kami telah mencoba untuk membuat kebijakan ini sesederhana mungkin tetapi jika Anda memiliki pertanyaan, silakan hubungi Kami melalui email humas@ganeshaoperation.com atau Whatsapp (WA) ke 08112468988.",
    },
    {
      content:
        "Informasi yang Kami kumpulkanKami mengumpulkan informasi untuk memberikan layanan yang lebih baik untuk Anda. Kami mengumpulkan informasi dengan cara berikut:",
      lists: [
        {
          list: "a. Informasi yang Anda berikan kepada Kami. Pada saat Anda membuat akun di Aplikasi Kami, baik untuk membuat akun dengan status Tamu atau Siswa, Anda akan diminta untuk memasukkan data diri Anda antara lain: nama, tanggal lahir, email, nomor handphone. Informasi tentang Anda juga Kami kumpulkan pada saat Pembelian dilakukan secara luring antara lain: nama, alamat, nomor handphone, email, tanggal lahir, asal sekolah, dan data orang tua/wali. Informasi tersebut Kami masukkan ke dalam sistem informasi Kami.",
        },
        {
          list: "b. Informasi yang didapatkan dari Aplikasi Kami. Kami dapat mengumpulkan informasi tentang fitur-fitur Aplikasi yang Anda gunakan dan bagaimana Anda menggunakannya. Informasi ini meliputi:",
          listSubs: [
            {
              listSub:
                "i. Informasi Aplikasi Kami berhak mengumpulkan informasi khusus perangkat (seperti model perangkat keras, versi sistem operasi, pengidentifikasi perangkat unik, informasi jaringan seluler termasuk nomor handphone, dan lain-lain).",
            },
            {
              listSub:
                "ii. Informasi aktivitas penggunaan AplikasiKami berhak mengumputlkan data tentang aktivitas Anda selama menggunakan Aplikasi.",
            },
            {
              listSub:
                "iii. Ketika Anda menggunakan Aplikasi, Kami dapat secara otomatis mengumpulkan dan menyimpan informasi dalam server, di antaranya:",
              listSubSubs: [
                {
                  listSubSub:
                    "perincian tentang bagaimana Anda menggunakan Aplikasi.",
                },
                { listSubSub: "alamat protokol internet." },
                {
                  listSubSub:
                    "informasi kejadian pada Aplikasi, seperti macet, aktivitas sistem, pengaturan perangkat keras, jenis browser, bahasa browser, tanggal dan waktu permintaan Anda, dan URL rujukan.",
                },
                {
                  listSubSub:
                    "cookie yang dapat mengidentifikasi browser Anda secara unik. Cookie adalah file kecil yang disimpan secara otomatis di perangkat Anda untuk menjalankan fungsi dalam menyimpan preferensi maupun konfigurasi perangkat dan aplikasi selama menggunakan Aplikasi kami.",
                },
              ],
            },
          ],
        },
        {
          list: "c. Informasi lokasi Kami dapat mengumpulkan dan memproses informasi tentang lokasi Anda yang sebenarnya dan menggunakan berbagai teknologi untuk menentukan lokasi, termasuk alamat IP.",
        },
        {
          list: "e. Penyimpanan lokal Kami dapat mengumpulkan dan menyimpan informasi (termasuk informasi pribadi) secara lokal di perangkat Anda dengan menggunakan mekanisme seperti penyimpanan web browser dan cache data aplikasi.",
        },
        {
          list: "f. Cookie dan teknologi serupaKami dapat menggunakan berbagai teknologi untuk mengumpulkan dan menyimpan informasi ketika Anda mengunjungi Aplikasi Kami, dan ini mungkin termasuk penggunaan cookie atau teknologi serupa untuk mengidentifikasi browser atau perangkat Anda. Anda dapat mengatur browser Anda untuk memblokir semua atau sebagian cookie, termasuk cookie yang terkait dengan Aplikasi ini atau untuk menunjukkan bila cookie sedang diatur oleh kami.",
        },
      ],
    },
    {
      content:
        "Segala informasi yang Kami kumpulkan tetap menjadi milik Anda. Kami tetap akan menyimpan informasi Anda selama tidak ada permintaan penghapusan informasi tersebut oleh Anda. Kami dapat memperbarui sesuai dengan ketentuan hukum atau kebutuhan bisnis. Kami mungkin bisa memperpanjang proses penyimpanan informasi dalam upaya untuk memenuhi hukum atau kode etik dan kami juga dapat memperpendek periode penyimpanan untuk beberapa jenis data dalam upaya mengurangi ruang penyimpanan pada sistem informasi Kami.",
    },
    {
      content:
        "Cara atau metode Kami menggunakan informasi.Kami menggunakan informasi yang Kami kumpulkan untuk:",
      lists: [
        {
          list: "a. menyelesaikan proses transaksi yang harus dilakukan oleh Anda atau oleh Kami sesuai kesepakatan Pembelian Produk Kami sesuai aturan yang berlaku;",
        },
        {
          list: "b. menjalankan kewajiban Kami untuk menyediakan informasi Produk kepada Anda dan juga menyediakan informasi terkait Produk lain yang mungkin Anda butuhkan;",
        },
        {
          list: "c. mengelola Aplikasi dan sistem informasi Kami, termasuk pemecahan masalah, analisis data, pengujian, penelitian serta tujuan-tujuan statistik dan survei lainnya termasuk memperbaiki Aplikasi kami sehingga Produk dipastikan dapat disajikan dengan cara yang paling efektif;",
        },
        {
          list: "d. memfasilitasi Anda untuk berpartisipasi dalam fitur layanan interaktif Kami.",
        },
      ],
    },
    {
      content: "Informasi yang kami bagikan",
      lists: [
        {
          list: "Kami tidak membagikan data diri Anda kepada pihak lain di luar Kami kecuali salah satu dari keadaan berikut ini berlaku:",
          listSubs: [
            {
              listSub:
                "dengan persetujuan AndaKami dapat membagikan data diri Anda kepada pihak lain jika Kami memiliki izin dari Anda untuk melakukannya.",
            },
            {
              listSub:
                "untuk alasan hukumKami dapat membagikan data pribadi Anda kepada penegak hukum jika Kami memiliki keyakinan dengan itikad baik bahwa akses, penggunaan, pelestarian, atau pengungkapan informasi tersebut secara wajar diperlukan untuk:",
              listSubSubs: [
                {
                  listSubSub:
                    "memenuhi hukum, peraturan, proses hukum apa pun yang berlaku, atau permintaan pemerintah yang dapat ditegakkan;",
                },
                {
                  listSubSub:
                    "menegakkan ketentuan layanan yang berlaku, termasuk penyelidikan potensi pelanggaran;",
                },
                {
                  listSubSub:
                    "mendeteksi, mencegah, atau mengatasi masalah penipuan, keamanan, atau teknis;",
                },
                {
                  listSubSub:
                    "melindungi dari bahaya terhadap hak, properti, atau keselamatan Kami dan Anda, sebagaimana disyaratkan atau diizinkan oleh hukum.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      content:
        "Jika Kami terlibat dalam merger, akuisisi, atau penjualan aset, data pribadi Anda termasuk bagian dari aset yang terlibat dalam merger, akuisisi, atau penjualan tersebut.",
    },
    {
      content:
        "Hak akses Anda memiliki hak hukum untuk meminta data diri Anda yang dipegang oleh Kami. Berdasarkan permintaan, Kami akan memberi Anda salinan informasi tersebut. Anda juga memiliki hak untuk mengoreksi, mengubah, atau menghapus data diri yang tidak akurat.",
    },
    {
      content: "Keamanan",
      lists: [
        {
          list: "a. Keamanan data diri Anda penting bagi Kami, tetapi tidak ada metode transmisi melalui internet atau metode penyimpanan elektronik yang 100% aman. Meskipun Kami berusaha untuk menggunakan sarana yang dapat diterima secara komersial untuk melindungi data diri Anda, Kami tidak dapat menjamin keamanan mutlaknya. Oleh karena itu, Kami tidak bertanggung jawab terhadap pelanggaran keamanan atas tindakan pihak ketiga yang dapat memperoleh data diri Anda secara ilegal dan menyalahgunakannya.",
        },
        {
          list: "b. Jika Anda memiliki alasan untuk percaya bahwa interaksi Anda dengan Kami tidak lagi aman (misalnya, jika Anda merasa bahwa keamanan akun yang Anda miliki pada Aplikasi Kami telah terinterupsi), Anda harus segera memberitahukan masalah tersebut kepada Kami melalui email humas@ganeshaoperation.com, nomor telpon 08112468988 dan/atau melalui surat ke alamat berikut: PT Pendidikan Ganesha Operation, Jl. Purnawarman no. 36B, Tamansari, Bandung 40117, Jawa Barat. Mohon dicatat bahwa pemberitahuan melalui surat fisik akan menambah waktu yang dibutuhkan bagi Kami untuk menanggapi masalah tersebut.",
        },
      ],
    },
    {
      content: "Perubahan Terhadap Kebijakan Privasi Ini",
      lists: [
        {
          list: "a. Dengan menggunakan Aplikasi Kami, Anda menyetujui pengumpulan dan penggunaan informasi sesuai dengan Kebijakan Privasi ini. Kebijakan Privasi ini berlaku sejak 2019 dan akan tetap berlaku kecuali sehubungan dengan setiap perubahan dalam ketentuannya di masa depan, yang akan berlaku segera setelah dimuat pada Aplikasi Kami.",
        },
        {
          list: "b. Kami berhak memperbarui atau mengubah Kebijakan Privasi Kami kapan saja dan Anda harus memeriksa Kebijakan Privasi ini secara berkala. Penggunaan Anda yang berkelanjutan atas Aplikasi setelah Kami memuat setiap modifikasi pada Kebijakan Privasi pada Aplikasi ini akan merupakan pengakuan Anda terhadap modifikasi dan persetujuan Anda untuk mematuhi serta terikat pada Kebijakan Privasi yang telah dimodifikasi.",
        },
        {
          list: "c. Kami berhak mengubah atau mengganti isi Kebijakan Privasi ini setiap saat. Dalam hal perubahan dianggap material, Kami akan memuat pemberitahuan perubahan penting tersebut selama 30 (tiga puluh) hari melalui Aplikasi Kami. Penetapan hal yang dikategorikan material adalah kebijakan Kami sendiri.",
        },
      ],
    },
    {
      content:
        "Hubungi kamiJika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi Kami melalui email humas@ganeshaoperation.com atau Whatsapp (WA) 08112468988.",
    },
  ],
};

export default KebijakanPrivasiDatas;
