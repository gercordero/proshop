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
    { label: "Place Order", route: "/placeorder" },
  ];
}

/**
 * @param {currentStep} number - A number to now until which step we have to render.
 * @param {style} object - An object to style main component.
 * @param {className} string - An object to add className to main component.
 **/
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
