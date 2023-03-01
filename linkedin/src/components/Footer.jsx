import React from "react";
import { Container, Row, Col, Image, Form, Dropdown } from "react-bootstrap";
import { BsQuestionCircleFill, BsFillGearFill } from "react-icons/bs";

const CustomFooter = () => {
  return (
    <Container id="footer">
      <Row className="pb-2 mt-5">
        <Image
          className="footer-logo"
          src="https://proinfluent.b-cdn.net/wp-content/uploads/2019/05/Logo-LinkedIn-officiel.png"
          alt="linkedin logo"
          style={{ width: 120 }}
        />
      </Row>
      <Row>
        <Col xs={12} md={10}>
          <Row>
            <div className="footer-container d-flex justify-content-between">
              <div className="mr-3">
                <ul>
                  <li>
                    <a href="#">Informazioni</a>
                  </li>

                  <li>
                    <a href="#">Linee guida della community</a>
                  </li>

                  <li>
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                        Privacy e condizioni
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item className="drop-menu" href="#/action-1">
                          Informativa sulla privacy
                        </Dropdown.Item>
                        <Dropdown.Item className="drop-menu" href="#/action-2">
                          Contratto di licenza
                        </Dropdown.Item>
                        <Dropdown.Item className="drop-menu" href="#/action-3">
                          Informativa sui cookie
                        </Dropdown.Item>
                        <Dropdown.Item className="drop-menu" href="#/action-4">
                          Informativa sul copyright
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>

                  <li>
                    <a href="">Sales solutions</a>
                  </li>

                  <li>
                    <a href="">Centro sicurezza</a>
                  </li>
                </ul>
              </div>

              <div className="mr-3">
                <ul>
                  <li>
                    <a href="">Accessibilità</a>
                  </li>

                  <li>
                    <a href="">Carriera</a>
                  </li>

                  <li>
                    <a href="">Opzioni di annuncio</a>
                  </li>

                  <li>
                    <a href="">Mobile</a>
                  </li>
                </ul>
              </div>

              <div className="mr-3">
                <ul>
                  <li>
                    <a href="">Talent Solutions</a>
                  </li>

                  <li>
                    <a href="">Soluzioni di marketing</a>
                  </li>
                  <li>
                    <a href="">Pubblicità</a>
                  </li>

                  <li>
                    <a href="">Piccole imprese</a>
                  </li>
                </ul>
              </div>

              <div id="footer-settings" className="mr-3">
                <div className="ml-2">
                  <BsQuestionCircleFill
                    id="footer-icons"
                    size="1.5em"
                    className="px-1"
                  />
                  <a href="">Domande?</a>
                  <p> Visita il nostro Centro assistenza. </p>
                </div>

                <div className="ml-2">
                  <BsFillGearFill id="footer-icons" />
                  <a href=""> Gestisci il tuo account e la tua privacy</a>
                  <p>Vai alle impostazioni</p>
                </div>
              </div>

              <div>
                <Col xs={12} md={6} lg={3}>
                  <Form>
                    <Form.Group controlId="languages">
                      <Form.Label>Seleziona lingua</Form.Label>
                      <Form.Control as="select">
                        <option>Inglese(English)</option>
                        <option>Italiano(Italian)</option>
                        <option>Russo(Russian)</option>
                        <option>Francese(French)</option>
                        <option>Tedesco(German)</option>
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
              </div>
            </div>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex flex-start">
          <p>Linkedin Corporation &copy; {new Date().getFullYear()}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomFooter;
