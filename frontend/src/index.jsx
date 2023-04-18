import Meals from "./pages/Meals";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Confirmation from "./pages/Confirmation";
import App from "./App";

const loadApi = async (category) => {
  const meals = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${category}`
  )
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
  return meals;
};

const Routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "meals/:category",
        element: <Meals />,
        loader: ({ params }) => {
          return loadApi(params.category).then((response) => {
            return response;
          });
        },
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
    ],
  },
];

export default Routes;
