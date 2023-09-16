import { Crown } from "../../../../public/assets/svg";

const Header = () => {
  return (
    <div>
      <div className="flex justify-center mt-12 md:mt-0">
        <Crown className="w-28 h-28" />
      </div>
      <div className="border-2 border-primary-red bg-white rounded-2xl -mt-1 py-4 px-20 max-w-max mx-auto">
        <p className="font-bold text-lg">LEADERBOARD</p>
      </div>
    </div>
  );
};

export default Header;
