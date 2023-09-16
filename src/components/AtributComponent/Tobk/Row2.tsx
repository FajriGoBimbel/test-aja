import { useState } from "react";
import DataTobk from "./DataTobk";
import ModalTobk from "./ModalTobk";
import SyaratTOBK from "@/data/SyaratTobk";

const DetailTOBK3 = [
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

const DetailTOBKIntensif1 = [
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

const Row2Tobk = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleToggle = () => setOpen(!open);
  const handleToggle2 = () => setOpen2(!open2);
  return (
    <div className="flex flex-wrap items-end flex-row-reverse mt-16 sm:mt-28">
      {/* column 1 */}
      <div className="w-full sm:w-1/3">
        <DataTobk
          isOpen={false}
          isDone={false}
          onClick={handleToggle}
          title="tobk 3"
          day="Sabtu"
          date="09 November 2023"
          timesStart="10.00"
          timesEnd="13.00"
        />
      </div>
      <ModalTobk
        open={open}
        onClick={handleToggle}
        detailTitle="detail tobk 3"
        syaratTitle="syarat tobk 3"
        detailTobk={DetailTOBK3}
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
          title="tobk intensif 1"
          day="Sabtu"
          date="09 November 2023"
          timesStart="10.00"
          timesEnd="13.00"
        />
      </div>
      <ModalTobk
        open={open2}
        onClick={handleToggle2}
        detailTitle="detail tobk intensif 1"
        syaratTitle="syarat tobk intensif 1"
        detailTobk={DetailTOBKIntensif1}
        syaratTobk={SyaratTOBK}
      />
    </div>
  );
};

export default Row2Tobk;
