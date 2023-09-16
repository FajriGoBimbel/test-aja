import { Card, CardBody } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";
import { LogoGoWithColor } from "../../../public/assets/svg";

const DashboardCardSiswa = () => {
  return (
    <div className="pt-2">
      <span>
        <Link href="/">
          <LogoGoWithColor className="h-32 w-32" />
        </Link>
      </span>
      <h2 className="text-3xl font-bold text-black">Halo, Bapak/Ibu</h2>
      <p className="mb-12 text-md">
        Silakan pilih salah satu laporan anak Anda
      </p>
      <div className="grid grid-cols-2 gap-6">
        <Link href="/parent/dashboard">
          <Card className="bg-primary-red-100">
            <CardBody>
              <h4 className="mb-2 font-medium text-black">Laporan Belajar</h4>
              <hr className="border-4 border-primary-red-500" />
              <h3 className="font-bold text-black text-2xl mt-4 mb-6">
                Clara Shintia - 12 SMA IPA
              </h3>
              <p className="mb-3">No Registrasi Siswa : 09585746888</p>
              <p className="mb-3">
                Program : GO Bimbel Offline - SILVER TWT 11 SMA IPA
              </p>
              <p>
                Lokasi : Gedung GO Jl. Purnawarman 36-B, Bandung, Jawa Barat
              </p>
            </CardBody>
          </Card>
        </Link>
        <Link href="/parent/dashboard">
          <Card className="bg-primary-success-100">
            <CardBody>
              <h4 className="mb-2 font-medium text-black">Laporan Belajar</h4>
              <hr className="border-4 border-primary-success-500" />
              <h3 className="font-bold text-black text-2xl mt-4 mb-6">
                Al Fajri - 8 SMP
              </h3>
              <p className="mb-2">No Registrasi Siswa : 23849476483</p>
              <p className="mb-2">Program : GO Kreasi</p>
              <p>Lokasi : -</p>
            </CardBody>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default DashboardCardSiswa;
