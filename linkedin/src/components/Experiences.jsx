import { HiPlus, HiOutlinePencil } from "react-icons/hi";
import { Row } from "react-bootstrap";

const Experiences = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <h3>Esperienza</h3>
        <div>
          <HiPlus />
          <HiOutlinePencil />
        </div>
      </div>

      <Row className="d-flex align-items-start">
        <h3>Lavoro</h3>
        <h4>Azienda</h4>
        <p>date</p>
        <p>Luogo</p>
      </Row>
      <Row>
        <h3>Lavoro</h3>
        <h4>Azienda</h4>
        <p>date</p>
        <p>Luogo</p>
      </Row>
    </>
  );
};

export default Experiences;
