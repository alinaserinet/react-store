import Template from "../../Template/MainTemplate";
import {useRouteMatch} from "react-router-dom";
import {useEffect, useState} from "react";
import http from "../../services/http";
import Loader from "./Loader";
import {AddToCart} from "../../components/Product";
import {useDispatch, useSelector} from "react-redux";
import {addProduct} from "../../redux/productSlice";

const Product = () => {
    const {params} = useRouteMatch();
    const productSaved = useSelector(({product}) => product.items[params.id]);
    const [product, setProduct] = useState(productSaved);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        if (productSaved) {
            setLoading(false);
            return;
        }
        setLoading(true);
        http.get(`/products/${params.id}`)
            .then(({data}) => {
                setProduct(data);
                setLoading(false);
                dispatch(addProduct(data));
            });
        /* eslint-disable*/
    }, [dispatch, params.id]);

    return (
        <Template>
            {loading ? <Loader/> : <div className='product-page'>
                <div className='product-image__box'>
                    <img src={product.image} alt={product.title} width='100%'/>
                </div>
                <div className='product-title__box'>
                    <h1 className='product-title'>{product.title}</h1>
                    <span className='gray'>{product.category}</span>
                </div>
                <div>
                    <AddToCart product={product}/>
                </div>
            </div>}
        </Template>
    );
};

export default Product;