import request from "superagent";

const baseUrl = "http://localhost:4000";

//displaying products
export const SET_PRODUCTS = "SET_PRODUCTS";

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

//select product
export const SELECT_PRODUCT = "SELECT_PRODUCT";
function selectProduct(payload) {
  return {
    type: SELECT_PRODUCT,
    payload
  };
}

export const getSelectedProduct = id => (dispatch, getState) => {
  const state = getState();
  const { product } = state;

  if (!product) {
    request(`${baseUrl}/products/${id}`) // the API where the response.body comes from
      .then(res => {
        const action = selectProduct(res.body);

        dispatch(action);
      })
      .catch(console.error);
  }
};

//create product
export const NEW_PRODUCT = "NEW_PRODUCT";
function newProduct(payload) {
  return {
    type: NEW_PRODUCT,
    payload
  };
}

export const createProduct = (
  title,
  imageUrl,
  description,
  price
) => dispatch => {
  request
    .post(`${baseUrl}/products`)
    .send({ title, imageUrl, description, price })
    .then(response => {
      const action = newProduct(response.body);

      dispatch(action);
    })
    .catch(console.error);
};
