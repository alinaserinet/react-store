import Button from "../Button";
import {addProduct, isProductExist} from "../../redux/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import CartButtons from "../Button/CartButtons";

const AddToCart = ({product}) => {

    const dispatch = useDispatch();
    const cartItems = useSelector(({cart}) => cart.items);
    const cartIndex = isProductExist(cartItems, product.id);

    function handleAddToCard(e) {
        dispatch(addProduct(product));
    }

    if (cartIndex === -1) {
        return (
            <Button
                className='button primary block'
                onClick={handleAddToCard}>Add to card</Button>
        )
    }

    const item = cartItems[cartIndex];

    return (
        <CartButtons id={product.id} count={item.count} />
    );
};

export default AddToCart;