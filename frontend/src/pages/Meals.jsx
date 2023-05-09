import { useLoaderData, useParams } from "react-router-dom";
import * as React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import MealCard from "@components/MealCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ScrollableTabsButton from "@components/ScrollableTabsButton";

export default function Meals() {
  const { category } = useParams();
  const { meals } = useLoaderData();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <ScrollableTabsButton />
      <Typography
        variant="h5"
        sx={{ fontWeight: "600", margin: "50px", textAlign: "left" }}
      >
        {category}
      </Typography>

      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          display: "flex",
          width: "100%",
          pl: "2rem",
          ...(isMobile && {
            justifyContent: "center",
            pl: 0,
          }),
        }}
      >
        {meals.map((meal) => (
          <Grid key={meal.idMeal} item xs={8} sm={4} md={3}>
            <MealCard meal={meal} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
