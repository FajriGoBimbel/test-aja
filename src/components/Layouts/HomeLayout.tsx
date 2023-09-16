import { PropsWithChildren } from "react";
import NavbarHome from "../NavbarHome";
import FooterSection from "../HomeComponent/FooterSection";

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div className="bg-primary-red sticky fixed top-0 left-0 right-0 z-[99]">
        <div className="container mx-auto px-4 sm:px-0">
          <NavbarHome />
        </div>
      </div>
      {children}
      <FooterSection />
    </div>
  );
};

export default HomeLayout;
