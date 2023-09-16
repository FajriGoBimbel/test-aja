import {
  Card,
  CardBody,
  MenuItem,
  Tab,
  Tabs,
  TabsHeader,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import { PiBooksDuotone, PiBooksFill } from "react-icons/pi";
import { GiFirePunch, GiFlamingArrow } from "react-icons/gi";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdClose } from "react-icons/md";
import MenuDashboardMobile from "@/data/MenuDashboardMobile";
import { HiHomeModern, HiOutlineHomeModern } from "react-icons/hi2";
import { RiDashboardFill } from "react-icons/ri";

const MobileNav = () => {
  const router = useRouter();
  const [isOpenAllMenu, setIsOpenAllMenu] = useState(false);
  const [currentMenu, setCurrentMenu] = useState("dashboard");

  const data = [
    {
      label: "Dashboard",
      value: "dashboard",
      Icon: HiOutlineHomeModern,
      IconActive: HiHomeModern,
      path: "/dashboard",
    },
    {
      label: "TOBK",
      value: "profile",
      Icon: GiFirePunch,
      IconActive: GiFlamingArrow,
      path: "/dashboard/tobk",
    },
    {
      label: "Buku Sakti",
      value: "settings",
      Icon: PiBooksDuotone,
      IconActive: PiBooksFill,
      path: "/dashboard/buku-sakti",
    },
    {
      label: "More",
      value: "more",
      Icon: RxDashboard,
      IconActive: RiDashboardFill,
      path: "#",
    },
  ];

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0">
      {isOpenAllMenu && (
        <div className="fixed inset-0 bg-white z-[99999] animate-modalMobile overflow-scroll">
          <div className="flex px-4 bg-white fixed top-0 left-0 right-0 sticky justify-end py-4 z-[99999]">
            <span onClick={() => setIsOpenAllMenu(false)}>
              <MdClose className="w-6 h-6" />
            </span>
          </div>
          <div className="px-4">
            {MenuDashboardMobile.map((menuData: any, index: number) => (
              <div key={index}>
                <h3 className="mb-3 text-lg font-bold text-black">
                  {menuData.kategori}
                </h3>
                <div className="mb-6">
                  {menuData.sub.map((menuSub: any, index: number) => (
                    <Card
                      key={index}
                      className="mb-4 shadow-sm hover:bg-secondary-graylight-100"
                    >
                      <Link
                        href={menuSub.path}
                        onClick={() => setIsOpenAllMenu(false)}
                      >
                        <CardBody className="flex gap-6">
                          <div>
                            <menuSub.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="text-md font-bold text-black">
                              {menuSub.name}
                            </h4>
                            <p>{menuSub.deskripsi}</p>
                          </div>
                        </CardBody>
                      </Link>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="flex justify-around bg-white">
        <Tabs value="dashboard" className="bg-white w-full rounded-none">
          <TabsHeader
            style={{ backgroundColor: "white", padding: 0 }}
            className="gap-6"
            indicatorProps={{
              style: {
                backgroundColor: "none",
                borderTopWidth: 4,
                borderColor: "#C7172C",
                borderRadius: 0,
                borderStyle: "solid",
                boxShadow: "none",
              },
            }}
          >
            {data.map(({ label, value, Icon, path, IconActive }) => (
              <div key={value} className="w-full">
                {value !== "more" ? (
                  <Tab
                    onClick={() => setCurrentMenu(value)}
                    value={value}
                    className="shadow-none"
                  >
                    <Link href={path}>
                      <div className="flex flex-col items-center gap-2 pt-2">
                        {currentMenu === value ? (
                          <IconActive className="w-5 h-5" />
                        ) : (
                          <Icon className="w-5 h-5" />
                        )}
                        <p
                          className={`text-xs ${
                            currentMenu === value ? "font-bold" : ""
                          }`}
                        >
                          {label}
                        </p>
                      </div>
                    </Link>
                  </Tab>
                ) : (
                  <Tab
                    value={value}
                    className="shadow-none"
                    onClick={() => {
                      setIsOpenAllMenu(true);
                      setCurrentMenu(value);
                    }}
                  >
                    <div className="flex flex-col items-center gap-2 pt-2">
                      {currentMenu === value ? (
                        <IconActive className="w-5 h-5" />
                      ) : (
                        <Icon className="w-5 h-5" />
                      )}
                      <p
                        className={`text-sm ${
                          currentMenu === value ? "font-bold" : ""
                        }`}
                      >
                        {label}
                      </p>
                    </div>
                  </Tab>
                )}
              </div>
            ))}
          </TabsHeader>
        </Tabs>

        {/* <Card shadow={false}>
          <Link href="/dashboard">
            <CardBody className="flex flex-col items-center gap-2">
              <IoHomeOutline
                className={`h-5 w-5 ${
                  router.pathname === "/dashboard"
                    ? "text-primary-yellow-700"
                    : ""
                }`}
              />
              <p
                className={`text-xs ${
                  router.pathname === "/dashboard" ? "font-bold" : ""
                }`}
              >
                Dashboard
              </p>
            </CardBody>
          </Link>
        </Card>
        <Card shadow={false}>
          <Link href="/dashboard/tobk">
            <CardBody className="flex flex-col items-center gap-2">
              <GiFlamingArrow
                className={`h-5 w-5 ${
                  router.pathname === "/dashboard/tobk"
                    ? "text-primary-yellow-700"
                    : ""
                }`}
              />
              <p
                className={`text-xs ${
                  router.pathname === "/dashboard/tobk" ? "font-bold" : ""
                }`}
              >
                TOBK
              </p>
            </CardBody>
          </Link>
        </Card>
        <Card shadow={false}>
          <Link href="/dashboard/laporan-belajar">
            <CardBody className="flex flex-col items-center gap-2">
              <PiBooksDuotone
                className={`h-5 w-5 ${
                  router.pathname === "/dashboard/laporan-belajar"
                    ? "text-primary-yellow-700"
                    : ""
                }`}
              />
              <p
                className={`text-xs ${
                  router.pathname === "/dashboard/laporan-belajar"
                    ? "font-bold"
                    : ""
                }`}
              >
                Laporan
              </p>
            </CardBody>
          </Link>
        </Card>
        <Card shadow={false}>
          <CardBody className="flex flex-col items-center gap-2">
            <RxDashboard className="w-5 h-5" />
            <p className="text-xs">More</p>
          </CardBody>
        </Card> */}
      </div>
    </div>
  );
};

export default MobileNav;
