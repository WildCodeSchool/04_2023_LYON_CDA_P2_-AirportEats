import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function MealCard({ imgSrc, mName }) {
  return (
    <Card sx={{ maxWidth: 300, height: 150, display: "flex" }}>
      <CardHeader
        sx={{ display: "flex", pr: 2 }}
        avatar={
          <Avatar
            sx={{ width: 75, height: 75 }}
            aria-label="recipe"
            src={imgSrc}
          />
        }
        title={
          <Typography variant="subtitle2">
            {mName.length > 30 ? `${mName.substring(0, 30)} ...` : mName}
          </Typography>
        }
        subheader={
          <Typography
            variant="caption"
            sx={{ color: "#e1b1b1", fontWeight: "bold" }}
          >
            From the Fork
          </Typography>
        }
      />
      <CardActions sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
        <IconButton aria-label="add to favorites" sx={{ p: 0 }}>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

MealCard.propTypes = {
  mName: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};
