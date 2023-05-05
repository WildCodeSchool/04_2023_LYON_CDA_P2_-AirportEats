import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import BottomBar from "@components/BottomBar";
import { useEffect } from "react";
import "./App.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";

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
      {isMobile ? null : <NavBar />}
      <main style={{ marginBottom: 30 }}>
        <Outlet />
      </main>
      {isMobile ? <BottomBar /> : null}
    </div>
  );
}
