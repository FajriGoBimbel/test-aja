import ComingSoon from "@/components/AtributComponent/ComingSoon";
import ParentLayout from "@/components/Layouts/ParentLayout";
import React from "react";

const Leaderboard = () => {
  return (
    <div>
      <ComingSoon />
    </div>
  );
};

Leaderboard.getLayout = (page: any) => {
  return <ParentLayout>{page}</ParentLayout>;
};
export default Leaderboard;
