import React from "react";
import { LogoGoWithColor, PartyPopper } from "../../../../public/assets/svg";
import { Button, Card, CardBody, Input } from "@material-tailwind/react";
import Link from "next/link";
import BlankLayout from "@/components/Layouts/BlankLayout";

const SignUpValidation = () => {
  return (
    <div>
      <div className="container mx-auto px-4 md:px-0 h-screen flex justify-center items-center">
        <div className="absolute top-0 left-0 right-0">
          <LogoGoWithColor className="w-36 h-20" />
        </div>
        <div className="flex justify-center items-center">
          <Card color="transparent" className="shadow-md border-2">
            <CardBody className="flex flex-col justify-center items-center py-24">
              <PartyPopper className="w-24 h-24 mb-12" />
              <h3 className="text-xl font-bold mb-2">
                Akun Anda Sudah Terdaftar
              </h3>
              <p className="mb-4">
                Akun Anda sudah terdaftar di sistem GO, segera masuk kesistem
                sekarang juga
              </p>
              <Link href="/auth/signin">
                <Button className="mt-6 shadow-button" fullWidth>
                  Masuk
                </Button>
              </Link>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

SignUpValidation.getLayout = (page: any) => {
  return <BlankLayout>{page}</BlankLayout>;
};
export default SignUpValidation;
