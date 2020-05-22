import React from 'react'
import { ProductPreview } from '../cmps/ProductPreview.jsx';

export function ProductList(props) {
    
    return (
        <div className="flex space-between product-container-city">
            {props.users && props.users.map((user, idx) => <ProductPreview user={user} key={idx} onRemoveProduct={props.onRemoveProduct} /> )}
        </div>
    )
}
