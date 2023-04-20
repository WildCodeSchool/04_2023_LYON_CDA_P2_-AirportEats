import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

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
