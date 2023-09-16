import React from "react";
import Berlatih from "@/data/Berlatih";
import Link from "next/link";
import { ArrowRight } from "../../../public/assets/svg";

const BerlatihSection = () => {
  return (
    <div className="bg-secondary-graylight-100">
      <div className="container md:mx-auto py-8 md:py-16">
        <h1 className="mb-6 ml-4 md:ml-0 text-2xl md:text-3xl font-bold tracking-tight">
          Buku Sakti/Latihan Soal
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 md:gap-x-4 gap-y-4 md:gap-y-8">
          {Berlatih.map((item, index) => (
            <div
              key={index}
              className="bg-primary-red mx-auto py-12 px-4 md:py-16 md:px-10 w-[90%] md:w-4/5 rounded-2xl grid items-center"
            >
              <Link
                href={item.link}
                className="text-white text-[12px] md:text-base font-bold flex justify-between items-center"
              >
                {item.title}
                <ArrowRight className="w-4 h-4 fill-white"/>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BerlatihSection;
