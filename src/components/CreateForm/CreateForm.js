import React from "react";

function CreateForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        onChange={props.onChange}
        value={props.values.title}
        name="title"
        placeholder="title"
      />
      <input
        onChange={props.onChange}
        value={props.values.imageUrl}
        name="imageUrl"
        placeholder="imageUrl"
      />
      <input
        onChange={props.onChange}
        value={props.values.description}
        name="description"
        placeholder="description"
      />
      <input
        onChange={props.onChange}
        value={props.values.price}
        name="price"
        placeholder="price"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateForm;
