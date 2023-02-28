import { HiPlus, HiOutlinePencil } from "react-icons/hi";
/* import { BsFillInfoSquareFill } from "react-icons/bs";  */
import { Row, Button /*, Modal, Form */ } from "react-bootstrap";
import { useState } from "react";
/* import { Link } from "react-router-dom"; */
import ModalExperiences from "./ModaleExperiences";

const Experiences = () => {
  const [lgShow, setLgShow] = useState(false);

  const handleShow = () => setLgShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <HiOutlinePencil />
      </Button>

      <ModalExperiences></ModalExperiences>

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
          <h3>Lavoro</h3>
          <h4>Azienda</h4>
          <p>date</p>
          <p>Luogo</p>
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
