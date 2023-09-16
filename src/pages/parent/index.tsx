import BlankLayout from "@/components/Layouts/BlankLayout";
import DashboardCardSiswa from "@/components/ParentDashboardComponent/DashboardCardSiswa";
import React from "react";

const Parent = () => {
  return (
    <div className="container mx-auto px-4 sm:px-0">
      <DashboardCardSiswa />
    </div>
  );
};

Parent.getLayout = (page: any) => {
  return <BlankLayout>{page}</BlankLayout>;
};
export default Parent;
