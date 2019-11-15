export default (state = [], action = {}) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return action.payload;
    case "NEW_PRODUCT":
      return [action.payload, ...state];
    default:
      return state;
  }
};
