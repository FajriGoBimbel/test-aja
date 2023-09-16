import React from "react";
import Tobk from "@/data/Tobk";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import Slider from "react-slick";
import { settings } from "@/utils/SetingSlider";
import { Button } from "@material-tailwind/react";

const TOBKSection = () => {
  return (
    <div className="bg-white">
      <div className="container mb-20 mx-auto">
        <h1 className="my-4 ml-4 md:ml-0 text-2xl md:text-3xl font-bold tracking-tight">
          TOBK GO Nasional
        </h1>
        <Slider {...settings}>
          {Tobk.map((item, index) => (
            <div key={index} className="px-4 py-2">
              <div className="border-4 border-primary-red rounded-3xl text-black">
                <div className="title border-b-4 border-primary-red h-[8rem] grid items-center">
                  <h2 className="uppercase text-center text-2xl font-bold">
                    {item.title}
                  </h2>
                  {item.soonDate && item.soonTime && (
                    <div className="font-semibold text-center -mt-8">
                      <h3>{item.soonDate}</h3>
                      <h3>{item.soonTime}</h3>
                    </div>
                  )}
                </div>
                {item.contents.map((item, index) => (
                  <div key={index} className="flex items-center p-2">
                    <div className="mr-2">
                      <AiFillStar className="w-5 h-5 text-primary-red" />
                    </div>
                    <p className="text-sm font-medium">{item.content}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-6">
                <Link href={item.link}>
                  <Button className="shadow-button">Mulai Uji Coba</Button>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TOBKSection;
