import { Button, Modal } from "react-bootstrap";

function CreateUserErr(props) {
  const { show, handleSignupClose } = props;

  return (
    <>
      <Modal show={show} onHide={handleSignupClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Erreur</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Votre compte n'a pas pu être créé</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={handleSignupClose}
          >
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateUserErr;
