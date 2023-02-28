import { Container, Col, Card, Row, Button } from "react-bootstrap";
import { fetchProfiles } from "../redux/actions/index";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// function Esempio() {
//     const [contatore, setContatore] = useState();
// }

const UserProfile = ({ image, name, surname, title, area }) => {
  const dispatch = useDispatch();
  const profileStore = useSelector((state) => state.content);
  useEffect(() => {
    dispatch(fetchProfiles("me"));
    // console.log(fetchProfiles("me"));
  }, []);
  return (
    <>
      <Card>
        <Container>
          <Row className="p-background">
            <img src="https://www.e26.it/wp-content/uploads/2018/07/fb-luglio-2018.png" alt="" />
          </Row>
          <Row className="profile ml-1">{/* <img className="img-fluid" src={image} /> */}</Row>
          <Row className="user__detail ">
            <Col xs={12} md={8}>
              <h4 className="name mb-0">
                {name} {surname}
              </h4>
              <p className="my-0 occupation">{title}</p>
              <p className="my-0 location text-muted">{area}</p>

              <p className="my-2 connections">580 follower - 951 collegamenti</p>
              <div className="d-flex justify-content-start w-100">
                <Button className="profile__button open-to-btn">Disponibile per</Button>
                <Button variant="outline-primary" className="add__btn profile__button  mx-3">
                  Aggiungi sezione profilo
                </Button>
                <Button variant="outline-secondary" className="profile__button">
                  Altro
                </Button>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <ul>
                <li className="education mb-1">
                  <img
                    src="https://strive.school/favicon.ico"
                    alt=""
                    style={{ width: "3em", height: "3em" }}
                    className="mr-2"
                  />{" "}
                  Strive school
                </li>

                <li className="education">
                  <img
                    src="https://www.schema17project.com/wp-content/uploads/2020/10/logo-palla-291x300.png"
                    alt=""
                    style={{ width: "3em", height: "3em" }}
                    className="mr-2"
                  />{" "}
                  Tech University
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
};
export default UserProfile;
