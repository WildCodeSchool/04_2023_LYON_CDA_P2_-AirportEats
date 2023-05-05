import React from "react";
import Modal from "@components/Modal";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

export default function MealCard({ meal }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card
        sx={{ maxWidth: 300, height: 150, display: "flex" }}
        onClick={handleOpen}
      >
        <CardHeader
          sx={{ display: "flex", pr: 2 }}
          avatar={
            <Avatar
              sx={{
                width: 95,
                height: 95,
                boxShadow:
                  "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
              }}
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
          subheader={
            <Typography
              variant="caption"
              sx={{ color: "#E1B1B1", fontWeight: "bold" }}
            >
              From the Fork
            </Typography>
          }
        />
        <CardActions sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton aria-label="add to favorites" sx={{ p: 0 }}>
            <FavoriteBorderOutlinedIcon />
          </IconButton>
        </CardActions>
      </Card>

      <Modal open={open} handleClose={handleClose} meal={meal} />
    </div>
  );
}

MealCard.propTypes = {
  meal: PropTypes.shape({
    idMeal: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
  }).isRequired,
};
