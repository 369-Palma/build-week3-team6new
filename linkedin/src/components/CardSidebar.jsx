import { Button, Card } from "react-bootstrap";

const CardSidebar = (props) => {
  <Card className="d-flex">
    <Card.Img
      variant="top"
      src={props.image}
      alt={props.name}
      className="fotoTonde"
    />
    <Card.Body>
      <Card.Title>
        {props.name} {props.surname} . <span className="disabled">3°</span>
      </Card.Title>
      <Card.Text>{props.title}</Card.Text>
      <Button className="my-2">Collegati</Button>
    </Card.Body>
  </Card>;
};

export default CardSidebar;
