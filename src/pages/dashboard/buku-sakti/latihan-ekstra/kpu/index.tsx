/* eslint-disable react-hooks/rules-of-hooks */
import BlankLayout from "@/components/Layouts/BlankLayout";
import Link from "next/link";
import {
  BiSolidRightArrow,
  BiRightArrowAlt,
  BiLeftArrowAlt,
} from "react-icons/bi";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Dialog,
  DialogBody,
} from "@material-tailwind/react";
import { ArrowDown, XMark } from "../../../../../../public/assets/svg";
import { useState } from "react";

const lateksKpuDatas = [
  {
    no: "01",
    title: "LATEKS 12 SMA IPA-K13R-S1-IPA-TA. 23/24",
    mp: "KEMAMPUAN PENALARAN UMUM (KPU)",
    kelas: "12 SMA IPA",
    soal: 4,
    isSelesai: true,
  },
  {
    no: "02",
    title: "LATEKS 12 SMA IPS-K13R-S1-IPS-TA. 23/24",
    mp: "KEMAMPUAN PENALARAN UMUM (KPU)",
    kelas: "12 SMA IPS",
    soal: 4,
    isSelesai: false,
  },
  {
    no: "01",
    title: "LATEKS 12 SMA IPS-K13R-S1-IPS-TA. 23/24",
    mp: "KEMAMPUAN PENALARAN UMUM (KPU)",
    kelas: "12 SMA IPS",
    soal: 4,
    isSelesai: false,
  },
];

const lateksBabKpuDatas = [
  {
    mapel: "Logika Matematika",
    jumlahSub: 4,
    subs: [
      { no: "01.27.06", judul: "Penarikan Kesimpulan", jumlah: 9 },
      { no: "01.27.06", judul: "Penarikan Kesimpulan", jumlah: 9 },
      { no: "01.27.06", judul: "Penarikan Kesimpulan", jumlah: 9 },
      { no: "01.27.06", judul: "Penarikan Kesimpulan", jumlah: 9 },
    ],
  },
  {
    mapel: "Aritmatika Sosial",
    jumlahSub: 4,
    subs: [
      { no: "01.27.06", judul: "Penarikan Kesimpulan", jumlah: 9 },
      { no: "01.27.06", judul: "Penarikan Kesimpulan", jumlah: 9 },
      { no: "01.27.06", judul: "Penarikan Kesimpulan", jumlah: 9 },
      { no: "01.27.06", judul: "Penarikan Kesimpulan", jumlah: 9 },
    ],
  },
];
const ewKpu = () => {
  const [open, setOpen] = useState(false);
  const [accordion, setAccordion] = useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAccordion = (value: any) =>
    setAccordion(accordion === value ? 0 : value);

  const Icon = ({ id, open }: any) => {
    return (
      <ArrowDown
        className={`${
          id === open ? "rotate-180" : ""
        } h-4 w-4 transition-transform`}
      />
    );
  };
  return (
    <div className="container mx-auto my-10 md:my-20 px-4 sm:px-0">
      <Link
        href="/dashboard/buku-sakti"
        className="flex gap-x-2 items-center mb-2"
      >
        <BiLeftArrowAlt className="w-8 h-8" />
        <p className="font-bold text-base">LATIHAN EKSTRA</p>
      </Link>
      <div className="flex gap-x-2 items-center ml-10 mb-10">
        <BiSolidRightArrow className="w-3 h-3" />
        <p className="text-xs md:text-base">Kemampuan Penalaran Umum (KPU)</p>
      </div>
      {lateksKpuDatas.map((item, index) => (
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
                LATEKS <br /> {item.no}
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

          <div className="flex gap-x-4 mt-6 md:mt-0 justify-center md:justify-end items-center">
            {item.isSelesai !== true ? (
              <button
                className="shadow-button !py-2 !text-sm"
                onClick={handleOpen}
              >
                Kerjakan
              </button>
            ) : (
              <Link
                href="./kpu/hasil"
                className="outline-shadow-button !py-2 !text-sm"
              >
                Lihat Hasil
              </Link>
            )}
          </div>
          <Dialog
            className="border-4 border-primary-red rounded-3xl px-2 h-fit"
            open={open}
            size="xs"
            handler={handleOpen}
          >
            <DialogBody
              divider
              className="h-auto text-black border-y-0 font-poppins"
            >
              <div className="flex justify-end items-center mt-2 mb-6 relative">
                <XMark
                  className="w-4 h-4 cursor-pointer fixed"
                  onClick={handleClose}
                />
              </div>
              {/* START:Content */}
              <div>
                <div>
                  <h1>KEMAMPUAN PENALARAN UMUM (KPU)</h1>
                  <p>LATEKS - 248</p>
                </div>
                {lateksBabKpuDatas.map((item, index) => (
                  <Accordion
                    key={index}
                    open={accordion === index + 1}
                    icon={<Icon id={index + 1} open={accordion} />}
                  >
                    <AccordionHeader onClick={() => handleAccordion(index + 1)}>
                      <div className="text-black">
                        <h2 className="font-semibold text-lg">{item.mapel}</h2>
                        <p className="text-sm font-normal">
                          Jumlah Sub-bab: {item.jumlahSub}
                        </p>
                      </div>
                    </AccordionHeader>
                    <AccordionBody>
                      {item.subs.map((sub, index) => (
                        <Link
                          key={index}
                          href="./kpu/soal"
                          className="flex justify-between items-center mb-2 text-black text-sm font-medium transition-all hover:text-primary-red"
                        >
                          <p>
                            ({sub.no}) - {sub.judul}
                          </p>
                          <p>{sub.jumlah} SOAL</p>
                        </Link>
                      ))}
                    </AccordionBody>
                  </Accordion>
                ))}
              </div>
              {/* END:Content */}
            </DialogBody>
          </Dialog>
        </div>
      ))}
    </div>
  );
};

ewKpu.getLayout = (page: any) => {
  return <BlankLayout>{page}</BlankLayout>;
};

export default ewKpu;
