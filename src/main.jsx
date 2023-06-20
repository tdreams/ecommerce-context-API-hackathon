import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { ProductProvider } from "./Context/context";
import { CartProvider } from "./Context/cart_context";
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
