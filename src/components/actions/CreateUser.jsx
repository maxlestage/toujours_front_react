import { Button, Modal } from "react-bootstrap";

function CreateUser(props) {
  const { show, handleSignupClose } = props;
  return (
    <>
      <Modal show={show} onHide={handleSignupClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Compte créé</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Votre compte a bien été créé !</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleSignupClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateUser;
