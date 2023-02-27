import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const CardGeneric = ({ image, name, surname, title }) => {
  const users = useSelector((state) => state.content);
  console.log(users[0]);
  return (
    <Card className="d-flex">
      <Card.Img
        variant="top"
        src={users[props.arr.i].image}
        alt={users[i].name}
        className="fotoTonde"
      />
      <Card.Body>
        <Card.Title>
          {users[i].name} {users[i].surname} .{" "}
          <span className="disabled">3°</span>
        </Card.Title>
        <Card.Text>{users[i].title}</Card.Text>
        <Button className="my-2">Collegati</Button>
      </Card.Body>
    </Card>
  );
};

export default CardGeneric;
