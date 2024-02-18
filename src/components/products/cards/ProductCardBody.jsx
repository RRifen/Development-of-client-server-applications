import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import classes from "./Card.module.css";

const ProductCardBody = ({title, description}) => {
    return (
        <Card.Body className={classes.cardBody + " d-flex flex-column"}>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
            <Button variant="primary" className={classes.cardButton + " mt-auto"}>Купить</Button>
        </Card.Body>
    );
};

export default ProductCardBody;