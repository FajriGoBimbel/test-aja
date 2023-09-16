import { MdVerticalShadesClosed } from "react-icons/md";

const MenuDashboardMobile = [
  {
    kategori: "Belajar",
    sub: [
      {
        icon: MdVerticalShadesClosed,
        name: "Rencana Latihan",
        path: "/dashboard/rencana-latihan",
        deskripsi: "Management Waktumu disini",
      },
      {
        icon: MdVerticalShadesClosed,
        name: "Jadwal & TST",
        path: "/dashboard/jadwal-belajar",
        deskripsi: "Jadwal belajarmu disini",
      },
    ],
  },
  {
    kategori: "Berlatih",
    sub: [
      {
        icon: MdVerticalShadesClosed,
        name: "Buku Sakti",
        path: "/dashboard/buku-sakti",
        deskripsi: "Latih kemampuan Menjawab soal disini",
      },
      {
        icon: MdVerticalShadesClosed,
        name: "Racing Soal Harian",
        path: "/dashboard/racing",
        deskripsi: "Berlatih Setiap hari dengan racing",
      },
    ],
  },
  {
    kategori: "Bertanding",
    sub: [
      {
        icon: MdVerticalShadesClosed,
        name: "TOBK",
        path: "/dashboard/tobk",
        deskripsi: "Uji kemampuanmu selama latihan",
      },
    ],
  },
  {
    kategori: "Lainnya",
    sub: [
      {
        icon: MdVerticalShadesClosed,
        name: "Leaderboard",
        path: "/dashboard/leaderboard",
        deskripsi: "Hasil bertandingmu ada disini",
      },
      {
        icon: MdVerticalShadesClosed,
        name: "Laporan Belajar",
        path: "/dashboard/laporan-belajar",
        deskripsi: "Laporan belajarmu disini",
      },
      {
        icon: MdVerticalShadesClosed,
        name: "Social Network",
        path: "/dashboard/social-network",
        deskripsi: "Bagikan Hasil Terbaikmu Disini",
      },
      {
        icon: MdVerticalShadesClosed,
        name: "Beli Produk",
        path: "/product",
        deskripsi: "Beli Product Disini",
      },
    ],
  },
];

export default MenuDashboardMobile;
