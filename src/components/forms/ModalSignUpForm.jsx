import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { userSignUp } from "../../services/userServices";

import "./css/modal.css";
import CreateUser from "../actions/CreateUser";
import CreateUserErr from "../actions/CreateUserErr";

function ModalSignUpForm(props) {
  const { signupShow, handleSignupCloseAction } = props;

  const hideModal = () => {
    setSignUpStatus("initial");
  };

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    mail: "",
    password: "",
  });
  const [signUpStatus, setSignUpStatus] = useState("initial");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSignUpStatus("pending");
    try {
      const response = await userSignUp(formData);
      console.log("handle - response ", response);
      if (response.status === 201) {
        setSignUpStatus("success");

        console.log("User successfully signed up!");
      } else {
        setSignUpStatus("error");
        console.log("else error : ", response);
      }
    } catch (error) {
      setSignUpStatus("error");
      console.error("ici", error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("", name, value);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="mx-auto mt-10">
        <Modal
          show={signupShow}
          onHide={handleSignupCloseAction}
          centered
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>S'inscrire</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container className="justify-content-center mt-5">
              <Form onSubmit={handleSubmit}>
                <Form.Label htmlFor="Firstname">Prénom</Form.Label>
                <Form.Control
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="Johnny"
                />
                <br />
                <Form.Label htmlFor="Lastname">Nom</Form.Label>
                <Form.Control
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Terreur"
                />
                <br />
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
                      handleSignupCloseAction();
                    }, "1000")
                  }
                >
                  Valider
                </Button>
              </Form>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={handleSignupCloseAction}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
        <CreateUser
          show={signUpStatus === "success"}
          sharedStateCloseAction={hideModal}
        />
        <CreateUserErr
          show={signUpStatus === "error"}
          sharedStateCloseAction={hideModal}
        />
      </div>
    </>
  );
}

export default ModalSignUpForm;
