import React from "react";
import ProductListContainer from "./components/ProductList";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route exact path="/" component={ProductListContainer} />
    </div>
  );
}

export default App;
