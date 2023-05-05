import { useLoaderData, useParams } from "react-router-dom";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MealCard from "@components/MealCard";
import ScrollableTabsButton from "@components/ScrollableTabsButton";

export default function Meals() {
  const { category } = useParams();
  const { meals } = useLoaderData();

  return (
    <>
      <ScrollableTabsButton />
      <h1>{category}</h1>
      <Box sx={{ width: "100%", display: "flex" }}>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ justifyContent: "center" }}
        >
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
