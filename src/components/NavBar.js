import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../assets/granos-de-cafe.svg'


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="home">
                <img
                    src={logo}
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                    alt="Logo Coffee Black"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="conocenos">CONOCENOS</Nav.Link>
                    <Nav.Link href="tienda">TIENDA EN LINEA</Nav.Link>
                    <Nav.Link href="encuentra">ENCUENTRA TU CAFE</Nav.Link>
                    <Nav.Link href="blog">BLOG</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link eventKey={2} href="contactanos">CONTACTANOS</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
