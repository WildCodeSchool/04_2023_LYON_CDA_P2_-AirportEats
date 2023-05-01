import React, { createContext, useState, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const FavoritesContext = createContext(null);

export function useFavorites() {
  return useContext(FavoritesContext);
}

export default function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favs")) || []
  );

  const toggleFavorite = (newIdMeal) => {
    if (favorites.includes(newIdMeal)) {
      setFavorites(favorites.filter((idMeal) => idMeal !== newIdMeal));
    } else {
      setFavorites([...favorites, newIdMeal]);
    }
  };

  localStorage.setItem("favs", JSON.stringify(favorites));

  const contextValue = useMemo(
    () => ({
      favorites,
      toggleFavorite,
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
