import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
function CreateUserErr(props) {
  const { show, sharedStateClose } = props;

  return (
    <>
      <Modal show={show} onHide={sharedStateClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Erreur</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Votre compte n'a pas pu être créé</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={sharedStateClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateUserErr;
