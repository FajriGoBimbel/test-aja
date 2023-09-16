import BlankLayout from "@/components/Layouts/BlankLayout";
import { Dialog, DialogBody } from "@material-tailwind/react";
import { XMark } from "../../../../public/assets/svg";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const pengaturanLists = [
  {
    link: "/dashboard/pengaturan/profile",
    text: "Profil Saya",
  },
  {
    link: "/dashboard/pengaturan/privasi-akun",
    text: "Pengaturan Privasi Akun",
  },
  {
    link: "/dashboard/pengaturan/faq",
    text: "Frequently Asked Question (FAQ) dan Hubungi Admin",
  },
  {
    link: "/dashboard/pengaturan/riwayat-pembelian",
    text: "Riwayat Pembelian Produk",
  },
  {
    link: "/dashboard/pengaturan/tata-tertib",
    text: "Tata Tertib Siswa",
  },
  {
    link: "/dashboard/pengaturan/tentang-go",
    text: "Tentang Ganesha Operation",
  },
  {
    link: "/dashboard/pengaturan/ganti-password",
    text: "Ganti Password",
  },
  {
    link: "/dashboard/pengaturan/hapus-akun",
    text: "Hapus Akun",
    bold: true,
    red: true,
  },
];

const Pengaturan = () => {
  const [logout, setLogout] = useState(false);
  const handleLogout = () => setLogout(!logout);
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-0 pt-12">
        <div className="flex gap-4 mb-12">
          <Link href="/dashboard">
            <FaArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="font-bold text-black text-xl">PENGATURAN AKUN</h1>
        </div>
        {pengaturanLists.map((item, index) => (
          <Link
            key={index}
            className="flex justify-between items-center cursor-pointer pb-2 px-2 mb-4 border-b-2 border-b-secondary-graylight"
            href={item.link}
          >
            <h2
              className={`text-lg ${item.bold ? "font-bold" : "font-medium"} ${
                item.red ? "text-primary-red" : "text-black"
              }`}
            >
              {item.text}
            </h2>
            <MdOutlineKeyboardArrowRight className="h-6 w-6" />
          </Link>
        ))}
        <button
          className="flex justify-between items-center cursor-pointer pb-2 px-2 mb-4 border-b-2 border-b-secondary-graylight w-full text-lg text-primary-red"
          onClick={handleLogout}
        >
          Logout
          <MdOutlineKeyboardArrowRight className="h-6 w-6 fill-black" />
        </button>
      </div>
      <Dialog
        className="border-4 border-primary-red rounded-3xl px-2 h-fit"
        open={logout}
        size="xs"
        handler={handleLogout}
      >
        <DialogBody
          divider
          className="h-auto text-black text-center border-y-0 font-poppins"
        >
          <div className="flex justify-end items-center mt-2 mb-6 relative">
            <XMark
              className="w-4 h-4 cursor-pointer fixed"
              onClick={handleLogout}
            />
          </div>
          {/* START:Content */}
          <h1 className="font-semibold mb-4 text-xl">Logout?</h1>
          <p className="text-lg">
            Apakah Sobat yakin mau Logout dari akun ini?
          </p>
          {/* END:Content */}
          <div className="flex justify-end gap-x-4 items-center mt-6">
            <Link
              href="./"
              className="outline-shadow-button !py-2 !px-8 text-xs"
            >
              Ya
            </Link>
            <button
              onClick={handleLogout}
              className="shadow-button !py-2 !px-8 text-xs"
            >
              Tidak
            </button>
          </div>
        </DialogBody>
      </Dialog>
    </div>
  );
};

Pengaturan.getLayout = (page: any) => {
  return <BlankLayout>{page}</BlankLayout>;
};
export default Pengaturan;
