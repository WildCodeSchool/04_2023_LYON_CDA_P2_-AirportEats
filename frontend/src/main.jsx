import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { mainTheme } from "./theme";
import Routes from "./index";

import App from "./App";
import { CartProvider } from "./context/CartContext";
import FavoritesProvider from "./context/FavoritesContext";

const router = createBrowserRouter(Routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <FavoritesProvider>
        <ThemeProvider theme={mainTheme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </FavoritesProvider>
    </CartProvider>
  </React.StrictMode>
);
