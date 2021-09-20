import ProductDetail from "./ProductDetail";
import {CloseBtn} from "../Button";
import CartButtons from "../Button/CartButtons";
import {useDispatch, useSelector} from "react-redux";
import {deleteProduct} from "../../redux/cartSlice";

const CartProduct = ({item}) => {
    const {product, count} = item;
    const title = product.title.split(' ').slice(0, 4).join(' ');
    const dispatch = useDispatch();
    function handleDeleteProduct() {
        dispatch(deleteProduct(product.id));
    }

    return (
        <div className='card product'>
            <div className='product-image' style={{backgroundImage: `url(${product.image})`}} >
            </div>
            <div className='product-info'>
                <CloseBtn onClick={handleDeleteProduct}/>
                <span className='fw-500'>{title}</span>
                <div className='product-details'>
                    <ProductDetail title='color' value='red'/>
                    <ProductDetail title='size' value='L'/>
                </div>
                <div className='product-footer'>
                    <div>
                        <CartButtons count={count} id={product.id} />
                    </div>
                    <ProductDetail className='fw-500' component='span' value={product.price + '$'} />
                </div>
            </div>
        </div>
    );
};

export default CartProduct;