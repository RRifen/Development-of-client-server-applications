import ProductCard from "./cards/ProductCard";
import React from "react";
import {Col, Container, Row} from "react-bootstrap";

const ProductsContainer = () => {

    const products = [
        {
            title: "title1",
            description: "description1",
            imageSrc: "https://opis-cdn.tinkoffjournal.ru/mercury/first-phones-pic-3.gowgy5.jpg"
        },
        {
            title: "title2",
            description: "description2",
            imageSrc: "https://www.ferra.ru/imgs/2018/11/24/16/2466602/3af742b2a1abb24e2af7bcf6d5adb8bede813971.jpg"
        },
        {
            title: "title3",
            description: "description3",
            imageSrc: "https://www.dgl.ru/wp-content/uploads/2017/03/dgl_dgl_01_2114_7507.jpg"
        },
        {title: "title4", description: "description4", imageSrc: "https://pwv.ru/upload/iblock/237/7.jpg"},
        {
            title: "title5",
            description: "description5",
            imageSrc: "https://www.ferra.ru/imgs/2018/11/24/16/2466595/eaf8f04f73bac8273813224ab70487ad4face19c.jpg"
        }
    ];

    return (
        <Container>
            <Row>
                {
                    products.map((product) =>
                        <Col className="d-flex justify-content-center mt-2">
                            <ProductCard {...product}/>
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
};

export default ProductsContainer;
