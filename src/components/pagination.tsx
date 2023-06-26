type PaginationProps = {
  onPaginate: (page: number) => void;
  rpp?: number;
};

const Pagination = ({ onPaginate, rpp }: PaginationProps) => {
  return (
    <div className="pagination">
      {Array(Math.ceil(20 / rpp))
        .fill("")
        .map((page, index) => {
          return (
            <span
              key={index}
              onClick={() => onPaginate(index + 1)}
              className="pagination__item"
            >
              {index + 1}
            </span>
          );
        })}
    </div>
  );
};
export default Pagination;
