import { Dialog, DialogBody } from "@material-tailwind/react";
import { XMark } from "../../../../public/assets/svg";
import { useState } from "react";
import Link from "next/link";

const Logout = () => {
  const [logout, setLogout] = useState(false);
  const handleLogout = () => setLogout(!logout);
  return (
    <Dialog
      className="border-4 border-primary-red rounded-3xl px-2 h-fit"
      open={logout}
      size="sm"
      handler={handleLogout}
    >
      <DialogBody
        divider
        className="h-auto text-black text-center border-y-0 font-poppins"
      >
        <div className="flex justify-end items-center mt-2 mb-6 relative">
          <XMark
            className="w-4 h-4 cursor-pointer fixed"
            onClick={handleLogout}
          />
        </div>
        {/* START:Content */}
        <h1>Yakin Mau Logout?</h1>
        <p>Apakah sobat yakin mau log out dari akun ini?</p>
        {/* END:Content */}
        <div className="flex justify-end gap-x-4 items-center mt-6">
          <Link href="./" className="outline-shadow-button !py-3 text-xs">
            Ya
          </Link>
          <button
            onClick={handleLogout}
            className="shadow-button !py-3 !px-6 text-xs"
          >
            Tidak
          </button>
        </div>
      </DialogBody>
    </Dialog>
  );
};

export default Logout;
