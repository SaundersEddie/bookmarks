import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

import logo from '../assets/images/logo.jpg';

export default function FrontPage() {
    return (
        <>
            <Navbar fixed="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <img
                            alt="Bookmarks Logo"
                            src={logo}
                            width="50"
                            heigh="50"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#register">Register</Nav.Link>
                        <Nav.Link href="#login">Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Navbar fixed="bottom" bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="About">About</Nav.Link>
                        <Nav.Link href="Contact">Contact</Nav.Link>
                        <Nav.Link href="Copyright">&copy; 2021 Some Bunch of Coders or Something</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}