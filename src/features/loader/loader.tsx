import { useState } from "react";
import Button from "../../components/button";

type LoaderProps = {
  isActive?: boolean;
};

const Loader = ({ isActive }: LoaderProps) => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const handleLoader = () => {
    setIsShown((current) => !current);
    setTimeout(() => {
      setIsShown(false);
    }, 2000);
  };
  return (
    <div>
      {isShown && (
        <div className="loader__wrapper">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};
export default Loader;
