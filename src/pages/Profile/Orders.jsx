import React from 'react';
import Template from "../../Template/MainTemplate";
import {OrderItem} from "../../components/Orders";

const Orders = () => {
    return (
        <Template title='My Orders'>
            <OrderItem />
            <OrderItem />
            <OrderItem />
        </Template>
    );
};

export default Orders;