import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  text: string;
  color?: "red" | "green" | "blue";
  size?: "sm" | "md" | "lg";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  text,
  color = "green",
  size = "md",
  ...props
}: ButtonProps) => {
  return (
    <button {...props} className={`btn btn--${color} btn--${size}`}>
      {text}
    </button>
  );
};
export default Button;
