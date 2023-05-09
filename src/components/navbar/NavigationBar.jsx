import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import ModalLoginForm from "../forms/ModalLoginForm";

function NavigationBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    console.log(show);
    ;
  }, [show])
  
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Toujours Skateboarding Comp.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#signup">S'inscrire</Nav.Link>
            <Nav.Link onClick={()=>
              handleShow()}>
              Se connecter
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
        <ModalLoginForm show={show} handleClose={handleClose} />

    </>
  );
}

export default NavigationBar;
