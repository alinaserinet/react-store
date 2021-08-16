import React from 'react';

const OrderDetail = ({title, value, className = 'fw-500'}) => {
    return (
        <>
            {title && <span className='gray'>{title}: </span>}
            <span className={className}>{value}</span>
        </>
    );
};

export default OrderDetail;