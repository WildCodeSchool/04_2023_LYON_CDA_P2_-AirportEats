import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function FavoriteToggleButton() {
  const [selected, setSelected] = React.useState(false);

  return (
    <ToggleButton
      sx={{ border: "none" }}
      value="littleheart"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
    >
      {selected ? (
        <FavoriteIcon htmlColor="#E7B09F" />
      ) : (
        <FavoriteBorderIcon htmlColor="#E7B09F" />
      )}
    </ToggleButton>
  );
}
