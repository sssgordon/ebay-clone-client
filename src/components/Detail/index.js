import React from "react";
import Detail from "./Detail";
import { connect } from "react-redux";
import { getSelectedProduct } from "../../actions/products";
import { Link } from "react-router-dom";

class DetailContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(getSelectedProduct(this.props.match.params.id)); // to-do
  }
  render() {
    if (!this.props.product) {
      return (
        <div>
          <p>Loading...</p>
          <Link to={"/"}>Return</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Detail product={this.props.product} />
        </div>
      );
    }
  }
}

const mapStateToProps = reduxState => {
  return {
    product: reduxState.selectProduct
  };
};

export default connect(mapStateToProps)(DetailContainer);
