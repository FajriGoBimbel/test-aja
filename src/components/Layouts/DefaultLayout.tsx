import { PropsWithChildren } from "react";
import HeaderNav from "../HeaderNav";
import Navbar from "../Navbar";
import FooterSection from "../HomeComponent/FooterSection";
import MobileNav from "../MobileNav";

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div className="bg-gradient-to-b from-primary-error to-secondary-orange sticky fixed top-0 right-0 left-0 z-[99]">
        <div className="container mx-auto px-4 sm:px-0">
          <HeaderNav />
          <Navbar />
          <MobileNav />
        </div>
      </div>
      {children}
      <FooterSection className="hidden sm:flex py-10" />
    </div>
  );
};

export default DefaultLayout;
