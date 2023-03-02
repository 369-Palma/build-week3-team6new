import { BiWorld, BiMessageRoundedDetail } from "react-icons/bi";

import { BsThreeDots } from "react-icons/bs";

import { MdPhotoSizeSelectActual, MdPoll } from "react-icons/md";
import { RiVideoFill, RiHandbagFill, RiSettings2Fill } from "react-icons/ri";

import { IoDocumentText } from "react-icons/io5";
import {
  FcImageFile,
  FcClapperboard,
  FcPicture,
  FcPlanner,
  FcViewDetails,
} from "react-icons/fc";
import {
  MydModalWithGrid,
  Dropdown,
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
import { useSelector, useDispatch } from "react-redux";

const StartAPost = () => {
  const postInfo = useSelector((state) => state.postInfo);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newPost, setNewPost] = useState({
    text: " ",
  });
  const [modalShow, setModalShow] = useState(false);

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
            {/* <Card.Img
              variant="top"
              src={postInfo?.image}
              alt="foto"
              className="fotoTonde ms-2"
            /> */}

            <Card.Body>
              <Form /* onSubmit={handleSubmit} */ className="my-4 ">
                <Form.Control
                  className="nav-pills"
                  type="search"
                  placeholder="Avvia un post"
                  onClick={handleShow}
                  /*    value={}
              onChange={handleChange} */
                />
              </Form>
            </Card.Body>

            <Row className="text-muted post-actions justify-content-center">
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
      {/*   <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
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
                    <Card.Text className="">And Pe</Card.Text>
                    <Card.Subtitle className="text-muted">
                      <Button variant="light" className="anyone__btn">
                        <BiWorld className="mr-2 text-muted" />
                        Chiunque
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="light"
                            split
                            className="dropdown__btn"
                            id="dropdown-split-basic"
                          />

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Azione
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Altra azione
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Button>
                    </Card.Subtitle>
                  </span>
                </div>
              </Card.Body>
            </Row>
            <Row>
              <Form className="" onSubmit={createNewPost}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    as="textarea"
                    placeholder="What do you want to talk about?"
                    rows={5}
                    style={{ border: "transparent", width: "60vh" }}
                    value={newPost.text}
                    onChange={(e) =>
                      setNewPost({
                        text: e.currentTarget.value,
                      })
                    }
                  />
                </Form.Group>
                <div className="d-flex">
                  <Button type="" variant="light" className="hashtag__btn">
                    Aggiungi hashtag
                  </Button>
                  <Button className="post__btn" variant="light" type="submit">
                    Pubblica
                  </Button>
                </div>
              </Form>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer className="justify-content-around">
          <Row className="ml-3 text-muted ">
            <MdPhotoSizeSelectActual className="mr-3" size={23} />
            <RiVideoFill className="mr-3" size={23} />
            <IoDocumentText className="mr-3" size={23} />
            <RiHandbagFill className="mr-3" size={23} />
            <RiSettings2Fill className="mr-3" size={23} />
            <MdPoll className="mr-3" size={23} />
            <BsThreeDots className="mr-2" size={23} />
            <hr />
            <Button variant="light" className="anyone__btn__footer" style={{}}>
              <BiMessageRoundedDetail className="mr-2 text-muted" />
              <small>Chiunque</small>
            </Button>

            <Button
              variant="light"
              className="close__btn ml-2"
              onClick={handleClose}
            >
              Chiudi
            </Button>
          </Row>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default StartAPost;
