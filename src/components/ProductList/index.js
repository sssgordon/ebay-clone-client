import React from "react";
import ProductList from "./ProductList";
import { getProducts } from "../../actions/products";
import { connect } from "react-redux";

class ProductListContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(getProducts());
  }
  render() {
    return (
      <div>
        <ProductList
          products={this.props.products}
          // key={this.props.products.id}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { products: state.products };
}

// think about how to display images on the front page first

export default connect(mapStateToProps)(ProductListContainer);
