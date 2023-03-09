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
  }, [dispatch]);

  // Randomizza gli utenti solo quando la lista cambia
  const shuffledUsers = useMemo(() => users.sort(() => Math.random() - 0.5), [users]);

  return (
    <Container>
      <Row className="mt-4">
        <h4 className=" fw-bold">Altre aziende consultate</h4>
      </Row>
      <Row className="my-4">
        <div className="d-flex align-items-center">
          {isLoading && <Spinner animation="border" variant="primary" className="mx-auto me-3" />}
          {!isLoading && <CardSidebar users={shuffledUsers} />}
        </div>
      </Row>
    </Container>
  );
};

export default AziendeConsultate;
