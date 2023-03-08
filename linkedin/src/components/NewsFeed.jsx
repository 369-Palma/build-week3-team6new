/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { fetchPosts } from "../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";
import { /* Button, Card,  Pagination, */ Col, Row } from "react-bootstrap";
/* import { FiThumbsUp } from "react-icons/fi";
import { BiCommentDetail, BiShare } from "react-icons/bi";
import { FaTimes } from "react-icons/fa"; */
import { fetchComm } from "../redux/actions";
import PaginationNews from "./Pagination";
import PostTemplate from "./SinglePost";
/* import PostEditModal from "./PostEditModal"; */

function NewsFeed({ posts }) {
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

  //logica per paginazione post

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

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

  return (
    <div>
      <Row className="d-flex justify-content-center">
        <Col xs={6} style={{ width: "700px", maxWidth: "100%" }}>
          {post.map((post) => (
            <PostTemplate key={post.id} />
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default NewsFeed;
