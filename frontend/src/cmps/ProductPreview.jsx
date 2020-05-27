import React from "react";
import { Link } from "react-router-dom";

export function ProductPreview(props) {
  const { user } = props;
  const { product } = user;
  const reducer = (acc, curr) => acc + curr;
  const rateArr = product.reviews.map((review) => review.rate);
  const rate = (rateArr.reduce(reducer) / rateArr.length).toFixed(1);

  return (
    <li className="product-card">
      <Link to={`/user/${user._id}`}>
        <div
          className="product-card-img"
          style={{ backgroundImage: `url(${product.imgUrls[0]})` }}
        >
          <div className="product-card-price">${product.price}</div>
        </div>
        <div className="product-card-content">
          <div className="product-card-header flex">
            <p className="product-card-title">{product.title}</p>
            {rate && <p className="product-card-rate">✩{rate}/5</p>}
          </div>
          <div className="product-card-footer flex">
            <div className="product-card-mini-host flex">
              <div
                className="product-card-user-img"
                style={{ backgroundImage: `url(${user.imgUrl})` }}
              />
              <p>By {user.name.first}</p>
            </div>
            <ul className="product-card-tags flex">
              {product.tags &&
                product.tags.slice(0, 3).map((tag, idx) => (
                  <li className="tag" key={idx}>
                    {tag}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </Link>
    </li>
  );
}

{
  /* <button onClick={() => props.onRemoveProduct(user)}>Delete Product |</button>
<Link to={`/user/${user._id}`}>Product Details |</Link>
<Link to={`/edit/${user._id}`}>Edit Product</Link> */
}
