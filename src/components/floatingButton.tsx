import { ButtonHTMLAttributes } from "react";
import PlusIcon from "../assets_icons/plusIcon";
import { useNavigate } from "react-router-dom";

type FloatingButtonProps = {} & ButtonHTMLAttributes<HTMLButtonElement>;

const FloatingButton = ({ ...props }: FloatingButtonProps) => {
  const navigate = useNavigate();
  return (
    <button className="btn--floating" {...props}>
      <PlusIcon />
    </button>
  );
};
export default FloatingButton;
