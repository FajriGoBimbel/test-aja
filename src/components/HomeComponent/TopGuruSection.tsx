import TopGuru from "@/data/TopGuru";
import { settings } from "@/utils/SetingSlider";
import { Card, CardBody, CardFooter } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { MdWorkHistory } from "react-icons/md";
import Slider from "react-slick";
import { SiswaTopskor } from "../../../public/assets/image";

const TopGuruSection = () => {
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="my-4 ml-4 md:ml-0 text-2xl md:text-3xl font-bold tracking-tight">
          TOP Guru GO
        </h1>
        <Slider {...settings}>
          {TopGuru.map((menudata: any, index: number) => (
            <div key={index} className="px-4 py-4">
              <Card
                shadow={false}
                className="border-4 border-primary-red rounded-3xl text-black"
              >
                <CardBody className="px-4">
                  <div className="flex items-center gap-x-4">
                    <Image
                      src={SiswaTopskor}
                      alt={menudata.name}
                      className="w-16 h-16 rounded-full border-2 border-primary-red object-cover object-center"
                    />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {menudata.name}
                      </h3>
                      <h4 className="text-sm">{menudata.matapelajaran}</h4>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3 mt-4">
                    <MdWorkHistory className="w-6 h-6 text-primary-red" />
                    <p>{menudata.pengalaman}</p>
                  </div>
                  <p className="font-semibold">{menudata.pencapaian}</p>
                </CardBody>
                <hr className="mx-4 border-2 border-primary-red" />
                <CardFooter className="p-2">
                  {menudata?.content?.map((dataContent: any, index: number) => (
                    <div key={index} className="flex items-center p-2">
                      <div className="mr-2">
                        <AiFillStar className="w-5 h-5 text-primary-red" />
                      </div>
                      <p className="text-sm font-medium">
                        {dataContent.content}
                      </p>
                    </div>
                  ))}
                </CardFooter>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopGuruSection;
