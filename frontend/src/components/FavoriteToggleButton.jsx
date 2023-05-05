import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ToggleButton } from "@mui/material";

export default function FavoriteToggleButton() {
  const [selected, setSelected] = React.useState(false);

  return (
    <ToggleButton
      sx={{ border: "none" }}
      value="littleheart"
      onClick={() => {
        setSelected(!selected);
      }}
    >
      {selected ? (
        <FavoriteIcon htmlColor="#E7B09F" />
      ) : (
        <FavoriteBorderIcon htmlColor="#E7B09F" />
      )}
    </IconButton>
  );
}
