import { ReactNode } from "react";
import StarIcon from "../assets_icons/staricon";

type InputProps = {
  placeholder?: string;
  icon?: ReactNode;
  size?: "md" | "sm" | "lg";
  value: string;
  onChange: (value: string) => void;
};

const Input = ({
  placeholder = "",
  icon,
  size,
  value,
  onChange,
}: InputProps) => {
  return (
    <div className="input__wrapper">
      <input
        onChange={(e) => onChange(e.target.value)}
        value={value}
        className={`input input--${size} ${icon && "input--hasIcon"}`}
        type="text"
        placeholder={placeholder}
      />
      <div className="input__icon">{icon}</div>
    </div>
  );
};

export default Input;
