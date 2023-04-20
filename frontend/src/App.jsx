import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import Cart from "./pages/Cart";
import Meals from "./pages/Meals";
import Confirmation from "./pages/Confirmation";
import "./App.css";
import CategoryCard from "./components/CategoryCard";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/Meals" element={<Meals />} />
          <Route path="/pages/cart" element={<Cart />} />
          <Route path="/pages/payment" element={<Payment />} />
          <Route path="/pages/Confirmation" element={<Confirmation />} />
        </Routes>
        <div>
          <CategoryCard />
        </div>
      </div>
    </Router>
  );
}
