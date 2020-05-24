import React from 'react'
import { Link } from 'react-router-dom';

export function ProductPreview(props) {
    const { user } = props;
    const { product } = user;
    // const src = product.imgUrl
    // const src = user.imgUrl
    // const tags = product.tags

    return (
        <li className="product-card">
            <Link to={`/user/${user._id}`}> <img alt={product.title} src={`${product.imgUrls[0]}`} /></Link>
            <div className="product-card-content">
            <div className="product-card-header flex">
               <h2>{product.title}</h2>
               <div className="flex column">
                <h4>✩3.2/5</h4>
                <h3>${product.price}</h3>
                </div>
            </div>
            <div className="host-mini-details">
                <img alt={user.name.first} src={`${user.imgUrl}`}/>
                <h3>By {user.name.first}</h3>
            </div>
            <div className="flex colunm">
                {product.tags && product.tags.slice(0,3).map((tag, idx) =>
                    <h4 className="tag" key={idx}>{tag}</h4>)}
            </div>
            </div>
        </li>
    );
};

{/* <button onClick={() => props.onRemoveProduct(user)}>Delete Product |</button>
<Link to={`/user/${user._id}`}>Product Details |</Link>
<Link to={`/edit/${user._id}`}>Edit Product</Link> */}
