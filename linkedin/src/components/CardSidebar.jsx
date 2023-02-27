import { Container, Button, Card, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const CardSidebar = () => {
  const users = useSelector((state) => state.content.slice(0, 5));

  console.log(users);
  return (
    <Container>
      {users.map((user) => (
        <Row>
          <Card className="d-flex">
            <Card.Img
              variant="top"
              src={user.image}
              alt="foto"
              className="fotoTonde"
            />
            <Card.Body>
              <Card.Title>
                {user.name} {user.surname} .{" "}
                <span className="disabled">3°</span>
              </Card.Title>
              <Card.Text>{user.title}</Card.Text>
              <Button className="my-2">Collegati</Button>
            </Card.Body>
          </Card>
        </Row>
      ))}
    </Container>
  );
};

export default CardSidebar;
