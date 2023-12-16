import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Button, Offcanvas } from "react-bootstrap";
import { BsList } from "react-icons/bs";
import "./NavigationBar.css";

const NavigationBar: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleHamburgerClick = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        className="mb-4 fixed-top"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
      >
        <Container>
          {/* Hamburger Icon */}
          <BsList
            size={30}
            className="me-2"
            onClick={handleHamburgerClick}
            style={{ cursor: "pointer" }}
          />

          {/* Brand Name */}
          <Navbar.Brand href="/">Task Tinder</Navbar.Brand>

          {/* Rest of the Navbar */}
          <Nav className="me-auto">{/* Your navigation links */}</Nav>

          {/* Authentication Buttons */}
          <Button variant="outline-primary" className="me-2">
            Log in
          </Button>
          <Link to="/register" className="btn btn-primary">
            Sign up
          </Link>
          {/* <Button variant="primary">Sign up</Button> */}
        </Container>
      </Navbar>

      {/* Offcanvas Menu */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        className="custom-offcanvas-width"
        style={{ width: "25%" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            {/* Add more dummy links as needed */}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavigationBar;
