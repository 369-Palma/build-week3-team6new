import { FcClapperboard, FcPicture, FcPlanner, FcViewDetails } from "react-icons/fc";
import { Form, Card, Modal, Button, Col, Row, Container } from "react-bootstrap";
import { useState } from "react";

const StartAPost = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newPost, setNewPost] = useState({
    text: "",
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
                <Form.Control type="search" placeholder="Scrivi un post..." onClick={handleShow} />
              </Form>
            </Card.Body>
            <Row className="text-muted justify-content-center">
              <Col xs="2" className="d-flex align-items-center justify-content-center p-2 mx-2 rounded">
                <div className="mb-0 ml-2 text-primary">
                  <FcPicture size={26} /> Foto
                </div>
              </Col>
              <Col xs="2" className="d-flex align-items-center justify-content-center p-2 mx-2 rounded">
                <div className="mb-0 ml-2">
                  <FcClapperboard size={26} /> Video
                </div>
              </Col>
              <Col xs="2" className="d-flex align-items-center justify-content-center p-2 mx-2 rounded">
                <div className="mb-0 ml-2">
                  <FcPlanner size={26} /> Eventi
                </div>
              </Col>

              <Col xs="2" className="d-flex align-items-center justify-content-center p-2 mx-2 rounded">
                <div className="mb-0 ml-2">
                  <FcViewDetails size={26} /> Articolo
                </div>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
      {/* Modale che si apre quando si clicca sull'input field */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <span>Crea un post</span>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Card.Body>
                <div className="d-flex flex-row">
                  <span className="d-flex flex-column ml-3">
                    <Card.Text className="">Ciao, che testo vuoi postare?</Card.Text>
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
                    style={{ border: "transparent", width: "46vh", marginBottom: "5px" }}
                    value={newPost.text}
                    onChange={(e) =>
                      setNewPost({
                        text: e.currentTarget.value,
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
        <Button variant="outline-danger" className="mx-5 mb-2" onClick={handleClose}>
          Chiudi
        </Button>
      </Modal>
    </>
  );
};

export default StartAPost;
