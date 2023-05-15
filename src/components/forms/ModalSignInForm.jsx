import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { userSignIn } from "../../services/userServices";
import "./css/modal.css";
import ConnectUser from "../actions/ConnectUser";
import ConnectUserErr from "../actions/ConnectUserErr";
import useAuthChecker from "../../services/useAuthChecker";
import { userConnectionState } from "../../recoil_state";
import { useSetRecoilState } from "recoil";

function ModalSignInForm(props) {
  const setUserConnection = useSetRecoilState(userConnectionState);

  const { signinShow, handleSigninCloseAction } = props;

  const [formData, setFormData] = useState({
    mail: "",
    password: "",
  });

  const [signInStatus, setSignInStatus] = useState("initial");
  // const { updateSharedStateBearer } = useAuthChecker();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await userSignIn(formData);
      if (response.status === 200) {
        setSignInStatus("success");
        localStorage.setItem("token", response.data.Bearer);
        setUserConnection(true); // recoil
        console.log("response.token:>>>>>>> ", response.data.Bearer);
        console.log("Utilisateur connecté!");
      } else {
        setSignInStatus("error");
        console.log("Loupé faudra recommancer...");
      }
    } catch (error) {
      setSignInStatus("error");
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const hideModal = () => {
    setSignInStatus("initial");
  };

  return (
    <>
      <Modal
        show={signinShow}
        onHide={handleSigninCloseAction}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Se connecter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className=" justify-content-center mt-5">
            <Form onSubmit={handleSubmit}>
              <Form.Label htmlFor="Mail">E-Mail</Form.Label>
              <Form.Control
                type="email"
                name="mail"
                value={formData.mail}
                onChange={handleChange}
                placeholder="user@hostmail.com"
              />
              <br />
              <Form.Label htmlFor="Password">Mot de Passe</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Exemple: azertylolf4i5p4sç41o!"
              />
              <br />
              <Button
                variant="outline-success"
                type="submit"
                className="mt-5"
                onClick={() =>
                  setTimeout(() => {
                    handleSigninCloseAction();
                  }, "1000")
                }
              >
                Valider
              </Button>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleSigninCloseAction}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
      <ConnectUser
        show={signInStatus === "success"}
        sharedStateCloseAction={hideModal}
      />
      <ConnectUserErr
        show={signInStatus === "error"}
        sharedStateCloseAction={hideModal}
      />
    </>
  );
}

export default ModalSignInForm;
