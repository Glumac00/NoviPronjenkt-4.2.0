type DeviderProps = {
  marginTop?: "md" | "sm" | "lg";
  marginBottom?: "md" | "sm" | "lg";
};

const Devider = ({ marginTop = "md", marginBottom = "md" }: DeviderProps) => {
  return (
    <div
      className={`devider devider--mb--${marginBottom} devider--mt--${marginTop}`}
    ></div>
  );
};
export default Devider;
