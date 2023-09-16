import {
  Biologi,
  Fisika,
  Kimia,
  Matematika,
  UtbkBahasaIndonesia,
  UtbkBahasaInggris,
  UtbkKK,
  UtbkKMBM,
  UtbkKPU,
  UtbkPPU,
  UtbkPenalaranMTK,
} from "../../public/assets/PNG";

interface MataPelajaranContentProps {
  icon: any;
  title: string;
  link?: any;
}

interface BukuSaktiDatasProps {
  title: string;
  value: string;
  content: string;
  utbkContent: MataPelajaranContentProps[];
  sekolahContent?: MataPelajaranContentProps[];
}

const BukuSaktiDatas: BukuSaktiDatasProps[] = [
  {
    title: "Empati Wajib",
    value: "empati wajib",
    content:
      "Empati Wajib merupakan singkatan dari EMPAt soal TIap hari yang wajib dikerjakan oleh siswa tiap hari. Empati Wajib berisi latihan soal sebanyak 4 soal tiap mata pelajaran agar siswa nyaman berlatih. Seperti namanya, EMPATI WAJIB harus dikerjakan karena ini adalah syarat utama mengikuti TOBK.",
    utbkContent: [
      {
        link: "/dashboard/buku-sakti/empati-wajib/kpu",
        icon: UtbkKPU,
        title: "kemampuan penalaran umum (kpu)",
      },
      { link: "", icon: UtbkKK, title: "kemampuan kuantitatif (kk)" },
      { link: "", icon: UtbkPPU, title: "pengetahuan & pemahaman umum (ppu)" },
      {
        link: "",
        icon: UtbkKMBM,
        title: "kemampuan memahami bacaan & tulisan (kmbm)",
      },
      {
        link: "",
        icon: UtbkBahasaIndonesia,
        title: "literasi bahasa indonesia (lbind)",
      },
      {
        link: "",
        icon: UtbkBahasaInggris,
        title: "literasi bahasa inggris (lbing)",
      },
      { link: "", icon: UtbkPenalaranMTK, title: "penalaran matematika (pm)" },
    ],
  },
  {
    title: "Empati Mandiri",
    value: "empati mandiri",
    content:
      "Empati Mandiri merupakan singkatan dari EMPAt soal TIap hari yang dikerjakan secara mandiri oleh siswa. Empati Mandiri berisi latihan soal sebanyak 4 soal tiap mata pelajaran agar siswa nyaman berlatih. Ganesha Operation menekankan berlatih soal tidak perlu langsung banyak, tapi rutin tiap hari dengan jumlah soal sedikit.",
    utbkContent: [
      {
        link: "/dashboard/buku-sakti/empati-mandiri/kpu",
        icon: UtbkKPU,
        title: "kemampuan penalaran umum (kpu)",
      },
      { link: "", icon: UtbkKK, title: "kemampuan kuantitatif (kk)" },
      { link: "", icon: UtbkPPU, title: "pengetahuan & pemahaman umum (ppu)" },
      {
        link: "",
        icon: UtbkKMBM,
        title: "kemampuan memahami bacaan & tulisan (kmbm)",
      },
      {
        link: "",
        icon: UtbkBahasaIndonesia,
        title: "literasi bahasa indonesia (lbind)",
      },
      {
        link: "",
        icon: UtbkBahasaInggris,
        title: "literasi bahasa inggris (lbing)",
      },
      { link: "", icon: UtbkPenalaranMTK, title: "penalaran matematika (pm)" },
    ],
    sekolahContent: [
      { link: "", icon: Kimia, title: "kimia" },
      { link: "", icon: Fisika, title: "fisika" },
      { link: "", icon: Biologi, title: "biologi" },
      { link: "", icon: Matematika, title: "matematika peminatan" },
      { link: "", icon: Matematika, title: "matematika peminatan" },
    ],
  },
  {
    title: "Latihan Ekstra",
    value: "latihan ekstra",
    content:
      "Latihan Ekstra adalah bagian dari Buku Sakti Ganesha Operation yang berisi variasi latihan soal ekstra agar siswa terbiasa berlatih. Bedanya dengan menu Buku Sakti yang lain adalah adanya pendalaman soal tiap bab mata pelajaran sekolah/UTBK.",
    utbkContent: [
      {
        link: "/dashboard/buku-sakti/latihan-ekstra/kpu",
        icon: UtbkKPU,
        title: "kemampuan penalaran umum (kpu)",
      },
      { link: "", icon: UtbkKK, title: "kemampuan kuantitatif (kk)" },
      { link: "", icon: UtbkPPU, title: "pengetahuan & pemahaman umum (ppu)" },
      {
        link: "",
        icon: UtbkKMBM,
        title: "kemampuan memahami bacaan & tulisan (kmbm)",
      },
      {
        link: "",
        icon: UtbkBahasaIndonesia,
        title: "literasi bahasa indonesia (lbind)",
      },
      {
        link: "",
        icon: UtbkBahasaInggris,
        title: "literasi bahasa inggris (lbing)",
      },
      { link: "", icon: UtbkPenalaranMTK, title: "penalaran matematika (pm)" },
    ],
    sekolahContent: [
      { link: "", icon: Kimia, title: "kimia" },
      { link: "", icon: Fisika, title: "fisika" },
      { link: "", icon: Biologi, title: "biologi" },
      { link: "", icon: Matematika, title: "matematika peminatan" },
      { link: "", icon: Matematika, title: "matematika peminatan" },
    ],
  },
  {
    title: "Soal Koding",
    value: "soal koding",
    content:
      "Soal koding adalah kumpulan latihan soal dimana soal-soal tersebut disesuaikan dengan tipe soal UTBK-SNBT dan ujian sekolah. Dengan mengerjakan soal koding, siswa akan semakin terbiasa mengerjakan soal yang mirip dengan ujian sebenarnya baik UTBK maupun ujian sekolah.",
    utbkContent: [
      {
        link: "/dashboard/buku-sakti/soal-koding/kpu",
        icon: UtbkKPU,
        title: "kemampuan penalaran umum (kpu)",
      },
      { link: "", icon: UtbkKK, title: "kemampuan kuantitatif (kk)" },
      { link: "", icon: UtbkPPU, title: "pengetahuan & pemahaman umum (ppu)" },
      {
        link: "",
        icon: UtbkKMBM,
        title: "kemampuan memahami bacaan & tulisan (kmbm)",
      },
      {
        link: "",
        icon: UtbkBahasaIndonesia,
        title: "literasi bahasa indonesia (lbind)",
      },
      {
        link: "",
        icon: UtbkBahasaInggris,
        title: "literasi bahasa inggris (lbing)",
      },
      { link: "", icon: UtbkPenalaranMTK, title: "penalaran matematika (pm)" },
    ],
    sekolahContent: [
      { link: "", icon: Kimia, title: "kimia" },
      { link: "", icon: Fisika, title: "fisika" },
      { link: "", icon: Biologi, title: "biologi" },
      { link: "", icon: Matematika, title: "matematika peminatan" },
      { link: "", icon: Matematika, title: "matematika peminatan" },
    ],
  },
  {
    title: "Pendalaman Materi",
    value: "pendalaman materi",
    content:
      "Pendalaman materi berisi latihan soal berdasarkan bab/materi tiap mata uji UTBK dan mata pelajaran sekolah. Tujuannya untuk memastikan siswa memahami tiap bab/materi mata uji.",
    utbkContent: [
      {
        link: "/dashboard/buku-sakti/pendalaman-materi/kpu",
        icon: UtbkKPU,
        title: "kemampuan penalaran umum (kpu)",
      },
      { link: "", icon: UtbkKK, title: "kemampuan kuantitatif (kk)" },
      { link: "", icon: UtbkPPU, title: "pengetahuan & pemahaman umum (ppu)" },
      {
        link: "",
        icon: UtbkKMBM,
        title: "kemampuan memahami bacaan & tulisan (kmbm)",
      },
      {
        link: "",
        icon: UtbkBahasaIndonesia,
        title: "literasi bahasa indonesia (lbind)",
      },
      {
        link: "",
        icon: UtbkBahasaInggris,
        title: "literasi bahasa inggris (lbing)",
      },
      { link: "", icon: UtbkPenalaranMTK, title: "penalaran matematika (pm)" },
    ],
    sekolahContent: [
      { link: "", icon: Kimia, title: "kimia" },
      { link: "", icon: Fisika, title: "fisika" },
      { link: "", icon: Biologi, title: "biologi" },
      { link: "", icon: Matematika, title: "matematika peminatan" },
      { link: "", icon: Matematika, title: "matematika peminatan" },
    ],
  },
  {
    title: "Soal Referensi",
    value: "soal referensi",
    content:
      "Soal referensi hanya tersedia untuk kelas 12 baik program GO Offline maupun GO Online. Fitur ini khusus berisi soal kisi-kisi UTBK-SNBT yang dapat membantu siswa mendapat gambaran soal paling dekat dengan soal sebenarnya nanti.",
    utbkContent: [
      {
        link: "/dashboard/buku-sakti/soal-referensi/kpu",
        icon: UtbkKPU,
        title: "kemampuan penalaran umum (kpu)",
      },
      { link: "", icon: UtbkKK, title: "kemampuan kuantitatif (kk)" },
      { link: "", icon: UtbkPPU, title: "pengetahuan & pemahaman umum (ppu)" },
      {
        link: "",
        icon: UtbkKMBM,
        title: "kemampuan memahami bacaan & tulisan (kmbm)",
      },
      {
        link: "",
        icon: UtbkBahasaIndonesia,
        title: "literasi bahasa indonesia (lbind)",
      },
      {
        link: "",
        icon: UtbkBahasaInggris,
        title: "literasi bahasa inggris (lbing)",
      },
      { link: "", icon: UtbkPenalaranMTK, title: "penalaran matematika (pm)" },
    ],
    sekolahContent: [
      { link: "", icon: Kimia, title: "kimia" },
      { link: "", icon: Fisika, title: "fisika" },
      { link: "", icon: Biologi, title: "biologi" },
      { link: "", icon: Matematika, title: "matematika peminatan" },
      { link: "", icon: Matematika, title: "matematika peminatan" },
    ],
  },
  {
    title: "Kuis",
    value: "kuis",
    content:
      "Kuis Harian berisi kumpulan kuis tiap mata uji UTBK dan mata pelajaran sekolah. Dalam kuis harian diberlakukan sistem blocking time.",
    utbkContent: [
      { link: "/dashboard/buku-sakti/kuis/kimia", icon: Kimia, title: "Kimia" },
      { link: "", icon: UtbkKK, title: "kemampuan kuantitatif (kk)" },
      { link: "", icon: UtbkPPU, title: "pengetahuan & pemahaman umum (ppu)" },
      {
        link: "",
        icon: UtbkKMBM,
        title: "kemampuan memahami bacaan & tulisan (kmbm)",
      },
      {
        link: "",
        icon: UtbkBahasaIndonesia,
        title: "literasi bahasa indonesia (lbind)",
      },
      {
        link: "",
        icon: UtbkBahasaInggris,
        title: "literasi bahasa inggris (lbing)",
      },
      { link: "", icon: UtbkPenalaranMTK, title: "penalaran matematika (pm)" },
    ],
  },
  {
    title: "Paket Intensif",
    value: "paket intensif",
    content:
      "Paket Intensif adalah paket latihan soal khusus kelas 12 SMA yang mengambil program Paket Intensif di Ganesha Operation baik secara offline maupun online.",
    utbkContent: [
      {
        link: "/dashboard/buku-sakti/paket-intensif/kpu",
        icon: UtbkKPU,
        title: "kemampuan penalaran umum (kpu)",
      },
      { link: "", icon: UtbkKK, title: "kemampuan kuantitatif (kk)" },
      { link: "", icon: UtbkPPU, title: "pengetahuan & pemahaman umum (ppu)" },
      {
        link: "",
        icon: UtbkKMBM,
        title: "kemampuan memahami bacaan & tulisan (kmbm)",
      },
      {
        link: "",
        icon: UtbkBahasaIndonesia,
        title: "literasi bahasa indonesia (lbind)",
      },
      {
        link: "",
        icon: UtbkBahasaInggris,
        title: "literasi bahasa inggris (lbing)",
      },
      { link: "", icon: UtbkPenalaranMTK, title: "penalaran matematika (pm)" },
    ],
  },
];

export default BukuSaktiDatas;
