import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import StepperConfirmation from "../components/StepperConfirmation";
import { useCart } from "../context/CartContext";

export default function Confirmation() {
  const { handleEmptyCart } = useCart();
  useEffect(() => {
    handleEmptyCart();
  }, []);

  return (
    <>
      <Typography variant="h5" sx={{ mb: 4 }}>
        Thank you ! Your order is on its way 🙂
      </Typography>
      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
        Estimated time :{" "}
      </Typography>
      <Typography vairant="subtitle1" sx={{ mb: 7 }}>
        4 - 5 minutes
      </Typography>
      <StepperConfirmation />
    </>
  );
}
