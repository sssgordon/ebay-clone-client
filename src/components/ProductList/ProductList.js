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
              {product.images.map(image => (
                <img src={image.url} alt="product" key={image.id} />
              ))}
              <Link to={`/products/${product.id}`}>
                <h5>{product.title}</h5>
              </Link>
              <p>{product.price}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
