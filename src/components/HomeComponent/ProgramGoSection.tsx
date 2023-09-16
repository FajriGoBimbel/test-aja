import React from "react";
import Program from "@/data/Program";
import Link from "next/link";
import { ArrowRight } from "../../../public/assets/svg";

const ProgramGoSection = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <h1 className="ml-4 mt-6 md:ml-0 text-2xl md:text-3xl font-bold tracking-tight">Program Pilihan Ganesha Operation</h1>
        <h4 className="my-2 ml-4 md:ml-0 text-md md:text-xl font-medium">Berbagai Macam Program Pilihan Sesuai Kebutuhanmu</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-x-4 mt-12 mx-4">
          {Program.map((item, index) => (
            <div
              key={index}
              className="relative bg-primary-yellow mb-8 rounded-lg w-full overflow-hidden"
            >
              <div className="absolute bg-primary-yellow-100 opacity-60 rounded-full w-20 h-20 -left-4 -top-6"></div>
              <div className="absolute bg-primary-yellow-100 opacity-60 rounded-full w-12 h-12 -left-4 top-6"></div>
              <item.icon className="mx-auto h-40 mt-8" />
              <div className="mb-12 mx-8">
                <div className="bg-primary-yellow-100 opacity-80 rounded-md p-2 h-auto lg:h-24">
                  <p className="text-sm font-semibold">{item.content}</p>
                </div>
                <Link
                  className="text-xl font-extrabold text-primary-red flex justify-end gap-x-2 items-center mt-2"
                  href={item.link}
                  target="_blank"
                >
                  {item.textLink}
                  <ArrowRight className="w-3 h-3 fill-primary-red" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramGoSection;
