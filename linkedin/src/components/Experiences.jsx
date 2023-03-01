/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExp } from "../redux/actions";
import { HiPlus, HiOutlinePencil } from "react-icons/hi";
// import { BsFillInfoSquareFill } from "react-icons/bs";
import { Row, Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";



const Experiences = () => {
    const [exp, setExp] = useState(
        {
            role: "",
            company: "",
            startDate: "",
            endDate: "" || null,
            description: "",
            area: ""
        }
    )
    ///fetch
    const dispatch = useDispatch();
    const experiences = useSelector((state) => state.contentExp);

    useEffect(() => {
        dispatch(fetchExp("experiences"));
    }, []);

    ///fetch

    //postExp
    const postExp = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + "63fc702df193e60013807f5a/" + "experiences", {
                method: "POST",
                body: JSON.stringify(exp),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNzAyZGYxOTNlNjAwMTM4MDdmNWEiLCJpYXQiOjE2Nzc0ODgxNzMsImV4cCI6MTY3ODY5Nzc3M30.v4RvPvwPrNqMf1jT8g6IRxX0XpB361UjIv66UzPhULY",
                },
            });
            if (res.ok) {
                // const data = await res.json();



            }
            else {
                console.log("Badoglio!");
            }
        } catch (error) {
            console.log(error);
        }
    };



    const [lgShow, setLgShow] = useState(false);

    const handleShow = () => setLgShow(true);



    // this modal for exp
    const [lgShowExp, setLgShowExp] = useState(false);

    const handleShowExp = () => setLgShowExp(true);
    // this modal for exp


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                <HiOutlinePencil />
            </Button>

            <Modal size="lg" show={lgShowExp} onHide={() => setLgShowExp(false)} aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title>Add Exp</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        onSubmit={postExp}
                    >

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Role*</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="role"
                                required
                                value={exp.role}
                                onChange={(e) =>
                                    setExp
                                        ({
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
                                    setExp
                                        ({
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
                                    setExp
                                        ({
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
                                    setExp
                                        ({
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
                                    setExp
                                        ({
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
                                    setExp
                                        ({
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
                <Modal.Footer>
                </Modal.Footer>

            </Modal>

            <div>
                <div className="d-flex justify-content-between">
                    <div>
                        <h3>Esperienza</h3>
                    </div>
                    <div>
                        <Button onClick={handleShowExp}>
                            <HiPlus className="fs-3 p-1" />
                        </Button>

                        <Link to="/profile/:user.id/:expId">
                            <Button >
                                <HiOutlinePencil className="fs-4 p-1" />
                            </Button>
                        </Link>
                    </div>
                </div>

                {experiences.map(
                    (exp) =>
                    (<Row className="d-flex text-start">

                        <h4>{exp.role}</h4>
                        <h4>{exp.company}</h4>
                        <p>{exp.description}</p>
                        <p>{exp.startDate}</p>
                        <p>{exp.area}</p>
                    </Row>

                    ))}
                {/*  */}

            </div>
        </>
    );
};
export default Experiences;
