import React from "react";
// React Router
import { Link as RouterLink } from "react-router-dom";
// Material UI
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Link from "@material-ui/core/Link";

function getSteps() {
  return [
    { label: "Shipping", route: "/shipping" },
    { label: "Payment", route: "/payment" },
    { label: "Place Order", route: "/place-order" },
  ];
}

const CheckoutSteps = ({ currentStep, style, className }) => {
  const steps = getSteps();

  return (
    <Stepper
      style={style}
      className={className}
      activeStep={currentStep}
      alternativeLabel
    >
      {steps.map((step, index) => (
        <Step key={step + index}>
          <StepLabel>
            {currentStep >= index ? (
              <Link component={RouterLink} to={step.route}>
                {step.label}
              </Link>
            ) : (
              step.label
            )}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default CheckoutSteps;
