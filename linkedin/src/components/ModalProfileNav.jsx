/* eslint-disable react-hooks/exhaustive-deps */
import { Modal, Button, Col, Row, Container, Card } from "react-bootstrap";
/* import { fetchUser } from "../redux/actions";
  import React, { useEffect } from "react";*/
import { /* useDispatch,  */ useSelector } from "react-redux";
import { Link /* , useParams */ } from "react-router-dom";
import "./style/navbar.css"


const ModalNav = () => {
  /* const dispatch = useDispatch(); */
  const profileStore = useSelector((state) => state.contentUsers);
  /* 
  const params = useParams();

  useEffect(() => {
    dispatch(fetchUser(params.userId));
  }, []);
  console.log(profileStore); */

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Row>
          <Container className="d-flex justify-content-around">
            <Col>
              <Modal.Header closeButton>
                <Row >
                  <Col >
                    <Card.Img
                      /* variant="top" */
                      src={profileStore?.image}
                      alt="foto"
                      className="fotoTondeProf"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Modal.Title>
                      <h4 className="name mb-0">
                        {profileStore.name} {profileStore.surname}
                      </h4>
                    </Modal.Title>
                  </Col>
                </Row>
              </Modal.Header>
              <Modal.Body>
                <p className="my-0 occupation">{profileStore.title}</p>
                <p className="my-0 location text-muted">{profileStore.area}</p>
                <Link to="/profile/me">
                  <Button
                    className="bottoniBlu" /*  variant="light border border-primary text-primary py-0 fs-6" */
                  >
                    Visualizza profilo
                  </Button>
                </Link>
              </Modal.Body>
            </Col>
          </Container>
        </Row>

        <Modal.Footer >
          <Row>
            <Row>
              <Col>
                <h4>Account</h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to="#" className="LinkModale">
                  Impostazioni e privacy
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to="#" className="LinkModale">
                  Guida
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to="#" className="LinkModale">
                  Lingua
                </Link>
              </Col>
            </Row>
          </Row>

          <Row>
            <Row>
              <Col>
                <h4>Gestisci</h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to="#" className="LinkModale">
                  Post e attività
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to="#" className="LinkModale">
                  Account per la pubb...
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to="#" className="LinkModale">
                  Esci
                </Link>
              </Col>
            </Row>
          </Row>


        </Modal.Footer>
      </Modal.Dialog>
    </div >
  );
};

export default ModalNav;
