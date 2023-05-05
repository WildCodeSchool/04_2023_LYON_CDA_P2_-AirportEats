import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import BottomBar from "@components/BottomBar";
import { useEffect } from "react";
import "./App.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import NavBar from "./components/NavBar";
import TitlePNG from "./assets/AEatsLogo.png";
import PlaneLogo from "./assets/airplaneAE.png";

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
      {isMobile ? (
        <Box display="flex" sx={{ p: 2 }}>
          <Box
            sx={{
              background: `url(${PlaneLogo})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              width: 25,
              height: 25,
              marginRight: 1,
            }}
          />
          <Box
            sx={{
              background: `url(${TitlePNG})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              width: 120,
              height: 25,
            }}
          />
        </Box>
      ) : null}
      {isMobile ? <BottomBar /> : <NavBar />}
      <main style={{ margin: "0 5px 50px 5px" }}>
        <Outlet />
      </main>
    </div>
  );
}
