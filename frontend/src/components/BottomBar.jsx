import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("home");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{ width: 428, bottom: 0, position: "absolute" }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="•"
        value="home"
        icon={<HomeOutlinedIcon />}
      />
      <BottomNavigationAction
        label="•"
        value="cart"
        icon={<ShoppingBagOutlinedIcon />}
      />
      <BottomNavigationAction
        label="•"
        value="favorites"
        icon={<FavoriteBorderOutlinedIcon />}
      />
    </BottomNavigation>
  );
}
