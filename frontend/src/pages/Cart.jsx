import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CartCard from "@components/CartCard";
import BackButton from "@components/BackButton";
import { useCart } from "../context/CartContext";

export default function Cart() {
  // const { cart, handleModifyQuantity, handleDelete } = useCart();
  const { cart } = useCart();

  return (
    <>
      <div style={{ display: "flex", justifyContent: "left", margin: 50 }}>
        <BackButton />
      </div>
      <h1>My Cart</h1>
      {/* <div>
        {cart.map((meal) => {
          return (
            <div key={meal.idMeal}>
              <p>
                IdMeal: {meal.idMeal}, Name: {meal.strMeal}, Quantity:
                {meal.quantity}, Price: {meal.price}, TotalPrice:{" "}
                {meal.totalPrice}
              </p>
              <button
                type="button"
                onClick={() =>
                  handleModifyQuantity(meal.idMeal, meal.quantity - 1)
                }
              >
                -
              </button>
              <button
                type="button"
                onClick={() =>
                  handleModifyQuantity(meal.idMeal, meal.quantity + 1)
                }
              >
                +
              </button>
              <button type="button" onClick={() => handleDelete(meal.idMeal)}>
                Delete
              </button>
            </div>
          );
        })}
      </div> */}
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {cart.map((meal) => {
          return <CartCard key={meal.idMeal} meal={meal} />;
        })}
      </Box>
      <Typography variant="h5" fontWeight="600">
        Total :{" "}
        {cart
          .reduce(
            (acc, currentProduct) =>
              acc + parseFloat(currentProduct.totalPrice),
            0
          )
          .toString()
          .replace(".", ",")}
        €
      </Typography>
      <Button
        disabled={!(cart.length > 0)}
        component={Link}
        to="/payment"
        variant="contained"
        sx={{
          color: "white",
          m: 5,
          borderRadius: 3,
          backgroundColor: "#e1b1b1",
          width: "180px",
        }}
      >
        Confirm
      </Button>
    </>
  );
}
