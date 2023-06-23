import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import AllHeadPhones from "./pages/AllHeadPhones";
import { Footer, NavBar } from "./components";
import AllPhones from "./pages/AllPhones";
import AllDiscount from "./pages/AllDiscount";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/headphones/" element={<AllHeadPhones />} />
        <Route path="/phones/" element={<AllPhones />} />
        <Route path="/deals/" element={<AllDiscount />} />
        <Route path="/headphones/:id" element={<SingleProduct />} />
        <Route path="/phones/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
