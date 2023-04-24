import useMediaQuery from "@mui/material/useMediaQuery";
import NavBar from "@components/NavBar";
import BottomBar from "@components/BottomBar";
import React, { useEffect } from "react";
import "./App.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import MealCard from "@components/MealCard";

export default function App() {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 428px)");

  useEffect(() => {
    if (location === "/") {
      navigate("/meals");
    }
  }, [location]);

  return (
    <div className="App">
      <h1>hello world</h1>
      {isMobile ? <BottomBar /> : <NavBar />}
      <main>
        <MealCard />
        <Outlet />
      </main>
    </div>
  );
}
