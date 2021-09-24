import Template from "../Template/MainTemplate";
import {CartProduct as Product} from "../components/Product";
import ProductDetail from "../components/Product/ProductDetail";
import {useSelector} from "react-redux";
import {fixPrice} from "../redux/cartSlice";

const Cart = () => {
    const {items, prices} = useSelector(({cart}) => cart);

    const totalPrice = items.reduce((prevAmount, item) => {
        const productPrice = prices[item.productId];
        return fixPrice(productPrice * item.count + prevAmount) || 0;
    }, 0);

    return (
        <Template title='Cart'>
            {items.map(item =>
                <Product
                    item={item}
                    key={item.productId}
                />
            )}
            <div className="cart-footer">
                <ProductDetail value={totalPrice + '$'} title='Total Amount' component='span' className='fw-500'/>
            </div>
        </Template>
    );
};

export default Cart;