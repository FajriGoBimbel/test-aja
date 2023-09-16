import { Dialog, DialogBody } from "@material-tailwind/react";
import { CheckRounded, XMark, XRounded } from "../../../../public/assets/svg";
import Link from "next/link";

interface MateriProps {
  materi: string;
}

interface DataDetailTobkProps {
  kelas: string;
  kode: string;
  hari: string;
  tanggal: string;
  durasi: string;
  jamMulai: string;
  jamSelesai: string;
  tipe: boolean;
  status: boolean;
  materies: MateriProps[];
}

interface DetailTobkProps {
  data: DataDetailTobkProps[];
}

const DetailTobkComponent = ({ data }: DetailTobkProps) => {
  return (
    <>
      {data.map((item, index) => (
        <ul key={index} className="text-xs sm:text-sm">
          <li className="mb-2">
            <b>Kelas:</b> {item.kelas}
          </li>
          <li className="mb-2">
            <b>Kode TOBK:</b> {item.kode}
          </li>
          <li className="mb-2">
            <b>Hari/Tanggal:</b> {item.tanggal}
          </li>
          <li className="mb-2">
            <b>Hari/Tanggal:</b> {item.kode}
          </li>
          <li className="mb-2">
            <b>Durasi Waktu:</b> {item.durasi}
          </li>
          <li className="mb-2">
            <b>Pukul:</b> {item.jamMulai} - {item.jamSelesai}
          </li>
          <li className="mb-2">
            <b>Tipe TOBK:</b>{" "}
            <span className="uppercase">
              {item.tipe ? "ONLINE" : "OFFLINE"}
            </span>
          </li>
          <li className="mb-2 flex gap-x-1">
            <b>Status Pembayaran:</b>
            <div className="flex gap-x-1 items-center uppercase">
              {item.status ? (
                <>
                  <span>LUNAS</span>
                  <CheckRounded className="w-4 h-auto" />
                </>
              ) : (
                <>
                  <span>BELUM LUNAS</span>
                  <XRounded className="w-4 h-auto" />
                </>
              )}
            </div>
          </li>
          <li className="mb-2">
            <b>Materi yang diujikan:</b>
            {item.materies.map((item, index) => (
              <ol key={index} className="ml-1">
                <li className="flex gap-x-1 my-2">
                  <p>{index + 1}.</p> <p>{item.materi}</p>
                </li>
              </ol>
            ))}
          </li>
        </ul>
      ))}
    </>
  );
};

interface DataSyaratTobkProps {
  syarat: string;
}

interface SyaratTobkProps {
  data: DataSyaratTobkProps[];
}

const SyaratTobkComponent = ({ data }: SyaratTobkProps) => {
  return (
    <>
      {data.map((item, index) => (
        <ol key={index} className="text-xs sm:text-sm">
          <li className="flex gap-x-1">
            <p>{index + 1}.</p> <p>{item.syarat}</p>
          </li>
        </ol>
      ))}
    </>
  );
};

interface ModalTobkProps {
  open: boolean;
  onClick: () => void;
  detailTitle: string;
  syaratTitle: string;
  detailTobk: any;
  syaratTobk: any;
}

const ModalTobk = ({
  open,
  onClick,
  detailTitle,
  syaratTitle,
  detailTobk,
  syaratTobk,
}: ModalTobkProps) => {
  return (
    <>
      <Dialog
        className="border-4 border-primary-red rounded-3xl px-2 h-fit"
        open={open}
        size="md"
        handler={onClick}
      >
        <DialogBody
          divider
          className="h-auto text-black border-y-0 font-poppins"
        >
          <div className="flex justify-end items-center mt-2 mb-6 relative">
            <XMark className="w-4 h-4 cursor-pointer fixed" onClick={onClick} />
          </div>
          {/* START:Content */}
          <div className="flex flex-col lg:flex-row gap-x-4">
            {/* column 1 */}
            <div className="lg:w-[45%]">
              <h1 className="font-bold text-lg mb-3 sm:mb-4 uppercase">
                {detailTitle}
              </h1>
              <DetailTobkComponent data={detailTobk} />
            </div>
            {/* column 2 */}
            <div className="lg:w-[55%] lg:border-l-2 lg:border-gray-400 lg:pl-4 mt-4 lg:mt-0">
              <h1 className="font-bold text-lg mb-3 lg:mb-4 uppercase">
                {syaratTitle}
              </h1>
              <SyaratTobkComponent data={syaratTobk} />
            </div>
          </div>
          {/* END:Content */}
          <div className="flex justify-center mt-10 mb-4">
            <Link
              href="tobk/soal"
              className="shadow-button !text-xs !px-8 md:!text-base md:!px-12 md:!py-2 md:!rounded-xl"
            >
              Mulai TOBK
            </Link>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default ModalTobk;
