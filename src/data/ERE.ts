import { IconERE1, IconERE2, IconERE3 } from "../../public/assets/svg";

interface EREProps {
  icon: any;
  iconTitle: string;
  content: string;
}

const ERE: EREProps[] = [
  {
    icon: IconERE1,
    iconTitle: "Kuis",
    content:
      "Kuis/Tes harian yang disebutkan tadi berisikan materi pelajaran yang baru dipelajari oleh SobatGO saat KBM. Kuis/Tes hariannya dilaksanakan hanya 10 menit diakhir KBM dan hasilnya langsung dikoreksi loh sebagai masukan untuk SobatGO. Jika kamu belum mengerti tentang pelajaran yang diberikan, maka akan diberikan tambahan belajar dalam bentuk TST.",
  },
  {
    icon: IconERE2,
    iconTitle: "Remedial",
    content:
      "SobatGO tidak perlu khawatir, karena akan ada pengajaran ulang untuk topik/materi/sub bab yang kamu belum pahami.",
  },
  {
    icon: IconERE3,
    iconTitle: "Enrichment",
    content:
      "Kami bantu SobatGO untuk lebih memperkuat/meningkatkan/memeperluas pemahaman terhadap soal yang lebih menantang dengan pengajaran dan latihan soal (HOST: Higher Order Thinking Skill).",
  },
];

export default ERE;
