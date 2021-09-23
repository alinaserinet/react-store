import {OrderStatus} from '.';
import OrderDetail from "./OrderDetail";
import Button from "../Button";

const OrderItem = () => {
    return (
        <div className='order-item card'>
            <div className='item-head'>
                <OrderDetail value='Order 1' />
                <OrderDetail value='2021/09/18' className='gray fw-300'/>
            </div>
            <div>
                <OrderDetail title='Tracking number' value={1234}/>
            </div>
            <div className='amount-box'>
                <span>
                    <OrderDetail title='Quantity' value={3}/>
                </span>
                <span>
                    <OrderDetail title='Total Amount' value='112$'/>
                </span>
            </div>
            <div className='item-footer'>
                <Button className='button outline' to='/profile/orders/123'>Details</Button>
                <OrderStatus status='Delivered'/>
            </div>
        </div>
    );
};

export default OrderItem;