import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import HiAcademicCap from "react-icons/hi";

const ProfileImgModal = () => {
  const [lgShow, setLgShow] = useState(false);
  const profileStore = useSelector((store) => store.contentUsers);

  return (
    <>
      <Button onClick={() => setLgShow(true)}>Large modal</Button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Foto profilo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12}>
              <div className="d-flex w-100 justify-content-center">
                <img
                  src={profileStore.image}
                  alt="profileImage"
                  style={{ width: "13em" }}
                  className="rounded rounded-circle"
                />
              </div>
              {/*dropdown*/}
              <span className="fs-6 px-2 border rounded-pill px-2">
                Chiunque
              </span>
              <Row>
                <Col>icona </Col>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProfileImgModal;
