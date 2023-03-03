import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";

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
            <Row>
              <Col xs={12}>
                <img
                  src={profileStore.image}
                  alt="profileImage"
                  style={{ width: "11em" }}
                />
              </Col>
            </Row>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </>
  );
};

export default ProfileImgModal;
