import React from "react";
import ProductList from "./ProductList";
import { getProducts } from "../../actions/products";
import { connect } from "react-redux";
import CreateFormContainer from "../CreateForm";

class ProductListContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(getProducts());
  }
  render() {
    return (
      <div>
        <CreateFormContainer />
        <ProductList products={this.props.products} />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return { products: reduxState.products };
}

// think about how to display images on the front page first

export default connect(mapStateToProps)(ProductListContainer);
