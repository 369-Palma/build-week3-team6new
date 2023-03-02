/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Row } from "react-bootstrap";
import CardSidebar from "./CardSidebar";
import { useEffect } from "react";
import { fetchProfiles } from "../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";

const AziendeConsultate = () => {
  const users = useSelector((state) => state.content);
  console.log(users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfiles(""));
  }, []);

  // Randomizza gli utenti
  const shuffledUsers = users.sort(() => Math.random() - 0.5);

  return (
    <Container>
      <Row>
        <h4>Altre aziende consultate</h4>
      </Row>
      <Row className="py-2">
        <CardSidebar users={shuffledUsers} />
      </Row>
    </Container>
  );
};

export default AziendeConsultate;
