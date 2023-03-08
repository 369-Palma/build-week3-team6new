import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
/* import { PaginationControl } from "react-bootstrap-pagination-control";
 */ import NewsFeed from "./NewsFeed";
import MyPagination from "./Mypagination";

const PaginationNews = () => {
  const post = useSelector((state) => state.posts);

  console.log(post);

  /*   const [page, setPage] = useState(1);
   */ /* const [loading, setLoading] = useState(false); */
  const [posts, setPosts] = useState(post);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(5);
  //gestione posts per pagina
  const indexLastPost = currentPage * postsPerPage;
  const indexFirstPost = indexLastPost - postsPerPage;
  const currentPosts = post.slice(indexFirstPost, indexLastPost);

  /* const pageCount = Math.ceil(post.length / postsPerPage);
   */ return (
    <>
      <NewsFeed {...setPosts(currentPosts)}></NewsFeed>
      <MyPagination
        postsPerPage={postsPerPage}
        totalPosts={post.length}
      ></MyPagination>
    </>
    /*  <PaginationControl
      page={page}
      between={4}
      total={post.slice(0, 30)}
      limit={10}
      changePage={(page) => {
        setPage(page);
        console.log(page);
      }}
      ellipsis={1}
    /> */
  );
};

export default PaginationNews;
