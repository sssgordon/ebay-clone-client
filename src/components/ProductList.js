import React from "react";

export default function ProductList(props) {
  return (
    <div>
      <h1>Welcome to eBay Clone!</h1>
      <h3>Products</h3>
      <div>
        {props.products.map(product => {
          return (
            <div>
              <img src={product.picture} alt="product_image" />
              <h5>{product.title}</h5>
              <p>{product.price}</p>
            </div>
          );
        })}{" "}
        // products is from mapStateToProps in the container above
      </div>
    </div>
  );
}
