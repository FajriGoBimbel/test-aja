import HomeLayout from "@/components/Layouts/HomeLayout";
import { useState } from "react";
import Select from "react-select";
import {
  IlustrasiEmptyProduct,
  IlustrasiSuccess,
  Reguler,
} from "../../../public/assets/svg";
import {
  Button,
  Card,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
} from "@material-tailwind/react";
import ProductDiJual from "@/data/ProductDiJual";
import DetailProduct from "@/data/DetailProduct";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

const Product1thn = () => {
  const [IsProductEmpty, setIsProductEmpty] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState(false);
  const [openModalInfo, setOpenModalInfo] = useState(false);
  const { width, height } = useWindowSize();

  const optionDummy = [
    {
      value: 1,
      label: "Udin",
    },
    {
      value: 2,
      label: "Bambang",
    },
    {
      value: 3,
      label: "Nurdin",
    },
  ];

  return (
    <div>
      <div className="container mx-auto px-4 sm:px-0">
        {openModalInfo && (
          <Confetti style={{ zIndex: 999999 }} width={width} height={height} />
        )}
        <div className="text-center pt-6 sm:pt-12 pb-2 sm:pb-6">
          <h2 className="font-bold text-2xl mb-3">
            Kamu Pilih Program 1 Tahun Ajaran 2023/2024
          </h2>
          <p>
            Program 1 tahun adalah program GO Bimbel Offline dimana kamu akan
            mengikuti KBM (Kegiatan Belajar Mengajar) secara tatap muka di
            gedung GO. Ketika mendaftar program ini kamu juga mendapatkan akses
            ke aplikasi GO yaitu GO KREASI untuk mengerjakan Buku Sakti
            (kumpulan latihan soal+pembahasan), TOBK, Racing Soal, Leaderboard,
            Social Network, Rencana Belajar, Video Pembelajaran, Video Solusi,
            Request TST, Laporan Belajar, dan lainnya
          </p>
        </div>
        <div className="sm:flex items-center gap-6 my-4">
          <div className="sm:flex gap-4 basis-[90%]">
            <div className="w-full mb-3 sm:mb-0">
              <label>Kota</label>
              <Select options={optionDummy} />
            </div>
            <div className="w-full mb-3 sm:mb-0">
              <label>Outlet</label>
              <Select options={optionDummy} />
            </div>
            <div className="w-full mb-3 sm:mb-0">
              <label>Kelas</label>
              <Select options={optionDummy} />
            </div>
          </div>
          <Button onClick={() => setIsProductEmpty(!IsProductEmpty)}>
            Cek Product
          </Button>
        </div>
        {IsProductEmpty ? (
          <div className="flex flex-col text-center items-center justify-center mb-24">
            <IlustrasiEmptyProduct className="w-[28rem] h-[20rem] 2xl:w-[38rem] 2xl:h-[30rem]" />
            <p>
              Pilih kota, outlet, dan kelas dulu untuk melihat produk terbaik
              untukmu
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-semibold my-4">Product Go</h2>
            <div className="flex flex-col gap-6 mb-24">
              {ProductDiJual.map((dataProduct, index) => (
                <Card
                  key={index}
                  onClick={() => setOpenModal(true)}
                  shadow={false}
                  className="flex px-4 py-6 border-4 border-primary-grey flex-row items-center cursor-pointer hover:bg-secondary-graylight-100 transform transition duration-1000 hover:scale-105"
                >
                  <dataProduct.icon className="w-32 h-32" />
                  <div className="text-center w-full">
                    <h3 className="font-bold text-black text-md sm:text-2xl mb-4">
                      {dataProduct.name}
                    </h3>
                    <h4 className="text-md sm:text-2xl">{dataProduct.price}</h4>
                  </div>
                </Card>
              ))}
            </div>
            {/* modal detail product */}
            <Dialog
              size="xl"
              open={openModal}
              handler={() => setOpenModal(false)}
            >
              <DialogHeader>
                <Reguler className="w-24 h-24" />
                <div className="text-center w-full">
                  <h3 className="text-sm sm:text-2xl">
                    TWT 12 SMA GO KREASI Materi Sekolah & SNBT Tahun Ajaran
                    2023/2024
                  </h3>
                  <p className="text-md sm:text-2xl">Rp2.800.000</p>
                </div>
                <div className="absolute top-2 right-2">
                  <IconButton
                    color="blue-gray"
                    size="sm"
                    variant="text"
                    onClick={() => setOpenModal(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </IconButton>
                </div>
              </DialogHeader>
              <DialogBody
                divider
                className="py-12 h-[60vh] sm:h-auto overflow-y-auto"
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-12">
                  {DetailProduct.map((dataDetail, index) => (
                    <div
                      key={index}
                      className="text-center flex flex-col items-center"
                    >
                      <dataDetail.icon className="h-12 w-12 mb-4" />
                      <h3 className="text-black">{dataDetail.nama_product}</h3>
                    </div>
                  ))}
                </div>
              </DialogBody>
              <DialogFooter className="flex justify-center">
                <Button
                  className="normal-case bg-primary-red"
                  onClick={() => {
                    setOpenModal(false);
                    setOpenModalInfo(true);
                  }}
                >
                  Daftar Sekarang
                </Button>
              </DialogFooter>
            </Dialog>

            {/* modal info */}
            <Dialog
              size="xs"
              open={openModalInfo}
              handler={() => setOpenModalInfo(true)}
              className="bg-primary-success-100"
            >
              <DialogHeader className="justify-end">
                <IconButton
                  color="blue-gray"
                  size="sm"
                  variant="text"
                  onClick={() => setOpenModalInfo(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </IconButton>
              </DialogHeader>
              <DialogBody className="pb-12 flex flex-col items-center justify-center">
                <IlustrasiSuccess className="w-32 h-32 mb-4" />
                <div className="text-center">
                  <h3 className="text-primary-success-700 text-2xl font-bold">
                    Datamu sudah tersimpan di sistem
                  </h3>
                  <p>
                    Silakan lanjut di cabang GO terdekat untuk melanjutkan
                    proses pendaftaran dan pembayaran di admin
                  </p>
                </div>
              </DialogBody>
            </Dialog>
          </div>
        )}
      </div>
    </div>
  );
};

Product1thn.getLayout = (page: any) => {
  return <HomeLayout>{page}</HomeLayout>;
};
export default Product1thn;
