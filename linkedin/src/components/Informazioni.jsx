import { HiOutlinePencil } from "react-icons/hi";
import { Col, Card, Row, Modal, Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState } from "react";

const Informazioni = () => {
  const profileStore = useSelector((state) => state.contentUsers);
  const [text, setText] = useState(profileStore.bio);

  const [lgShow, setLgShow] = useState(false);
  const handleShow = () => setLgShow(true);

  return (
    <Card className="bg-white my-3">
      <Card.Body>
        <Row className="d-flex flex-space-between">
          <Col sx={11} className="d-flex align-self-start">
            <Card.Title>Informazioni</Card.Title>
          </Col>
          <Col sx={1} className="d-flex justify-content-end w-25">
            <HiOutlinePencil onClick={handleShow} />
            {/* inizio modale */}
            <div
              className="modal show"
              style={{ display: "block", position: "initial" }}
            >
              <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>Modifica informazioni</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <p>
                    Puoi includere anni di esperienza, settore o competenze
                    acquisite. Potresti anche inserire i risultati raggiunti o
                    le esperienze di lavoro precedenti.
                  </p>
                  <Form.Control
                    as="textarea"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </Modal.Body>

                <Modal.Footer>
                  <Button variant="primary">Salva</Button>
                </Modal.Footer>
              </Modal>
            </div>

            {/* fine modale */}
          </Col>
        </Row>
        <Row>
          <Col className="d-flex align-self-start">
            <Card.Text>{profileStore?.bio}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
export default Informazioni;
