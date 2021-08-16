import React from "react";

const ProductDetail = ({component: Component = 'small', title, value, className}) => {
    return (
        <span className='product-detail'>
            {title && <Component className='gray'>{title}: </Component>}
            <Component className={className}> {value}</Component>
        </span>
    );
};

export default ProductDetail;