import { useEffect, useState } from "react";
import Container from "../components/container";
import Devider from "../components/devider";
import Button from "../components/button";

type ProgressProps = {
  value: number;
};

const ProgressBar = ({ value }: ProgressProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(value > 100 ? 100 : value < 0 ? 0 : value);
  }, [value]);

  const handleMinusClick = () => {
    setProgress((prevProgress) => {
      const newProgress = prevProgress - 5;
      return newProgress < 0 ? 0 : newProgress;
    });
  };
  const handlePlusClick = () => {
    setProgress((prevProgress) => {
      const newProgress = prevProgress + 5;
      return newProgress > 100 ? 100 : newProgress;
    });
  };
  return (
    <div className="progressbar__container">
      <div className="progressbar__bar" style={{ width: `${progress}%` }}></div>
      <div className="progressbar__value">{progress}</div>
      <Button
        text="-"
        color="blue"
        id="minus-button"
        onClick={handleMinusClick}
        disabled={progress <= 0}
      ></Button>
      <Button
        color="red"
        text="+"
        id="plus-button"
        onClick={handlePlusClick}
        disabled={progress >= 100}
      />
    </div>
  );
};

export default ProgressBar;
