import { useLoaderData, useParams } from "react-router-dom";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MealCard from "@components/MealCard";

export default function Meals() {
  const { category } = useParams();
  const meals = useLoaderData();
  console.info(meals);

  const mealsDetails = [
    {
      imgSrc: "https://www.themealdb.com/images/media/meals/1548772327.jpg",
      mName: "Baked salmon with fennel & tomatoes",
    },
    {
      imgSrc:
        "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
      mName: "Cajun spiced fish tacos",
    },
    {
      imgSrc: "https://www.themealdb.com/images/media/meals/1520084413.jpg",
      mName: "Escovitch Fish",
    },
    {
      imgSrc:
        "https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg",
      mName: "Fish fofos",
    },
    {
      imgSrc:
        "https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg",
      mName: "Fish pie",
    },
    {
      imgSrc:
        "https://www.themealdb.com/images/media/meals/vptqpw1511798500.jpg",
      mName: "Fish Stew with Rouille",
    },
    {
      imgSrc:
        "https://www.themealdb.com/images/media/meals/wuvryu1468232995.jpg",
      mName: "Garides Saganaki",
    },
    {
      imgSrc:
        "https://www.themealdb.com/images/media/meals/lpd4wy1614347943.jpg",
      mName: "Grilled Portuguese sardines",
    },
  ];

  return (
    <>
      <h1>{category}</h1>
      <Box sx={{ width: "100%", p: 5 }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {mealsDetails.map((mealsDetail) => {
            return (
              <Grid item xs={3}>
                <MealCard
                  imgSrc={mealsDetail.imgSrc}
                  mName={mealsDetail.mName}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
