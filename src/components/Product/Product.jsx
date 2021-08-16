import './product.scss'
import ProductDetail from "./ProductDetail";

const Product = ({product}) => {
    const {image} = product;
    let title = product.title.split(' ').slice(0, 4).join(' ');
    title += title.length < product.title.length ? '...' : '';
    return (
        <div className='card product'>
            <div className='product-info'>
                <span className='fw-500' style={{fontSize: '.9rem'}}>{title}</span>
                <small className='gray' style={{marginBottom: '1rem'}}>{product.category}</small>
                <ProductDetail className='fw-500' component='span' value={product.price + '$'} />
            </div>
            <div className='product-image' style={{backgroundImage: `url(${image})`}}>
            </div>
        </div>
    );
};

export default Product;