import BlankLayout from "@/components/Layouts/BlankLayout";
import React from "react";
import { LogoGoWithColor, Segitiga, Star } from "../../../../public/assets/svg";
import { Button, Card, Input } from "@material-tailwind/react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const SignIn = () => {
  return (
    <div>
      <div className="container mx-auto px-4 md:px-0 h-screen flex justify-center items-center">
        <div className="absolute top-0 left-0 right-0">
          <LogoGoWithColor className="w-36 h-20" />
        </div>
        <div className="flex justify-center items-center">
          <Card
            color="transparent"
            className="px-12 py-12 shadow-md border-2 w-full sm:w-1/2 md:w-2/3 relative"
          >
            <Star className="absolute top-24 left-4" />
            <Segitiga className="absolute top-24 right-3" />
            <Link href="/auth/signin">
              <FiArrowLeft className="w-6 h-6 mb-12" />
            </Link>
            <h3 className="text-xl font-bold text-black text-center">
              <span className="bg-primary-red-200">Masuk</span> Sebagai Tamu
            </h3>
            <p className="text-center">
              Latih kemampuanmu dalam menjawab pertanyaan dengan daftar sebagai
              murid
            </p>
            <form className="mt-8 mb-2">
              <div className="mb-4 flex flex-col gap-6">
                <Input size="lg" label="Email" />
                <Input type="password" size="lg" label="Password" />
              </div>
              <Link href="/auth/lupa-password">Lupa Password ?</Link>
              <Link href="/dashboard">
                <Button className="mt-6 shadow-button !max-w-full" fullWidth>
                  Masuk
                </Button>
              </Link>
              <p className="mt-4 text-center font-normal">
                Belum punya akun GO ?{" "}
                <Link href="/auth/signup" className="font-medium text-gray-900">
                  Daftar
                </Link>
              </p>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

SignIn.getLayout = (page: any) => {
  return <BlankLayout>{page}</BlankLayout>;
};
export default SignIn;
