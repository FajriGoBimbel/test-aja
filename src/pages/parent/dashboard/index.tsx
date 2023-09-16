import ParentLayout from "@/components/Layouts/ParentLayout";
import LaporanBelajar from "@/components/ParentDashboardComponent/LaporanBelajar";
import React, { useState } from "react";

const Parent = () => {
  return (
    <div className="bg-secondary-graylight-100 min-h-[91.2vh]">
      <div className="container mx-auto px-4 sm:px-0">
        <LaporanBelajar />
      </div>
    </div>
  );
};

Parent.getLayout = (page: any) => {
  return <ParentLayout>{page}</ParentLayout>;
};
export default Parent;
