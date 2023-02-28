import "./App.css";
import AziendeConsultate from "./components/AziendeConsultate";
import UserProfile from "./components/ProfilepageMain";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
