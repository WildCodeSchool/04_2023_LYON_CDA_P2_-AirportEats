import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavBar from "@components/NavBar";
import BottomBar from "@components/BottomBar";
import "./App.css";

export default function App() {
  const isMobile = useMediaQuery("(max-width: 428px)");

  return (
    <div>
      {isMobile ? <BottomBar /> : <NavBar />}
      <main />
    </div>
  );
}
