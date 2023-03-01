/* import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { BsFillInfoSquareFill, HiPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { PostExp } from "../redux/actions";

const ModalExperiences = () => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nome*</Form.Label>
            <Form.Control type="text" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Cognome*</Form.Label>
            <Form.Control type="text" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nome aggiuntivo</Form.Label>
            <Form.Control type="text" autoFocus />
          </Form.Group>
          <p>Pronuncia del nome</p>
          <p>
            <BsFillInfoSquareFill />
            Può essere aggiunta solo usando la nostra app per dispositivi mobili{" "}
          </p>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Inserisci pronomi personalizzati</Form.Label>
            <Form.Control type="text" autoFocus />
            <Form.Label>
              Indica i pronomi di genere che vuoi che gli altri usino per
              riferirsi a te
            </Form.Label>
          </Form.Group>
          <p>
            Scopri di più sui <strong>pronomi di genere.</strong>
          </p>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Sommario*</Form.Label>
            <Form.Control type="text" autoFocus />
          </Form.Group>
          <h4>Posizione attuale</h4>
          <Link>
            <p>
              <HiPlus /> Aggiungi posizione lavorativa
            </p>
          </Link>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Settore*</Form.Label>
            <Form.Control type="text" autoFocus />
            <Form.Label>
              Scopri di più sulle <strong>opzioni relative al settore</strong>
            </Form.Label>
          </Form.Group>
          <h4>Formazione</h4>
          <Link>
            <p>
              <HiPlus /> Aggiungi un nuovo grado di formazione
            </p>
          </Link>
          <h4>Località</h4>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Paese/Area geografica </Form.Label>
            <Form.Control type="text" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>CAP </Form.Label>
            <Form.Control type="text" autoFocus />
          </Form.Group>
          <h4>Informazioni di contatto</h4>
          <p>Aggiungi o modifica il tuo profilo URL, indirizzo email e altro</p>
          <Link>Modifica le informazioni di contatto</Link>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" className="rounded-pill">
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalExperiences; */
