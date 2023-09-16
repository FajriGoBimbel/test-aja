import {
  IconPP1,
  IconPP2,
  IconPP3,
  IconPP4,
  IconPP5,
  IconPP6,
  IconPP7,
} from "../../public/assets/svg";

interface ProgramProps {
  icon: any;
  content: string;
  textLink: string;
  link: string;
}

const Program: ProgramProps[] = [
  {
    icon: IconPP1,
    content:
      "Selain mengejar kampus impian, tentunya ada sobatGO yang duduk di bangku SD juga ingin masuk SMP favorit, bukan?",
    textLink: "Program SD",
    link: "https://ganesha-opeartion.com",
  },
  {
    icon: IconPP2,
    content:
      "SobatGO yang SMP pastinya ingin masuk SMA favorit, dong. Bergabung bersama GO dapat meningkatkan prestasi individu",
    textLink: "Program SMP",
    link: "https://ganesha-opeartion.com",
  },
  {
    icon: IconPP3,
    content:
      "Siapa sobat SMA yang tidak ingin masuk kampus dan jurusan impian? Program bimbel GO terbukti meloloskan >47.000++ muridnya ke kampus impian",
    textLink: "Program SMA",
    link: "https://ganesha-opeartion.com",
  },
  {
    icon: IconPP4,
    content:
      "Program Gap Year dikhususkan untuk memenuhi kebutuhan sobatGO yang sedang mengambil gap year dan mempersiapkan diri masuk ke PTN impian",
    textLink: "Program Gap Year",
    link: "https://ganesha-opeartion.com",
  },
  {
    icon: IconPP5,
    content:
      "Program GO Kreasi membuatmu bisa belajar dimanapun dan kapanpun. Ada fitur latihan soal, laporan belajar, serta terkoneksi dengan sobatGO di Indonesia",
    textLink: "Program GO Kreasi",
    link: "https://ganesha-opeartion.com",
  },
  {
    icon: IconPP6,
    content:
      "Program GO Kreasi membuatmu bisa belajar dimanapun dan kapanpun. Ada fitur latihan soal, laporan belajar, serta terkoneksi dengan sobatGO di Indonesia",
    textLink: "Program SMK",
    link: "https://ganesha-opeartion.com",
  },
  {
    icon: IconPP7,
    content:
      "Ada juga program kedinasan yang sengaja dirancang untuk sobatGO yang menjadikan PT Kedinasan sebagai sasaran kelulusannya",
    textLink: "Program Kedinasan",
    link: "https://ganesha-opeartion.com",
  },
];

export default Program;
