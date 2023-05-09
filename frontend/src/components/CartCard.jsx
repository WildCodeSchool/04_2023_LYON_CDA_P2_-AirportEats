import React from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
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
    <Card sx={{ maxWidth: 340, display: "flex", m: 1, borderRadius: 5 }}>
      <Stack direction="column">
        <CardHeader
          sx={{ display: "flex", pr: 2, padding: "4px" }}
          avatar={
            <Avatar
              sx={{ width: 70, height: 70, m: 2 }}
              aria-label="recipe"
              src={meal.strMealThumb}
            />
          }
          title={
            <Typography variant="subtitle2" fontWeight="600">
              {meal.strMeal.length > 30
                ? `${meal.strMeal.substring(0, 30)} ...`
                : meal.strMeal}
            </Typography>
          }
        />
        <CardContent sx={{ padding: "4px" }}>
          <Typography variant="body1">Unitary Price : {meal.price}€</Typography>
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
        <Box sx={{ height: "100%" }}>
          <Stack
            sx={{ height: "100%" }}
            direction="column"
            justifyContent="space-around"
          >
            <Box sx={{ display: "flex" }}>
              <IconButton
                aria-label="quantity down"
                onClick={() =>
                  handleModifyQuantity(meal.idMeal, meal.quantity - 1)
                }
              >
                <RemoveOutlinedIcon />
              </IconButton>
              <Typography variant="body1" sx={{ mt: 1, fontWeight: "600" }}>
                {meal.quantity}
              </Typography>
              <IconButton
                aria-label="quantity up"
                onClick={() =>
                  handleModifyQuantity(meal.idMeal, meal.quantity + 1)
                }
              >
                <AddOutlinedIcon />
              </IconButton>
            </Box>
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
