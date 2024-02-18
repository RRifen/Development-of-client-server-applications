import React from 'react';
import Card from "react-bootstrap/Card";
import ProductCardBody from "./ProductCardBody";
import classes from "./Card.module.css";

const ProductCard = ({title, description, imageSrc}) => {
    return (
        <Card className={classes.card}  >
            <Card.Img variant="top" src={imageSrc}/>
            <ProductCardBody title={title} description={description} />
        </Card>
    );
};

export default ProductCard;
