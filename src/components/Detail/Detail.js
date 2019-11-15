import React from "react";
import { Link } from "react-router-dom";

export default function Detail(props) {
  return (
    <div>
      <h1>{props.product.title}</h1>
      <img src={props.product.imageUrl} alt="product" />
      <h3>€ {props.product.price}</h3>
      <h4>{props.product.description}</h4>
      <p>Contact seller:</p>
      {/* <p>Email: {props.product.user.email}</p>
      <p>Phone number: {props.product.user.phoneNumber}</p> */}
      <Link to="/">Return</Link>
    </div>
  );
}
