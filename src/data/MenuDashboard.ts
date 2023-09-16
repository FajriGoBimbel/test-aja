import {
  Belajar,
  Calender,
  Cart,
  Dashboard,
  IconFK11,
  IconFK3,
  IconFK9,
  Laporan,
  Networking,
  TST,
} from "../../public/assets/svg";

const MenuDashboard = [
  {
    icon: Dashboard,
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: IconFK11,
    name: "Leaderboard",
    path: "/dashboard/leaderboard",
  },
  {
    icon: IconFK3,
    name: "TOBK",
    path: "/dashboard/tobk",
  },
  {
    icon: Belajar,
    name: "Buku Sakti",
    path: "/dashboard/buku-sakti",
  },
  {
    icon: IconFK9,
    name: "Racing Soal Harian",
    path: "/dashboard/racing",
  },
  {
    icon: Calender,
    name: "Rencana Latihan",
    path: "/dashboard/rencana-latihan",
  },
  {
    icon: Cart,
    name: "Beli Produk",
    path: "/product",
  },
  {
    icon: Networking,
    name: "Social Network",
    path: "/dashboard/social-network",
  },
  {
    icon: Laporan,
    name: "Laporan Belajar",
    path: "/dashboard/laporan-belajar",
  },
  {
    icon: TST,
    name: "Jadwal & TST",
    path: "/dashboard/jadwal-belajar",
  },
];

export default MenuDashboard;
