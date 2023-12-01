// import React, { useState, useEffect } from "react";
// import {
//   TOTAL_SCREENS,
//   GET_SCREEN_INDEX,
// } from "../../../Utilities/CommonUtils";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./Header.css";

// test
import { useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { Link } from "react-router-dom";

// export default function Header() {
//   const [selectedScreen, setSelectedScreen] = useState(0);
//   const [showHeaderOptions, setShowHeaderOptions] = useState(false);

//   const getHeaderOptions = () => {
//     return TOTAL_SCREENS.map((Screen, i) => (
//       <div
//         key={Screen.props.screen_name}
//         className={getHeaderOptionsClasses(i)}
//       >
//         <span>{Screen.props.screen_name}</span>
//       </div>
//     ));
//   };

// const getHeaderOptionsClasses = (index: number) => {
//   let classes = "header-option ";
//   if (index < TOTAL_SCREENS.length - 1) classes += "header-option-seperator ";

//   if (selectedScreen === index) classes += "selected-header-option ";

//   return classes;
// };


//test


function HeaderTest() {
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
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top" expanded={!collapsed}>
      <Container>
        <Navbar.Brand href="/">Portfolio Site</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            {/* <Nav.Link href="#videos">Videos</Nav.Link> */}
            {/* <Nav.Link href="#shows">Shows</Nav.Link> */}
            <Nav.Link href="#socials">Socials</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderTest;