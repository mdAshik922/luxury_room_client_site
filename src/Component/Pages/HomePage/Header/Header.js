
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import headLogo from './Group 33069.png';
import { HashLink } from 'react-router-hash-link';

const Header = () => {

    const { user } = useAuth();
    return (
        <div>
      <Navbar collapseOnSelect expand="lg"style={{backgroundColor: '#d6d9dd'}}>
  <Container>
  <Navbar.Brand to="/home"><img  width="35%" src={headLogo} alt=""/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto"  style={{marginLeft: '15%'}}>
      <Nav.Link as={HashLink}  to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink}  to="/home#project">Project</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
     
    </Nav>
    <Nav>
    <NavLink style={{textDecoration: "none", color: "black", fontSize: "1rem", marginRight: "5px"}}to="#">
              {user.displayName}
            </NavLink>
      {user.email? 

         <Nav.Link as={Link}  to="/dashBoard">Dashboard</Nav.Link>
       
       :
      <Nav.Link as={Link} to="/login">Login</Nav.Link>}
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar> 
        </div>
    );
};

export default Header;