import BlankLayout from "@/components/Layouts/BlankLayout";
import React from "react";
import { LogoGoWithColor, Segitiga, Star } from "../../../../public/assets/svg";
import { Card, Input, Button, Checkbox } from "@material-tailwind/react";
import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

const SignUp = () => {
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
            <Link href="/auth/signup">
              <FiArrowLeft className="w-6 h-6 mb-12" />
            </Link>
            <h3 className="text-xl font-bold text-black text-center">
              <span className="bg-primary-red-200">Daftar</span> Sebagai Ortu
            </h3>
            <p className="text-center">
              Latih kemampuanmu dalam menjawab pertanyaan dengan daftar sebagai
              murid
            </p>
            <form className="mt-8 mb-2">
              <div className="mb-4 flex flex-col gap-6">
                <Input size="lg" label="Nama Lengkap" />
                <div className="flex">
                  <Button
                    ripple={false}
                    variant="text"
                    color="blue-gray"
                    className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                  >
                    +62
                  </Button>
                  <Input
                    type="tel"
                    placeholder="Mobile Number"
                    className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    containerProps={{
                      className: "min-w-0",
                    }}
                  />
                </div>
                <Input size="lg" label="Email" />
                <Input type="password" size="lg" label="Password" />
                <Input type="password" size="lg" label="Confirm Password" />
              </div>
              <Checkbox
                label={
                  <p className="flex items-center font-normal">
                    I agree the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-gray-900"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </p>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <Button className="mt-6 shadow-button !max-w-full" fullWidth>
                Daftar
              </Button>
              <p className="mt-4 text-center font-normal">
                Sudah punya akun GO ?{" "}
                <Link href="/auth/signin" className="font-medium text-gray-900">
                  Masuk
                </Link>
              </p>
            </form>
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
