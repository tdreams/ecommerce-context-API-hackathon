import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import { Footer, NavBar } from "./components";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/headphones/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
