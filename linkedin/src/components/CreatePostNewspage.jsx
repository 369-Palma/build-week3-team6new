import { FcClapperboard, FcPicture, FcPlanner, FcViewDetails } from "react-icons/fc";
import { FaTimes } from "react-icons/fa";
import { Image, Form, Card, Modal, Button, Col, Row, Container } from "react-bootstrap";
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

  const createNewPost = async (e) => {
    e.preventDefault();

    const newPostToSend = {
      ...newPost,
    };

    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: "POST",
        body: JSON.stringify(newPostToSend),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNzk0NGYxOTNlNjAwMTM4MDdmNWUiLCJpYXQiOjE2Nzc0OTA1MDAsImV4cCI6MTY3ODcwMDEwMH0.pf9G3SwntDHg3iUJZF-olKYGync7u8VErUGV_JFF91Y",
        },
      });
      if (response.ok) {
        const newPostJson = await response.json();
        console.log(newPostJson);
        setNewPost(newPostJson);
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
                <Form.Control className="nav-pills" type="search" placeholder="Avvia un post" onClick={handleShow} />
              </Form>
            </Card.Body>
            <Row className="text-muted justify-content-center">
              <Col xs="2" className="d-flex align-items-center justify-content-center p-2 mx-3 rounded">
                <p className="mb-0 ml-2 text-primary">
                  <FcPicture size={26} />
                  Foto
                </p>
              </Col>
              <Col xs="2" className="d-flex align-items-center justify-content-center p-2 mx-3 rounded">
                <p className="mb-0 ml-2">
                  <FcClapperboard size={26} />
                  Video
                </p>
              </Col>
              <Col xs="2" className="d-flex align-items-center justify-content-center p-2 mx-3 rounded">
                <p className="mb-0 ml-2">
                  <FcPlanner size={26} />
                  Eventi
                </p>
              </Col>

              <Col xs="2" className="d-flex align-items-center justify-content-center p-2 mx-3 rounded">
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
                  <Image src="profile-photo.jpg" alt="" className="start__img" />
                  <span className="d-flex flex-column ml-3">
                    <Card.Text className="">Ciao, cosa vuoi postare?</Card.Text>
                  </span>
                </div>
              </Card.Body>
            </Row>
            <Row>
              {/* Box per inserire il testo del nuovo post */}
              <Form className="" onSubmit={createNewPost}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    style={{ border: "transparent", width: "40vh", marginBottom: "5px" }}
                    value={newPost.text}
                    onChange={(e) =>
                      setNewPost({
                        text: e.currentTarget.value,
                      })
                    }
                  />
                </Form.Group>
                <div className="d-flex">
                  {/* Pulsante per caricare immagine */}
                  <Button variant="light">Carica immagine</Button>
                  <Button variant="light" type="submit">
                    {/* Pulsante per pubblicare il post */}
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
