import React, { useEffect } from "react";
import "./App.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import StandardImageList from "@components/StandardImageList";
import ScrollableTabsButton from "@components/ScrollableTabsButton";

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
      <StandardImageList />
      <ScrollableTabsButton />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
