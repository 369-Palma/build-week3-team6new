import { Card } from "react-bootstrap";
import { BsFillBookmarkFill, BsAwardFill } from "react-icons/bs";

const HomeLeftSidebar = () => {
  return (
    <Card>
      <Card.Body>
        <h3>Ti diamo il benvenuto!</h3>
        <hr />
        <h6 className="text-muted">Collegamenti</h6>
        <h6>Espandi la tua rete</h6>
        <hr />
        <h6 className="text-muted">Accedi a strumenti e informazioni in esclusiva</h6>
        <p className="text-primary">
          <BsAwardFill /> Prova Premium gratis
        </p>
        <hr />
        <h6>
          <BsFillBookmarkFill /> I miei elementi
        </h6>
      </Card.Body>
    </Card>
  );
};

export default HomeLeftSidebar;
