import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Payment from "./pages/Payment";
import Cart from "./pages/Cart";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/payment" element={<Payment />} />
          <Route path="/pages/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}
