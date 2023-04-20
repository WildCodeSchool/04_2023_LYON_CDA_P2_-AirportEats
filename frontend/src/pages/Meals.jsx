import { useLoaderData, useParams } from "react-router-dom";

export default function Meals() {
  const { category } = useParams();
  const meals = useLoaderData();
  console.info(meals);
  
  return (
    <>
      <h1>{category}</h1>
      <p>My Body</p>
    </>
  );
}
