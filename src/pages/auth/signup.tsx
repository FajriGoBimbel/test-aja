import BlankLayout from "@/components/Layouts/BlankLayout";
import { Card, CardBody } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";
import {
  Lembaga,
  LogoGoWithColor,
  Ortu,
  Siswa,
  Tamu,
} from "../../../public/assets/svg";

const SignUp = () => {
  return (
    <div>
      <div className="container mx-auto px-4 md:px-0">
        <div>
          <LogoGoWithColor className="w-36 h-20" />
        </div>
        <div className="flex flex-col gap-6 mt-12">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-black ">
              Kamu Daftar Sebagai Siapa?
            </h2>
            <p>
              Sudah punya Akun ?,{" "}
              <Link href="/auth/signin" className="underline text-primary-red">
                Masuk disini
              </Link>
            </p>
          </div>
          <Card className="bg-primary-red shadow-sm text-white rounded-lg w-2/3 cursor-pointer hover:bg-primary-red-600">
            <Link href="/auth/student/signup">
              <CardBody className="flex gap-6">
                <div className="flex items-center">
                  <Siswa className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Siswa</h3>
                  <p>
                    Saya ingin belajar, berlatih, dan bertanding agar semakin
                    mudah mengerjakan soal dan mencapai sekolah/kampus impian
                  </p>
                </div>
              </CardBody>
            </Link>
          </Card>
          <Card className="bg-primary-red shadow-sm text-white rounded-lg w-2/3 cursor-pointer hover:bg-primary-red-600">
            <Link href="/auth/parent/signup">
              <CardBody className="flex gap-6">
                <div className="flex items-center">
                  <Ortu className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Orang Tua</h3>
                  <p>
                    Saya ingin memantau aktivitas dan laporan belajar anak saya
                  </p>
                </div>
              </CardBody>
            </Link>
          </Card>
          <Card className="bg-primary-red shadow-sm text-white rounded-lg w-2/3 cursor-pointer hover:bg-primary-red-600">
            <Link href="/auth/guest/signup">
              <CardBody className="flex gap-6">
                <div className="flex items-center">
                  <Tamu className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Tamu</h3>
                  <p>Saya ingin melakukan uji coba TOBK dan Latihan Soal</p>
                </div>
              </CardBody>
            </Link>
          </Card>
          <Card className="bg-primary-red shadow-sm text-white rounded-lg w-2/3 cursor-pointer hover:bg-primary-red-600">
            <Link href="/auth/lembaga/signup">
              <CardBody className="flex gap-6">
                <div className="flex items-center">
                  <Lembaga className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Lembaga</h3>
                  <p>
                    Saya ingin murid kami mengikuti TOBK, mendapatkan Latihan
                    Soal, dan belajar bersama guru Ganesha Operation
                  </p>
                </div>
              </CardBody>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};

SignUp.getLayout = (page: any) => {
  return <BlankLayout>{page}</BlankLayout>;
};
export default SignUp;
