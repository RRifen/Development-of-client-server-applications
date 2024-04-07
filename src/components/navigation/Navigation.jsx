import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container className="ms-1">
                <Navbar.Brand>
                    <Link to={`/catalog`} className={styles.routerLink}>
                        <img
                            src={require("../../images/Elshopo.png")}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Link>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as="div"><Link to={`/profile`} className={styles.routerLink}>Профиль</Link></Nav.Link>
                    <Nav.Link as="div"><Link to={`/catalog`} className={styles.routerLink}>Товары</Link></Nav.Link>
                    <Nav.Link as="div"><Link to={`/add-product`} className={styles.routerLink}>Добавить товар</Link></Nav.Link>
                    <Nav.Link as="div"><Link to={`/about`} className={styles.routerLink}>О нас</Link></Nav.Link>
                    <Nav.Link as="div"><Link to={`/support`} className={styles.routerLink}>Чат поддержки</Link></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;