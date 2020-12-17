import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';
import './Header.css'
const Headers = () => {
  return (
    <Navbar bg="info" expand="lg">
      <Navbar.Brand href="#home">CV-Rodriguez M. Carlos</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
         <NavLink exact={true} to='/' className='nav-link' activeClassName='active'>Sobre Mi</NavLink>
         <NavLink exact={true} to='/AgregarElementos' className='nav-link' activeClassName='active'>Estudios</NavLink>
         <NavLink exact={true} to='/ListadeElementos' className='nav-link' activeClassName='active'>Experiencia</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Headers;
