import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import BottomBar from "@components/BottomBar";
import { useEffect } from "react";
import "./App.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import LogoTitle from "@components/LogoTitle";
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
      {isMobile ? <BottomBar /> : <NavBar />}
      {isMobile && <LogoTitle />}
      <main style={{ margin: "0 5px 50px 5px" }}>
        <Outlet />
      </main>
    </div>
  );
}
