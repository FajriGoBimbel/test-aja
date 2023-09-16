import AktivitasComponent from "@/components/AtributComponent/LaporanBelajarComponent/AktivitasComponent";
import KuisComponent from "@/components/AtributComponent/LaporanBelajarComponent/Kuis/KuisComponent";
import PresensiComponent from "@/components/AtributComponent/LaporanBelajarComponent/PresensiComponent";
import TOBKComponent from "@/components/AtributComponent/LaporanBelajarComponent/TOBK/TOBKComponent";
import VAKComponent from "@/components/AtributComponent/LaporanBelajarComponent/VAKComponent";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import React from "react";

const LaporanBelajar = () => {
  const data = [
    {
      label: "TOBK",
      value: "tobk",
      desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people
          who are like offended by it, it doesn't matter.`,
    },
    {
      label: "VAK",
      value: "vak",
      desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
    },

    {
      label: "Kuis",
      value: "kuis",
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },

    {
      label: "Presensi",
      value: "presensi",
      desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
    },

    {
      label: "Aktivitas",
      value: "aktivitas",
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  return (
    <div className="bg-secondary-graylight-100">
      <div className="container mx-auto py-12 px-4 sm:px-0">
        <h2 className="text-3xl font-bold text-black mb-12">
          Laporan Belajar Siswa
        </h2>
        <div>
          <Tabs id="custom-animation" value="tobk">
            <TabsHeader
              style={{ backgroundColor: "white" }}
              className="rounded-full shadow-sm"
              indicatorProps={{
                style: { backgroundColor: "#F9E1D1", borderRadius: "99px" },
              }}
            >
              {data.map(({ label, value }) => (
                <Tab key={value} value={value} className="text-xs md:text-lg">
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
            >
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  {value === "tobk" ? (
                    <TOBKComponent />
                  ) : value === "vak" ? (
                    <VAKComponent />
                  ) : value === "kuis" ? (
                    <KuisComponent />
                  ) : value === "presensi" ? (
                    <PresensiComponent />
                  ) : (
                    <AktivitasComponent />
                  )}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default LaporanBelajar;
