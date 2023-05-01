import { useLoaderData, useParams } from "react-router-dom";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MealCard from "@components/MealCard";

export default function Meals() {
  const { category } = useParams();
  // Déstructuration ???
  const { meals } = useLoaderData();

  return (
    <>
      <h1>{category}</h1>
      <Box sx={{ width: "100%", p: 5 }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {meals.map((meal) => {
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
