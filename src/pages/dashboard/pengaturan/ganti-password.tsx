import { Inputs } from "@/components/ElementComponent";
import BlankLayout from "@/components/Layouts/BlankLayout";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@material-tailwind/react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const GantiPassword = () => {
  return (
    <div className="container mx-auto my-8 px-4 md:px-0 md:my-16">
      <div className="flex gap-4 mb-4 lg:mb-12">
        <Link href="/dashboard/pengaturan">
          <FaArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="font-bold text-lg">Ganti Password</h1>
      </div>

      <Card className="mt-40 w-1/3 text-black mx-auto shadow-md border-4 border-primary-red">
        <CardBody>
          <h2 className="text-2xl font-semibold text-center mt-4 mb-6">
            Ganti Password Baru
          </h2>
          <div className="mb-6">
            <Inputs type="password" label="Masukkan Password Lama" />
          </div>
          <div className="mb-6">
            <Inputs type="password" label="Buat Password Baru" />
            <p className="text-xs mt-1">
              <b>Note : </b>Kamu perlu membuat 8-24 karakter huruf, yang terdiri
              dari alfabet kecil, huruf kapital, dan angka
            </p>
          </div>
          <div className="mb-6">
            <Inputs type="password" label="Ulangi Password Baru" />
          </div>
        </CardBody>
        <CardFooter className="pt-0 flex justify-center">
          <button className="shadow-button !text-xs">OK, Simpan</button>
        </CardFooter>
      </Card>
    </div>
  );
};

GantiPassword.getLayout = (page: any) => {
  return <BlankLayout>{page}</BlankLayout>;
};

export default GantiPassword;
