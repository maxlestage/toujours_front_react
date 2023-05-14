import { Navbar, Nav, Badge, Container } from "react-bootstrap";
import { useState } from "react";
import ModalSignUpForm from "../forms/ModalSignUpForm";
import ModalSignInForm from "../forms/ModalSignInForm";

import useAuthChecker from "../../services/useAuthChecker";

function NavigationBar() {
  const [signupShow, setSignupShow] = useState(false);
  const handleSignupClose = () => setSignupShow(false);
  const handleSignupShow = () => setSignupShow(true);

  const [signinShow, setSigninShow] = useState(false);
  const handleSigninClose = () => setSigninShow(false);
  const handleSigninShow = () => setSigninShow(true);

  const isLoggedIn = useAuthChecker();

  const isOk = isLoggedIn.isLoggedIn;

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  // console.log("isLoggedIn: >>>>>>>>>>>>>>>", isLoggedIn.isLoggedIn);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Toujours Skateboarding Comp.</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {isOk ? (
                <>
                  <Nav.Link>
                    <Badge bg="success">Utilisateur connecté</Badge>
                  </Nav.Link>
                  <Nav.Link onClick={logout}>Se déconnecter</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link onClick={() => handleSignupShow()}>
                    S'inscrire
                  </Nav.Link>
                  <Nav.Link onClick={() => handleSigninShow()}>
                    Se connecter
                  </Nav.Link>
                </>
              )}
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
