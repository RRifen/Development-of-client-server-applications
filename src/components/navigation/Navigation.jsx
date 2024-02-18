import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

const Navigation = () => {
    return (
        <Navbar  bg="light" data-bs-theme="light">
            <Container className="ms-1">
                <Navbar.Brand href="#home">Меню</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Профиль</Nav.Link>
                    <Nav.Link href="#features">Товары</Nav.Link>
                    <Nav.Link href="#pricing">О нас</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;