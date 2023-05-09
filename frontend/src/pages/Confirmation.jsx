import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import StepperConfirmation from "../components/StepperConfirmation";
import { useCart } from "../context/CartContext";

export default function Confirmation() {
  const { handleEmptyCart } = useCart();
  useEffect(() => {
    handleEmptyCart();
  }, []);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: "80vh" }}
    >
      <div style={{ marginTop: "10px" }}>
        <Typography variant="h5" sx={{ mb: 4, fontWeight: "500" }}>
          Thank you! Your order is on its way :)
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          Estimated time:{" "}
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 7, fontWeight: "600" }}>
          4 - 5 minutes
        </Typography>
        <StepperConfirmation />
      </div>
    </Grid>
  );
}
