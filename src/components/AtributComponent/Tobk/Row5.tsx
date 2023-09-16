import { useState } from "react";
import { FinishRun } from "../../../../public/assets/svg";
import DataTobk from "./DataTobk";
import ModalTobk from "./ModalTobk";
import SyaratTOBK from "@/data/SyaratTobk";

const DetailTOBKSuperIntensif3 = [
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

const Row5Tobk = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);
  return (
    <div className="flex items-start mt-12 sm:mt-20">
      {/* column 1 */}
      <div className="w-full md:w-1/3">
        <FinishRun className="w-52 h-52 md:w-56 lg:w-80 sm:h-80 mx-auto md:mx-0 lg:mx-auto mb-2 sm:mb-10" />
        <DataTobk
          isOpen={false}
          isDone={false}
          onClick={handleToggle}
          title="tobk super intensif 3"
          day="Sabtu"
          date="09 November 2023"
          timesStart="10.00"
          timesEnd="13.00"
        />
      </div>
      <ModalTobk
        open={open}
        onClick={handleToggle}
        detailTitle="detail tobk super intensif 3"
        syaratTitle="syarat tobk super intensif 3"
        detailTobk={DetailTOBKSuperIntensif3}
        syaratTobk={SyaratTOBK}
      />
    </div>
  );
};

export default Row5Tobk;
