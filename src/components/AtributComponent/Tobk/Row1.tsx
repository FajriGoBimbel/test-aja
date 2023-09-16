import { useState } from "react";
import { StartRun } from "../../../../public/assets/svg";
import DataTobk from "./DataTobk";
import ModalTobk from "./ModalTobk";
import SyaratTOBK from "@/data/SyaratTobk";

const DetailTOBK1 = [
  {
    kelas: "12 SMA",
    kode: "UAT - TOBK - 12 SMA - S1 - KMER",
    tanggal: "Sabtu, 10 November 2023",
    durasi: "180 Menit (3 Jam)",
    jamMulai: "10.00",
    jamSelesai: "13.00",
    tipe: false,
    status: true,
    materies: [
      { materi: "Tes Potensi Skolastik (TPS)" },
      { materi: "Literasi Bahasa Indonesia dan Inggris" },
      { materi: "Penalaran Matematika" },
    ],
  },
];

const DetailTOBK2 = [
  {
    kelas: "12 SMA",
    kode: "UAT - TOBK - 12 SMA - S1 - KMER",
    tanggal: "Sabtu, 10 November 2023",
    durasi: "180 Menit (3 Jam)",
    jamMulai: "10.00",
    jamSelesai: "13.00",
    tipe: false,
    status: true,
    materies: [
      { materi: "Tes Potensi Skolastik (TPS)" },
      { materi: "Literasi Bahasa Indonesia dan Inggris" },
      { materi: "Penalaran Matematika" },
    ],
  },
];

const Row1Tobk = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleToggle = () => setOpen(!open);
  const handleToggle2 = () => setOpen2(!open2);
  return (
    <div className="flex flex-wrap items-end">
      {/* column 1 */}
      <div className="w-full sm:w-1/3">
        <StartRun className="w-52 h-52 md:w-56 lg:w-80 sm:h-80 mx-auto" />
        <DataTobk
          isOpen={true}
          isDone={false}
          onClick={handleToggle}
          title="tobk 1"
          day="Sabtu"
          date="09 November 2023"
          timesStart="10.00"
          timesEnd="13.00"
        />
      </div>
      <ModalTobk
        open={open}
        onClick={handleToggle}
        detailTitle="detail tobk 1"
        syaratTitle="syarat tobk 1"
        detailTobk={DetailTOBK1}
        syaratTobk={SyaratTOBK}
      />
      {/* column 2 */}
      <hr className="w-1/3 border-2 border-dashed border-black sm:mb-2 my-16 sm:mt-0 mx-auto sm:mx-0 rotate-90 sm:rotate-0"></hr>
      {/* column 3 */}
      <div className="w-full sm:w-1/3">
        <DataTobk
          isOpen={false}
          isDone={false}
          onClick={handleToggle2}
          title="tobk 2"
          day="Sabtu"
          date="09 November 2023"
          timesStart="10.00"
          timesEnd="13.00"
        />
      </div>
      <ModalTobk
        open={open2}
        onClick={handleToggle2}
        detailTitle="detail tobk 2"
        syaratTitle="syarat tobk 2"
        detailTobk={DetailTOBK2}
        syaratTobk={SyaratTOBK}
      />
    </div>
  );
};

export default Row1Tobk;
