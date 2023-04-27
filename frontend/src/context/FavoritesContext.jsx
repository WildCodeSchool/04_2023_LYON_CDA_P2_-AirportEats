import React, { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const FavoritesContext = createContext(null);
const SetFavoritesContext = createContext(null);

export function useFavorites() {
  return useContext(FavoritesContext);
}

export function useSetFavorites() {
  return useContext(SetFavoritesContext);
}

export default function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("product")) || []
  );

  localStorage.setItem("product", JSON.stringify(favorites));

  // const contextValue = { favorites, setFavorites };

  return (
    <FavoritesContext.Provider value={favorites}>
      <SetFavoritesContext.Provider value={setFavorites}>
        {children}
      </SetFavoritesContext.Provider>
    </FavoritesContext.Provider>
  );
}

FavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
