import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import Cart from "./pages/Cart";
import Meals from "./pages/Meals";
import Confirmation from "./pages/Confirmation";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pages/meals">Meals</Link>
            </li>
            <li>
              <Link to="/pages/cart">Cart</Link>
            </li>
            <li>
              <Link to="/pages/payment">Payment</Link>
            </li>
            <li>
              <Link to="/pages/confirmation">Confirmation</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/meals" element={<Meals />} />
          <Route path="/pages/cart" element={<Cart />} />
          <Route path="/pages/payment" element={<Payment />} />
          <Route path="/pages/confirmation" element={<Confirmation />} />
        </Routes>
      </div>
    </Router>
  );
}
