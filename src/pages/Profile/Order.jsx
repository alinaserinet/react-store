import React from 'react';
import {OrderDetail, OrderItem, OrderStatus} from "../../components/Orders";
import Template from "../../Template/MainTemplate";
import {useRouteMatch} from "react-router-dom";
import Product from "../../components/Product";

const Order = () => {
    const {params} = useRouteMatch();

    return (
        <Template >
            <div className='order-box'>
                <div className='items-justify'>
                    <OrderDetail value='Order 12344'/>
                    <OrderDetail value='2021-09-18' className='gray fw-300'/>
                </div>
                <div className='items-justify'>
                <span>
                    <OrderDetail title='Tracking number' value={1234}/>
                </span>
                    <OrderStatus status='Delivered' />
                </div>
                <OrderDetail value='3 items' className='fw-400'/>
                <div className='order-items'>
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </Template>
    );
};

export default Order;