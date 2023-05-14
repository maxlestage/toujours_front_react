import { Button, Modal } from "react-bootstrap";

function ConnectUser(props) {
  const { show, sharedStateCloseAction } = props;
  return (
    <>
      <Modal show={show} onHide={sharedStateCloseAction} centered>
        <Modal.Header closeButton>
          <Modal.Title>Tout à fonctionné!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Vous êtes connecté.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={sharedStateCloseAction}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConnectUser;
