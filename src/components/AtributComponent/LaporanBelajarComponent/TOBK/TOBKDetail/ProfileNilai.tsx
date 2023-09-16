import { Card, CardBody } from "@material-tailwind/react";
import dynamic from "next/dynamic";
import React from "react";
import { ITB } from "../../../../../../public/assets/svg";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const ProfileNilai = () => {
  const series = [
    {
      name: "Series 1",
      data: [80, 50, 30, 40, 100, 20, 40, 100, 20],
    },
  ];
  const options: any = {
    chart: {
      height: 350,
      type: "radar",
    },
    title: {
      text: "Basic Radar Chart",
    },
    xaxis: {
      categories: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "April",
        "May",
        "June",
      ],
    },
  };

  return (
    <div className="w-full sm:w-[80%] mx-auto">
      <ReactApexChart
        className="bg-white"
        series={series}
        options={options}
        type="radar"
        height={350}
        width={"100%"}
      />
      <div className="lg:flex mt-4 gap-4">
        <Card className="w-full mb-4 lg:mb-0">
          <CardBody className="flex gap-4">
            <span>
              <ITB className="w-12 h-12" />
            </span>
            <div>
              <p className="text-base">INSTITUT TEKNOLOGI BANDUNG</p>
              <h3 className="text-xl font-bold text-black">
                SEKOLAH BISNIS & MANAJEMEN
              </h3>
              <p>
                Passing Grade : <span className="font-bold">879</span>
              </p>
              <p>
                Nilai Siswa : <span className="font-bold">879</span>
              </p>
            </div>
          </CardBody>
        </Card>
        <Card className="w-full">
          <CardBody className="flex gap-4">
            <span>
              <ITB className="w-12 h-12" />
            </span>
            <div>
              <p className="text-base">INSTITUT TEKNOLOGI BANDUNG</p>
              <h3 className="text-xl font-bold text-black">
                SEKOLAH BISNIS & MANAJEMEN
              </h3>
              <p>
                Passing Grade : <span className="font-bold">879</span>
              </p>
              <p>
                Nilai Siswa : <span className="font-bold">879</span>
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ProfileNilai;
