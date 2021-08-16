import Template from "../../Template/MainTemplate";
import {useRouteMatch} from "react-router-dom";
import {useEffect, useState} from "react";
import http from "../../services/http";
import Product from "../../components/Product";
import {Link} from 'react-router-dom';
import {CategorySkeleton} from "./skeleton";

const Category = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {params} = useRouteMatch();

    useEffect(() => {
        setLoading(true);
        http.get(`/products/category/${params.title}`)
            .then(({data}) => {
                setProducts(data);
                setLoading(false);
            });
    }, [params]);



    return (
        <Template title={params.title}>
            {loading ? <CategorySkeleton /> : products.map((product) => (
                <Link to={`/products/${product.id}`} key={product.id} >
                    <Product product={product} key={product.id} />
                </Link>
            ))}
        </Template>
    );
};

export default Category;