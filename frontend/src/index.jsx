import Favorites from "@pages/Favorites";
import Meals from "./pages/Meals";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Confirmation from "./pages/Confirmation";
import Home from "./pages/Home";
import App from "./App";
// import allCategories from "./ressources/allCategories";
// import { redirect } from "react-router-dom";

// const loadApi = async (category) => {
//   // if (allCategories.includes(category)) {
//   const meals = await fetch(
//     `https://www.themealdb.com/api/json/v1/1/filter.php?a=${category}`
//   )
//     .then((response) => response.json())
//     .then((data) => data)
//     .catch((err) => console.error(err));
//   return meals;
//   // } else return redirect("/meals");
// };

const Routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "meals/",
        element: <Home />,
        children: [
          {
            path: ":category",
            element: <Meals />,
            // loader: ({ params }) => {
            //   return loadApi(params.category).then((response) => {
            //     return response;
            //   });
            // },
          },
        ],
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "confirmation",
        element: <Confirmation />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
    ],
  },
];

export default Routes;