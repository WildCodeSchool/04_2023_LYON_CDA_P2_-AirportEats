import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import CardActions from "@mui/material/CardActions";
import { Typography } from "@mui/material";
import FavoriteToggleButton from "./FavoriteToggleButton";

export default function MealCardMir() {
  return (
    <Card sx={{ maxWidth: 275, height: 150, display: "flex" }}>
      <CardHeader
        sx={{ display: "flex", pr: 2 }}
        avatar={
          <Avatar
            sx={{ width: 75, height: 75 }}
            aria-label="recipe"
            src="https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg/preview"
          />
        }
        title={
          <Typography variant="subtitle2">Shrimp and Chorizo Paella</Typography>
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
        <FavoriteToggleButton />
      </CardActions>
    </Card>
  );
}
