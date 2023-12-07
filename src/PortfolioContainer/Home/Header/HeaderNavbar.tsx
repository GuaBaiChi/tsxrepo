
import { useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function HeaderNavbar() {
  const [collapsed, setCollapsed] = useState(true);

  const toggle = () => {
    setCollapsed((collapsed) => !collapsed);
  };

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      if (!collapsed) {
        setCollapsed(true);
      }
    }
  }


  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark" fixed="top" expanded={!collapsed}>
        <Container>
          <Navbar.Brand href="/">Leon's Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggle} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#About_Me">About Me</Nav.Link>
              <Nav.Link href="#Resume">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HeaderNavbar;