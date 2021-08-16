import Template from "../../Template/MainTemplate";
import Category from "../../components/Category";
import {Link} from "react-router-dom";
import http from "../../services/http";
import {useEffect, useState} from "react";
import {CategoriesSkeleton} from "./skeleton";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        http.get('/products/categories')
            .then(({data}) => {
                setCategories(data);
                setLoading(false);
            });
    }, []);

    return (
        <Template title='Categories'>
            {loading ? <CategoriesSkeleton /> :categories.map((category) => (
                <Link to={`/categories/${category}`} key={category} style={{display: 'block'}}>
                    <Category title={category} image={'/category.jpg'}/>
                </Link>
            ))}
        </Template>
    );
};

export default Categories;