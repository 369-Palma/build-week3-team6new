import { Container, Button, Card, Row } from "react-bootstrap";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../components/style/sidebar.css";

const CardSidebar = ({ users }) => {
  console.log(users);
  return (
    <Container>
      {users.map((user) => (
        <Row key={user._id} className="d-flex flex-row align-items-center px-2">
          <Card className="cardImgsideBar d-flex flex-row mt-1">
            <Card.Img
              variant="top"
              src={user.image}
              alt="foto"
              className="fotoTonde align-self-start"
            />
            <Card.Body className="flex-column">
              <Card.Title className="ms-5">
                <Link to={`/profile/${user._id}`} className="link-sidebar">
                  {user.name} {user.surname}
                </Link>
                <span className="text-muted fs-6 ms-1">• 3°+</span>
              </Card.Title>
              <Card.Text className="ms-5">{user.title}</Card.Text>
              <Button className="my-2 bottoneSideBar">
                <BsFillPersonPlusFill className="me-2" />
                Collegati
              </Button>
            </Card.Body>
          </Card>
        </Row>
      ))}
    </Container>
  );
};

export default CardSidebar;
