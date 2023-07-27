import React from "react";
import "@stripe/stripe-js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import AllHeadPhones from "./pages/AllHeadPhones";
import { Footer, NavBar, ScrollToTheTop } from "./components";
import AllPhones from "./pages/AllPhones";
import AllDiscount from "./pages/AllDiscount";
import Success from "./pages/Success";

function App() {
  return (
    <div>
      <ScrollToTheTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/headphones/" element={<AllHeadPhones />} />
        <Route path="/phones/" element={<AllPhones />} />
        <Route path="/deals/" element={<AllDiscount />} />
        <Route path="/success" element={<Success />} />
        <Route path="/headphones/:id" element={<SingleProduct />} />
        <Route path="/phones/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
