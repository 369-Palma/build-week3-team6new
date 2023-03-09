import { Card } from "react-bootstrap";

const HomeRightSidebar = () => {
  return (
    <Card>
      <Card.Body>
        <h3>LinkedIn News</h3>
        <li>Crescita professionale: 5 corsi dedicati alle donne</li>
        <div className="text-muted">1 giorno fa • 234 lettori</div>
        <li>SONDAGGIO: Come favorire l'occupazione femminile?</li>
        <div className="text-muted">1 giorno fa • 644 lettori</div>
        <li>Ucraina: gli ultimi aggiornamenti</li>
        <div className="text-muted">6 giorni fa • 984 lettori</div>
        <li>Dove cresce l'imprenditoria femminile</li>
        <div className="text-muted">18 ore fa</div>
      </Card.Body>
    </Card>
  );
};

export default HomeRightSidebar;
