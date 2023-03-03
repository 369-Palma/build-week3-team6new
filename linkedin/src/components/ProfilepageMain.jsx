/* eslint-disable react-hooks/exhaustive-deps */
import {
  Container,
  Col,
  Card,
  Row,
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import { HiPlus, HiOutlinePencil } from "react-icons/hi";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { fetchUser } from "../redux/actions/index";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProfileImgModal from "./ProfileImgModal";

const UserProfile = () => {
  // this modal for profile
  const [lgShow, setLgShow] = useState(false);

  const handleShow = () => setLgShow(true);
  // this modal for profile

  const dispatch = useDispatch();
  //const handleShow = () => setLgShow(true);
  const profileStore = useSelector((state) => state.contentUsers);
  useEffect(() => {
    dispatch(fetchUser("me"));
  }, []);
  console.log(profileStore);

  return (
    <>
      {/* Profile section */}
      <Card>
        <Container>
          <Row className="p-background">
            <img
              src="https://www.e26.it/wp-content/uploads/2018/07/fb-luglio-2018.png"
              alt=""
            />
          </Row>
          <Row className="profile ml-1">
            <img
              className="img-fluid fotoUser"
              src={profileStore.image}
              alt="userimage"
            />
          </Row>
          {/**MODALE IMMAGINE PROFILO **/}
          <ProfileImgModal />
          {/**MODALE IMMAGINE PROFILO **/}
          <Row>
            <Col className="userdetail" xs={12} md={8}>
              <h4 className="name mb-0">
                {profileStore.name} {profileStore.surname}
              </h4>
              <p className="my-0 occupation">{profileStore.title}</p>
              <div className="d-flex align-items-center">
                <p className="my-0 me-1 location text-muted ">
                  {profileStore.area} •{" "}
                </p>
                <span className="fw-bold text-primary ">
                  Informazioni di contatto
                </span>
              </div>

              <p className="my-2 connections">
                580 follower - 951 collegamenti
              </p>
              <div className="d-flex justify-content-start w-100 mb-3">
                <Button>Disponibile per</Button>
                <Button variant="outline-primary" className="mx-3">
                  Aggiungi sezione profilo
                </Button>
                <Button variant="outline-secondary">Altro</Button>
              </div>
            </Col>
            <Col className="d-flex flex-column-reverse justify-content-end">
              <Col
                xs={12}
                md={4}
                className="d-flex justify-content-between h-auto"
              >
                <img
                  src="https://reteinformaticalavoro.it/images/company/6013edb782d88_300_300.png"
                  alt=""
                  style={{ width: "3em", height: "3em" }}
                  className="me-2 mb-1"
                />
                Epicode
              </Col>
              <Button
                className="align-self-end m-3 rounded-circle"
                variant="transparent"
                onClick={handleShow}
                id="buttonModal-profile"
              >
                <HiOutlinePencil className="fs-5" />
              </Button>
              {/* Inizio Modale profilo */}
              <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body-profile">
                  <p className="textColor-modal">* indica che è obbligatorio</p>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="textColor-modal">Nome*</Form.Label>
                    <Form.Control
                      type="text"
                      autoFocus
                      defaultValue={profileStore.name}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="textColor-modal">
                      Cognome*
                    </Form.Label>
                    <Form.Control
                      type="text"
                      autoFocus
                      defaultValue={profileStore.surname}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="textColor-modal">
                      Nome aggiuntivo
                    </Form.Label>
                    <Form.Control type="text" autoFocus />
                  </Form.Group>
                  <p className="textColor-modal">Pronuncia del nome</p>
                  <p className="textColor-modal">
                    <BsFillInfoSquareFill className="me-2" />
                    Può essere aggiunta solo usando la nostra app per
                    dispositivi mobili
                  </p>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="textColor-modal">
                      Inserisci pronomi personalizzati
                    </Form.Label>
                    <Form.Control type="text" autoFocus />
                    <Form.Label className="textColor-modal">
                      Indica i pronomi di genere che vuoi che gli altri usino
                      per riferirsi a te
                    </Form.Label>
                  </Form.Group>
                  <p className="textColor-modal">
                    Scopri di più sui <strong>pronomi di genere.</strong>
                  </p>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="textColor-modal">
                      Sommario*
                    </Form.Label>
                    <Form.Control type="text" autoFocus />
                  </Form.Group>
                  <h4>Posizione attuale</h4>
                  <Link className="text-decoration-none fs-6 fw-semibold">
                    <p>
                      <HiPlus /> Aggiungi posizione lavorativa
                    </p>
                  </Link>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="textColor-modal">
                      Settore*
                    </Form.Label>
                    <Form.Control type="text" autoFocus />
                    <Form.Label className="textColor-modal">
                      Scopri di più sulle
                      <strong>opzioni relative al settore</strong>
                    </Form.Label>
                  </Form.Group>
                  <h4>Formazione</h4>
                  <Link className="text-decoration-none fs-6 fw-semibold">
                    <p>
                      <HiPlus /> Aggiungi un nuovo grado di formazione
                    </p>
                  </Link>
                  <h4>Località</h4>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="textColor-modal">
                      Paese/Area geografica
                    </Form.Label>
                    <Form.Control type="text" autoFocus />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="textColor-modal">CAP </Form.Label>
                    <Form.Control type="text" autoFocus />
                  </Form.Group>
                  <h4>Informazioni di contatto</h4>
                  <p>
                    Aggiungi o modifica il tuo profilo URL, indirizzo email e
                    altro
                  </p>
                  <Link className="text-decoration-none fs-6 fw-semibold">
                    Modifica le informazioni di contatto
                  </Link>
                </Modal.Body>

                <Modal.Footer>
                  <Button
                    variant="primary"
                    className="rounded-pill fw-semibold px-3"
                  >
                    Salva
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* Fine Modale profilo */}
            </Col>
          </Row>
        </Container>
      </Card>
      <Card className="bg-white my-3">
        <Card.Body>
          <Row className="d-flex flex-space-between">
            <Col sx={11} className="d-flex align-self-start">
              <Card.Title>Informazioni</Card.Title>
            </Col>
            <Col sx={1} className="d-flex justify-content-end w-25">
              <HiOutlinePencil />
            </Col>
          </Row>
          <Row>
            <Col className="d-flex align-self-start">
              <Card.Text>{profileStore.bio}</Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};
export default UserProfile;
