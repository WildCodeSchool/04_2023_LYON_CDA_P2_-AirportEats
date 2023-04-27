import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { CartProvider } from "./context/CartContext";
import FavoritesProvider from "./context/FavoritesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CartProvider>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </CartProvider>
  </React.StrictMode>
);
