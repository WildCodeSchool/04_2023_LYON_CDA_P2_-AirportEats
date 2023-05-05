import React from "react";
import Modal from "@components/Modal";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import PropTypes from "prop-types";
import { Typography, useMediaQuery } from "@mui/material";
import FavoriteToggleButton from "./FavoriteToggleButton";

export default function MealCard({ meal }) {
  const [open, setOpen] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 428px)");
  const limit = isMobile ? 15 : 30;

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card
        sx={{
          maxWidth: 300,
          height: 150,
          display: "flex",
          justifyContent: "space-between",
          ":hover": { backgroundColor: "#e2e2e2" },
          ":active": { backgroundColor: "lightgray" },
        }}
      >
        <CardHeader
          sx={{ display: "flex", p: 1 }}
          avatar={
            isMobile ? (
              <Avatar
                sx={{ width: 65, height: 65 }}
                src={meal.strMealThumb}
                aria-label="recipe"
              />
            ) : (
              <Avatar
                sx={{ width: 95, height: 95 }}
                aria-label="recipe"
                src={meal.strMealThumb}
              />
            )
          }
          title={
            <Typography variant="subtitle2">
              {meal.strMeal.length > limit
                ? `${meal.strMeal.substring(0, limit)} ...`
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
          onClick={handleOpen}
        />
        <CardActions sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <FavoriteToggleButton />
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
