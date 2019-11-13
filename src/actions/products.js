import request from "superagent";

//display products
export const SET_PRODUCTS = "SET_PRODUCTS";

const baseUrl = "http://localhost:4000";

function setProducts(payload) {
  return {
    type: SET_PRODUCTS,
    payload
  };
}

export const getProducts = () => (dispatch, getState) => {
  const state = getState();
  const { products } = state;

  if (!products.length) {
    request(`${baseUrl}/products`) // the API where the response.body comes from
      .then(res => {
        const action = setProducts(res.body);

        dispatch(action);
      })
      .catch(console.error);
  }
};
