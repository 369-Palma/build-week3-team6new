import { useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteExp } from "../redux/actions";

const ExpSolo = () => {
  const [putExp, setExp] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "" || null,
    description: "",
    area: "",
  });

  const experiences = useSelector((state) => state.contentExp);
  const dispatch = useDispatch();

  const putExpfetch = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" +
        "63fc7944f193e60013807f5e/" +
        "experiences",
        {
          method: "POST",
          body: JSON.stringify(),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: process.env.REACT_APP_API_KEY,
          },
        }
      );
      if (res.ok) {
        // const data = await res.json();
      } else {
        console.log("Badoglio!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // this modal for exp
  const [lgPutExp, setPutExp] = useState(false);

  const handlePutExp = () => setPutExp(true);
  // this modal for exp

  return (
    <>
      <Modal size="lg" show={lgPutExp} onHide={() => setPutExp(false)} aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>Add Exp</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={putExpfetch}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Role*</Form.Label>
              <Form.Control
                type="text"
                placeholder="role"
                require
                value={putExp.role}
                onChange={(e) =>
                  setExp({
                    ...putExp,
                    role: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Company*</Form.Label>
              <Form.Control
                type="text"
                placeholder="company"
                value={putExp.company}
                onChange={(e) =>
                  setExp({
                    ...putExp,
                    company: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="description"
                value={putExp.description}
                onChange={(e) =>
                  setExp({
                    ...putExp,
                    description: e.target.value,
                  })
                }
              />
            </Form.Group>
            <h4>Posizione attuale</h4>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Area*</Form.Label>
              <Form.Control
                type="text"
                placeholder="area"
                value={putExp.area}
                onChange={(e) =>
                  setExp({
                    ...putExp,
                    area: e.target.value,
                  })
                }
              />
            </Form.Group>
            <h4>Date</h4>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Data Inizio </Form.Label>
              <Form.Control
                type="date"
                placeholder="startDate"
                value={putExp.startDate}
                onChange={(e) =>
                  setExp({
                    ...putExp,
                    startDate: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Data Fine </Form.Label>
              <Form.Control
                type="date"
                placeholder="endDate"
                value={putExp.endDate}
                onChange={(e) =>
                  setExp({
                    ...putExp,
                    endDate: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Button type="submit" variant="primary" className="rounded-pill">
              Salva
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      <Container>
        {experiences.map((exp, index) => (
          <Row key={exp._id} className={`d-flex text-start ${index % 2 === 0 ? "bg-light" : "bg-secondary"} p-3 my-3`}>
            <Col>
              <h1>{exp._id} </h1>
              <h4>{exp.role}</h4>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
              <p>{exp.startDate}</p>
              <p>{exp.area}</p>
            </Col>
            <Col>
              <Button variant="danger" onClick={() => dispatch(deleteExp(exp._id))}>
                Delete
              </Button>
              <Button variant="primary" onClick={() => handlePutExp()}>
                Modify
              </Button>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};
export default ExpSolo;
