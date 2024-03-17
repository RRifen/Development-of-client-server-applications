import React from 'react';
import ProductsContainer from "../../components/products/ProductsContainer";
import {Outlet} from "react-router-dom";

const Catalog = ({products}) => {

    return (
        <>
            <Outlet/>
            <ProductsContainer products={products}/>
        </>
    );
};

export default Catalog;