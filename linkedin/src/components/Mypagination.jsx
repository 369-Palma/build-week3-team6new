import { Pagination } from "react-bootstrap";

const MyPagination = ({ postsPerPage, totalPosts }) => {
  let active = 2;
  let pageNumbers = [];
  for (
    let number = 1;
    number <= Math.ceil(totalPosts / postsPerPage);
    number++
  ) {
    pageNumbers.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <Pagination>
        {pageNumbers.map((num) => (
          <Pagination.Item key={num} active={num === active}></Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default MyPagination;
