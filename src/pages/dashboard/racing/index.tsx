import ComingSoon from "@/components/AtributComponent/ComingSoon";
import Link from "next/link";
import React from "react";
import { BiLeftArrowAlt, BiSolidRightArrow } from "react-icons/bi";

const racingDatas = [
  {
    no: 1,
    title: "RAC 12 SMA IPA-K13R-S1-IPA-TA. 23/24",
    mp: "FISIKA",
    kelas: "12 SMA IPA",
    soal: 45,
    waktu: 50,
    selesai: "23.59",
    tanggal: "09 September 2023",
    isSelesai: false,
  },
  {
    no: 2,
    title: "RAC 12 SMA IPS-K13R-S1-IPS-TA. 23/24",
    mp: "SOSIOLOGI",
    kelas: "12 SMA IPS",
    soal: 45,
    waktu: 50,
    selesai: "23.59",
    tanggal: "09 September 2023",
    isSelesai: false,
  },
  {
    no: 3,
    title: "RAC 12 SMA-K13R-S1-TA. 23/24",
    mp: "ASTROLOGI",
    kelas: "12 SMA",
    soal: 45,
    waktu: 50,
    selesai: "23.59",
    tanggal: "09 September 2023",
    isSelesai: true,
  },
];

const Racing = () => {
  return (
    <div className="container mx-auto my-10 md:my-20 px-4 sm:px-0">
      <p className="font-bold text-2xl mb-8">RACING SOAL</p>
      {racingDatas.map((item, index) => (
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
                RAC <br /> 0{item.no}
              </p>
            </div>
            <div className="uppercase">
              <p className="text-sm md:text-lg mb-2 md:mb-4 font-semibold">
                {item.title}
              </p>
              <p className="text-xs uppercase">
                {item.mp} | {item.kelas} | {item.soal} SOAL | {item.waktu} MENIT
              </p>
            </div>
          </div>

          <div className="mt-6 mb-2 text-xs">
            <p>
              <b>Berakhir:</b> {item.selesai} WIB, {item.tanggal}
            </p>
          </div>

          <div className="flex gap-x-4 mt-6 md:mt-0 justify-center md:justify-end items-center">
            {item.isSelesai !== true ? (
              <Link
                href="./racing/soal"
                className="shadow-button !py-2 !text-sm"
              >
                Kerjakan
              </Link>
            ) : (
              <Link
                href="./racing/hasil"
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

export default Racing;
