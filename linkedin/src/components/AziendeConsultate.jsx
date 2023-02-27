import { Container, Row } from "react-bootstrap";
import CardSidebar from "./CardSidebar";
import { useState, useEffect } from "react";
import { fetchProfiles } from "../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";

const AziendeConsultate = () => {
  /* const [showContent, setShowContent] = useState(false); */
  const users = useSelector((state) => state.content);
  console.log(users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfiles());
  }, []);

  return (
    <Container>
      <Row>
        <h2>Altre aziende consultate</h2>
      </Row>
      <Row className="py-2">
        {users?.map((_, i) => {
          return (
            <Row key={i}>
              <CardSidebar />
            </Row>
          );
        })}
      </Row>
    </Container>
  );
};

export default AziendeConsultate;
