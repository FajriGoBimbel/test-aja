import { IconTM1, IconTM2, IconTM3 } from "../../public/assets/svg";

interface TesModalitasProps {
  icon: any;
  iconTitle: string;
  content: string;
}

const TesModalitas: TesModalitasProps[] = [
  {
    icon: IconTM1,
    iconTitle: "Visual",
    content:
      "Kalau SobatGO ngerasa lebih mudah menyerap pelajaran menggunakan indera penglihatan maka itu berarti kamu tipe siswa yang Visual, sehingga kamu perlu diperlengkapi dengan catatan rapi, berwarna-warni, gambar, grafik, dll, gimana, bener enggak?",
  },
  {
    icon: IconTM2,
    iconTitle: "Auditori",
    content:
      "Kalau kamu ngerasa siswa yang Auditory berarti kamu akan lebih mudah menyerap pelajaran menggunakan indera pendengaran, sehingga kamu perlu mendengar suara pengajar yang jelas, intonasi yang baik, berdiskusi dalam kelompok belajar, membaca dengan bersuara ketika belajar sendiri, Kamu enggak suka belajar di lingkungan yang berisik, kan? Fix, berarti kamu emang tipe Auditory.",
  },
  {
    icon: IconTM3,
    iconTitle: "Kinestetik",
    content:
      "Siapa di sini yang kalau belajar enggak bisa diem? Nah itu berarti kamu adalah tipe Siswa yang Kinestetik, kamu akan lebih mudah menyerap pelajaran apabila disertai dengan kegiatan fisik, gerakan, sentuhan, peragaan, praktikum, dll.",
  },
];

export default TesModalitas;
