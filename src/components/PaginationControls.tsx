import React from "react";
import { Pagination } from "react-bootstrap";

interface PaginationControlsProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  page,
  totalPages,
  setPage
}) => {
  let paginationItems = [];
  let startPage = page - 2 > 0 ? page - 2 : 1;
  let endPage = startPage + 4 <= totalPages ? startPage + 4 : totalPages;

  for (let number = startPage; number <= endPage; number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === page}
        onClick={() => setPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Pagination>
      <Pagination.First onClick={() => setPage(1)} disabled={page === 1} />
      <Pagination.Prev
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      />
      {paginationItems}
      <Pagination.Next
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
      />
      <Pagination.Last
        onClick={() => setPage(totalPages)}
        disabled={page === totalPages}
      />
    </Pagination>
  );
};

export default PaginationControls;
