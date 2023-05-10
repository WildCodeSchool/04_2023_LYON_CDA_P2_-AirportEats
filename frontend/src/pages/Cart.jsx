import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CartCard from "@components/CartCard";
import BackButton from "@components/BackButton";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart } = useCart();

  return (
    <>
      <BackButton />
      <h1>My Cart</h1>
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
