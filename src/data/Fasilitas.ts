import Fasilitas14 from "@/components/FasilitasHomeComponent/Fasilitas14";
import {
  IconFK1,
  IconFK2,
  IconFK3,
  IconFK4,
  IconFK5,
  IconFK6,
  IconFK7,
  IconFK8,
  IconFK9,
  IconFK10,
  IconFK11,
  IconFK12,
  IconFK13,
} from "../../public/assets/svg";
import {
  Fasilitas1,
  Fasilitas2,
  Fasilitas3,
  Fasilitas4,
  Fasilitas5,
  Fasilitas6,
  Fasilitas7,
  Fasilitas8,
  Fasilitas9,
  Fasilitas10,
  Fasilitas11,
  Fasilitas12,
  Fasilitas13,
} from "@/components/FasilitasHomeComponent";

interface FasilitasProps {
  icon: any;
  title: string;
  link: any;
}

const Fasilitas: FasilitasProps[] = [
  {
    icon: IconFK1,
    title: "Pengajar Berkualitas dan THE KING",
    link: Fasilitas1,
  },
  {
    icon: IconFK2,
    title: "Tutorial Service Time (TST)",
    link: Fasilitas2,
  },
  {
    icon: IconFK3,
    title: "Try Out & Evaluasi Prestasi Belajar",
    link: Fasilitas3,
  },
  { icon: IconFK4, title: "Psikotest", link: Fasilitas4 },
  { icon: IconFK5, title: "Software SNBP", link: Fasilitas5 },
  { icon: IconFK6, title: "Parents Meeting", link: Fasilitas6 },
  { icon: IconFK7, title: "Tes Modalitas", link: Fasilitas7 },
  {
    icon: IconFK8,
    title: "Sistem IRT (Item Response Theory)",
    link: Fasilitas8,
  },
  {
    icon: IconFK9,
    title: "Meeting on Maximizing Motivation",
    link: Fasilitas9,
  },
  {
    icon: IconFK10,
    title: "Buku Penunjang Belajar + Ribuan Latihan Soal",
    link: Fasilitas10,
  },
  { icon: IconFK11, title: "Racing Soal", link: Fasilitas11 },
  { icon: IconFK5, title: "Evaluasi, Remedial, Enrichment", link: Fasilitas12 },
  { icon: IconFK12, title: "GO BIMBEL ONLINE", link: Fasilitas13 },
  { icon: IconFK13, title: "GO ASSESMENT", link: Fasilitas14 },
];

export default Fasilitas;
