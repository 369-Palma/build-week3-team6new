import { Button, Card } from "react-bootstrap";

const CardSidebar = (props) => {
  <Card className="d-flex">
    <Card.Img variant="top" src={props.image} className="fotoTonde" />
    <Card.Body>
      <Card.Title>
        {props.name} + {props.surname}
      </Card.Title>
      <Card.Text>{props.title}</Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>;
};

export default CardSidebar;
