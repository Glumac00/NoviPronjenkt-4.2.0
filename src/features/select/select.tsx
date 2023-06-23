import { useState } from "react";

import { OptionType } from "./select-page";
import ArrowDown from "../../assets_icons/arrowdown";

type SelectProps = {
  options: OptionType[];
  onChange: (option: OptionType) => void;
  placeholder?: string;
};

const Select = ({
  options,
  onChange,
  placeholder = "Select an option",
}: SelectProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [activeOption, setIsActiveOption] = useState<OptionType | null>(null);

  return (
    <div className="select">
      <div
        className={`select__action ${isActive ? "isActive" : ""}`}
        onClick={() => setIsActive(!isActive)}
      >
        {activeOption ? activeOption.label : placeholder}
        <ArrowDown />
      </div>
      {isActive && (
        <div className="select__list">
          {options.map((option) => {
            return (
              <div
                key={option.value}
                className="select__list__item"
                onClick={() => {
                  onChange(option);
                  setIsActive(false);
                  setIsActiveOption(option);
                }}
              >
                {option.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Select;
