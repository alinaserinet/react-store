import Template from "../Template/MainTemplate";
import {CartProduct as Product} from "../components/Product";
import ProductDetail from "../components/Product/ProductDetail";
import {useSelector} from "react-redux";

const Cart = () => {
    const {items, total} = useSelector(({cart}) => cart);
    const ids = Object.keys(items);
    return (
        <Template title='Cart'>
            {ids.map(id => <Product key={id} id={id} />)}
            <div className="cart-footer">
                <ProductDetail value={total + '$'} title='Total Amount' component='span' className='fw-500'/>
            </div>
        </Template>
    );
};

export default Cart;