import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import ModalSignUpForm from "../forms/ModalSignUpForm";

function NavigationBar() {
  const [signupShow, setSignupShow] = useState(false);
  const handleSignupClose = () => setSignupShow(false);
  const handleSignupShow = () => setSignupShow(true);


  console.log("test", signupShow);
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Toujours Skateboarding Comp.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={()=>handleSignupShow()}>S'inscrire</Nav.Link>
            <Nav.Link >
              Se connecter
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <ModalSignUpForm signupShow={signupShow} handleSignupClose={handleSignupClose} />
    </>
  );
}

export default NavigationBar;
