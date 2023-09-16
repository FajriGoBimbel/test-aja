import TopSkorDatas from "@/data/TopSkorDatas";
import { StarsLeft, StarsRight } from "../../../../public/assets/svg";
import { FormattedNumber } from "@/components/ElementComponent";
import Slider from "react-slick";
import { settings } from "@/utils/SetingSlider";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@material-tailwind/react";

const TopSkor = () => {
  return (
    <div className="lg:mx-16 mx-4 my-10 py-10 border-2 border-primary-red rounded-3xl">
      <div className="flex justify-center gap-x-3 items-center">
        <StarsLeft className="w-8 md:w-28 h-auto" />
        <h1 className="top-skor-leaderboard text-base md:text-2xl text-center text-white font-extrabold">
          TOP SKOR BUKU SAKTI
        </h1>
        <StarsRight className="w-8 md:w-28 h-auto" />
      </div>
      {/* carousel */}
      <Slider {...settings}>
        {TopSkorDatas.map((item, index) => (
          <Card key={index} className="relative px-6 pt-16 pb-12 shadow-none">
            <CardHeader className="mx-auto z-10 bg-white text-black border border-primary-red rounded-xl text-center py-4 w-48">
              <p className="font-semibold">{item.title}</p>
            </CardHeader>
            <CardBody className="bg-primary-red z-0 -mt-8 flex justify-center py-24 px-16 rounded-t-[2rem]">
              <item.avatar className="h-40" />
            </CardBody>
            <CardFooter className="bg-white text-black border-2 border-primary-red rounded-b-[2rem] py-6 text-center">
              <p className="font-semibold">{item.name}</p>
              <p className="mt-1">{FormattedNumber(item.score)}</p>
            </CardFooter>
          </Card>
        ))}
      </Slider>
    </div>
  );
};

export default TopSkor;
