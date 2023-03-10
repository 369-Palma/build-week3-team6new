/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Row, Spinner } from "react-bootstrap";
import CardSidebar from "./CardSidebar";
import { useSelector } from "react-redux";

const PeopleYouMightKnow = () => {
  const users = useSelector((state) => state.content);
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <Container>
      <Row>
        <h4 className="fw-bold mt-2">Persone che potresti conoscere</h4>
      </Row>
      {isLoading && <Spinner animation="border" variant="primary" className="my-2" />}
      {!isLoading && <CardSidebar users={users.slice(0, 5)} />}
    </Container>
  );
};

export default PeopleYouMightKnow;
