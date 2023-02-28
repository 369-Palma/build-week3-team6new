import { Container, Row } from "react-bootstrap";
import CardSidebar from "./CardSidebar";
import { useState, useEffect } from "react";
import { fetchUsers } from "../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";

const AziendeConsultate = () => {
  /* const [showContent, setShowContent] = useState(false); */
  const users = useSelector((state) => state.content);
  console.log(users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(""));
  }, []);

  return (
    <Container>
      <Row>
        <h2>Altre aziende consultate</h2>
      </Row>
      <Row className="py-2">
        <CardSidebar />
      </Row>
    </Container>
  );
};

export default AziendeConsultate;
