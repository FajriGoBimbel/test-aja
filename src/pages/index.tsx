import {
  HeroSection,
  AboutSection,
  TOBKSection,
  BerlatihSection,
  ProgramGoSection,
  FasilitasSection,
  TopGuruSection,
  TestimoniMuridSection,
  Faq,
} from "@/components/HomeComponent/Index";
import HomeLayout from "@/components/Layouts/HomeLayout";
import React from "react";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <TOBKSection />
      <BerlatihSection />
      <ProgramGoSection />
      <FasilitasSection />
      <TopGuruSection />
      <TestimoniMuridSection />
      <Faq />
    </div>
  );
};

Home.getLayout = (page: any) => {
  return <HomeLayout>{page}</HomeLayout>;
};
export default Home;
