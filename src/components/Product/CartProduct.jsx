import ProductDetail from "./ProductDetail";
import {CloseBtn} from "../Button";
import CartButtons from "../Button/CartButtons";
import {useSelector} from "react-redux";
const CartProduct = ({id}) => {
    const {items} = useSelector(({cart}) => cart);
    const {product, count} = items[id];
    const title = product.title.split(' ').slice(0, 4).join(' ');
    return (
        <div className='card product'>
            <div className='product-image' style={{backgroundImage: `url(${product.image})`}} >
            </div>
            <div className='product-info'>
                <CloseBtn />
                <span className='fw-500'>{title}</span>
                <div className='product-details'>
                    <ProductDetail title='color' value='red'/>
                    <ProductDetail title='size' value='L'/>
                </div>
                <div className='product-footer'>
                    <div>
                        <CartButtons count={count} id={id} />
                    </div>
                    <ProductDetail className='fw-500' component='span' value={product.price + '$'} />
                </div>
            </div>
        </div>
    );
};

export default CartProduct;