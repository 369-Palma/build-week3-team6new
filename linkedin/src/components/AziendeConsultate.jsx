import { Container, Row } from "react-bootstrap";
import CardSidebar from "./CardSidebar";

const AziendeConsultate = () => {
  <Container>
    <Row>
      <h2>Altre aziende consultate</h2>
    </Row>
    <Row className="py-2">
      <CardSidebar></CardSidebar>
    </Row>
  </Container>;
};

export default AziendeConsultate;
