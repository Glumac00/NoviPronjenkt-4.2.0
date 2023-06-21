import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  text: string;
  color?: "red" | "green" | "blue";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ text, color = "green", ...props }: ButtonProps) => {
  return (
    <button {...props} className={`btn btn--${color}`}>
      {text}
    </button>
  );
};
export default Button;
