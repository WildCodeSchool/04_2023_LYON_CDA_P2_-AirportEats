import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";
import PropTypes from "prop-types";
import { useFavorites } from "../context/FavoritesContext";

export default function FavoriteToggleButton({ meal }) {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <IconButton
      value="littleheart"
      onClick={(e) => {
        e.stopPropagation();
        toggleFavorite(meal);
      }}
    >
      {favorites.find((favMeal) => favMeal.idMeal === meal.idMeal) ? (
        <FavoriteIcon htmlColor="#E7B09F" />
      ) : (
        <FavoriteBorderIcon htmlColor="#E7B09F" />
      )}
    </IconButton>
  );
}

FavoriteToggleButton.propTypes = {
  meal: PropTypes.shape({
    idMeal: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
  }).isRequired,
};
