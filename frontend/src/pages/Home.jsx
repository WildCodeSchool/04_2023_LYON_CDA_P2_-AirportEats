import ScrollableTabsButton from "@components/ScrollableTabsButton";
import { Outlet, useParams } from "react-router-dom";
// Rename fichier

export default function Home() {
  const { category } = useParams();

  return (
    <>
      <h1>Category Menu</h1>
      <p>Map Category</p>
      <ScrollableTabsButton />

      <h1>Meals</h1>
      <h3>{category}</h3>
      <Outlet />
    </>
  );
}
