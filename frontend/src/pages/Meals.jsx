import { useLoaderData, useParams } from "react-router-dom";
import * as React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MealCard from "@components/MealCard";

export default function Meals() {
  const { category } = useParams();
  // Déstructuration ???
  const { meals } = useLoaderData();

  return (
    <>
      <Typography
        variant="h5"
        sx={{ fontWeight: "600", margin: "50px", textAlign: "left" }}
      >
        {category}
      </Typography>
      <Box sx={{ display: "flex", maxWidth: "100%" }}>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{
            justifyContent: "center",
          }}
        >
          {meals.map((meal) => (
            <Grid key={meal.idMeal} item xs={8} sm={4} md={3}>
              <MealCard meal={meal} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
