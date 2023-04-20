import React, { useEffect } from "react";
import "./App.css";
import CategoryCard from "./components/CategoryCard";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/meals");
    }
  }, [location]);

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
