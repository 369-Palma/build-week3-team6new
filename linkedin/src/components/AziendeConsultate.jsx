/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Row, Spinner } from "react-bootstrap";
import CardSidebar from "./CardSidebar";
import { useEffect } from "react";
import { fetchProfiles } from "../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";

const AziendeConsultate = () => {
  const users = useSelector((state) => state.content);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfiles(""));
  }, []);

  return (
    <Container>
      <Row>
        <h4 className="fw-bold mt-2">Altre aziende consultate</h4>
      </Row>
      {isLoading && <Spinner animation="border" variant="primary" className="my-2" />}
      {!isLoading && <CardSidebar users={users.slice(5, 10)} />}
    </Container>
  );
};

export default AziendeConsultate;
