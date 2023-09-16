import { Checkbox, Input } from "@material-tailwind/react";
import { ChangeEvent } from "react";

interface InputTextProps {
  type:
    | "text"
    | "number"
    | "email"
    | "password"
    | "image"
    | "date"
    | "file"
    | "hidden"
    | "search"
    | "color";
  label: string;
  className?: string;
  container?: string;
  required?: boolean;
  onClick?: () => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  attention?: string;
  checkbox?: string;
  icon?: any;
}

const InputText = ({
  type,
  label,
  className,
  container,
  required = true,
  onClick,
  onChange,
  attention,
  checkbox,
  icon,
}: InputTextProps) => {
  return (
    <div className={container}>
      <Input
        type={type}
        className={`px-3 py-2 border-2 border-primary-gray-500 rounded-lg text-sm placeholder:text-primary-gray-500/80 placeholder:font-medium w-full ${className}`}
        required={required}
        onClick={onClick}
        onChange={onChange}
        label={label}
        color="blue-gray"
        icon={icon}
      />
      {attention && (
        <span className="text-primary-gray-300 text-xs -my-2">
          *{attention}
        </span>
      )}
      {checkbox && (
        <div className="flex items-center justify-start -my-4 -ml-2">
          <Checkbox
            ripple={false}
            color="green"
            className="!text-primary-gray-300 text-xs uppercase"
            label={
              <span className="text-primary-gray-300 text-xs">{label}</span>
            }
          />
        </div>
      )}
    </div>
  );
};

export default InputText;
