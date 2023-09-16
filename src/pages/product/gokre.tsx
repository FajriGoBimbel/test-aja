import HomeLayout from "@/components/Layouts/HomeLayout";
import { useState } from "react";
import Select from "react-select";
import { IlustrasiEmptyProduct, Reguler } from "../../../public/assets/svg";
import {
  Button,
  Card,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import ProductDiJual from "@/data/ProductDiJual";
import DetailProduct from "@/data/DetailProduct";

const GoKre = () => {
  const [IsProductEmpty, setIsProductEmpty] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState(false);

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
        <div className="text-center pt-6 sm:pt-12 pb-2 sm:pb-6">
          <h2 className="font-bold text-2xl mb-3">
            Kamu Pilih Program GO KREASI Tahun Ajaran 2023/2024
          </h2>
          <p>
            Program GO KREASI adalah program GO Bimbel Online dimana kamu
            mendapatkan full akses pada aplikasi GO yaitu GO KREASI untuk
            mengerjakan Buku Sakti (kumpulan latihan soal+pembahasan), TOBK,
            Racing Soal, Leaderboard, Social Network, Laporan Belajar, Rencana
            Belajar, Video Pembelajaran, Video Solusi dan lainnya
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
            <Dialog
              size="xl"
              open={openModal}
              handler={() => setOpenModal(false)}
            >
              <DialogHeader>
                <Reguler className="w-24 h-24" />
                <div className="text-center w-full">
                  <h3>
                    TWT 12 SMA GO KREASI Materi Sekolah & SNBT Tahun Ajaran
                    2023/2024
                  </h3>
                  <p>Rp2.800.000</p>
                </div>
              </DialogHeader>
              <DialogBody divider className="py-12">
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
              <DialogFooter>
                <Button
                  variant="text"
                  color="red"
                  onClick={() => setOpenModal(false)}
                  className="mr-1"
                >
                  <span>Cancel</span>
                </Button>
                <Button
                  variant="gradient"
                  color="green"
                  onClick={() => setOpenModal(false)}
                >
                  <span>Confirm</span>
                </Button>
              </DialogFooter>
            </Dialog>
          </div>
        )}
      </div>
    </div>
  );
};

GoKre.getLayout = (page: any) => {
  return <HomeLayout>{page}</HomeLayout>;
};
export default GoKre;
