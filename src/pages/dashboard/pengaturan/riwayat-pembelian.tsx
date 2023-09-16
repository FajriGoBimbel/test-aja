import BlankLayout from "@/components/Layouts/BlankLayout";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import {
  CheckRounded,
  Gold,
  Reguler,
  Silver,
} from "../../../../public/assets/svg";
import { FormattedNumber } from "@/components/ElementComponent";
import { Card, CardBody } from "@material-tailwind/react";
import dayjs from "dayjs";
import "dayjs/locale/id";

const riwayatPembelianProdukDatas = [
  {
    tanggal: "2023-05-12",
    waktu: "15:43",
    lokasi: "Gedung GO Jl. Purnawarman 36-B, Kota Bandung",
    status: "Lunas",
    jenis: Gold,
    layanan: "TWT 12 SMA Kurikulum Merdeka 4 Pertemuan Tahun Ajaran 2023/2024",
    hargaTotal: 12_000_000,
  },
  {
    tanggal: "2022-01-02",
    waktu: "13:34",
    lokasi: "Gedung GO Jl. Purnawarman 36-B, Kota Bandung",
    status: "Lunas",
    jenis: Silver,
    layanan: "TWT 11 SMA Kurikulum Merdeka 4 Pertemuan Tahun Ajaran 2023/2024",
    hargaTotal: 9_000_000,
  },
  {
    tanggal: "2021-02-02",
    waktu: "13:34",
    lokasi: "Gedung GO Jl. Purnawarman 36-B, Kota Bandung",
    status: "Cicilan 3 - Lunas",
    jenis: Reguler,
    layanan: "TWT 10 SMA Kurikulum Merdeka 4 Pertemuan Tahun Ajaran 2023/2024",
    sudahDibayar: 2_000_000,
    hargaSisa: 0,
    hargaTotal: 6_000_000,
  },
  {
    tanggal: "2021-04-02",
    waktu: "13:34",
    lokasi: "Gedung GO Jl. Purnawarman 36-B, Kota Bandung",
    status: "Cicilan 2",
    jenis: Reguler,
    layanan: "TWT 10 SMA Kurikulum Merdeka 4 Pertemuan Tahun Ajaran 2023/2024",
    sudahDibayar: 4_000_000,
    hargaSisa: 2_000_000,
    hargaTotal: 6_000_000,
  },
  {
    tanggal: "2021-03-02",
    waktu: "13:34",
    lokasi: "Gedung GO Jl. Purnawarman 36-B, Kota Bandung",
    status: "Cicilan 1",
    jenis: Reguler,
    layanan: "TWT 10 SMA Kurikulum Merdeka 4 Pertemuan Tahun Ajaran 2023/2024",
    sudahDibayar: 2_000_000,
    hargaSisa: 4_000_000,
    hargaTotal: 6_000_000,
  },
];

const RiwayatPembelianProduk = () => {
  return (
    <div className="container mx-auto my-8 px-4 md:px-0 md:my-16">
      <div className="flex gap-4 mb-4 lg:mb-12">
        <Link href="/dashboard/pengaturan">
          <FaArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="font-bold text-lg">Tata Tertib Siswa</h1>
      </div>

      {riwayatPembelianProdukDatas.map((item, index) => {
        dayjs.locale("id");
        const date = dayjs(item.tanggal, "DD MMMM YYYY");
        const tanggal = date.format("DD MMMM YYYY");
        const hari = date.format("dddd");
        const bulanDanTahun = date.format("MMMM YYYY");

        return (
          <Card
            key={index}
            className="max-w-fit lg:max-w-[70%] mx-auto shadow-lg rounded-xl py-4 px-2 md:px-8 text-black mb-10"
          >
            <h2 className="text-center text-xl font-bold mb-4 md:mb-2">
              {bulanDanTahun}
            </h2>
            <CardBody className="p-2 md:p-6">
              <div className="flex gap-x-10 md:gap-x-1 justify-between items-start md:items-center text-xs md:text-base mb-4">
                <p className="font-semibold md:w-1/3">Pembayaran</p>
                <p className="w-2/3">{`${hari}, ${tanggal} - ${item.waktu} WIB`}</p>
              </div>
              <div className="flex gap-x-1 justify-between items-start md:items-center text-xs md:text-base mb-4">
                <p className="font-semibold md:w-1/3">Lokasi Pembayaran</p>
                <p className="w-2/3">{item.lokasi}</p>
              </div>
              <div className="flex gap-x-2 justify-between items-center text-xs md:text-base mb-3 md:mb-6">
                <p className="font-semibold md:w-1/3">Status Pembayaran</p>
                <div className="flex gap-x-2 w-2/3">
                  <p className="uppercase font-semibold">{item.status}</p>
                  <CheckRounded className="w-4 md:w-5 h-auto " />
                </div>
              </div>
              <div className="flex justify-between md:justify-normal flex-col md:flex-row items-center md:mb-4">
                <div className="lg:w-1/3">
                  <item.jenis className="w-20 md:w-28 h-auto" />
                </div>
                <p className="lg:w-1/3 md:ml-8 lg:ml-0 text-xs md:text-base mt-4 font-semibold">
                  {item.layanan}
                </p>
                <p className="md:ml-8 mt-4 md:mt-0 font-bold text-lg text-center">
                  Rp{FormattedNumber(item.hargaTotal)}
                </p>
              </div>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};

RiwayatPembelianProduk.getLayout = (page: any) => {
  return <BlankLayout>{page}</BlankLayout>;
};

export default RiwayatPembelianProduk;
