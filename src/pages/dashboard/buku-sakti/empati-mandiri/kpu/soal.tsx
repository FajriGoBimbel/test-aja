import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import {
  IconBookmark,
  IconBookmark2,
} from "../../../../../../public/assets/svg";
import { useState } from "react";
import BlankLayout from "@/components/Layouts/BlankLayout";
import SoalTobkKPU from "@/data/SoalTobkKpu";
import { Ratings } from "@/components/ElementComponent";
import { Checkbox } from "@material-tailwind/react";
import { LogoGO } from "../../../../../../public/assets/PNG";
import Image from "next/image";

const SoalEmmaKpu = () => {
  const [saveSoal, setSaveSoal] = useState(true);
  const [ragu, setRagu] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentSoalIndex, setCurrentSoalIndex] = useState(0);
  const [answerStatus, setAnswerStatus] = useState(Array(5).fill("belum"));
  const [userAnswers, setUserAnswers] = useState(Array(5).fill(null));
  const [isDone, setIsDone] = useState(false);
  const [quit, setQuit] = useState(false);
  const [submit, setSubmit] = useState(false);
  const totalSoal = 5;
  const isLastSoal = currentSoalIndex === totalSoal - 1;

  const handleQuit = () => setQuit(!quit);
  const handleSubmit = () => setSubmit(!submit);

  const handleNextSoal = () => {
    if (currentSoalIndex < SoalTobkKPU.length - 1) {
      setCurrentSoalIndex(currentSoalIndex + 1);
      setSelectedOption(null);
    }
  };

  const handlePreviousSoal = () => {
    if (currentSoalIndex > 0) {
      setCurrentSoalIndex(currentSoalIndex - 1);
      setSelectedOption(userAnswers[currentSoalIndex - 1]);
    }
  };

  const toggleBookmark = () => {
    setSaveSoal(!saveSoal);
  };

  const toggleRagu = () => {
    setRagu(!ragu);
    const newAnswerStatus = [...answerStatus];
    newAnswerStatus[currentSoalIndex] = !ragu ? "ragu" : "selesai";
    setAnswerStatus(newAnswerStatus);
  };

  const handleOptionClick = (index: any) => {
    setSelectedOption(index);

    const newAnswerStatus = [...answerStatus];
    newAnswerStatus[currentSoalIndex] = ragu ? "ragu" : "selesai";
    setAnswerStatus(newAnswerStatus);

    const newAnswers = [...userAnswers];
    newAnswers[currentSoalIndex] = index;
    setUserAnswers(newAnswers);
  };

  const handleKumpulkan = () => {
    if (selectedOption !== null) {
      const newAnswerStatus = [...answerStatus];
      newAnswerStatus[currentSoalIndex] = "selesai";
      setAnswerStatus(newAnswerStatus);
    }

    setIsDone(true);
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
          <div className="flex justify-center md:justify-end">
            <div className="flex gap-x-3 items-center border-2 border-primary-red text-black font-bold py-2 px-4 max-w-fit rounded-xl">
              <p className="hour">03</p>
              <span>:</span>
              <p className="minute">00</p>
              <span>:</span>
              <p className="second">00</p>
            </div>
          </div>
          <div className="mt-4 md:mt-12 max-w-fit mx-auto md:float-right">
            <h5 className="mb-4 font-semibold text-base">Kimia</h5>
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
                      ? "border border-primary-red-1000"
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
            <button onClick={handleQuit}>
              <BiLeftArrowAlt className="w-10 h-10" />
            </button>
            <div>
              <h5 className="mb-1">EMPATI MANDIRI</h5>
              <h1 className="font-semibold text-base">
                Kemampuan Penalaran Umum (KPU)
              </h1>
            </div>
          </div>
          <h4 className="mt-4 mb-2">
            Nomor <b>1</b> dari <b>10</b> soal
          </h4>
          {}
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
                    const isOptionSelected = selectedOption === index;
                    // const jawaban = SoalTobkKPU[currentSoalIndex].jawaban;
                    // const abjad = SoalTobkKPU[currentSoalIndex].subSoal.map(
                    //   (sub) => sub.abjad
                    // );
                    // const correctAnswer = abjad.includes(jawaban); // true

                    return (
                      <li
                        key={index}
                        onClick={() => handleOptionClick(index)}
                        className={`flex gap-x-4 items-center border border-primary-gray shadow-md p-6 rounded-xl my-4 cursor-pointer ${
                          isOptionSelected ? "bg-primary-gray-100" : ""
                        }`}
                      >
                        <p className="border-2 border-primary-red text-center uppercase font-semibold rounded-md px-[6px] text-primary-red">
                          {sub.abjad}
                        </p>
                        <p>{sub.pilihan}</p>
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
              <button onClick={handleSubmit} className="shadow-button !py-2">
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
      </div>
    </>
  );
};

SoalEmmaKpu.getLayout = (page: any) => {
  return <BlankLayout>{page}</BlankLayout>;
};

export default SoalEmmaKpu;
