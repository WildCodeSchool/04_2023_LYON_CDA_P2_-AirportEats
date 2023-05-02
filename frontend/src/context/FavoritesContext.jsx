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

  const toggleFavorite = (newFav) => {
    const findMeal = favorites.find(
      (favMeal) => favMeal.idMeal === newFav.idMeal
    );
    if (findMeal) {
      setFavorites(
        favorites.filter((favMeal) => favMeal.idMeal !== newFav.idMeal)
      );
    } else {
      setFavorites([...favorites, newFav]);
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
