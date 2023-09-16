import TestimoniSiswa from "@/data/TestimoniSiswa";
import { settings } from "@/utils/SetingSlider";
import { Card, CardFooter } from "@material-tailwind/react";
import React from "react";
import Slider from "react-slick";

const TestimoniMuridSection = () => {
  return (
    <div>
      <div className="container mx-auto py-6">
        <h1 className="my-4 ml-4 md:ml-0 text-2xl md:text-3xl font-bold tracking-tight">
          Testimoni Siswa
        </h1>
        <Slider {...settings}>
          {TestimoniSiswa.map((dataSiswa: any, index: number) => (
            <div key={index} className="px-4 py-2">
              <Card
                shadow={false}
                className="border-4 border-primary-red rounded-3xl relative"
              >
                <div className="text-center py-4">
                  <h3>{dataSiswa.name}</h3>
                  <h2 className="font-bold">{dataSiswa.title}</h2>
                </div>
                <div>
                  <iframe
                    className="h-[280px] w-full"
                    src={dataSiswa.link}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <CardFooter className="text-center bg-primary-red text-white">
                  <p>{dataSiswa.description}</p>
                </CardFooter>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimoniMuridSection;
