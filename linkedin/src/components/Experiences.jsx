/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExp } from "../redux/actions";
import { HiPlus, HiOutlinePencil } from "react-icons/hi";
import { Row, Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";

const Experiences = () => {
    ///fetch
    const dispatch = useDispatch();
    const experiences = useSelector((state) => state.contentExp[0]);


    useEffect(() => {
        dispatch(fetchExp("experiences"));
    }, []);
    ///fetch


    const [lgShow, setLgShow] = useState(false);

    const handleShow = () => setLgShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                <HiOutlinePencil />
            </Button>

            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Exp</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Role*</Form.Label>
                        <Form.Control type="text" autoFocus />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Company*</Form.Label>
                        <Form.Control type="text" autoFocus />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" autoFocus />
                    </Form.Group>
                    <h4>Posizione attuale</h4>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Area*</Form.Label>
                        <Form.Control type="text" autoFocus />
                    </Form.Group>
                    <h4>Date</h4>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Data Inizio </Form.Label>
                        <Form.Control type="date" autoFocus />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Data Fine </Form.Label>
                        <Form.Control type="date" autoFocus />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" variant="primary" className="rounded-pill">
                        Salva
                    </Button>
                </Modal.Footer>
            </Modal>

            <div>
                <div className="d-flex justify-content-between">
                    <div>
                        <h3>Esperienza</h3>
                    </div>
                    <div>
                        <HiPlus className="fs-3 me-4" />
                        <HiOutlinePencil className="fs-4" />
                    </div>
                </div>

                <Row className="d-flex text-start">
                    <h3>{experiences?.role}</h3>
                    <h4>{experiences?.company}</h4>
                    <p>{experiences?.description}</p>
                    <p>{experiences?.startDate}</p>
                    <p>{experiences?.area}</p>
                </Row>
                <Row className="d-flex text-start">
                    <h3>Lavoro</h3>
                    <h4>Azienda</h4>
                    <p>date</p>
                    <p>Luogo</p>
                </Row>
            </div>
        </>
    );
};

export default Experiences;
