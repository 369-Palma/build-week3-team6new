/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExp } from "../redux/actions";
import { HiPlus, HiOutlinePencil } from "react-icons/hi";
/* import { BsFillInfoSquareFill } from "react-icons/bs";  */
import { Row, Button /*, Modal, Form */ } from "react-bootstrap";
import { useState } from "react";
/* import { Link } from "react-router-dom"; */
import ModalExperiences from "./ModaleExperiences";

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
