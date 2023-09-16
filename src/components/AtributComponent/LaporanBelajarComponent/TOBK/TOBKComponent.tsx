import { Card, CardBody, Radio } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { ITB, IconFK3 } from "../../../../../public/assets/svg";
import dynamic from "next/dynamic";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import UTBKComponent from "./SubTOBK/UTBKComponent";
import ANBKComponent from "./SubTOBK/ANBKComponent";
import STANComponent from "./SubTOBK/STANComponent";
import UjianSekolahComponent from "./SubTOBK/UjianSekolahComponent";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const TOBKComponent = () => {
  const [isChart, setIsChart] = useState(false);
  const [valueRadio, setValueRadio] = useState("utbk");

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
      <div className="sm:flex sm:justify-center sm:gap-4 my-6">
        <Radio
          label={<label className="text-xs sm:text-lg">UTBK</label>}
          value="utbk"
          onChange={() => setValueRadio("utbk")}
          name="color"
          color="red"
          checked={valueRadio === "utbk"}
        />
        <Radio
          label={<label className="text-xs sm:text-lg">ANBK</label>}
          value="anbk"
          onChange={() => setValueRadio("anbk")}
          name="color"
          color="red"
          checked={valueRadio === "anbk"}
        />
        <Radio
          label={<label className="text-xs sm:text-lg">STAN</label>}
          value="stan"
          onChange={() => setValueRadio("stan")}
          name="color"
          color="red"
          checked={valueRadio === "stan"}
        />
        <Radio
          label={<label className="text-xs sm:text-lg">Ujian Sekolah</label>}
          value="ujian_sekolah"
          onChange={() => setValueRadio("ujian_sekolah")}
          name="color"
          color="red"
          checked={valueRadio === "ujian_sekolah"}
        />
      </div>
      {valueRadio === "utbk" ? (
        <UTBKComponent />
      ) : valueRadio === "anbk" ? (
        <ANBKComponent />
      ) : valueRadio === "stan" ? (
        <STANComponent />
      ) : (
        <UjianSekolahComponent />
      )}
    </div>
  );
};

export default TOBKComponent;
