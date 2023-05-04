import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import PropTypes from "prop-types";
import {
  Typography,
  CardContent,
  Card,
  CardHeader,
  CardActions,
  Avatar,
  IconButton,
  Stack,
  Box,
} from "@mui/material";
import { useCart } from "../context/CartContext";

export default function CartCard({ meal }) {
  const { handleModifyQuantity } = useCart();

  return (
    <Card sx={{ maxWidth: 250, display: "flex", m: 1 }}>
      <Stack direction="column">
        <CardHeader
          sx={{ display: "flex", pr: 2, padding: "4px" }}
          avatar={
            <Avatar
              sx={{ width: 65, height: 65 }}
              aria-label="recipe"
              src={meal.strMealThumb}
            />
          }
          title={
            <Typography variant="subtitle2">
              {meal.strMeal.length > 30
                ? `${meal.strMeal.substring(0, 30)} ...`
                : meal.strMeal}
            </Typography>
          }
        />
        <CardContent sx={{ padding: "4px" }}>
          <Typography variant="body1">Quantity : {meal.quantity}</Typography>
          <Typography variant="body1">Unitary Price : {meal.price}€</Typography>
          <Typography variant="h6">Total : {meal.totalPrice}€</Typography>
        </CardContent>
      </Stack>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 0,
          paddingLeft: 1,
          width: "40%",
        }}
      >
        <IconButton aria-label="add to favorites" sx={{ p: 0 }}>
          <FavoriteBorderOutlinedIcon />
        </IconButton>
        <Box sx={{ height: "100%" }}>
          <Stack
            sx={{ height: "100%" }}
            direction="column"
            justifyContent="space-around"
          >
            <IconButton
              aria-label="quantity up"
              onClick={() =>
                handleModifyQuantity(meal.idMeal, meal.quantity + 1)
              }
            >
              <ArrowUpwardIcon fontSize="large" />
            </IconButton>
            <IconButton
              aria-label="quantity down"
              onClick={() =>
                handleModifyQuantity(meal.idMeal, meal.quantity - 1)
              }
            >
              <ArrowDownwardIcon fontSize="large" />
            </IconButton>
          </Stack>
        </Box>
      </CardActions>
    </Card>
  );
}

CartCard.propTypes = {
  meal: PropTypes.shape({
    idMeal: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
};
