import Template from "../Template/MainTemplate";
import {CartProduct as Product} from "../components/Product";
import ProductDetail from "../components/Product/ProductDetail";
import {useSelector} from "react-redux";
import {fixPrice} from "../redux/cartSlice";

const Cart = () => {
    const {items, products} = useSelector(({cart, product}) => {
        return {
            items: cart.items,
            products: product.items,
        }
    });

    const totalPrice = items.reduce((prevAmount, item) => {
        const productPrice = products[item.productId]?.price;
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