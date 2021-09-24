import ProductDetail from "./ProductDetail";
import {CloseBtn} from "../Button";
import CartButtons from "../Button/CartButtons";
import {useDispatch} from "react-redux";
import {deleteProduct, setPrice} from "../../redux/cartSlice";
import {useEffect, useState} from "react";
import http from "../../services/http";
import {CartProductSkeleton} from "./Skeleton";

const CartProduct = ({item, setTotalPrice}) => {
    const {productId, count} = item;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    
    useEffect(() => {
        setLoading(true);
        http.get(`/products/${productId}`)
            .then(({data}) => {
                setProduct(data);
                setLoading(false);
                dispatch(setPrice(productId, data.price));
            });
    }, [dispatch, productId]);

    const title = product?.title.split(' ').slice(0, 4).join(' ') + '...';

    function handleDeleteProduct() {
        dispatch(deleteProduct(product.id));
    }

    return (
        <>
            {loading ? < CartProductSkeleton /> :
                <div className='card product'>
                    <div className='product-image' style={{backgroundImage: `url(${product.image})`}}>
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
                                <CartButtons count={count} id={product.id}/>
                            </div>
                            <ProductDetail className='fw-500' component='span' value={product.price + '$'}/>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default CartProduct;