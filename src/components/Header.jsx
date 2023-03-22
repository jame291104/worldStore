import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Header = () => {
  return (
    <header>
       <Navbar bg="" expand="lg">
      <Container fluid>
          <div className="logo">
            <img src="./img/logo1.png" alt="logo"/>
          </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link><Link className="text-decoration-none text-light mx-3" to='/'>Inicio</Link></Nav.Link>
            <Nav.Link><Link className="text-decoration-none text-light mx-3" to='/Ofertas'>Ofertas</Link></Nav.Link>
            <Nav.Link><Link className="text-decoration-none text-light mx-3" to='/AboutUs'>Nosotros</Link></Nav.Link>
            <Nav.Link className="text-decoration-none text-light mx-3">Carrito <i className="bi bi-bag-check-fill"></i></Nav.Link>
            <NavDropdown className='bg-light text-light' title="Vender" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Mis Productos</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>    
    </header>
    
  )
}
