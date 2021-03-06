import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar sticky="top" expand="lg" variant="dark">
        <NavLink to="/" exact>
          <Navbar.Brand id="Brand">The Game Page</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink id="home" to="/" exact className="nav-link">
              Home
            </NavLink>
            <NavLink id="contact" to="/contact" className="nav-link">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
