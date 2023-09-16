import TopskorLeaderboard from "@/components/AtributComponent/TopskorLeaderboard";
import InfoSiswa from "@/components/AtributComponent/TopskorLeaderboard/InfoSiswa";

const Dashboard = () => {
  return (
    <div className="container md:mx-auto">
      <InfoSiswa />
      <TopskorLeaderboard />
    </div>
  );
};

export default Dashboard;
