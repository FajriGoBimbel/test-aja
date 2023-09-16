import {
  Card,
  CardBody,
  Tab,
  Tabs,
  TabsHeader,
} from "@material-tailwind/react";
import React from "react";
import { BiSolidMap, BiSolidTimeFive } from "react-icons/bi";
import { GiTeacher } from "react-icons/gi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { ImBook } from "react-icons/im";

const TSTComponent = () => {
  const data = [
    {
      day: "Senin",
      value: "senin",
      month: "September",
      date: "8",
    },
    {
      day: "Kamis",
      value: "kamis",
      month: "September",
      date: "10",
    },
    {
      day: "Jumat",
      value: "jumat",
      month: "September",
      date: "11",
    },
  ];

  return (
    <div className="flex justify-center">
      <Card className="shadow-md border-2 w-full sm:w-[80%]">
        <CardBody>
          <Tabs
            id="custom-animation"
            value="kamis"
            className="flex justify-center"
          >
            <TabsHeader
              style={{ background: "none" }}
              className="rounded-full shadow-sm mx-auto"
              indicatorProps={{
                className: "rounded-xl bg-primary-yellow",
              }}
            >
              {data.map(({ day, value, month, date }) => (
                <Tab
                  key={value}
                  value={value}
                  className="rounded-xl border-2 border-primary-yellow mx-4"
                >
                  <p className="text-lg font-medium">{day}</p>
                  <h3 className="text-3xl font-bold text-black">{date}</h3>
                  <p className="text-md font-medium">{month}</p>
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <hr className="mt-4 border-2" />
        </CardBody>
        <CardBody>
          <div className="flex gap-4 mb-6">
            <div>
              <span>
                <BiSolidTimeFive className="w-6 h-6 text-primary-red" />
              </span>
            </div>
            <div>
              <h3>Kamis, 10 September 2023</h3>
              <p>16.00 WIB - selesai</p>
            </div>
          </div>
          <div className="flex gap-4 mb-6">
            <span>
              <BiSolidMap className="w-6 h-6 text-primary-red" />
            </span>
            <p>Gedung Ganesha Operation PW 36B</p>
          </div>
          <div className="flex gap-4 mb-6">
            <span>
              <ImBook className="w-6 h-6 text-primary-red" />
            </span>
            <p>Matpel : Penalaran Matematika</p>
          </div>
          <div className="flex gap-4 mb-6">
            <span>
              <GiTeacher className="w-6 h-6 text-primary-red" />
            </span>
            <p>Guru : Rusdiyanto</p>
          </div>
          <div className="flex gap-4 mb-6">
            <div>
              <span>
                <HiMiniUserGroup className="w-6 h-6 text-primary-red" />
              </span>
            </div>
            <div>
              <p>Peserta: </p>
              <ol className="list-decimal ml-3">
                <li>Trevor (Ketua)</li>
                <li>M. Arifien</li>
                <li>Salsabila</li>
                <li>Al Fajri</li>
                <li>Syaifal</li>
              </ol>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TSTComponent;
