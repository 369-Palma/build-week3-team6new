import React from "react";
import { Navbar, Container, FormControl, Form } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <>
      <h1>Sono Navbar</h1>
      <Navbar className="sticky-top" id="navbar-body" bg="white" expand="lg">
        <Container>
          <a href="#">
            <img
              className="navbar-icon-container d-none d-md-block"
              id="navbar-logo"
              src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
              alt="linkedin-logo"
            />
          </a>
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
          <div id="navbar-center" className="ml-auto">
            <a href="#">
              <div className="navbar-icon-container text-center">Home</div>
            </a>
            <div className="navbar-icon-container text-center">Rete</div>
            <div className="navbar-icon-container text-center">Lavoro</div>
            <a href="#">
              <div className="navbar-icon-container text-center">
                Messaggistica
              </div>
            </a>
            <a href="#">
              <div className="navbar-icon-container text-center">Notifiche</div>
            </a>
            <div className="navbar-icon-container text-center">
              <div>Tu</div>
            </div>
            <div className="navbar-icon-container text-center">
              <div>Lavoro</div>
            </div>
            <a href="#">
              <div
                id="try-premium"
                className="d-none d-lg-block text-center mt-2"
              >
                Prova Premium gratis
              </div>
            </a>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
