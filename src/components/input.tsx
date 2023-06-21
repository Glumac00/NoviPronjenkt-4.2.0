import { ReactNode } from "react";

type InputProps = {
  placeholder?: string;
  icon?: ReactNode;
  size?: "md" | "sm" | "lg";
  value: string;
  onChange: (value: string) => void;
  disable?: boolean;
  name?: string;
};

const Input = ({
  placeholder = "",
  icon,
  size = "md",
  value,
  onChange,
  disable = false,
  name,
}: InputProps) => {
  return (
    <div className="input__wrapper">
      <input
        name={name}
        disabled={disable}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        className={`input input--${size} ${icon && "input--hasIcon"} ${
          disable && "input--disable"
        }`}
        type="text"
        placeholder={placeholder}
      />
      <div className="input__icon">{icon}</div>
    </div>
  );
};

export default Input;
