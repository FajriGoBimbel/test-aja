import BlankLayout from "@/components/Layouts/BlankLayout";
import Link from "next/link";
import { BiLeftArrowAlt, BiSolidRightArrow } from "react-icons/bi";

const kimiaDatas = [
  {
    no: 1,
    title: "VAK 12 SMA IPA-TA. 23/24",
    kelas: "12 SMA IPA",
    soal: 40,
    isSelesai: false,
  },
];

const vak = () => {
  return (
    <div className="container mx-auto my-10 md:my-20 px-4 sm:px-0">
      <Link href="/dashboard" className="flex gap-x-2 items-center mb-10">
        <BiLeftArrowAlt className="w-8 h-8" />
        <p className="font-bold text-base">
          Tes VAK (Visual, Auditori, Kinestik)
        </p>
      </Link>
      {kimiaDatas.map((item, index) => (
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
                VAK
                <br /> 0{item.no}
              </p>
            </div>
            <div className="uppercase">
              <p className="text-sm md:text-lg mb-2 md:mb-4 font-semibold">
                {item.title}
              </p>
              <p className="text-xs uppercase">
                {item.kelas} | {item.soal} Soal
              </p>
            </div>
          </div>

          <div className="flex gap-x-4 mt-6 md:mt-0 justify-center md:justify-end items-center">
            {item.isSelesai !== true ? (
              <Link href="./vak/soal" className="shadow-button !py-2 !text-sm">
                Kerjakan
              </Link>
            ) : (
              <Link
                href="./vak/hasil"
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

vak.getLayout = (page: any) => {
  return <BlankLayout>{page}</BlankLayout>;
};

export default vak;
