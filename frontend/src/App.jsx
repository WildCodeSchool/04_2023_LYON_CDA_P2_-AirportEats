import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import BottomBar from "@components/BottomBar";
import "./App.css";
import { Outlet } from "react-router-dom";
import LogoTitle from "@components/LogoTitle";
import NavBar from "./components/NavBar";

export default function App() {
  const isMobile = useMediaQuery("(max-width: 428px)");

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
