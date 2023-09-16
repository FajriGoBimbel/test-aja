/* eslint-disable react-hooks/rules-of-hooks */
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import {
  CheckRoundedWhite,
  IconBookmark,
  IconBookmark2,
  XRoundedWhite,
} from "../../../../../../public/assets/svg";
import { useState } from "react";
import BlankLayout from "@/components/Layouts/BlankLayout";
import SoalTobkKPU from "@/data/SoalTobkKpu";
import { Ratings } from "@/components/ElementComponent";
import { Checkbox } from "@material-tailwind/react";
import Link from "next/link";
import { LogoGO } from "../../../../../../public/assets/PNG";
import Image from "next/image";

const hasilEMWA = () => {
  const [saveSoal, setSaveSoal] = useState(true);
  const [ragu, setRagu] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentSoalIndex, setCurrentSoalIndex] = useState(0);
  const [openModal1, setOpenModal1] = useState(false);
  const [answerStatus, setAnswerStatus] = useState(Array(5).fill("belum"));

  const handleOpenModal1 = () => {
    setOpenModal1(!openModal1);
  };

  const handleOptionClick = (index: any) => {
    setSelectedOption(index);

    const newAnswerStatus = [...answerStatus];
    newAnswerStatus[currentSoalIndex] = "selesai";
    setAnswerStatus(newAnswerStatus);
  };

  const handleNextSoal = () => {
    if (currentSoalIndex < SoalTobkKPU.length - 1) {
      setCurrentSoalIndex(currentSoalIndex + 1);
      setSelectedOption(null);
    }
  };

  const handlePreviousSoal = () => {
    if (currentSoalIndex > 0) {
      setCurrentSoalIndex(currentSoalIndex - 1);
      setSelectedOption(null);
    }
  };

  const isDone = true;
  const totalSoal = 5;
  const isLastSoal = currentSoalIndex === totalSoal - 1;

  const toggleBookmark = () => {
    setSaveSoal(!saveSoal);
  };

  const toggleRagu = () => {
    setRagu(!ragu);
    const newAnswerStatus = [...answerStatus];
    newAnswerStatus[currentSoalIndex] = !ragu ? "ragu" : "selesai";
    setAnswerStatus(newAnswerStatus);
  };

  const boxes = Array.from({ length: 5 }, (_, index) => {
    const status = isDone ? "selesai" : "belum";
    return { index: index + 1, status };
  });

  return (
    <>
      <Image
        src={LogoGO}
        width={1000}
        height={1000}
        alt="Logo GO"
        className="fixed top-32 left-0 right-0 bottom-0 mx-auto w-[40rem] h-auto opacity-40 -z-10"
      />
      <div className="container mx-auto my-12 flex justify-between flex-row-reverse flex-wrap">
        {/* KPU */}
        <div className="timer w-full md:w-1/3">
          <div className="mt-4 md:mt-12 max-w-fit mx-auto md:float-right">
            <h1 className="font-semibold text-base mb-4">
              Kemampuan Penalaran Umum
            </h1>
            <div className="grid gap-x-5 gap-y-4 grid-cols-5">
              {boxes.map((box, index) => (
                <div
                  key={box.index}
                  className={`${
                    answerStatus[index] === "selesai"
                      ? "bg-primary-success-100"
                      : answerStatus[index] === "ragu"
                      ? "bg-primary-yellow-100"
                      : answerStatus[index] === "belum"
                      ? "border border-gray-100"
                      : ""
                  } font-semibold rounded-lg grid items-center w-11 h-11 text-center`}
                >
                  <p>{box.index}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Soal */}
        <div className="w-full md:w-2/3 px-4 md:px-4 mt-8 md:mt-0">
          <div className="flex gap-x-2 items-center mb-6">
            <Link href="./">
              <BiLeftArrowAlt className="w-10 h-10" />
            </Link>
            <div>
              <h5 className="mb-1">EMWA-098764</h5>
              <h1 className="font-semibold text-base">
                Kemampuan Penalaran Umum
              </h1>
            </div>
          </div>
          <h4 className="mt-4 mb-2">
            Nomor <b>1</b> dari <b>10</b> soal
          </h4>
          <h4>
            Tingkat Kesulitan Soal : <b>Sedang</b>
          </h4>
          <Ratings value={3} className="mt-2 mb-4" />
          <div
            role="button"
            tabIndex={0}
            onClick={toggleBookmark}
            className="flex gap-x-1 items-center"
          >
            {saveSoal ? (
              <IconBookmark2 className="w-10 h-10" />
            ) : (
              <IconBookmark className="w-10 h-10" />
            )}
            <p className="text-sm ms:text-base">Simpan Soal</p>
          </div>
          <div className="flex items-center">
            <Checkbox
              color={
                answerStatus[currentSoalIndex] === "ragu" ? "amber" : "green"
              }
              checked={ragu}
              onChange={toggleRagu}
            />
            <p className="text-sm ms:text-base">
              Centang jika ragu-ragu dalam mengerjakan soal
            </p>
          </div>

          <div className="flex gap-x-2 mt-8">
            {SoalTobkKPU[currentSoalIndex] && (
              <div className="font-semibold rounded md:rounded-lg grid items-center w-6 h-6 md:w-11 md:h-11 text-center text-xs md:text-sm p-1 md:p-0 border border-primary-gray">
                {currentSoalIndex + 1}
              </div>
            )}
            <div className="w-auto lg:w-[53vw]">
              {SoalTobkKPU[currentSoalIndex] && (
                <div className="border border-primary-gray shadow-md p-6 rounded-xl">
                  <p>{SoalTobkKPU[currentSoalIndex].soal[0]}</p>
                  <p className="my-4">
                    {SoalTobkKPU[currentSoalIndex].soal[1]}
                  </p>
                  <p>{SoalTobkKPU[currentSoalIndex].soal[2]}</p>
                </div>
              )}
              <ul>
                {/* options */}
                {SoalTobkKPU[currentSoalIndex] &&
                  SoalTobkKPU[currentSoalIndex].subSoal.map((sub, index) => {
                    const isCorrect = false;
                    return (
                      <li
                        key={index}
                        onClick={() => handleOptionClick(index)}
                        className={`flex gap-x-4 items-center border border-primary-gray shadow-md p-6 rounded-xl my-4 cursor-pointer ${
                          isCorrect ? "bg-primary-success" : "bg-primary-red"
                        }`}
                      >
                        <p className="border-2 border-white text-center uppercase rounded-md px-[6px] text-white">
                          {sub.abjad}
                        </p>
                        <p className="text-white">{sub.pilihan}</p>
                        {isCorrect ? (
                          <CheckRoundedWhite className="w-5 h-5" />
                        ) : (
                          <XRoundedWhite className="w-5 h-5" />
                        )}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          {/* Selanjutnya */}
          <div className="flex gap-x-8 items-center justify-end">
            <button
              onClick={handlePreviousSoal}
              className={`flex gap-x-1 items-center ${
                currentSoalIndex === 0 ? "hidden" : "block"
              }`}
            >
              <BiLeftArrowAlt className="w-5 h-auto" />
              <p className="font-semibold">Kembali</p>
            </button>
            {isLastSoal ? (
              <button
                onClick={handleOpenModal1}
                className="shadow-button !py-2"
              >
                Kumpulkan
              </button>
            ) : (
              <button
                onClick={handleNextSoal}
                className="flex gap-x-1 items-center"
              >
                <p className="font-semibold">Selanjutnya</p>
                <BiRightArrowAlt className="w-5 h-auto" />
              </button>
            )}
          </div>
        </div>
        {/* Pembahasan */}
        <div className="mt-12">
          <h2 className="font-semibold mb-3">Pembahasan</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            delectus aliquam dicta voluptas ipsum, provident ut eligendi
            laudantium minima facere vel placeat necessitatibus ipsam voluptate
            eius modi consectetur quaerat voluptatem id nemo molestias cumque
            nostrum! Nobis, aperiam eos facilis tempora provident, nam
            consequuntur dolorum adipisci, labore quaerat at eligendi itaque?
          </p>
          {/* Video Pembahasan */}
          <h2 className="font-semibold mt-8 mb-3">Video Pembahasan</h2>
          <iframe
            className="h-[200px] w-[300px] border-2 border-primary-red rounded-lg"
            src="https://www.youtube.com/embed/rT73Z1IjQd4"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </>
  );
};

hasilEMWA.getLayout = (page: any) => {
  return <BlankLayout>{page}</BlankLayout>;
};

export default hasilEMWA;
