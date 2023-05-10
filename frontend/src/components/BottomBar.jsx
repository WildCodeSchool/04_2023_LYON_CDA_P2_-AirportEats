import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useLocation, useNavigate } from "react-router-dom";

export default function LabelBottomNavigation() {
  const location = useLocation().pathname;

  const [value, setValue] = React.useState(
    location.includes("meals") ? "/" : location
  );
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    navigate(newValue);
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: 45,
        zIndex: 1300,
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction label="•" value="/" icon={<HomeOutlinedIcon />} />
      <BottomNavigationAction
        label="•"
        value="/cart"
        icon={<ShoppingBagOutlinedIcon />}
      />
      <BottomNavigationAction
        label="•"
        value="/favorites"
        icon={<FavoriteBorderOutlinedIcon />}
      />
    </BottomNavigation>
  );
}
