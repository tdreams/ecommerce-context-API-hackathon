import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import { CartProvider } from "./context/cart_context";
import { ProductProvider } from "./context/context.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <ProductProvider>
        <Router>
          <App />
        </Router>
      </ProductProvider>
    </CartProvider>
  </React.StrictMode>
);
