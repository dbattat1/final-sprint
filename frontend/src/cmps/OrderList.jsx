import React from 'react'
import { OrderPreview } from './OrderPreview.jsx';

export default function OrderList(props) {
    console.log('in orderlist', props.orders)
    return (
        <ul className="order-list">
            {props.orders && props.orders.map((order, idx) => <OrderPreview order={order} key={idx}/> )}
        </ul>
    )
}