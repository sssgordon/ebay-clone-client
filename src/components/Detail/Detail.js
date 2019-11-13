import React from "react";
import { Link } from "react-router-dom";

export default function Detail(props) {
  return (
    <div>
      <h1>{props.product.title}</h1>
      {props.product.images.map(image => (
        <img src={image.url} alt="product" key={image.id} />
      ))}
      <h3>{props.product.price}</h3>
      <h5>{props.product.description}</h5>
      <Link to="/">Return</Link>
    </div>
  );
}
