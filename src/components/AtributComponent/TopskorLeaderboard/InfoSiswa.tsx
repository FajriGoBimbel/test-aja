import { useState } from "react";
import { TiPencil } from "react-icons/ti";
import Link from "next/link";
import { Button, Dialog, DialogBody, Input } from "@material-tailwind/react";
import { XMark } from "../../../../public/assets/svg";

const kelas = [
  { class: "4 SD" },
  { class: "5 SD" },
  { class: "6 SD" },
  { class: "7 SMP" },
  { class: "8 SMP" },
  { class: "9 SMP" },
  { class: "10 SMA" },
  { class: "11 SMA" },
  { class: "11 SMA IPA" },
  { class: "11 SMA IPS" },
  { class: "12 SMA" },
  { class: "12 SMA IPA" },
  { class: "12 SMA IPS" },
  { class: "10 SMK" },
  { class: "11 SMK" },
  { class: "12 SMK" },
];

const InfoSiswa = () => {
  const [open, setOpen] = useState(false);
  const [activeClass, setActiveClass] = useState<number | null>(null);

  const handleToggle = () => setOpen(!open);
  const handleClassClick = (index: number) => {
    setActiveClass(index === activeClass ? null : index);
  };
  return (
    <>
      {/* START:Dialog Modal */}
      <Dialog
        className="border-4 border-primary-red rounded-3xl px-2 h-fit"
        open={open}
        size="xs"
        handler={handleToggle}
      >
        <DialogBody
          divider
          className="h-auto overflow-y-auto no-scrollbar text-black border-y-0 font-poppins"
        >
          <div className="flex justify-end items-center mt-2 mb-6 relative">
            <XMark
              className="w-4 h-4 cursor-pointer fixed"
              onClick={handleToggle}
            />
          </div>
          {/* START:Content */}
          <div className="kelas">
            <h2 className="font-semibold text-base mb-2">Pilih Kelasmu</h2>
            <ul className="flex gap-x-1 md:gap-x-2 gap-y-1 md:gap-y-3 items-center flex-wrap">
              {kelas.map((item: any, index: number) => (
                <li
                  key={index}
                  className={`border border-black rounded-lg max-w-max cursor-pointer ${
                    activeClass === index ? "bg-primary-red text-white" : ""
                  }`}
                  onClick={() => handleClassClick(index)}
                >
                  <p className="uppercase text-[10px] text-xs p-1 md:p-2 font-semibold">
                    {item.class}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="sekolah mt-6">
            <h2 className="font-semibold text-base mb-1">
              Masukkan Nama Sekolahmu
            </h2>
            <Input
              placeholder="Nama Sekolah"
              className="!border !border-primary-gray-200 text-xs mt-1"
              labelProps={{ className: "hidden" }}
              crossOrigin={undefined}
            />
          </div>
          {/* END:Content */}
          <div className="flex justify-center mt-10 mb-4">
            <Button className="shadow-button" onClick={handleToggle}>
              Simpan
            </Button>
          </div>
        </DialogBody>
      </Dialog>
      {/* END:Dialog Modal */}
      <div className="mt-8 md:mt-20 mx-4">
        <p className="font-semibold text-xl">Halo, Muhammad Aji Massaid</p>
        <div className="flex gap-x-2 items-center mt-4 md:mt-10">
          <p>
            Kamu adalah siswa kelas <b>PILIH KELAS</b> dan{" "}
            <b>ISI NAMA SEKOLAHMU</b>
          </p>
          <div className="bg-secondary-graylight-300 rounded-full grid items-center">
            <TiPencil
              className="p-1 fill-black w-6 h-6 cursor-pointer"
              onClick={handleToggle}
            />
          </div>
        </div>
        <p className="my-4">
          Saat ini kamu terdaftar dalam program{" "}
          <b>Reguler TWT 12 SMA GO KREASI Materi Sekolah & SNBT 2023/2024</b>
        </p>
        <div className="flex gap-x-2 items-center">
          <p>
            Kamu ingin masuk <b>PILIHAN 1</b>, untuk lolos jurusan tersebut
            dibutuhkan <b>SKOR</b>. Dan kamu memilih <b>PILIHAN 2</b>, untuk
            lolos jurusan tersebut dibutuhkan <b>SKOR</b>. Saat ini kamu belum
            ada skor. Segera berlatih dengan 9x TOBK dan mengerjakan minimal
            12000 Latihan Soal agar lolos UTBK-SNBT 2024
          </p>
          <div className="bg-secondary-graylight-300 rounded-full grid items-center">
            <TiPencil
              className="p-1 fill-black w-6 h-6 cursor-pointer"
              onClick={handleToggle}
            />
          </div>
        </div>
      </div>
      {/* Peluang PTN */}
      <div className="flex flex-col md:flex-row gap-x-4 items-center mt-4 md:mt-8 mx-4">
        <p className="font-medium text-center lg:text-left mb-2 lg:mb-0">
          Cek peluang lolos PTN 2024
        </p>
        <Link
          className="bg-primary-red shadow-md text-white text-xs font-semibold py-3 px-4 rounded-xl"
          href="#"
        >
          PTN-Clopedia 2024
        </Link>
      </div>
      {/* Profiling */}
      <div className="flex flex-col md:flex-row gap-x-4 items-center mt-2 md:mt-4 mx-4">
        <div className="flex gap-x-4 items-center">
          <p className="font-medium text-center lg:text-left mb-2 lg:mb-0">
            Lakukan Profiling dulu disini
          </p>
          <Link
            className="bg-primary-red shadow-md text-white text-xs font-semibold py-3 px-4 rounded-xl"
            href="/dashboard/go-assesment"
          >
            GO ASSESMENT
          </Link>
        </div>
        <div className="flex gap-x-4 items-center">
          <p className="font-medium text-center lg:text-left mb-2 lg:mb-0">
            dan
          </p>
          <Link
            className="bg-primary-red shadow-md text-white text-xs font-semibold py-3 px-4 rounded-xl"
            href="/dashboard/vak"
          >
            Tes VAK
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-x-4 items-center mt-2 md:mt-4 mx-4">
        <div className="flex gap-x-4 items-center">
          <p className="font-medium text-center lg:text-left mb-2 lg:mb-0">
            Info pembayaran lihat di sini
          </p>
          <Link
            className="bg-primary-red shadow-md text-white text-xs font-semibold py-3 px-4 rounded-xl"
            href="#"
          >
            Info Pembayaran
          </Link>
        </div>
      </div>
    </>
  );
};

export default InfoSiswa;
