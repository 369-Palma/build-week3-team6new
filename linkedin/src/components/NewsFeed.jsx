import "../components/style/comment.css";
import { useEffect, useState } from "react";
import { fetchPosts, fetchUser } from "../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import { FiThumbsUp } from "react-icons/fi";
import { BiCommentDetail, BiShare } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { fetchComm } from "../redux/actions";

import PostEditModal from "./PostEditModal";

function NewsFeed() {
  // MODAL COMMENTS
  const [showComm, setShowComm] = useState(false);
  const handleCloseComm = () => setShowComm(false);
  const handleShowComm = () => setShowComm(true);
  // MODAL COMMENTS

  // MODAL EDIT COMM
  const [showEditComm, setShowEditComm] = useState(false);
  const handleCloseEditComm = () => setShowEditComm(false);
  const handleShowEditComm = () => setShowEditComm(true);
  // MODAL EDIT COMM

  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts);
  console.log(post);
  const comm = useSelector((state) => state.comm);
  const me = useSelector((state) => state.contentUsers);

  const [newComment, setNewComment] = useState({
    comment: "",
    rate: "",
    elementId: "",
  });
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
    dispatch(fetchUser("me"));
  }, []);

  useEffect(() => {
    dispatch(fetchComm(selectedPostId));
  }, [selectedPostId]);

  console.log(post);
  console.log(comm);
  console.log(newComment);

  // POSTA I COMMENTS>>>>>>>
  const postComm = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(newComment),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: process.env.REACT_APP_API_KEY,
          },
        }
      );
      if (res.ok) {
        // const data = await res.json();
        alert("comment was send to the shadow realm!");
      } else {
        console.log("Badoglio!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  // <<<<<<<POSTA I COMMENTS

  // DELETE COMMENTS>>>>
  const deleteComm = async (commId) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + commId,
        {
          method: "DELETE",
          headers: {
            Authorization: process.env.REACT_APP_API_KEY,
          },
        }
      );
      if (response.ok) {
        alert("comment was deleted!");
      } else {
        console.log("error");
        alert("Something went wrong. Be sure to check if the post is yours.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // <<<<<<<DELETE COMMENTS

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
            Authorization: process.env.REACT_APP_API_KEY,
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

  // PUT DEI COMMENTS
  const postCommEdit = async (commId) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/` + commId,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: process.env.REACT_APP_API_KEY,
          },
          body: JSON.stringify({
            text: newComment.comment,
          }),
        }
      );

      if (response.ok) {
        alert("Post edited correctly!");
      }

      const updatedPost = await response.json();
      return updatedPost;
    } catch (error) {
      console.error("Error:", error);
    }
    // PUT DEI COMMENTS
  };

  // Fetch per eliminare un nostro post già creato precedentemente.
  const deletePost = async (postId) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: process.env.REACT_APP_API_KEY,
          },
        }
      );
      if (response.ok) {
        dispatch(fetchPosts());
      } else {
        console.log("error");
        alert("Something went wrong. Be sure to check if the post is yours.");
      }
    } catch (error) {
      console.log(error);
    }
  };
  // Fetch per eliminare un nostro post già creato precedentemente.

  // PAGINATION

  const [showed, setShowed] = useState(5);

  //funzione per mostrare i post successivi
  const showMore = () => {
    setShowed((prevValue) => prevValue + 5);
  };

  // funzione per mostrare meno post
  const showLess = () => {
    if (showed !== 5) {
      setShowed((prevValue) => prevValue - 5);
    }
  };

  return (
    <div>
      <Row className="d-flex justify-content-center">
        <Col xs={6} style={{ width: "700px", maxWidth: "100%" }}>
          {post.slice(0, showed).map((post) => (
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
                  <div
                    className="mb-0 ml-2"
                    onClick={() => setSelectedPostId(post._id)}
                    style={{ cursor: "pointer" }}
                  >
                    <BiCommentDetail /> Comment
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
                {post?.user?._id === me._id && (
                  // Hardcodato con l'user._id di Giacomo, cambiare!
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

                          <Button onClick={handleShowEditComm}>Edit</Button>
                          <Button
                            onClick={() => deleteComm(com._id)}
                            variant="danger"
                          >
                            Delete
                          </Button>

                          {/* MODAL FOR EDIT COMMENT */}
                          <Modal
                            show={showEditComm}
                            onHide={handleCloseEditComm}
                          >
                            <Modal.Header closeButton>
                              <span>Edit your comment</span>
                            </Modal.Header>
                            <Modal.Body className="show-grid">
                              <Container>
                                <Row>
                                  {/* Box per inserire il testo del post editato*/}
                                  <Form
                                    className=""
                                    onSubmit={
                                      // console.log(com._id)
                                      () => postCommEdit(com._id)
                                    }
                                  >
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                      <Form.Control
                                        as="textarea"
                                        rows={5}
                                        style={{
                                          border: "transparent",
                                          width: "46vh",
                                          marginBottom: "5px",
                                        }}
                                        value={com.comment}
                                        // onChange={(e) => setText(e.target.value)}
                                        onChange={(e) =>
                                          setNewComment({
                                            comment: e.target.value,
                                          })
                                        }
                                      />
                                    </Form.Group>

                                    <div className="d-flex">
                                      {/* Pulsante per pubblicare il post editato*/}
                                      <Button
                                        variant="outline-success"
                                        type="submit"
                                      >
                                        Salva
                                      </Button>
                                    </div>
                                  </Form>
                                </Row>
                              </Container>
                            </Modal.Body>
                            {/* Pulsante chiudi */}
                            <Button
                              variant="outline-danger"
                              className="mx-5 mb-2"
                              onClick={handleCloseEditComm}
                            >
                              Chiudi
                            </Button>
                          </Modal>
                          {/* MODAL FOR EDIT COMMENT */}
                        </div>
                      ))}
                    </Card.Body>
                    <Button onClick={handleShowComm}>Add Comment</Button>
                    {/* // MODAL COMMENTS */}

                    <Modal show={showComm} onHide={handleCloseComm}>
                      <Modal.Header closeButton>
                        <span>Crea un post</span>
                      </Modal.Header>
                      <Modal.Body className="show-grid">
                        <Container>
                          <Row>
                            <Card.Body>
                              <div className="d-flex flex-row">
                                <span className="d-flex flex-column ml-3">
                                  <Card.Text className="">
                                    Ciao, cosa vuoi commentare
                                  </Card.Text>
                                </span>
                              </div>
                            </Card.Body>
                          </Row>
                          <Row>
                            {/* Box per inserire il testo del nuovo post */}
                            <Form className="" onSubmit={postComm}>
                              <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control
                                  as="textarea"
                                  rows={5}
                                  style={{
                                    border: "transparent",
                                    width: "46vh",
                                    marginBottom: "5px",
                                  }}
                                  value={newComment.comment}
                                  onChange={(e) =>
                                    setNewComment({
                                      ...newComment,
                                      comment: e.currentTarget.value,
                                      elementId: post?._id,
                                      rate: 2,
                                    })
                                  }
                                />
                              </Form.Group>

                              <div className="d-flex">
                                {/* Pulsante per pubblicare il post */}
                                <Button variant="outline-success" type="submit">
                                  Pubblica
                                </Button>
                              </div>
                            </Form>
                          </Row>
                        </Container>
                      </Modal.Body>
                      {/* Pulsante chiudi */}
                      <Button
                        variant="outline-danger"
                        className="mx-5 mb-2"
                        onClick={handleCloseComm}
                      >
                        Chiudi
                      </Button>
                    </Modal>
                    {/* // MODAL COMMENTS */}
                  </Card>
                )}
              </Row>
            </Card>
          ))}
        </Col>
      </Row>
      <div className="d-flex justify-content-around me-3 mt-4">
        <Button onClick={showMore}>Show more</Button>
        {showed !== 5 ? (
          <Button variant="danger" onClick={showLess}>
            Show less
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default NewsFeed;
