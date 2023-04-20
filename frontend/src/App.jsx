import React, { useEffect } from "react";
import "./App.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/meals");
    }
  }, [location]);

  return (
    <div className="App">
      <h1>hello world</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
