import { Container, Button, Card, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CardSidebar = ({users}) => {

  console.log(users);
  return (
    <Container>
      {users.map((user) => (
        <Row key={user._id} className="d-flex flex-row align-items-center px-2">
          <Card className="cardImgsideBar d-flex flex-row">
            <Card.Img variant="top" src={user.image} alt="foto" className="fotoTonde" />
            <Card.Body>
              <Card.Title>
                <Link to={`/profile/${user._id}`}>
                {user.name} {user.surname}
                </Link>
                <span className="text-muted fs-6 ms-1">• 3°+</span>
              </Card.Title>
              <Card.Text>{user.title}</Card.Text>
              <Link className="nav-link" to="/profile/:userId">
                <Button className="my-2 bottoneSideBar">
                  <BsFillPersonPlusFill className="me-2" />
                  Collegati
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Row>
      ))}
    </Container>
  );
};

export default CardSidebar;
