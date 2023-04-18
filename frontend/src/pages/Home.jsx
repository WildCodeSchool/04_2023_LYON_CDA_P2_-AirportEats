import CategoryCard from "@components/CategoryCard";
import { Box } from "@mui/material";
import { Outlet, useParams } from "react-router-dom";

export default function Home() {
  const { category } = useParams();

  const allCategories = [
    {
      id: 0,
      cName: "American",
      imgSrc:
        "https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg/preview",
    },
    {
      id: 1,
      cName: "Italian",
      imgSrc:
        "https://www.themealdb.com/images/media/meals/1550441882.jpg/preview",
    },
    {
      id: 2,
      cName: "Japanese",
      imgSrc:
        "https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg/preview",
    },
  ];
  return (
    <>
      <h1>Category Menu</h1>
      <p>Map Category</p>
      <Box>
        {allCategories.map((thisCategory) => {
          return (
            <CategoryCard
              key={thisCategory.id}
              name={thisCategory.cName}
              imgSrc={thisCategory.imgSrc}
              active={
                category === thisCategory.cName ||
                category === thisCategory.cName.toLowerCase()
              }
            />
          );
        })}
      </Box>

      <h1>Meals</h1>
      <h3>{category}</h3>
      <Outlet />
    </>
  );
}
