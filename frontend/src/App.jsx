import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
