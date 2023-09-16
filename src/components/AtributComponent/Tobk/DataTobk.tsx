import { ImInfo } from "react-icons/im";
import { ArrowRight, CheckRounded } from "../../../../public/assets/svg";

interface DataTobkProps {
  isOpen: boolean;
  isDone: boolean;
  onClick: () => void;
  title: string;
  day: string;
  date: string;
  timesStart: string;
  timesEnd: string;
}

const DataTobk = ({
  isOpen,
  isDone,
  onClick,
  title,
  day,
  date,
  timesStart,
  timesEnd,
}: DataTobkProps) => {
  return (
    <div
      role="button"
      tabIndex={0}
      className={`sm:-mt-20 ${
        isOpen
          ? "text-black cursor-pointer"
          : "text-primary-gray-400 cursor-not-allowed"
      }`}
      onClick={isOpen ? onClick : () => {}}
    >
      {isDone ? (
        <div className="flex justify-center gap-x-2">
          <h3 className="font-semibold uppercase">{title}</h3>
          <CheckRounded className="w-5 h-auto" />
        </div>
      ) : (
        <h3 className="font-semibold text-center uppercase">{title}</h3>
      )}
      <div className="text-center text-xs sm:text-base">
        <p className="mt-2 mb-1">
          {day}, {date}
        </p>
        <p>
          <b>Pukul :</b> {timesStart} - {timesEnd} WIB
        </p>
        <div className="flex gap-x-2 justify-center items-center text-xs md:text-sm mt-2">
          <p className="font-bold">Mulai</p>
          <ArrowRight
            className={`w-3 h-3 ${
              isOpen ? "fill-black" : "fill-primary-gray-400"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default DataTobk;
