import React from "react";
import { Link } from "react-router-dom";

export default function ProductList(props) {
  return (
    <div>
      <h1>Welcome to eBay Clone!</h1>
      <ul>
        {props.products.map(product => {
          return (
            <li key={product.id}>
              <img src={product.imageUrl} alt="product" />
              <Link to={`/products/${product.id}`}>
                <h5>{product.title}</h5>
              </Link>
              <p>€ {product.price}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
