import React, { ReactNode } from "react";
type FieldProps = {
  id: string;
  label: string;
  size?: "md" | "sm" | "lg";
  icon?: ReactNode;
  disable?: boolean;
  value: string;
  onChange: (value: string, id: string) => void;
};
const Field = ({
  icon,
  size = "md",
  disable = false,
  label,
  value,
  onChange,
}: FieldProps) => {
  return (
    <div className="input__wrapper">
      <form>
        <div className="field">
          <label htmlFor={label}>{label}</label>
          <input
            type="text"
            onChange={(e) => onChange(e.target.value, label)}
            value={value}
            className={`input input--${size} ${icon && "input--hasIcon"} ${
              disable && "input--disable"
            }`}
          />
        </div>
      </form>
    </div>
  );
};
export default Field;
