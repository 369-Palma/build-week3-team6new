import UserProfile from "./ProfilepageMain";
import AziendeConsultate from "./AziendeConsultate";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="d-flex">
      <Row>
        <Col className="col-xs-12 col-md-8 w-100">
          <UserProfile></UserProfile>
        </Col>
      </Row>
      <Col className="d-xs-none d-md-block col-md-4 ms-4">
        <Row className="my-2">
          <AziendeConsultate></AziendeConsultate>
        </Row>
      </Col>
    </Container>
  );
};

export default Home;
