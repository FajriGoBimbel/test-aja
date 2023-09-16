import BlankLayout from "@/components/Layouts/BlankLayout";
import { useState } from "react";
import { Dialog, DialogBody } from "@material-tailwind/react";
import { XMark } from "../../../../../public/assets/svg";
import Link from "next/link";
import { BiLeftArrowAlt } from "react-icons/bi";

const BagianTobk = [
  {
    tes: "tes potensi skolastik",
    subTes: [
      { sub: "Kemampuan Penalaran Umum (KPU)" },
      { sub: "Kemampuan Kuantitatif (KK)" },
      { sub: "Pengetahuan & Penalaran Umum (PPU)" },
      { sub: "Kemampuan Memahami Bacaan & Tulisan (KMBM)" },
    ],
  },
  {
    tes: "literasi bahasa",
    subTes: [
      { sub: "Kemampuan Penalaran Umum (KPU)" },
      { sub: "Kemampuan Kuantitatif (KK)" },
    ],
  },
  {
    tes: "penalaran matematika",
    subTes: [
      { sub: "Kemampuan Penalaran Umum (KPU)" },
      { sub: "Kemampuan Kuantitatif (KK)" },
    ],
  },
];

const PilihanTobk = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);
  const isActive = true;
  return (
    <div className="container mx-auto my-12 px-4 sm:px-0">
      <Link href="/dashboard/tobk">
        <BiLeftArrowAlt className="w-8 h-auto mb-4" />
      </Link>
      <h1 className="font-bold uppercase text-2xl">TOBK 1</h1>
      <p className="my-2">Sabtu, 10 November 2023</p>
      <p>10.00 - 13.00 WIB</p>
      {BagianTobk.map((item, index) => (
        <div key={index} className="p-8 mt-4 shadow-lg rounded-xl">
          <h2 className="uppercase font-bold mb-2 text-xl">
            BAGIAN {index + 1} : {item.tes}
          </h2>
          {item.subTes.map((sub, index) => (
            <p key={index} className="mb-1">
              Sub Tes {index + 1} : {sub?.sub}
            </p>
          ))}
          <button
            className={`shadow-button mt-6 !py-2 !px-4 ${
              isActive ? "" : "!bg-secondary-graylight !text-black"
            }`}
            onClick={handleToggle}
          >
            Kerjakan Sekarang
          </button>
        </div>
      ))}
      <Dialog
        className="border-4 border-primary-red rounded-3xl px-2 h-fit"
        open={open}
        size="md"
        handler={handleToggle}
      >
        <DialogBody
          divider
          className="h-auto overflow-y-scroll no-scrollbar text-black border-y-0 font-poppins"
        >
          <div className="flex justify-end items-center mt-2 mb-6 relative">
            <XMark
              className="w-4 h-4 cursor-pointer fixed"
              onClick={handleToggle}
            />
          </div>
          {/* START:Content */}
          <div>
            <h1 className="font-bold text-lg text-center mb-4 sm:mb-8 uppercase">
              TOBK 1
            </h1>
            <div>
              <p className="mb-2">
                Kamu akan segera memulai pengerjaan{" "}
                <b className="uppercase">TOBK 1</b>. <b>Mohon diperhatikan</b>{" "}
                bahwa:
              </p>
              <ol className="list-decimal ml-5">
                <li>
                  Setelah klik tombol Mulai TOBK, maka kamu tidak bisa kembali
                  lagi dan wajib menyelesaikan semua soal hingga waktu berakhir.
                </li>
                <li>
                  TOBK ini menggunakan sistem <b>`Blocking Time`</b> sesuai
                  dengan peraturan UTBK-SNBT. Artinya 1 soal hanya diberi waktu
                  sekitar 1 menit.
                </li>
                <li>
                  TOBK berlangsung selama <b>180 menit atau 3</b> jam dan
                  dikerjakan secara serentak seluruh Indonesia.
                </li>
              </ol>
            </div>
          </div>
          {/* END:Content */}
          <div className="flex gap-x-4 justify-end items-center mt-10 mb-4">
            <button
              className="outline-shadow-button !text-xs !px-8 !py-2 md:!text-base md:!px-12 md:!py-2 md:!rounded-xl"
              onClick={handleToggle}
            >
              Kembali
            </button>
            <Link
              href="soal/tps/kpu"
              className="shadow-button !text-xs !px-8 !py-2 md:!text-base md:!px-12 md:!py-2 md:!rounded-xl"
            >
              Mulai TOBK
            </Link>
          </div>
        </DialogBody>
      </Dialog>
    </div>
  );
};

PilihanTobk.getLayout = (page: any) => {
  return <BlankLayout>{page}</BlankLayout>;
};

export default PilihanTobk;
