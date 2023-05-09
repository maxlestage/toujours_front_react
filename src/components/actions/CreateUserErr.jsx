import { Button, Modal } from "react-bootstrap";

function CreateUserErr(props) {
  const { show } = props;
  console.log("show", show); // il vaut true

  return (
    <>
      <Modal show={show} onHide={true} centered>
        <Modal.Header closeButton>
          <Modal.Title>Erreur</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Votre compte n'a pas pu être créé</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => (show !== true ? false : null)}
          >
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateUserErr;
