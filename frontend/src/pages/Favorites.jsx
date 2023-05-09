import BackButton from "@components/BackButton";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MealCard from "@components/MealCard";
import { useFavorites } from "../context/FavoritesContext";

export default function Favorites() {
  const { favorites } = useFavorites();
  const [favs] = React.useState(favorites);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          margin: 50,
          color: "black",
        }}
      >
        <BackButton />
      </div>
      <h1>My favorites</h1>
      <Box sx={{ width: "100%", p: 5 }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {favs.map((meal) => {
            return (
              <Grid key={meal.idMeal} item md={3} xs={8}>
                <MealCard meal={meal} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
