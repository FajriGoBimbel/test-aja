import React from "react";
import { Button } from "@material-tailwind/react";

interface ButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
}

const Buttons = ({ label, className, onClick }: ButtonProps) => {
  return <Button className={className} onClick={onClick}>{label}</Button>;
};

export default Buttons;
