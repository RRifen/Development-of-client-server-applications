import ProductCard from "./cards/ProductCard";
import React from "react";
import {Col, Container, Row} from "react-bootstrap";

const ProductsContainer = ({ products }) => {

    const ROW_SIZE = 4;

    const getProductCol = (i) => {
        return (
            <Col className="d-flex mt-2" key={i}>
                <ProductCard {...products[i]}/>
            </Col>
        )
    }

    const getProductRow = (rowIndex) => {
        const cols = [];
        const max = Math.min(ROW_SIZE * (rowIndex + 1), products.length);
        for (let i = ROW_SIZE * rowIndex; i < max; i++) {
            cols.push(getProductCol(i));
        }

        return (
            <Row className="justify-content-around" key={rowIndex}>
                {cols}
            </Row>
        )
    }

    const getProductRows = () => {
        const max = (products.length - 1) / ROW_SIZE + 1;
        const rows = [];
        for (let i = 0; i < max; i++) {
            rows.push(getProductRow(i));
        }

        return rows;
    }

    return (
        <Container>
            {getProductRows()}
        </Container>
    );
};

export default ProductsContainer;
