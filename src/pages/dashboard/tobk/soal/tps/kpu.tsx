import {
  BiSolidRightArrow,
  BiRightArrowAlt,
  BiLeftArrowAlt,
} from "react-icons/bi";
import {
  IconBookmark,
  IconBookmark2,
} from "../../../../../../public/assets/svg";
import { useState } from "react";
import BlankLayout from "@/components/Layouts/BlankLayout";
import SoalTobkKPU from "@/data/SoalTobkKpu";
import ModalKumpulkanTobk from "@/components/AtributComponent/Tobk/ModalKumpulkanTobk";
import { Ratings } from "@/components/ElementComponent";
import { Checkbox } from "@material-tailwind/react";

const SoalTOBK = () => {
  const [saveSoal, setSaveSoal] = useState(true);
  const [ragu, setRagu] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentSoalIndex, setCurrentSoalIndex] = useState(0);
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [answerStatus, setAnswerStatus] = useState(Array(5).fill("belum"));

  const handleOpenModal1 = () => {
    setOpenModal1(!openModal1);
    setOpenModal2(false);
    setOpenModal3(false);
  };

  const handleOpenModal2 = () => {
    setOpenModal1(false);
    setOpenModal2(!openModal2);
    setOpenModal3(false);
  };

  const handleOpenModal3 = () => {
    setOpenModal1(false);
    setOpenModal2(false);
    setOpenModal3(!openModal3);
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
    newAnswerStatus[currentSoalIndex] = ragu ? "belum" : "ragu";
    setAnswerStatus(newAnswerStatus);
  };

  const boxes = Array.from({ length: 5 }, (_, index) => {
    const status = isDone ? "selesai" : "belum";
    return { index: index + 1, status };
  });

  return (
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
          <h5 className="mb-4 font-semibold text-base">
            Kemampuan Penalaran Umum (KPU)
          </h5>
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
        <h5>Mata Uji Saat Ini</h5>
        <h1 className="mb-4 font-bold text-lg">Tes Potensi Skolastik (TPS)</h1>
        <div className="flex gap-x-4 items-center">
          <BiSolidRightArrow />
          <p className="text-sm md:text-base">
            Subtes <b>1</b> dari <b>7</b> : Kemampuan Penalaran Umum (KPU)
          </p>
        </div>
        <h4 className="mt-4">
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
        {/* <Checkbox
            color={answerStatus[currentSoalIndex] === "ragu" ? "orange" : ""}
            checked={answerStatus[currentSoalIndex] === "ragu"}
            onChange={toggleRagu}
          /> */}
        <div className="flex items-center">
          <Checkbox
            checked={answerStatus[currentSoalIndex] === "ragu"}
            onChange={toggleRagu}
            color="amber"
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
          <div>
            {SoalTobkKPU[currentSoalIndex] && (
              <div className="border border-primary-gray shadow-md p-6 rounded-xl">
                <p>{SoalTobkKPU[currentSoalIndex].soal[0]}</p>
                <p className="my-4">{SoalTobkKPU[currentSoalIndex].soal[1]}</p>
                <p>{SoalTobkKPU[currentSoalIndex].soal[2]}</p>
              </div>
            )}
            <ul>
              {/* options */}
              {SoalTobkKPU[currentSoalIndex] &&
                SoalTobkKPU[currentSoalIndex].subSoal.map((sub, index) => (
                  <li
                    key={index}
                    onClick={() => handleOptionClick(index)}
                    className={`flex gap-x-4 items-center border border-primary-gray shadow-md p-6 rounded-xl my-4 cursor-pointer ${
                      selectedOption === index ? "bg-primary-gray-100" : ""
                    } hover:bg-secondary-graylight-300`}
                  >
                    <p className="border-2 border-primary-red text-center uppercase font-semibold rounded-md px-[6px] text-primary-red">
                      {sub.abjad}
                    </p>
                    <p>{sub.pilihan}</p>
                  </li>
                ))}
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
            <button onClick={handleOpenModal1} className="shadow-button !py-2">
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
      <ModalKumpulkanTobk
        openModal1={openModal1}
        handleOpenModal1={handleOpenModal1}
        openModal2={openModal2}
        handleOpenModal2={handleOpenModal2}
        openModal3={openModal3}
        handleOpenModal3={handleOpenModal3}
        title="TOBK 1"
        partTest={1}
        test="KPU"
      />
    </div>
  );
};

SoalTOBK.getLayout = (page: any) => {
  return <BlankLayout>{page}</BlankLayout>;
};

export default SoalTOBK;
