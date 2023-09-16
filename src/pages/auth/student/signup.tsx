import BlankLayout from "@/components/Layouts/BlankLayout";
import React from "react";
import { LogoGoWithColor } from "../../../../public/assets/svg";
import ComingSoonAuth from "@/components/AtributComponent/ComingSoonAuth";

const SignUp = () => {
  return (
    <div>
      <div className="container mx-auto px-4 md:px-0 h-screen flex justify-center items-center">
        <div className="absolute top-0 left-0 right-0">
          <LogoGoWithColor className="w-36 h-20" />
        </div>
        <ComingSoonAuth />
      </div>
    </div>
  );
};

SignUp.getLayout = (page: any) => {
  return <BlankLayout>{page}</BlankLayout>;
};
export default SignUp;
