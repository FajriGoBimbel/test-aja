import React from "react";
import NavbarParent from "../NavbarParent";

const ParentLayout = ({ children }: any) => {
  return (
    <div>
      <div className="bg-gradient-to-b from-primary-error to-secondary-orange sticky fixed top-0 right-0 left-0 z-[99]">
        <div className="container mx-auto px-4 sm:px-0">
          <NavbarParent />
        </div>
      </div>
      {children}
    </div>
  );
};

export default ParentLayout;
