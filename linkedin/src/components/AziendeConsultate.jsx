/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Row, Spinner } from "react-bootstrap";
import CardSidebar from "./CardSidebar";
import { useEffect, useMemo } from "react";
import { fetchProfiles } from "../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";

const AziendeConsultate = () => {
  const users = useSelector((state) => state.content);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfiles(""));
  }, []);

  // Randomizza gli utenti solo quando la lista cambia

  return (
    <Container>
      <Row className="mt-4">
        <h4 className=" fw-bold">Altre aziende consultate</h4>
      </Row>
      <Row className="my-4">
        <div className="d-flex align-items-center">
          {isLoading && <Spinner animation="border" variant="primary" className="mx-auto me-3" />}
          {!isLoading && <CardSidebar users={users.slice(5,10)} />}
        </div>
      </Row>
    </Container>
  );
};

export default AziendeConsultate;
