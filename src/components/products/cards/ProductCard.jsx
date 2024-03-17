import React from 'react';
import Card from "react-bootstrap/Card";
import ProductCardBody from "./ProductCardBody";
import classes from "./Card.module.css";

const ProductCard = ({title, description, imageSrc, id}) => {
    return (
        <Card className={classes.card}  >
            <Card.Img variant="top" src={imageSrc}/>
            <ProductCardBody title={title} description={description} id={id} />
        </Card>
    );
};

export default ProductCard;
