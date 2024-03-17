import styles from "./SingleProduct.module.css";
import {Col, Container, Image, Row} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";

const SingleProduct = ({products}) => {

    const { itemId } = useParams();

    return (
        <Container className={styles.productContainer}>
            <Link to={"/catalog"} href="src/components/items#" className={styles.close} />
            <Row>
                <Col xs="6" className={styles.productImage}>
                    <Image src={products[itemId - 1].imageSrc} fluid alt="Product Image"/>
                </Col>
                <Col xs="6" className={styles.productDetails}>
                    <h2>Product Name</h2>
                    <p className={styles.price}>$99.99</p>
                    <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                        magna sit
                        amet lorem bibendum consectetur.</p>
                    <button>Add to Cart</button>
                </Col>
            </Row>
            <Row>
                <div></div>
                Check our other goods

            </Row>
        </Container>
    );
}

export default SingleProduct;
