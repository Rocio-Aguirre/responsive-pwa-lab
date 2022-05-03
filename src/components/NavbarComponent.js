import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import logo from '../images/logo.svg'

const NavbarComponent = () => {
  return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} alt="logo" className="logo"/>
              Responsive Application
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Gráficos</Nav.Link>
                <Nav.Link href="#link">Trading</Nav.Link>
                <Nav.Link href="#link">Mercado</Nav.Link>
                <Nav.Link href="#link">NFT</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#link">Salir</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  )
}

export default NavbarComponent