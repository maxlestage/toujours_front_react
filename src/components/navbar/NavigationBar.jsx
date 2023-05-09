import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import ModalSignUpForm from "../forms/ModalSignUpForm";
import ModalSignInForm from "../forms/ModalSignInForm";
import "bootstrap/dist/css/bootstrap.min.css";

function NavigationBar() {
  const [signupShow, setSignupShow] = useState(false);
  const handleSignupClose = () => setSignupShow(false);
  const handleSignupShow = () => setSignupShow(true);

  const [signinShow, setSigninShow] = useState(false);
  const handleSigninClose = () => setSigninShow(false);
  const handleSigninShow = () => setSigninShow(true);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Toujours Skateboarding Comp.</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => handleSignupShow()}>S'inscrire</Nav.Link>
              <Nav.Link onClick={() => handleSigninShow()}>
                Se connecter
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ModalSignUpForm
        signupShow={signupShow}
        handleSignupCloseAction={handleSignupClose}
      />
      <ModalSignInForm
        signinShow={signinShow}
        handleSigninCloseAction={handleSigninClose}
      />
    </>
  );
}

export default NavigationBar;
