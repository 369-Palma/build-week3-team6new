/* eslint-disable react-hooks/exhaustive-deps */
import { Modal, Button, Col, Row, Container } from "react-bootstrap";
/* import { fetchUser } from "../redux/actions";
  import React, { useEffect } from "react";*/
import { /* useDispatch,  */ useSelector } from "react-redux";
import { Link /* , useParams */ } from "react-router-dom";

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
            {/* <Col>
              <img
                className="img-fluid fotoUser"
                src={profileStore.image}
                alt="userimage"
              />
            </Col> */}
            <Col>
              <Modal.Header closeButton>
                <Modal.Title>
                  <h4 className="name mb-0">
                    {profileStore.name} {profileStore.surname}
                  </h4>
                </Modal.Title>
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

        <Modal.Footer className="d-flex flex-column flex-align-items-start">
          <Row>
            <h4>Account</h4>
            <Link to="#" className="LinkModale">
              Impostazioni e privacy
            </Link>
            <Link to="#" className="LinkModale">
              Guida
            </Link>
            <Link to="#" className="LinkModale">
              Lingua
            </Link>
          </Row>

          <Row className="d-flex flex-column flex-align-items-start">
            <h4>Gestisci</h4>
            <Link to="#" className="LinkModale">
              Post e attività
            </Link>
            <Link to="#" className="LinkModale">
              Account per la pubb...
            </Link>
          </Row>
          <Row className="d-flex flex-column align-items-start">
            <Link to="#" className="LinkModale">
              Esci
            </Link>
          </Row>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default ModalNav;
