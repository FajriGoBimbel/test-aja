import React, { useState } from "react";
import MenuHome from "@/data/MenuHome";
// import LogoHeader from '../../public/assets/SVGFile/LogoHeader'
import {
  Button,
  MenuItem,
  MenuHandler,
  Avatar,
  MenuList,
  Menu,
  Card,
  Typography,
} from "@material-tailwind/react";
import { FiMenu } from "react-icons/fi";
import MobileMenu from "./MobileMenu";
import { HiChevronDown } from "react-icons/hi2";
import { FaUserGraduate } from "react-icons/fa";
import ListProduct from "@/data/ListProduct";
import { LogoHeader } from "../../public/assets/svg";
import { VscClose } from "react-icons/vsc";
import Link from "next/link";

const NavbarHome = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // const closeMenu = () => setIsMenuOpen(false);

  const renderItems = ListProduct.map(({ title, description, path }) => (
    <Link href={path} key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </Link>
  ));

  return (
    <div className="flex justify-between items-center py-4">
      {openMenu && <MobileMenu />}
      <LogoHeader className="h-12 w-32" />
      <div className="hidden lg:flex gap-8">
        {MenuHome.map((menuData: any, index: number) => (
          <div key={index}>
            {menuData.name === "Produk kami" ? (
              <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
                <MenuHandler>
                  <p className="text-white flex justify-center items-center cursor-pointer">
                    {menuData.name}
                    <HiChevronDown
                      strokeWidth={2}
                      className={`h-3 w-3 ml-2 transition-transform ${
                        isMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </p>
                </MenuHandler>
                <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
                  <Card
                    color="red"
                    shadow={false}
                    variant="gradient"
                    className="col-span-3 grid h-full w-full place-items-center rounded-md"
                  >
                    <FaUserGraduate strokeWidth={1} className="h-28 w-28" />
                  </Card>
                  <ul className="col-span-4 flex w-full flex-col gap-1">
                    {renderItems}
                  </ul>
                </MenuList>
              </Menu>
            ) : (
              <Link href={menuData.path}>
                <p className="text-white cursor-pointer">{menuData.name}</p>
              </Link>
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-4">
        {isLogin ? (
          <Menu placement="bottom-end">
            <MenuHandler>
              <Avatar
                src="/assets/image/avatar.png"
                alt="avatar"
                size="md"
                variant="rounded"
                color="yellow"
                className="w-12 h-12"
              />
            </MenuHandler>
            <MenuList>
              <MenuItem>Menu Item 1</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
              <MenuItem onClick={() => setIsLogin(false)}>Keluar</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <>
            <Link href="/auth/signin">
              <Button className="bg-primary-yellow text-black">
                Masuk / Daftar
              </Button>
            </Link>
          </>
        )}
        <span
          onClick={() => setOpenMenu(!openMenu)}
          className="p-3 bg-primary-red-500 rounded-full hover:bg-red-600 cursor-pointer lg:hidden z-[99]"
        >
          {openMenu ? (
            <VscClose className="h-6 w-6 text-white" />
          ) : (
            <FiMenu className="h-6 w-6 text-white" />
          )}
        </span>
      </div>
    </div>
  );
};

export default NavbarHome;
