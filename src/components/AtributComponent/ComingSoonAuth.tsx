import React from "react";
import { ComingSoon } from "../../../public/assets/svg";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

const ComingSoonAuth = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <ComingSoon className="w-52 h-52" />
      <div className="w-full md:w-[60%] text-center">
        <p className="mb-6">
          Saat ini sistem kami dalam proses membangun pendaftaran online, tapi
          kamu sudah bisa melakukan pembelian produk di bawah ini
        </p>
        <Link href="/product">
          <Button className="mt-6 shadow-button ">Beli Produk Disini</Button>
        </Link>
      </div>
    </div>
  );
};

export default ComingSoonAuth;
