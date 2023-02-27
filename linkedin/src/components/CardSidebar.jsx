import { Button, Card } from "react-bootstrap";

const CardSidebar = ({ image, name, surname, title }) => {
  return (
    <Card className="d-flex">
      <Card.Img variant="top" src={image} alt={name} className="fotoTonde" />
      <Card.Body>
        <Card.Title>
          {name} {surname} . <span className="disabled">3°</span>
        </Card.Title>
        <Card.Text>{title}</Card.Text>
        <Button className="my-2">Collegati</Button>
      </Card.Body>
    </Card>
  );
};

export default CardSidebar;
