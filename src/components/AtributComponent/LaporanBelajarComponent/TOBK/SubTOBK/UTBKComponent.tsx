import { Card, CardBody } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { ITB, Berlatih } from "../../../../../../public/assets/svg";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const UTBKComponent = () => {
  const [isChart, setIsChart] = useState(false);

  useEffect(() => {
    setIsChart(true);
  }, []);

  const seriesDaya = [
    {
      name: "Jumlah Peminat",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
    {
      name: "Daya Tampung",
      data: [12, 51, 25, 31, 79, 22, 59, 61, 108],
    },
  ];

  const optionsDaya: any = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        enabled: false,
      },
    },
    colors: ["#DF6A18", "#FDD100"],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Daya Tampung & Peminat ",
      align: "left",
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: [
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
      ],
    },
  };

  const seriesSimulasi = [
    {
      name: "Passing Grade",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
    {
      name: "Skor TOBK",
      data: [12, 51, 25, 31, 79, 22, 59, 61, 108],
    },
  ];

  const optionsSimulasi: any = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    colors: ["#DF6A18", "#17B26A"],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Simulasi UTBK",
      align: "left",
    },
    grid: {
      show: false,
      //   row: {
      //     borderColor: '#DF6A18',
      //     colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      //     opacity: 0.5
      //   },
    },
    xaxis: {
      categories: [
        "TOBK 1",
        "TOBK 2",
        "TOBK 3",
        "TOBK I1",
        "TOBK I2",
        "TOBK I3",
        "TOBK SI1",
        "TOBK SI2",
        "TOBK SI3",
      ],
    },
  };

  return (
    <div>
      <div className="lg:flex justify-between mb-12 gap-4">
        <Card shadow={false} className="bg-white shadow-lg mb-4 lg:mb-0">
          <CardBody className="flex gap-2 sm:gap-6 items-center relative">
            <div>
              <ITB className="w-16 h-16 sm:h-24 sm:w-24" />
            </div>
            <div>
              <p className="text-[0.6rem] sm:text-sm mb-1">
                INSTITUT TEKNOLOGI BANDUNG
              </p>
              <div className="flex gap-2 items-center">
                <h3 className="font-medium text-black text-xs sm:text-xl mb-1">
                  SEKOLAH BISNIS DAN MANAJEMEN
                </h3>
                <span className="bg-primary-yellow-100 flex items-center text-black text-[10px] font-medium mr-2 px-2.5 py-0.5 rounded-full">
                  SOSHUM
                </span>
              </div>
              <p className="text-xs sm:text-sm">
                Passing Grade: <span className="font-bold">879</span> | Peminat:{" "}
                <span className="font-bold">600</span> | Daya Tampung:{" "}
                <span className="font-bold">150</span>
              </p>
            </div>
          </CardBody>
        </Card>
        <Card shadow={false} className="bg-white shadow-lg">
          <CardBody className="flex gap-2 sm:gap-6 items-center relative">
            <div>
              <ITB className="w-16 h-16 sm:h-24 sm:w-24" />
            </div>
            <div>
              <p className="text-[0.6rem] sm:text-sm mb-1">
                INSTITUT TEKNOLOGI BANDUNG
              </p>
              <div className="flex gap-2 items-center">
                <h3 className="font-medium text-black text-xs sm:text-xl mb-1">
                  SEKOLAH BISNIS DAN MANAJEMEN
                </h3>
                <span className="bg-primary-yellow-100 flex items-center text-black text-[10px] font-medium mr-2 px-2.5 py-0.5 rounded-full">
                  SOSHUM
                </span>
              </div>
              <p className="text-xs sm:text-sm">
                Passing Grade: <span className="font-bold">879</span> | Peminat:{" "}
                <span className="font-bold">600</span> | Daya Tampung:{" "}
                <span className="font-bold">150</span>
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="lg:flex gap-6 mb-12">
        <div className="w-full">
          {isChart && (
            <ReactApexChart
              series={seriesDaya}
              options={optionsDaya}
              type="line"
              height={350}
              width={"100%"}
            />
          )}
        </div>
        <div className="w-full">
          {isChart && (
            <ReactApexChart
              series={seriesSimulasi}
              options={optionsSimulasi}
              type="line"
              height={350}
              width={"100%"}
            />
          )}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4 text-black">List Try Out</h3>
        <div className="flex flex-col gap-4">
          <Link href="/dashboard/laporan-belajar/tobk">
            <Card shadow={false} className="cursor-pointer">
              <CardBody className="flex justify-between items-center">
                <div className="flex gap-2">
                  <span>
                    <Berlatih className="w-5 h-5" />
                  </span>
                  <span>
                    <h3 className="text-md font-medium text-black">
                      TOBK Super Intensif 3
                    </h3>
                    <p className="text-base">18 Mei 2023</p>
                  </span>
                </div>
                <span>
                  <MdOutlineKeyboardArrowRight className="h-6 w-6" />
                </span>
              </CardBody>
            </Card>
          </Link>
          <Link href="/dashboard/laporan-belajar/tobk">
            <Card shadow={false} className="cursor-pointer">
              <CardBody className="flex justify-between items-center">
                <div className="flex gap-2">
                  <span>
                    <Berlatih className="w-5 h-5" />
                  </span>
                  <span>
                    <h3 className="text-md font-medium text-black">
                      TOBK Super Intensif 3
                    </h3>
                    <p className="text-base">18 Mei 2023</p>
                  </span>
                </div>
                <span>
                  <MdOutlineKeyboardArrowRight className="h-6 w-6" />
                </span>
              </CardBody>
            </Card>
          </Link>
          <Link href="/dashboard/laporan-belajar/tobk">
            <Card shadow={false} className="cursor-pointer">
              <CardBody className="flex justify-between items-center">
                <div className="flex gap-2">
                  <span>
                    <Berlatih className="w-5 h-5" />
                  </span>
                  <span>
                    <h3 className="text-md font-medium text-black">
                      TOBK Super Intensif 3
                    </h3>
                    <p className="text-base">18 Mei 2023</p>
                  </span>
                </div>
                <span>
                  <MdOutlineKeyboardArrowRight className="h-6 w-6" />
                </span>
              </CardBody>
            </Card>
          </Link>
          <Link href="/dashboard/laporan-belajar/tobk">
            <Card shadow={false} className="cursor-pointer">
              <CardBody className="flex justify-between items-center">
                <div className="flex gap-2">
                  <span>
                    <Berlatih className="w-5 h-5" />
                  </span>
                  <span>
                    <h3 className="text-md font-medium text-black">
                      TOBK Super Intensif 3
                    </h3>
                    <p className="text-base">18 Mei 2023</p>
                  </span>
                </div>
                <span>
                  <MdOutlineKeyboardArrowRight className="h-6 w-6" />
                </span>
              </CardBody>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UTBKComponent;
