/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { fetchPosts } from "../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";
import { Card, Col, Row } from "react-bootstrap";
import { FiThumbsUp } from "react-icons/fi";
import { BiCommentDetail, BiShare } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";

function NewsFeed() {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts);
  console.log(post);

  const [image, setImage] = useState(null);
  const [formData, setformData] = useState(new FormData());

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const handleImageChange = (ev) => {
    setformData((prev) => {
      prev.delete("post");
      prev.append("post", ev.target.files[0]);
      return prev;
    });
  };

  const handleImageUpload = async (postId) => {
    try {
      formData.append("post", image);

      let response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNzk0NGYxOTNlNjAwMTM4MDdmNWUiLCJpYXQiOjE2Nzc0OTA1MDAsImV4cCI6MTY3ODcwMDEwMH0.pf9G3SwntDHg3iUJZF-olKYGync7u8VErUGV_JFF91Y",
        },
      });
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

  const deletePost = async (postId) => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNzk0NGYxOTNlNjAwMTM4MDdmNWUiLCJpYXQiOjE2Nzc0OTA1MDAsImV4cCI6MTY3ODcwMDEwMH0.pf9G3SwntDHg3iUJZF-olKYGync7u8VErUGV_JFF91Y",
        },
      });
      if (response.ok) {
        alert("Post was deleted!");
        // Aggiorna la lista dei post qui
      } else {
        console.log("error");
        alert("Something went wrong. Be sure to check if the post is yours.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div style={{ width: "700px", maxWidth: "100%" }}>
        {post.map((post) => (
          <Card key={post?.id} style={{ margin: "1rem 0" }}>
            <Card.Img variant="top" src={post?.user?.image} alt="foto" className="fotoTonde ms-2" />
            <Card.Body>
              <Card.Title>{post?.username} said:</Card.Title>
              <Card.Text>{post?.text}</Card.Text>
              {post?.image ? <Card.Img variant="bottom" src={post?.image} alt="fotopost" /> : null}
            </Card.Body>
            <hr className="my-1" />
            <Row className="text-muted post-actions justify-content-center">
              <Col xs="2" className="d-flex align-items-center justify-content-center p-2 mx-3 rounded">
                <div className="mb-0 ml-2 text-primary">
                  <FiThumbsUp /> Like
                </div>
              </Col>
              <Col xs="2" className="d-flex align-items-center justify-content-center p-2 mx-3 rounded">
                <div className="mb-0 ml-2">
                  <BiCommentDetail /> Comment
                </div>
              </Col>
              <Col xs="2" className="d-flex align-items-center justify-content-center p-2 mx-3 rounded">
                <div className="mb-0 ml-2">
                  <BiShare /> Share
                </div>
              </Col>
              {post?.user?._id === "63fc7944f193e60013807f5e" && (
                <>
                  <Col xs="2" className="d-flex align-items-center justify-content-center p-2 mx-3 rounded">
                    <div className="text-danger" style={{ cursor: "pointer" }} onClick={() => deletePost(post._id)}>
                      <FaTimes /> Delete
                    </div>
                  </Col>
                  <Col xs="2" className="d-flex align-items-center justify-content-center p-2 mx-3 rounded">
                    <div className="d-flex align-items-center">
                      <form onSubmit={() => handleImageUpload(post._id)}>
                        <input type="file" onChange={handleImageChange} />
                        <button className="btn btn-success">Send</button>
                      </form>
                    </div>
                  </Col>
                </>
              )}
            </Row>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default NewsFeed;
