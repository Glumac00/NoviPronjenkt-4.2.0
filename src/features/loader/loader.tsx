type LoaderProps = {
  isActive: boolean;
  text?: string;
};

const Loader = ({ isActive, text }: LoaderProps) => {
  const renderLoader = () => {
    return <div className="loader"></div>;
  };
  return (
    <div>
      {isActive && (
        <>
          <div className="loader__wrapper"></div>
          <div>{text ? text : renderLoader()}</div>
        </>
      )}
    </div>
  );
};
export default Loader;
