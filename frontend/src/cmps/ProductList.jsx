import React from 'react'
import { ProductPreview } from '../cmps/ProductPreview.jsx';

export function ProductList(props) {
    console.log(props.users);
    let usersWithProds = null;
    if (props.users) {
        usersWithProds = props.users.filter((user) => user.product)
        console.log(usersWithProds);
    }
    
    
    return (
        <ul className="flex space-between product-container-city">
            {props.users && usersWithProds.map((user, idx) => <ProductPreview user={user} key={idx}  />)}
        </ul>
    )
}
