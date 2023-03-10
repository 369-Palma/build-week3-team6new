/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExp } from "../redux/actions";
import { HiPlus, HiOutlinePencil } from "react-icons/hi";
// import { BsFillInfoSquareFill } from "react-icons/bs";
import { Row, Button, Modal, Form, Card, Col } from "react-bootstrap";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./style/profile.css";
const Experiences = () => {
  const [exp, setExp] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "" || null,
    description: "",
    area: "",
  });
  const params = useParams();
  ///fetch
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.contentExp);
  const personaLoggata = useSelector((state) => state.contentUsers);
  useEffect(() => {
    if (personaLoggata._id)
      dispatch(
        fetchExp(params.userId == "me" ? personaLoggata._id : params.userId)
      );
  }, [personaLoggata._id]);

  ///fetch

  //postExp
  const postExp = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" +
          "63fc7944f193e60013807f5e/" +
          "experiences",
        {
          method: "POST",
          body: JSON.stringify(exp),
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
  const [lgShowExp, setLgShowExp] = useState(false);

  const handleShowExp = () => setLgShowExp(true);
  // this modal for exp

  return (
    <>
      <Modal
        size="lg"
        show={lgShowExp}
        onHide={() => setLgShowExp(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Exp</Modal.Title>
        </Modal.Header>
        <Modal.Body className="display-block ">
          <Form onSubmit={postExp}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Role*</Form.Label>
              <Form.Control
                type="text"
                placeholder="role"
                required
                value={exp.role}
                onChange={(e) =>
                  setExp({
                    ...exp,
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
                required
                value={exp.company}
                onChange={(e) =>
                  setExp({
                    ...exp,
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
                required
                value={exp.description}
                onChange={(e) =>
                  setExp({
                    ...exp,
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
                required
                value={exp.area}
                onChange={(e) =>
                  setExp({
                    ...exp,
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
                required
                value={exp.startDate}
                onChange={(e) =>
                  setExp({
                    ...exp,
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
                required
                value={exp.endDate}
                onChange={(e) =>
                  setExp({
                    ...exp,
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

      <div>
        <Row>
          <Col key={exp._id} col={12} className="mb-4">
            <Card className="border-1 border-light">
              <div className="d-flex justify-content-between ">
                <div>
                  <h4 className="m-3 my-4">Esperienze</h4>
                </div>
                <div className="d-flex align-items-center me-3">
                  <HiPlus
                    className="fs-2 p-1 cursor-pointer icon-experiences"
                    onClick={handleShowExp}
                    style={{ cursor: "pointer" }}
                  />

                  <Link to="/profile/:user.id/:expId">
                    <HiOutlinePencil className="fs-5 m-2 text-dark icon-experiences" />
                  </Link>
                </div>
              </div>
              {experiences.map((exp) => (
                <Card.Body className="text-start p-0 px-3">
                  <Card.Title>{exp.role}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {exp.company}
                  </Card.Subtitle>
                  <Card.Text>{exp.description}</Card.Text>
                  <Card.Text>
                    <small>{exp.startDate}</small>
                  </Card.Text>
                  <Card.Text>
                    <small>{exp.area}</small>
                  </Card.Text>
                  <hr />
                </Card.Body>
              ))}
            </Card>
          </Col>
        </Row>
        {/*  */}
      </div>
    </>
  );
};
export default Experiences;
