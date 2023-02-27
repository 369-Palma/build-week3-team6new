import { Container, Row } from "react-bootstrap";
import CardSidebar from "./CardSidebar";
import { useState, useEffect } from "react";

const AziendeConsultate = () => {
  /* const [showContent, setShowContent] = useState(false); */
  const [users, setUsers] = useState([]);

  const fetchProfiles = async () => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          method: "GET",
          headers:
            "BearereyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNzAyZGYxOTNlNjAwMTM4MDdmNWEiLCJpYXQiOjE2Nzc0ODgxNzMsImV4cCI6MTY3ODY5Nzc3M30.v4RvPvwPrNqMf1jT8g6IRxX0XpB361UjIv66UzPhULY",
        }
      );
      if (res.ok) {
        const dataUsers = await res.json();
        console.log(dataUsers);
        setUsers(dataUsers);
        return users;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(fetchProfiles());
  }, []);

  return (
    <Container>
      <Row>
        <h2>Altre aziende consultate</h2>
      </Row>
      <Row className="py-2">
        {users.map((user) => {
          return <CardSidebar key={user.id}></CardSidebar>;
        })}
      </Row>
    </Container>
  );
};

export default AziendeConsultate;
