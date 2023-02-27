import { Button, Card, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const CardSidebar = () => {
  const users = useSelector((state) => state.content[0]);

  console.log(users);
  return (
    <Row>
      <Card className="d-flex">
        <Card.Img
          variant="top"
          src={users?.image}
          alt="foto"
          className="fotoTonde"
        />
        <Card.Body>
          <Card.Title>
            {users?.name} {users?.surname} .{" "}
            <span className="disabled">3°</span>
          </Card.Title>
          <Card.Text>{users?.title}</Card.Text>
          <Button className="my-2">Collegati</Button>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default CardSidebar;
