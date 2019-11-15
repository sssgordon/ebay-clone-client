import React from "react";
import { connect } from "react-redux";
import { createProduct } from "../../actions/products";
import CreateForm from "./CreateForm";

class CreateFormContainer extends React.Component {
  state = {
    title: "",
    imageUrl: "",
    description: "",
    price: ""
    //create email and phoneNumber
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.createProduct(
      this.state.title,
      this.state.imageUrl,
      this.state.description,
      this.state.price // these are passed to the thunk action creator as arguments, which are then sent to the database
    );
    // create action for email and phoneNumber

    this.setState({
      title: "",
      imageUrl: "",
      description: "",
      price: ""
    });
  };

  render() {
    return (
      <CreateForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(null, { createProduct })(CreateFormContainer);
