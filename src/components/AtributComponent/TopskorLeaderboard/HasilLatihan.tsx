import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface DataBarChartProps {
  series: any;
  options: any;
  width?: string;
  title: string;
}

const HasilLatihan = () => {
  const seriesMP = [
    {
      name: "Inflation",
      data: [20, 30, 40, 100, 40, 30],
    },
  ];

  const optionsMP: any = {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 15,
        dataLabels: {
          position: "top",
        },
      },
    },
    colors: ["#A61325"],
    dataLabels: {
      enabled: true,
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },
    grid: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            position: "bottom",
          },
        },
      },
      {
        breakpoint: 620,
        options: {
          chart: {
            width: "50%",
          },
          legend: {
            position: "bottom",
          },
        },
      },
      {
        breakpoint: 1024,
        options: {
          chart: {
            width: "70%",
          },
          legend: {
            position: "bottom",
          },
        },
      },
      {
        breakpoint: 1280,
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    xaxis: {
      categories: ["MAW", "FIS", "KIM", "BIO", "ING", "IND"],
      position: "bottom",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#A61325",
            colorTo: "#A61325",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
  };

  const seriesTPS = [
    {
      name: "Inflation",
      data: [20, 30, 40, 100],
    },
  ];

  const optionsTPS: any = {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
      //   stacked: true,
      //   stackType: "100%",
    },
    plotOptions: {
      bar: {
        borderRadius: 15,
        dataLabels: {
          position: "top",
        },
      },
    },
    colors: ["#A61325"],
    dataLabels: {
      enabled: true,
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: ["KPU", "KK", "PPU", "KMBM"],
      position: "bottom",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#A61325",
            colorTo: "#A61325",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
  };

  const seriesPM = [
    {
      name: "Inflation",
      data: [20],
    },
  ];

  const optionsPM: any = {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 15,
        dataLabels: {
          position: "top",
        },
      },
    },
    colors: ["#A61325"],
    dataLabels: {
      enabled: true,
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: ["MAP"],
      position: "bottom",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#A61325",
            colorTo: "#A61325",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
  };

  const seriesLB = [
    {
      name: "Inflation",
      data: [20, 30],
    },
  ];

  const optionsLB: any = {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 15,
        dataLabels: {
          position: "top",
        },
      },
    },
    colors: ["#A61325"],
    dataLabels: {
      enabled: true,
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: ["LBI", "LBING"],
      position: "bottom",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#A61325",
            colorTo: "#A61325",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
  };

  const DataBarChartHariIni = [
    {
      title: "Hari Ini",
      value: "hari ini",
      content: [
        {
          series: seriesLB,
          options: optionsLB,
          width: "40%",
          title: "Literasi Bahasa",
        },
        {
          series: seriesPM,
          options: optionsPM,
          width: "25%",
          title: "Penalaran Matematika",
        },
        {
          series: seriesTPS,
          options: optionsTPS,
          width: "70%",
          title: "Tes Potensi Skolastik (TPS)",
        },
        {
          series: seriesMP,
          options: optionsMP,
          title: "Mata Pelajaran Sekolah",
        },
      ],
    },
    {
      title: "Minggu Ini",
      value: "minggu ini",
      content: [
        {
          series: seriesLB,
          options: optionsLB,
          width: "40%",
          title: "Literasi Bahasa",
        },
        {
          series: seriesPM,
          options: optionsPM,
          width: "25%",
          title: "Penalaran Matematika",
        },
        {
          series: seriesTPS,
          options: optionsTPS,
          width: "70%",
          title: "Tes Potensi Skolastik (TPS)",
        },
        {
          series: seriesMP,
          options: optionsMP,
          title: "Mata Pelajaran Sekolah",
        },
      ],
    },
    {
      title: "Bulan Ini",
      value: "bulan ini",
      content: [
        {
          series: seriesLB,
          options: optionsLB,
          width: "40%",
          title: "Literasi Bahasa",
        },
        {
          series: seriesPM,
          options: optionsPM,
          width: "25%",
          title: "Penalaran Matematika",
        },
        {
          series: seriesTPS,
          options: optionsTPS,
          width: "70%",
          title: "Tes Potensi Skolastik (TPS)",
        },
        {
          series: seriesMP,
          options: optionsMP,
          title: "Mata Pelajaran Sekolah",
        },
      ],
    },
  ];

  const values = DataBarChartHariIni.find((item) => item.value === "hari ini");
  const hariIni = values?.value;

  return (
    <div className="mx-4 lg:mx-16 my-10 p-6 lg:p-10 border-2 border-primary-red rounded-3xl">
      <Tabs value={hariIni}>
        <div className="flex flex-wrap gap-x-4 items-center">
          <h2 className="font-semibold">Ini Hasil Latihan Buku Sakti Kamu</h2>
          <TabsHeader
            className="bg-transparent gap-x-6 mt-2 md:mt-0"
            indicatorProps={{
              className: "bg-primary-red-100 shadow-md !text-black",
            }}
          >
            {DataBarChartHariIni.map(({ title, value }) => (
              <Tab
                className="max-w-fit bg-white px-2 py-1 shadow-md rounded-lg"
                key={value}
                value={value}
              >
                {title}
              </Tab>
            ))}
          </TabsHeader>
        </div>
        <h1 className="text-center font-semibold mt-8">Target Soal Siswa</h1>
        <TabsBody>
          {DataBarChartHariIni.map((item, index) => (
            <TabPanel
              className="justify-center grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 w-full p-0"
              key={index}
              value={item.value}
            >
              {item.content.map((content, index) => (
                <div
                  className="flex flex-col items-center justify-center"
                  key={index}
                >
                  <ReactApexChart
                    series={content.series}
                    options={content.options}
                    type="bar"
                    height={350}
                    width={content.width}
                  />
                  <div className="rounded-lg border border-primary-red p-2 w-[80%] mx-auto">
                    <h3 className="text-xs md:text-sm text-black text-center font-semibold">
                      {content.title}
                    </h3>
                  </div>
                </div>
              ))}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default HasilLatihan;
