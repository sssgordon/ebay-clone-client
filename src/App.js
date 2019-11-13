import React from "react";
import { Route } from "react-router-dom";
import ProductListContainer from "./components/ProductList";
import DetailContainer from "./components/Detail";

function App() {
  return (
    <div>
      <Route exact path="/" component={ProductListContainer} />
      <Route path="/products/:id" component={DetailContainer} />
    </div>
  );
}

export default App;
