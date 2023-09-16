/* eslint-disable react-hooks/rules-of-hooks */
import BlankLayout from "@/components/Layouts/BlankLayout";
import Link from "next/link";
import { BiSolidRightArrow, BiLeftArrowAlt } from "react-icons/bi";
import { useState } from "react";

const emKpuDatas = [
  {
    no: "01",
    title: "EMWA 12 SMA IPA-K13R-S1-IPA-TA. 23/24",
    mp: "FISIKA",
    kelas: "12 SMA IPA",
    soal: 4,
    mulai: "10.00",
    selesai: "13.00",
    tanggal: "24 Agustus 2023",
    isSelesai: true,
  },
  {
    no: "02",
    title: "EMWA 12 SMA IPS-K13R-S1-IPS-TA. 23/24",
    mp: "GEOGRAFI",
    kelas: "12 SMA IPS",
    soal: 4,
    mulai: "10.00",
    selesai: "13.00",
    tanggal: "24 Agustus 2023",
    isSelesai: false,
  },
  {
    no: "01",
    title: "EMWA 12 SMA IPS-K13R-S1-IPS-TA. 23/24",
    mp: "SEJARAH",
    kelas: "12 SMA IPS",
    soal: 4,
    mulai: "10.00",
    selesai: "13.00",
    tanggal: "24 Agustus 2023",
    isSelesai: false,
  },
];
const ewKpu = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <div className="container mx-auto my-10 md:my-20 px-4 sm:px-0">
      <Link
        href="/dashboard/buku-sakti"
        className="flex gap-x-2 items-center mb-2"
      >
        <BiLeftArrowAlt className="w-8 h-8" />
        <p className="font-bold text-base">EMPATI WAJIB</p>
      </Link>
      <div className="flex gap-x-2 items-center ml-10 mb-10">
        <BiSolidRightArrow className="w-3 h-3" />
        <p className="text-xs md:text-base">Kemampuan Penalaran Umum (KPU)</p>
      </div>
      {emKpuDatas.map((item, index) => (
        <div
          key={index}
          className="border-2 border-black rounded-xl p-4 w-full mb-6"
        >
          <div className="flex gap-x-10 items-start md:items-center">
            <div
              className={`border-2 border-black rounded-xl p-3 ${
                item.isSelesai ? "bg-primary-success-300" : ""
              }`}
            >
              <p className="uppercase text-center font-bold">
                EMWA <br /> {item.no}
              </p>
            </div>
            <div className="uppercase">
              <p className="text-sm md:text-lg mb-2 md:mb-4 font-semibold">
                {item.title}
              </p>
              <p className="text-xs">
                {item.mp} | {item.kelas} | {item.soal} Soal
              </p>
            </div>
          </div>

          <div className="mt-6 mb-2 text-xs">
            <p className="mb-2">
              <b>Dimulai:</b> {item.mulai}
            </p>
            <p>
              <b>Berakhir:</b> {item.selesai}, {item.tanggal}
            </p>
          </div>

          <div className="flex gap-x-4 mt-6 md:mt-0 justify-center md:justify-end items-center">
            {item.isSelesai !== true ? (
              <Link href="./kpu/soal" className="shadow-button !py-2 !text-sm">
                Kerjakan
              </Link>
            ) : (
              <Link
                href="./kpu/hasil"
                className="outline-shadow-button !py-2 !text-sm"
              >
                Lihat Hasil
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

ewKpu.getLayout = (page: any) => {
  return <BlankLayout>{page}</BlankLayout>;
};

export default ewKpu;
