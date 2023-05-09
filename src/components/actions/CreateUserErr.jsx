import { Button, Modal, Alert } from "react-bootstrap";

function CreateUserErr(props) {
  const { show, sharedStateCloseAction } = props;

  return (
    <>
      <Modal show={show} onHide={sharedStateCloseAction} centered>
        <Modal.Header closeButton>
          <Modal.Title>Erreur</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant="danger">
            <Alert.Heading>
              Il semblerait que quelque chose se soit mal passé!
            </Alert.Heading>
            <p>Votre compte n'a pas pu être créé.</p>
            <hr />
            <br />
            <small>
              Si tu peux lire ce message, c'est que tu peux encore reprendre un
              verre de plus.🍻
            </small>
          </Alert>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={sharedStateCloseAction}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateUserErr;
