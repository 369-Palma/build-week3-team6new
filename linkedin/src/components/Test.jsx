import {
  FcClapperboard,
  FcPicture,
  FcPlanner,
  FcViewDetails,
} from "react-icons/fc";
import {
  Image,
  Form,
  Card,
  Modal,
  Button,
  Col,
  Row,
  Container,
} from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";

const StartAPost = () => {
  const postInfo = useSelector((state) => state.postInfo);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newPost, setNewPost] = useState({
    text: " ",
  });

  //Upload immagini

  const [fd, setFd] = useState(new FormData());

  const handleFile = (ev) => {
    setFd((prev) => {
      prev.delete("post");
      prev.append("post", ev.target.files[0]); //L'API richiede un "nome" diverso per ogni rotta, per caricare un'immagine ad un post, nel form data andra' inserito un valore con nome "post"
      return prev;
    });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    let res = await fetch(
      `https://striveschool-api.herokuapp.com/api/posts/6401f7caab3c5e001380bf10`,
      {
        method: "POST",
        body: fd,
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU5N2ZiY2ZlYzFjZjAwMTU1YjliMDkiLCJpYXQiOjE2Nzc0ODUyNzYsImV4cCI6MTY3ODY5NDg3Nn0.zZRcvWE_qpD6Gr06xfZqQlVkqzkyl5BJI30JsV9rMqc",
        },
      }
    );
    console.log(res);
  };

  const createNewPost = async (e) => {
    e.preventDefault();

    const newPostToSend = {
      ...newPost,
    };

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          body: JSON.stringify(newPostToSend),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNzAyZGYxOTNlNjAwMTM4MDdmNWEiLCJpYXQiOjE2Nzc0ODgxNzMsImV4cCI6MTY3ODY5Nzc3M30.v4RvPvwPrNqMf1jT8g6IRxX0XpB361UjIv66UzPhULY",
          },
        }
      );
      if (response.ok) {
        const newPostJson = await response.json();
        console.log(newPostJson);
        setNewPost(newPostJson);

        //POST img VA QUI

        let res = await fetch(
          `https://striveschool-api.herokuapp.com/api/posts/`,
          {
            method: "POST",
            body: fd,
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU5N2ZiY2ZlYzFjZjAwMTU1YjliMDkiLCJpYXQiOjE2Nzc0ODUyNzYsImV4cCI6MTY3ODY5NDg3Nn0.zZRcvWE_qpD6Gr06xfZqQlVkqzkyl5BJI30JsV9rMqc",
            },
          }
        );
        console.log(res);

        alert("Post was sent!");
      } else {
        console.log("error");
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div style={{ width: "700px", maxWidth: "100%" }}>
          <Card>
            <Card.Body>
              <Form className="my-4 ">
                <Form.Control
                  className="nav-pills"
                  type="search"
                  placeholder="Avvia un post"
                  onClick={handleShow}
                />
              </Form>
            </Card.Body>
            <Row className="text-muted justify-content-center">
              <Col
                xs="2"
                className="d-flex align-items-center justify-content-center p-2 mx-3 rounded"
              >
                <p className="mb-0 ml-2 text-primary">
                  <FcPicture size={26} />
                  Foto
                </p>
              </Col>
              <Col
                xs="2"
                className="d-flex align-items-center justify-content-center p-2 mx-3 rounded"
              >
                <p className="mb-0 ml-2">
                  <FcClapperboard size={26} />
                  Video
                </p>
              </Col>
              <Col
                xs="2"
                className="d-flex align-items-center justify-content-center p-2 mx-3 rounded"
              >
                <p className="mb-0 ml-2">
                  <FcPlanner size={26} />
                  Eventi
                </p>
              </Col>

              <Col
                xs="2"
                className="d-flex align-items-center justify-content-center p-2 mx-3 rounded"
              >
                <p className="mb-0 ml-2">
                  <FcViewDetails size={26} />
                  Scrivi un articolo
                </p>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
      {/* Modale che si apre quando si clicca sull'input field */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <span id="modal__title">Crea un post</span>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Card.Body>
                <div className="d-flex flex-row">
                  <Image
                    src="profile-photo.jpg"
                    alt=""
                    className="start__img"
                  />
                  <span className="d-flex flex-column ml-3">
                    <Card.Text className="">Ciao, cosa vuoi postare?</Card.Text>
                  </span>
                </div>
              </Card.Body>
            </Row>
            <Row>
              {/* Box per inserire il testo del nuovo post */}
              <Form className="" type="post" onSubmit={createNewPost}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    style={{
                      border: "transparent",
                      width: "40vh",
                      marginBottom: "5px",
                    }}
                    value={newPost.text}
                    onChange={(e) =>
                      setNewPost({
                        text: e.currentTarget.value,
                      })
                    }
                  />
                </Form.Group>
                <div className="d-flex">
                  {/* Pulsante per caricare un'immagine */}
                  <Button variant="light" as="label" htmlFor="file-input">
                    <input
                      id="file-input"
                      type="file"
                      value=""
                      onChange={(e) => handleFile}
                      style={{ display: "none" }}
                    />
                    <FcPicture />
                  </Button>
                  {/* Pulsante per pubblicare */}
                  <Button variant="light" type="submit" onSubmit={handleSubmit}>
                    Pubblica
                  </Button>
                </div>
              </Form>
            </Row>
          </Container>
        </Modal.Body>
        {/* Pulsante chiudi */}
        <Button variant="light" className="ml-2" onClick={handleClose}>
          Chiudi
        </Button>
      </Modal>
    </>
  );
};

export default StartAPost;
