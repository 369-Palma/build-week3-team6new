/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { fetchPosts } from "../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card, Col, Row, Container } from "react-bootstrap";
import { FiThumbsUp } from "react-icons/fi";
import { BiCommentDetail, BiShare } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { fetchComm } from "../redux/actions";
import PaginationNews from "./Pagination";

import PostEditModal from "./PostEditModal";

function NewsFeed() {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts);
  console.log(post);
  const comm = useSelector((state) => state.comm);
  const [image, setImage] = useState(null);
  const [formData, setformData] = useState(new FormData());

  const [text, setText] = useState(post.text);
  const handleSave = (newText) => {
    setText(newText);
  };

  const [selectedPostId, setSelectedPostId] = useState(null);
  // const [id, setId] = useState("")

  useEffect(() => {
    dispatch(fetchPosts());
  }, [post]);

  useEffect(() => {
    dispatch(fetchComm(selectedPostId));
  }, [selectedPostId]);

  console.log(post);
  console.log(comm);

  const handleImageChange = (ev) => {
    setformData((prev) => {
      prev.delete("post");
      prev.append("post", ev.target.files[0]);
      return prev;
    });
  };

  // Fetch per aggiungere un'immagine ad un nostro post già creato precedentemente.
  const handleImageUpload = async (postId) => {
    try {
      // setId(id)

      formData.append("post", image);

      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNzk0NGYxOTNlNjAwMTM4MDdmNWUiLCJpYXQiOjE2Nzc0OTA1MDAsImV4cCI6MTY3ODcwMDEwMH0.pf9G3SwntDHg3iUJZF-olKYGync7u8VErUGV_JFF91Y",
          },
        }
      );
      if (response.ok) {
        alert("Image uploaded!");
        setImage(null);
      } else {
        console.log("error");
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch per eliminare un nostro post già creato precedentemente.
  const deletePost = async (postId) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNzk0NGYxOTNlNjAwMTM4MDdmNWUiLCJpYXQiOjE2Nzc0OTA1MDAsImV4cCI6MTY3ODcwMDEwMH0.pf9G3SwntDHg3iUJZF-olKYGync7u8VErUGV_JFF91Y",
          },
        }
      );
      if (response.ok) {
        alert("Post was deleted!");
      } else {
        console.log("error");
        alert("Something went wrong. Be sure to check if the post is yours.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // logica per paginazione

  const [contentToShow, setContentToShow] = useState(false);
  const [posts, setPosts] = useState(post);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(5);
  //gestione posts per pagina
  const indexLastPost = currentPage * postsPerPage;
  const indexFirstPost = indexLastPost - postsPerPage;
  const currentPosts = post.slice(indexFirstPost, indexLastPost);
  //cambiare pagina al click
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const show5more = () => {
    post.slice(indexFirstPost, indexLastPost);
  };

  /*   const toggleShowMore = () => {
    setContentToShow(!contentToShow);
  }; */

  const ArrowDown = () => <i className="bi bi-chevron-compact-down ml-1"></i>;
  const ArrowUp = () => <i class="bi bi-chevron-compact-up ml-1"></i>;

  return (
    <div>
      <Row className="d-flex justify-content-center">
        <Col xs={6} style={{ width: "700px", maxWidth: "100%" }}>
          {post.slice(0, 4).map((post) => (
            <Card key={post?._id} style={{ margin: "1rem 0" }}>
              <Card.Img
                variant="top"
                src={post?.user?.image}
                alt="foto"
                className="fotoTonde ms-2"
              />
              <Card.Body>
                <Card.Title>{post?.username} said:</Card.Title>
                <Card.Text>{post?.text}</Card.Text>
                {post?.image ? (
                  <Card.Img variant="bottom" src={post?.image} alt="fotopost" />
                ) : null}
              </Card.Body>
              <hr className="my-1" />
              <Row className="text-muted post-actions justify-content-center">
                <Col
                  xs="2"
                  className="d-flex align-items-center justify-content-center p-2 mx-2 rounded"
                >
                  <div className="mb-0 ml-2 text-primary">
                    <FiThumbsUp /> Like
                  </div>
                </Col>
                <Col
                  xs="2"
                  className="d-flex align-items-center justify-content-center p-2 mx-2 rounded"
                >
                  <div className="mb-0 ml-2">
                    <Button
                      // onClick={() => dispatch(fetchComm(post._id))}
                      onClick={() => setSelectedPostId(post._id)}
                    >
                      <BiCommentDetail /> Comment
                    </Button>
                  </div>
                </Col>
                <Col
                  xs="2"
                  className="d-flex align-items-center justify-content-center p-2 mx-2 rounded"
                >
                  <div className="mb-0 ml-2">
                    <BiShare /> Share
                  </div>
                </Col>
                {post?.user?._id === "63fc7944f193e60013807f5e" && (
                  <>
                    <PostEditModal post={post} onSave={handleSave} />

                    <Col
                      xs="2"
                      className="d-flex align-items-center justify-content-center p-2 mx-2 rounded"
                    >
                      <div
                        className="text-danger"
                        style={{ cursor: "pointer" }}
                        onClick={() => deletePost(post._id)}
                      >
                        <FaTimes /> Delete
                      </div>
                    </Col>
                  </>
                )}
              </Row>
              <Row>
                {selectedPostId === post._id && (
                  <Card className="mt-3">
                    <Card.Body>
                      {comm.map((com) => (
                        <div key={com._id} className="mb-2">
                          <p className="mb-0">{com.comment}</p>
                          <small className="text-muted">{com.author}</small>
                        </div>
                      ))}
                    </Card.Body>
                  </Card>
                )}
              </Row>
            </Card>
          ))}
        </Col>

        {post.slice(10, post.length)}
      </Row>
      <Button
        className="btn-connect card-bottom d-flex justify-content-center align-items-center"
        onClick={() => show5more()}
      >
        {contentToShow ? `Show less` : "Show more"}{" "}
        {contentToShow ? ArrowUp() : ArrowDown()}
      </Button>
    </div>
  );
}

export default NewsFeed;
