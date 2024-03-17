import SingleProduct from "../../../components/items/singleProduct/SingleProduct";
import BackgroundForProduct from "../../../components/items/background/BackgroundForProduct";

const Item = ({products}) => {
    return (
        <>
            <BackgroundForProduct/>
            <SingleProduct products={products} />
        </>
    )
}

export default Item;
