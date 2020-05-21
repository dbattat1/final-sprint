import React from 'react'
import { Link } from 'react-router-dom';

export function ProductPreview(props) {
    const { user } = props;
    return (
        <div className="product-card">
            <h1>Imgs</h1>
            <h2>Full name: {user.fullName}</h2>
            <h3>Title: {user.product.title}</h3>
            <h3>Description: {user.product.description}</h3>
            <h3>From: (city) {user.product.city.name}</h3>
            <p>Price: ${user.product.price}</p>
            <button onClick={() => props.onRemoveProduct(user)}>Delete Product</button>
            <Link to={`/user/${user._id}`}>Product Details</Link>
        </div>
    );
};