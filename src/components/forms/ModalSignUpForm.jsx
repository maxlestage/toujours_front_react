
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import {userSignUp} from "../../services/login"

function ModalSignUpForm(props) {
const { signupShow, handleSignupClose } = props;
console.log("testtest",signupShow);
 const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    mail: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await userSignUp(formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
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
      <Modal signupShow={signupShow} onHide={handleSignupClose}>
        <Modal.Header closeButton>
          <Modal.Title>S'inscrire</Modal.Title>
        </Modal.Header>
        <Modal.Body><Container className=" justify-content-center mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Label htmlFor="Firstname">Prénom</Form.Label>
        <Form.Control
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          placeholder="Johnny"
        />
        <br/>
        <Form.Label htmlFor="Lastname">Nom</Form.Label>
        <Form.Control
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          placeholder="Terreur"
        />
        <br/>
        <Form.Label htmlFor="Mail">E-Mail</Form.Label>
        <Form.Control
          type="email"
          name="mail"
          value={formData.mail}
          onChange={handleChange}
          placeholder="user@hostmail.com"
        />
        <br/>
        <Form.Label htmlFor="Password">Mot de Passe</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Exemple: azertylolf4i5p4sç41o!"
        />
         <br/>
        <Button variant="outline-success" type="submit" className="mt-5">
          Valider
        </Button>
      </Form>
    </Container>
    </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger"  onClick={handleSignupClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalSignUpForm;