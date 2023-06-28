import { ButtonHTMLAttributes } from "react";
import PlusIcon from "../assets_icons/plusIcon";

type FloatingButtonProps = {} & ButtonHTMLAttributes<HTMLButtonElement>;

const FloatingButton = ({ ...props }: FloatingButtonProps) => {
  return (
    <button className="btn--floating" {...props}>
      <PlusIcon />
    </button>
  );
};
export default FloatingButton;
