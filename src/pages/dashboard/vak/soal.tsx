import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import { LogoGO } from "../../../../public/assets/PNG";
import { useState } from "react";
import BlankLayout from "@/components/Layouts/BlankLayout";
import vakDatas from "@/data/vakDatas";
import Image from "next/image";
import { Radio } from "@material-tailwind/react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const SoalVAK = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentCategoriIndex, setCurrentCategoriIndex] = useState(0);
  const [currentSoalIndex, setCurrentSoalIndex] = useState(0);
  const [answerStatus, setAnswerStatus] = useState(Array(5).fill("belum"));
  const [userAnswers, setUserAnswers] = useState(Array(5).fill(null));
  const [isDone, setIsDone] = useState(false);
  const totalSoal = 2;
  const isLastSoal = currentSoalIndex === totalSoal - 1;

  const handleNextSoal = () => {
    if (currentSoalIndex < vakDatas[currentCategoriIndex].soals.length - 1) {
      setCurrentSoalIndex(currentSoalIndex + 1);
    } else {
      if (currentCategoriIndex < vakDatas.length - 1) {
        setCurrentCategoriIndex(currentCategoriIndex + 1);
        setCurrentSoalIndex(0);
      } else {
        setIsDone(true);
      }
    }
  };

  const handlePreviousSoal = () => {
    if (currentSoalIndex > 0) {
      setCurrentSoalIndex(currentSoalIndex - 1);
    } else {
      if (currentCategoriIndex > 0) {
        setCurrentCategoriIndex(currentCategoriIndex - 1);
        setCurrentSoalIndex(
          vakDatas[currentCategoriIndex - 1].soals.length - 1
        );
      }
    }
  };

  const handleKumpulkan = () => {
    if (selectedOption !== null) {
      const newAnswerStatus = [...answerStatus];
      newAnswerStatus[currentSoalIndex] = "selesai";
      setAnswerStatus(newAnswerStatus);
    }

    setIsDone(true);
  };

  return (
    <>
      <Image
        src={LogoGO}
        width={1000}
        height={1000}
        alt="Logo GO"
        className="fixed top-32 left-0 right-0 bottom-0 mx-auto w-[40rem] h-auto opacity-40 -z-10"
      />
      <div className="container mx-auto my-12">
        {/* Soal */}
        <div className="w-full px-4 md:px-4 mt-8 md:mt-0">
          <div className="flex gap-x-2 items-center mb-6">
            <button>
              <BiLeftArrowAlt className="w-10 h-10" />
            </button>
            <div>
              <h1 className="mb-1">Tes VAK (Visual, Auditori, Kinestik)</h1>
              {vakDatas[currentSoalIndex] && (
                <h2 className="font-semibold">
                  {vakDatas[currentSoalIndex].kategori}
                </h2>
              )}
            </div>
          </div>
          <h4 className="mt-4 mb-2">
            Nomor <b>1</b> dari <b>40</b> soal
          </h4>
          <h4 className="font-semibold">
            Pilihlah jawaban Ya atau Tidak yang paling mencerminkan sifat sobat,
            ya
          </h4>

          <div className="flex gap-x-2 mt-8">
            {vakDatas[currentSoalIndex] && (
              <div className="font-semibold rounded md:rounded-lg grid items-center w-6 h-6 md:w-11 md:h-11 text-center text-xs md:text-sm p-1 md:p-0 border-2 border-black">
                {currentSoalIndex + 1}
              </div>
            )}
            <table className="w-full mb-12">
              <thead className="">
                <tr>
                  <th>Pertanyaan</th>
                  <th>Ya</th>
                  <th>Tidak</th>
                </tr>
              </thead>
              {vakDatas[currentCategoriIndex] &&
                vakDatas[currentCategoriIndex].soals[currentSoalIndex] && (
                  <tbody>
                    <tr>
                      <td className="w-2/4 px-4 py-16 ">
                        {
                          vakDatas[currentSoalIndex].soals[currentSoalIndex]
                            .soal
                        }
                      </td>
                      <td className="w-1/4 p-2 ">
                        <div className="flex justify-center items-center">
                          <Radio
                            name="type"
                            ripple={false}
                            icon={
                              <BsFillCheckCircleFill className="fill-black" />
                            }
                            className="p-0 transition-all hover:before:opacity-0 border-2 border-black"
                          />
                        </div>
                      </td>
                      <td className="w-1/4 p-2 ">
                        <div className="flex justify-center items-center">
                          <Radio
                            name="type"
                            ripple={false}
                            icon={
                              <BsFillCheckCircleFill className="fill-black" />
                            }
                            className="p-0 transition-all hover:before:opacity-0 border-2 border-black"
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                )}
            </table>
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
              <button className="shadow-button !py-2">Kumpulkan</button>
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

SoalVAK.getLayout = (page: any) => {
  return <BlankLayout>{page}</BlankLayout>;
};

export default SoalVAK;
