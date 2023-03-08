import { Pagination } from "react-bootstrap";

const MyPagination = ({ postsPerPage, totalPosts, paginate }) => {
  let active = 2;
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(
      <Pagination.Item key={i} active={i === active}>
        {i}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <Pagination>
        {pageNumbers.map((num) => (
          <Pagination.Item
            key={num}
            active={num === active}
            onClick={() => paginate(num)}
          ></Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default MyPagination;
