import MenuDashboard from "@/data/MenuDashboard";
import { Button, MenuItem } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="hidden sm:flex gap-6 flex-wrap py-4">
      {MenuDashboard.map((MenuData: any, index: number) => (
        <div key={index}>
          <Link href={MenuData.path}>
            <MenuItem
              className={`${
                MenuData.name == "Dashboard"
                  ? "bg-primary-yellow text-black"
                  : "bg-white text-black"
              } flex gap-4`}
            >
              <MenuData.icon className="w-5 h-5" />
              {MenuData.name}
            </MenuItem>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
