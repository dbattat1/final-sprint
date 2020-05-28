import React from 'react'
import { ProductPreview } from '../cmps/ProductPreview.jsx';

export function ProductList(props) {
    let usersWithProds = null;
    if (props.users) {
        usersWithProds = props.users.filter((user) => user.product)
        console.log('filtered', usersWithProds);
    }
    
    return (
        <ul className="flex  space-around product-container-city">
            {props.users && usersWithProds.map((user, idx) => <ProductPreview user={user} key={idx}  />)}
        </ul>
    )
}
