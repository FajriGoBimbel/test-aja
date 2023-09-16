import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "./useCoundownTime";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span className="font-bold text-primary-red">Waktu Anda Habis!!!</span>
    </div>
  );
};

const ShowCounter = ({ hours, minutes, seconds }: any) => {
  return (
    <div className="show-counter flex gap-4 items-center text-center">
      <DateTimeDisplay value={hours} type={"Jam"} isDanger={false} />
      <p>:</p>
      <DateTimeDisplay value={minutes} type={"Menit"} isDanger={false} />
      <p>:</p>
      <DateTimeDisplay value={seconds} type={"Detik"} isDanger={false} />
    </div>
  );
};

const CountdownTimer = ({ targetDate }: any) => {
  const [hours, minutes, seconds] = useCountdown(targetDate);

  if (hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return <ShowCounter hours={hours} minutes={minutes} seconds={seconds} />;
  }
};

export default CountdownTimer;
