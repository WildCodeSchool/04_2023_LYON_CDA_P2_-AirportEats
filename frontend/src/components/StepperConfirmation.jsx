import React from "react";
import { Box, Stepper, Step, StepLabel } from "@mui/material";

export default function StepperConfirmation() {
  const steps = [
    "Your order is in preparation",
    "On its way",
    "Order completed",
  ];

  const [activeState, setActiveState] = React.useState(0);

  React.useEffect(() => {
    if (activeState < 3) {
      setTimeout(() => {
        setActiveState(activeState + 1);
      }, 1000);
    }
  }, [activeState]);

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeState} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
