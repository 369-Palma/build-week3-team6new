import { Modal, Button } from "react-bootstrap";
import { fetchUser } from "../redux/actions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ModalNav = () => {
  const dispatch = useDispatch();
  const profileStore = useSelector((state) => state.contentUsers);

  useEffect(() => {
    dispatch(fetchUser("me"));
  }, []);
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4 className="name mb-0">
              {profileStore.name} {profileStore.surname}
            </h4>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="my-0 occupation">{profileStore.title}</p>
          <p className="my-0 location text-muted">{profileStore.area}</p>
          <Button variant="secondary">Visualizza profilo</Button>
        </Modal.Body>

        <Modal.Footer>
          <p>Account</p>
          <p>Gestisci</p>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default ModalNav;
