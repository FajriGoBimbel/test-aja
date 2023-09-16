import React from "react";
import { Monster11 } from "../../../public/assets/svg";

const ComingSoon = () => {
  return (
    <div className="container mx-auto px-4 sm:px-0 h-screen flex flex-col justify-center items-center">
      <Monster11 className="w-52 h-52" />
      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold mb-2">Coming Soon</h2>
        <p className="mb-4">Produk ini sedang dalam pembuatan, Sabar ya sob!</p>
      </div>
    </div>
  );
};

export default ComingSoon;
