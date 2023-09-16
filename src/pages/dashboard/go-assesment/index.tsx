import BlankLayout from "@/components/Layouts/BlankLayout";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";

const GoAssesment = () => {
  const [listGOA, setListGOA] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getDataList = () => {
    axios
      .get(`http://192.168.20.253:3000/v1/goa/list`)
      .then((res) => {
        setListGOA(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    getDataList();
  }, []);

  return (
    <div className="container mx-auto my-10 md:my-20 px-4 sm:px-0">
      <Link href="/dashboard" className="flex gap-x-2 items-center mb-10">
        <BiLeftArrowAlt className="w-8 h-8" />
        <p className="font-bold text-base">GO ASSESMENT (GOA)</p>
      </Link>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <>
          {listGOA.map((item: any, index: number) => (
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
                    {item.kode_paket}
                  </p>
                </div>
                <div className="uppercase">
                  <p className="text-sm md:text-lg mb-2 md:mb-4 font-semibold">
                    {item.judul}
                  </p>
                  <p className="text-xs uppercase">
                    {item.nama_sekolah_kelas} | {item.total_soal} Soal |{" "}
                    {item.total_waktu} Menit
                  </p>
                </div>
              </div>

              <div className="flex gap-x-4 mt-6 md:mt-0 justify-center md:justify-end items-center">
                {item.isSelesai !== true ? (
                  <Link
                    href="./go-assesment/soal"
                    className="shadow-button !py-2 !text-sm"
                  >
                    Kerjakan
                  </Link>
                ) : (
                  <Link
                    href="./go-assesment/hasil"
                    className="outline-shadow-button !py-2 !text-sm"
                  >
                    Lihat Hasil
                  </Link>
                )}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

GoAssesment.getLayout = (page: any) => {
  return <BlankLayout>{page}</BlankLayout>;
};

export default GoAssesment;
