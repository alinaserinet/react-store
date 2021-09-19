import Template from "../Template/MainTemplate";
import {CartProduct as Product} from "../components/Product";
import ProductDetail from "../components/Product/ProductDetail";
import {useSelector} from "react-redux";

const Cart = () => {
    const {items, totalPrice} = useSelector(({cart}) => cart);
    return (
        <Template title='Cart'>
            {items.map(item => <Product item={item} id={item.productId}/>)}
            <div className="cart-footer">
                <ProductDetail value={totalPrice + '$'} title='Total Amount' component='span' className='fw-500'/>
            </div>
        </Template>
    );
};

export default Cart;