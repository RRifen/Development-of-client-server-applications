import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import classes from "./Card.module.css";
import {Link} from "react-router-dom";

const ProductCardBody = ({title, description, id}) => {
    return (
        <Card.Body className={classes.cardBody + " d-flex flex-column justify-content-end"}>
            <Card.Title>{title}</Card.Title>
            <Card.Text as="div" className={classes.readMore}>
                <div className={classes.readMoreDescription}>
                    {description}
                </div>
                <Link to={"/catalog/" + id} className={classes.readMoreLink}>

                </Link>
            </Card.Text>
            <Button variant="primary" className={classes.cardButton}>В корзину</Button>
        </Card.Body>
    );
};

export default ProductCardBody;