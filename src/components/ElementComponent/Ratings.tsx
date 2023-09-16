import React from "react";
import { Rating } from "@material-tailwind/react";

const Ratings = ({ value, className }: any) => {
  let ratedColor: any = "inherit";

  if (value === 1 || value === 2) {
    ratedColor = "green";
  } else if (value === 3) {
    ratedColor = "orange";
  } else if (value === 4 || value === 5) {
    ratedColor = "red";
  }

  return (
    <Rating
      readonly
      ratedColor={ratedColor}
      value={value}
      className={className}
    />
  );
};

export default Ratings;
