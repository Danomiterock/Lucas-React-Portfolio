import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Danomiterock Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link as={Link} to="/resume">
              Resume
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

function Home() {
  return <h2>Home</h2>;
}

function Portfolio() {
  return <h2>Portfolio</h2>;
}

function Resume() {
  return <h2>Resume</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

{/* <ul>
  <li>
    <Link to={`${match.url}/components`}>Components</Link>
  </li>
  <li>
    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
  </li>
</ul>; */}
export default Header;
