import { useState } from "react";
import Button from "../../components/button";

const Loader = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const handleLoader = () => {
    setIsShown((current) => !current);
    setTimeout(() => {
      setIsShown(false);
    }, 2000);
  };
  return (
    <div>
      <div>Turn on the loader!</div>
      {isShown && (
        <div className="loader__wrapper">
          <div className="loader"></div>
        </div>
      )}
      <Button text="Turn on loader" color="red" onClick={handleLoader} />
    </div>
  );
};
export default Loader;
