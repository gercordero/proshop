import React from "react";
// Material UI
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

const PaymentForm = ({ paymentMethod, setPaymentMethod, submitHandler }) => {
  const handleChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      {/* RADIO SELECT */}
      <FormControl
        component="fieldset"
        style={{ marginBottom: "1rem", width: "100%" }}
      >
        <RadioGroup
          aria-label="payment-method"
          name="payment-method"
          value={paymentMethod}
          onChange={handleChange}
        >
          <FormControlLabel
            value="paypal"
            control={<Radio />}
            label="PayPal or Credit Card"
          />
          <FormControlLabel
            value="stripe"
            disabled
            control={<Radio />}
            label="Stripe - coming soon"
          />
        </RadioGroup>
      </FormControl>
      {/* SUBMIT */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        style={{ fontWeight: "bold", margin: "16px 0" }}
        disabled={paymentMethod === ""}
      >
        Continue
      </Button>
    </form>
  );
};

export default PaymentForm;
