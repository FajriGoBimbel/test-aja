import ParentLayout from "@/components/Layouts/ParentLayout";
import KBMComponent from "@/components/ParentDashboardComponent/JadwalSiswa/KBMComponent";
import TSTComponent from "@/components/ParentDashboardComponent/JadwalSiswa/TSTComponent";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import React from "react";

const Jadwal = () => {
  const data = [
    {
      label: "Jadwal KBM",
      value: "jadwal_kbm",
    },
    {
      label: "Jadwal TST",
      value: "jadwal_tst",
    },
  ];

  return (
    <div>
      <div className="container mx-auto px-4 sm:px-0">
        <h3 className="py-12 font-bold text-2xl text-black">
          Jadwal KBM, Request & Jadwal TST (Time Service Tutorial)
        </h3>
        <div>
          <Tabs id="custom-animation" value="jadwal_kbm">
            <TabsHeader
              // style={{ backgroundColor: "white" }}
              className="rounded-full shadow-sm sm:w-1/2 mx-auto"
              indicatorProps={{
                style: { backgroundColor: "#F9E1D1", borderRadius: "99px" },
              }}
            >
              {data.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody
              className="pt-6"
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
            >
              {data.map(({ value }) => (
                <TabPanel key={value} value={value}>
                  {value === "jadwal_kbm" ? <KBMComponent /> : <TSTComponent />}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

Jadwal.getLayout = (page: any) => {
  return <ParentLayout>{page}</ParentLayout>;
};
export default Jadwal;
