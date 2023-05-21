import { Navbar, Nav, Badge, Container } from "react-bootstrap";
import { useState } from "react";
import ModalSignUpForm from "../forms/ModalSignUpForm";
import ModalSignInForm from "../forms/ModalSignInForm";

import { useSetRecoilState, useRecoilState } from "recoil";
import { userConnectionState } from "../../recoil_state";

function NavigationBar() {
  const [userConnection, setUserConnection] =
    useRecoilState(userConnectionState);
  const setUserConnectionValue = useSetRecoilState(userConnectionState);
  const [signupShow, setSignupShow] = useState(false);
  const handleSignupClose = () => setSignupShow(false);
  const handleSignupShow = () => setSignupShow(true);

  const [signinShow, setSigninShow] = useState(false);
  const handleSigninClose = () => setSigninShow(false);
  const handleSigninShow = () => setSigninShow(true);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUserConnectionValue(false);
  };

  let userData = localStorage.getItem("user");
  let parseUserData = JSON.parse(userData);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Toujours Skateboarding Comp.</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {userConnection ? (
                <>
                  <Nav.Link href="data">
                    <Badge bg="success">
                      {parseUserData.firstname} {parseUserData.lastname}
                    </Badge>
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
