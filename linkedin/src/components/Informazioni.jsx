import { HiOutlinePencil } from "react-icons/hi";
import { Col, Card, Row, Modal, Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState } from "react";

const Informazioni = () => {
  const profileStore = useSelector((state) => state.contentUsers);
  const [text, setText] = useState("");

  const [lgShow, setLgShow] = useState(false);
  const handleShow = () => setLgShow(true);

  //FUNZIONE PER CAMBIARE LE INFO

  const updateInfo = async (e) => {
    e.preventDefault();

    //inizio fetch - PUT
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          method: "PUT",
          body: JSON.stringify(text),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNzk0NGYxOTNlNjAwMTM4MDdmNWUiLCJpYXQiOjE2Nzc0OTA1MDAsImV4cCI6MTY3ODcwMDEwMH0.pf9G3SwntDHg3iUJZF-olKYGync7u8VErUGV_JFF91Y",
          },
        }
      );
      if (response.ok) {
        const newInfoJson = await response.json();
        console.log(newInfoJson);
        setText(newInfoJson);
        alert("Info updated!");
      } else {
        console.log("error");
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // fine fetch - PUT

  return (
    <Card className="bg-white my-3">
      <Card.Body>
        <Row className="d-flex flex-space-between">
          <Col sx={11} className="d-flex align-self-start">
            <Card.Title>Informazioni</Card.Title>
          </Col>
          <Col sx={1}>
            <HiOutlinePencil
              className="fs-5 d-flex justify-content-end"
              onClick={handleShow}
            />
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
                  <p className="textColor-modal">* indica che è obbligatorio</p>
                  <p>
                    Puoi includere anni di esperienza, settore o competenze
                    acquisite. Potresti anche inserire i risultati raggiunti o
                    le esperienze di lavoro precedenti.
                  </p>
                  <Form.Control
                    type="textarea"
                    defaultValue={profileStore.bio}
                    onChange={(e) =>
                      setText({
                        text: e.target.value,
                      })
                    }
                  />
                </Modal.Body>

                <Modal.Footer>
                  <Button
                    type="submit"
                    variant="primary"
                    className="rounded-pill fw-semibold px-3"
                    onClick={updateInfo}
                  >
                    Salva
                  </Button>
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
