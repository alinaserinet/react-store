import ProductDetail from "./ProductDetail";
import {CloseBtn} from "../Button";
import CartButtons from "../Button/CartButtons";
import {useDispatch, useSelector} from "react-redux";
import {deleteProduct} from "../../redux/cartSlice";
import {useEffect, useState} from "react";
import http from "../../services/http";
import {CartProductSkeleton} from "./Skeleton";
import {addProduct} from "../../redux/productSlice";

const CartProduct = ({item}) => {
    const {productId, count} = item;
    const productSaved = useSelector(({product}) => product.items[productId]);
    const [product, setProduct] = useState(productSaved);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    
    useEffect(() => {
        if(productSaved) {
            setLoading(false);
            return;
        }
        setLoading(true);
        http.get(`/products/${productId}`)
            .then(({data}) => {
                setProduct(data);
                setLoading(false);
                dispatch(addProduct(data));
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