import React from "react";
import {
  Row,
  Nav,
  Navbar,
  Container,
  Form,
  FormControl
} from "react-bootstrap";
import ModalNav from "../components/ModalProfileNav";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  BsHouseDoorFill,
  BsFillPeopleFill,
  BsFillBriefcaseFill,
  BsFillChatDotsFill,
  BsFillBellFill,
  BsFillGrid3X3GapFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  Col,
  // Row
} from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar className="py-2 sticky-top" id="navbar-body" bg="white" expand="lg">
      <Container className="d-flex justify-content-between">
        <div className="d-flex">
          <div>
            <a href="/">
              <img
                className="navbar-icon-container d-none d-md-block"
                id="navbar-logo"
                src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
                alt="linkedin-logo"
              />
            </a>
          </div>
          <div>
            <Form inline className="d-none d-lg-block">
              <Form.Group id="navbar-search-container">
                <FormControl
                  id="form-control-search-form-control"
                  type="text"
                  placeholder="Cerca"
                  className="mr-sm-2"
                />
              </Form.Group>
            </Form>
          </div>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-icon LinkModale">
                <Row className="d-flex flex-column me-3">
                  <Col className="ml-3 nav-link">
                    <BsHouseDoorFill className="nav-icon" size="22" />
                  </Col>
                  <Col>
                    <p> Home </p>
                  </Col>
                </Row>
              </Link>

              <Link to="#" className="nav-icon LinkModale">
                <Row className="d-flex flex-column me-3">
                  <Col className="ml-3 nav-link">
                    <BsFillPeopleFill className="nav-icon" size="22" />
                  </Col>
                  <Col>
                    <p> Rete </p>
                  </Col>
                </Row>
              </Link>

              <Link to="#" className="nav-icon LinkModale">
                <Row className="d-flex flex-column me-3">
                  <Col className="ml-3 nav-link">
                    <BsFillBriefcaseFill className="nav-icon" size="22" />
                  </Col>
                  <Col>
                    <p> Lavoro </p>
                  </Col>
                </Row>
              </Link>

              <Link to="#" className="nav-icon LinkModale">
                <Row className="d-flex flex-column me-3">
                  <Col className="ml-3 nav-link">
                    <BsFillChatDotsFill className="nav-icon" size="22" />
                  </Col>
                  <Col>
                    <p> Messaggistica </p>
                  </Col>
                </Row>
              </Link>

              <Link to="#" className="nav-icon LinkModale">
                <Row className="d-flex flex-column me-3">
                  <Col className="ml-3 nav-link">
                    <BsFillBellFill className="nav-icon" size="22" />
                  </Col>
                  <Col>
                    <p> Notifiche </p>
                  </Col>
                </Row>
              </Link>

              <div className="ml-3 nav-link">
                <BsFillPersonFill className="nav-icon" size="22" />
                <NavDropdown title="Tu" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    <ModalNav />
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
              <div className="ml-3 nav-link">
                <BsFillGrid3X3GapFill className="nav-icon" size="22" />
                <NavDropdown title="Lavoro" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    <ModalNav></ModalNav>
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
