import {
  LiterasiBind,
  LiterasiBing,
  PenalaranMtk,
} from "@/components/DashboardComponent/Bookmark";
import {
  UtbkPenalaranMTK,
  UtbkBahasaInggris,
  UtbkBahasaIndonesia,
  UtbkKK,
} from "../../public/assets/PNG";

interface BookmarkDatasProps {
  image: any;
  title: string;
  total: number;
  link: any;
}

const BookmarkDatas: BookmarkDatasProps[] = [
  {
    image: UtbkPenalaranMTK,
    title: "Penalaran Matematika",
    total: 28,
    link: PenalaranMtk,
  },
  {
    image: UtbkBahasaInggris,
    title: "Literasi Bahasa Inggris",
    total: 28,
    link: LiterasiBing,
  },
  {
    image: UtbkBahasaIndonesia,
    title: "Literasi Bahasa Indonesia",
    total: 28,
    link: LiterasiBind,
  },
  {
    image: UtbkKK,
    title: "Kemampuan Kuantitatif",
    total: 28,
    link: PenalaranMtk,
  },
  {
    image: UtbkKK,
    title: "Kemampuan Kuantitatif",
    total: 28,
    link: PenalaranMtk,
  },
  {
    image: UtbkKK,
    title: "Kemampuan Kuantitatif",
    total: 28,
    link: PenalaranMtk,
  },
  //   { id: 4, image: UtbkPPU, title: "Pengetahuan Memahami Bacaan & Tulisan", total: 28 },
  //   { id: 5, image: UtbkKMBM, title: "Kemampuan Penalaran Umum", total: 28 },
  //   { id: 6, image: UtbkKPU, title: "Kemampuan Penalaran Umum", total: 28 },
  //   { id: 7, image: Sejarah, title: "Sejarah", total: 28 },
  //   { id: 8, image: Sosiologi, title: "Sosiologi", total: 28 },
  //   { id: 9, image: Geografi, title: "Geografi", total: 28 },
  //   { id: 10, image: Ekonomi, title: "Ekonomi", total: 28 },
  //   { id: 11, image: Fisika, title: "Fisika", total: 28 },
  //   { id: 12, image: Matematika, title: "Matematika", total: 28 },
  //   { id: 13, image: Biologi, title: "Biologi", total: 28 },
  //   { id: 14, image: Kimia, title: "Kimia", total: 28 },
  //   { id: 15, image: BahasaInggris, title: "BahasaInggris", total: 28 },
  //   { id: 16, image: BahasaIndonesia, title: "BahasaIndonesia", total: 28 },
  //   { id: 17, image: TO, title: "TO 1 - Kemampuan Kuantitatif", total: 28 },
  //   { id: 18, image: TO, title: "TO Intensif 2 - Kemampuan Kuantitatif", total: 28 },
  //   {
  //     id: 19, image: TO,
  //     title: "TO Super Intensif 3 - Kemampuan Penalaran Umum",
  //     total: 28,
  //   },
];

export default BookmarkDatas;
