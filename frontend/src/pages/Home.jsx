import ScrollableTabsButton from "@components/ScrollableTabsButton";
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
    {
      id: 3,
      cName: "American",
      imgSrc:
        "https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg/preview",
    },
    {
      id: 4,
      cName: "Italian",
      imgSrc:
        "https://www.themealdb.com/images/media/meals/1550441882.jpg/preview",
    },
    {
      id: 5,
      cName: "Japanese",
      imgSrc:
        "https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg/preview",
    },
    {
      id: 6,
      cName: "American",
      imgSrc:
        "https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg/preview",
    },
    {
      id: 7,
      cName: "Italian",
      imgSrc:
        "https://www.themealdb.com/images/media/meals/1550441882.jpg/preview",
    },
    {
      id: 8,
      cName: "Japanese",
      imgSrc:
        "https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg/preview",
    },
    {
      id: 9,
      cName: "American",
      imgSrc:
        "https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg/preview",
    },
    {
      id: 10,
      cName: "Italian",
      imgSrc:
        "https://www.themealdb.com/images/media/meals/1550441882.jpg/preview",
    },
    {
      id: 11,
      cName: "Japanese",
      imgSrc:
        "https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg/preview",
    },
  ];

  return (
    <>
      <h1>Category Menu</h1>
      <p>Map Category</p>
      <ScrollableTabsButton />
      {allCategories.map((thisCategory) => {
        return <p>{thisCategory.cName}</p>;
      })}
      <h1>Meals</h1>
      <h3>{category}</h3>
      <Outlet />
    </>
  );
}
