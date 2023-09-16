import Image from "next/image";
import Link from "next/link";
import { Button, Card, CardBody, Carousel } from "@material-tailwind/react";
import { useState } from "react";
import { topLeaderboard } from "@/data/TopLeaderboard";
import {
  ArrowRight,
  StarsLeft,
  StarsRight,
} from "../../../../public/assets/svg";

export const data = topLeaderboard.map(({ category, content }) => (
  <div
    key={category}
    className="flex flex-row-reverse justify-center items-end max-w-[50%] mx-auto mt-4 mb-8"
  >
    {content.map((item, index) => (
      <div key={index} className="text-center w-1/3">
        <Image
          src={item.person}
          width={500}
          height={500}
          alt={item.name}
          className="w-20 h-20 mx-auto rounded-full object-cover object-center"
        />
        <p className="font-semibold text-xs mt-2">{item.name}</p>
        <p className="font-bold text-lg mt-2">Skor {item.score}</p>
        <div
          className={`mx-auto rounded-xl w-28 ${
            index === 0
              ? "bg-primary-red h-[30rem]"
              : index === 1
              ? "bg-secondary-orange h-[25rem]"
              : "bg-primary-yellow h-80"
          }`}
        ></div>
      </div>
    ))}
  </div>
));

const Leaderboard = () => {
  // State untuk melacak indeks data yang sedang ditampilkan
  const [currentIndex, setCurrentIndex] = useState(0);
  // Mendapatkan data kategori yang sedang ditampilkan
  const currentCategory = topLeaderboard[currentIndex].category;

  return (
    <div className="container mx-auto my-10 md:my-20 px-4 sm:px-0">
      <h1 className="font-bold text-2xl mb-12">LEADERBOARD</h1>
      <Card className="max-w-[70%] mb-10 mx-auto border-2 border-primary-red rounded-xl text-black">
        <CardBody>
          <div className="flex justify-center gap-x-3 items-center mt-8">
            <StarsLeft className="w-8 md:w-28 h-auto" />
            <h1 className="top-skor-leaderboard text-base md:text-2xl text-center text-white font-extrabold uppercase">
              TOP SKOR {currentCategory} TOBK
            </h1>
            <StarsRight className="w-8 md:w-28 h-auto" />
          </div>
          <Carousel
            className="mt-10"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i
                        ? "w-8 bg-primary-red"
                        : "w-4 bg-primary-red/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
            prevArrow={({ handlePrev }) => (
              <div className="!absolute top-2/4 left-20 -translate-y-2/4">
                <Button
                  onClick={() => {
                    if (currentIndex > 0) {
                      setCurrentIndex((prevIndex) => prevIndex - 1);
                    }
                    handlePrev();
                  }}
                  className={`border-2 border-primary-red bg-transparent rounded-full !p-0 ${
                    currentIndex === 0 ? "hidden" : "" // Sembunyikan jika di awal
                  }`}
                >
                  <ArrowRight className="w-12 h-12 fill-primary-red rotate-180 pl-1 py-3" />
                </Button>
                <p className="text-sm mt-2 font-semibold text-black text-center">
                  {currentIndex > 0
                    ? topLeaderboard[currentIndex - 1].category
                    : ""}
                </p>
              </div>
            )}
            nextArrow={({ handleNext }) => (
              <div className="!absolute top-2/4 !right-20 -translate-y-2/4">
                <Button
                  onClick={() => {
                    if (currentIndex < topLeaderboard.length - 1) {
                      setCurrentIndex((prevIndex) => prevIndex + 1);
                    }
                    handleNext();
                  }}
                  className={`border-2 border-primary-red bg-transparent rounded-full !p-0 ${
                    currentIndex === topLeaderboard.length - 1 ? "hidden" : "" // Sembunyikan jika di akhir
                  }`}
                >
                  <ArrowRight className="w-12 h-12 fill-primary-red pl-1 py-3" />
                </Button>
                <p className="text-sm mt-2 font-semibold text-black text-center">
                  {currentIndex < topLeaderboard.length - 1
                    ? topLeaderboard[currentIndex + 1].category
                    : ""}
                </p>
              </div>
            )}
          >
            {data}
          </Carousel>
          <Link
            href="./leaderboard/tobk"
            className="flex justify-center items-center gap-x-2 font-semibold my-12"
          >
            Rangking Selengkapnya
            <ArrowRight className="w-2 h-auto fill-black" />
          </Link>
        </CardBody>
      </Card>
      <Card className="max-w-[70%] mb-10 mx-auto border-2 border-primary-red rounded-xl text-black">
        <CardBody>
          <div className="flex justify-center gap-x-3 items-center mt-8">
            <StarsLeft className="w-8 md:w-28 h-auto" />
            <h1 className="top-skor-leaderboard text-base md:text-2xl text-center text-white font-extrabold uppercase">
              TOP SKOR {currentCategory} BUKU SAKTI
            </h1>
            <StarsRight className="w-8 md:w-28 h-auto" />
          </div>
          <Carousel
            className="mt-10"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i
                        ? "w-8 bg-primary-red"
                        : "w-4 bg-primary-red/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
            prevArrow={({ handlePrev }) => (
              <div className="!absolute top-2/4 left-20 -translate-y-2/4">
                <Button
                  onClick={() => {
                    if (currentIndex > 0) {
                      setCurrentIndex((prevIndex) => prevIndex - 1);
                    }
                    handlePrev();
                  }}
                  className={`border-2 border-primary-red bg-transparent rounded-full !p-0 ${
                    currentIndex === 0 ? "hidden" : "" // Sembunyikan jika di awal
                  }`}
                >
                  <ArrowRight className="w-12 h-12 fill-primary-red rotate-180 pl-1 py-3" />
                </Button>
                <p className="text-sm mt-2 font-semibold text-black text-center">
                  {currentIndex > 0
                    ? topLeaderboard[currentIndex - 1].category
                    : ""}
                </p>
              </div>
            )}
            nextArrow={({ handleNext }) => (
              <div className="!absolute top-2/4 !right-20 -translate-y-2/4">
                <Button
                  onClick={() => {
                    if (currentIndex < topLeaderboard.length - 1) {
                      setCurrentIndex((prevIndex) => prevIndex + 1);
                    }
                    handleNext();
                  }}
                  className={`border-2 border-primary-red bg-transparent rounded-full !p-0 ${
                    currentIndex === topLeaderboard.length - 1 ? "hidden" : "" // Sembunyikan jika di akhir
                  }`}
                >
                  <ArrowRight className="w-12 h-12 fill-primary-red pl-1 py-3" />
                </Button>
                <p className="text-sm mt-2 font-semibold text-black text-center">
                  {currentIndex < topLeaderboard.length - 1
                    ? topLeaderboard[currentIndex + 1].category
                    : ""}
                </p>
              </div>
            )}
          >
            {data}
          </Carousel>
          <Link
            href="./leaderboard/buku-sakti"
            className="flex justify-center items-center gap-x-2 font-semibold my-12"
          >
            Rangking Selengkapnya
            <ArrowRight className="w-2 h-auto fill-black" />
          </Link>
        </CardBody>
      </Card>
      <Card className="max-w-[70%] mb-10 mx-auto border-2 border-primary-red rounded-xl text-black">
        <CardBody>
          <div className="flex justify-center gap-x-3 items-center mt-8">
            <StarsLeft className="w-8 md:w-28 h-auto" />
            <h1 className="top-skor-leaderboard text-base md:text-2xl text-center text-white font-extrabold uppercase">
              TOP SKOR {currentCategory} RACING
            </h1>
            <StarsRight className="w-8 md:w-28 h-auto" />
          </div>
          <Carousel
            className="mt-10"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i
                        ? "w-8 bg-primary-red"
                        : "w-4 bg-primary-red/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
            prevArrow={({ handlePrev }) => (
              <div className="!absolute top-2/4 left-20 -translate-y-2/4">
                <Button
                  onClick={() => {
                    if (currentIndex > 0) {
                      setCurrentIndex((prevIndex) => prevIndex - 1);
                    }
                    handlePrev();
                  }}
                  className={`border-2 border-primary-red bg-transparent rounded-full !p-0 ${
                    currentIndex === 0 ? "hidden" : "" // Sembunyikan jika di awal
                  }`}
                >
                  <ArrowRight className="w-12 h-12 fill-primary-red rotate-180 pl-1 py-3" />
                </Button>
                <p className="text-sm mt-2 font-semibold text-black text-center">
                  {currentIndex > 0
                    ? topLeaderboard[currentIndex - 1].category
                    : ""}
                </p>
              </div>
            )}
            nextArrow={({ handleNext }) => (
              <div className="!absolute top-2/4 !right-20 -translate-y-2/4">
                <Button
                  onClick={() => {
                    if (currentIndex < topLeaderboard.length - 1) {
                      setCurrentIndex((prevIndex) => prevIndex + 1);
                    }
                    handleNext();
                  }}
                  className={`border-2 border-primary-red bg-transparent rounded-full !p-0 ${
                    currentIndex === topLeaderboard.length - 1 ? "hidden" : "" // Sembunyikan jika di akhir
                  }`}
                >
                  <ArrowRight className="w-12 h-12 fill-primary-red pl-1 py-3" />
                </Button>
                <p className="text-sm mt-2 font-semibold text-black text-center">
                  {currentIndex < topLeaderboard.length - 1
                    ? topLeaderboard[currentIndex + 1].category
                    : ""}
                </p>
              </div>
            )}
          >
            {data}
          </Carousel>
          <Link
            href="./leaderboard/racing"
            className="flex justify-center items-center gap-x-2 font-semibold my-12"
          >
            Rangking Selengkapnya
            <ArrowRight className="w-2 h-auto fill-black" />
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default Leaderboard;
