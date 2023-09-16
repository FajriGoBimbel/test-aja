import { useState } from "react";
import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { LogoHeader } from "../../public/assets/svg";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";

const NavbarParent = () => {
  const [currentMenu, setCurrentMenu] = useState("Dashboard");

  return (
    <div className="flex justify-between items-center py-4">
      <div className="flex items-center gap-12">
        <span>
          <Link href="/">
            <LogoHeader className="h-12 w-32" />
          </Link>
        </span>
        <div className="flex gap-4">
          <Link href="/parent/dashboard">
            <MenuItem
              className={`${
                currentMenu == "Dashboard"
                  ? "bg-primary-yellow text-black"
                  : "bg-white text-black"
              } flex gap-4`}
            >
              <RxDashboard className="w-5 h-5" />
              Dashboard
            </MenuItem>
          </Link>
          <Link href="/parent/dashboard/leaderboard">
            <MenuItem
              className={`${
                currentMenu == "Leaderboard"
                  ? "bg-primary-yellow text-black"
                  : "bg-white text-black"
              } flex gap-4`}
            >
              <RxDashboard className="w-5 h-5" />
              Leaderboard
            </MenuItem>
          </Link>
          <Link href="/parent/dashboard/jadwal-siswa">
            <MenuItem
              className={`${
                currentMenu == "Jadwal"
                  ? "bg-primary-yellow text-black"
                  : "bg-white text-black"
              } flex gap-4`}
            >
              <RxDashboard className="w-5 h-5" />
              Jadwal KBM & TST
            </MenuItem>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-12">
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
            <MenuItem>Keluar</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default NavbarParent;
