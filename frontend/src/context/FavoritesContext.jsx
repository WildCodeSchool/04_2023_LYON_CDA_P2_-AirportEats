import React, { createContext, useState, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const FavoritesContext = createContext(null);

export function useFavorites() {
  return useContext(FavoritesContext);
}

export default function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("product")) || []
  );

  localStorage.setItem("product", JSON.stringify(favorites));

  // Togglefavorites ????
  const contextValue = useMemo(
    () => ({
      favorites,
      setFavorites,
    }),
    [favorites]
  );

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
}

FavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
