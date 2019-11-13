import { combineReducers } from "redux";
import products from "./products";
import selectProduct from "./selectProduct";

export default combineReducers({ products, selectProduct });
