import { Button, Progress } from "@material-tailwind/react";
import { Monster1 } from "../../../../public/assets/svg";
import { SiswaTopskor } from "../../../../public/assets/image";
import { FormattedNumber } from "@/components/ElementComponent";
import Image from "next/image";
import { Star } from "../../../../public/assets/PNG";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface RankingProps {
  title: string;
  score: number;
  line?: string;
}

const rangking: RankingProps[] = [
  { title: "Nasional", score: 15766, line: "|" },
  { title: "Kota", score: 652, line: "|" },
  { title: "Cabang", score: 554, line: "|" },
  { title: "Gedung", score: 23, line: "|" },
  { title: "Sekolah", score: 11 },
];

const CapaianSkor = () => {
  const hasProfileImage = true;

  const series = [44, 55];
  const options: any = {
    chart: {
      type: "donut",
    },
    colors: ["#3EBF83", "#EA4654"],
    labels: ["Benar", "Salah"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 280,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div className="mx-4 lg:mx-16 px-6 md:px-12 my-10 py-10 border-2 border-primary-red rounded-3xl">
      <div className="contents lg:flex justify-between items-center">
        <div className="md:flex md:gap-x-4 md:items-center">
          {hasProfileImage ? (
            <Image
              src={SiswaTopskor}
              width={500}
              height={500}
              className="w-28 h-28 rounded-full object-cover object-center mx-auto md:mx-0"
              alt="Siswa Topskor"
            />
          ) : (
            <Monster1 className="w-28 h-28 mx-auto md:mx-0" />
          )}
          <div>
            <h2 className="font-semibold text-xl text-center md:text-left mt-3 md:mt-0 mb-4">
              Ranking Buku Sakti Kamu
            </h2>
            <div className="flex items-center justify-between">
              <div className="flex flex-col md:flex-row">
                {rangking.map((item, index) => (
                  <div key={index} className="flex gap-x-2 items-center">
                    <h3>
                      {item.title}:{" "}
                      <b className="font-bold">{FormattedNumber(item.score)}</b>
                    </h3>
                    <div className="mr-2 hidden lg:block">{item.line}</div>
                  </div>
                ))}
              </div>

              <div className="p-2 block md:hidden">
                <div className="relative">
                  <Image
                    src={Star}
                    width={500}
                    height={500}
                    className="w-24 h-24"
                    alt="Star Topskor"
                  />
                  <p className="absolute top-2 text-sm inset-0 flex items-center justify-center font-semibold">
                    {FormattedNumber(12000)}
                  </p>
                </div>
                <h2 className="text-center text-sm font-bold mt-4">
                  Capaian Skor
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 hidden lg:block">
          <div className="relative">
            <Image
              src={Star}
              width={500}
              height={500}
              className="w-24 h-24"
              alt="Star Topskor"
            />
            <p className="absolute top-2 text-sm inset-0 flex items-center justify-center font-semibold">
              {FormattedNumber(12000)}
            </p>
          </div>
          <h2 className="text-center text-sm font-bold mt-4">Capaian Skor</h2>
        </div>
      </div>

      <div className="block lg:flex justify-between items-center">
        <div className="block lg:flex gap-x-4 my-8">
          <div>
            <h3 className="mb-2">Pengerjaan Soal</h3>
            <Progress
              value={75}
              color="green"
              className="progres h-5 w-full lg:w-[30rem] bg-primary-red-100"
            />
          </div>
          <div>
            <h3 className="mb-1 lg:mb-2 mt-3 lg:mt-0">Target Soal</h3>
            <p>
              <b>{FormattedNumber(10256)}</b> dari{" "}
              <b>{FormattedNumber(12000)}</b>
            </p>
          </div>
        </div>
        <div>
          <ReactApexChart
            series={series}
            options={options}
            type="donut"
            height={350}
            width={"100%"}
          />
        </div>
      </div>
      <div className="flex justify-center lg:justify-end mt-6">
        <Button className="shadow-button" onClick={() => {}}>
          Lihat Detail Skor
        </Button>
      </div>
    </div>
  );
};

export default CapaianSkor;
