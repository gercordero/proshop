import React from "react";
// Form fields
import Address from "./Address/Address";
import City from "./City/City";
import PostalCode from "./PostalCode/PostalCode";
import Country from "./Country/Country";
// Material UI
import Button from "@material-ui/core/Button";

const ShippingForm = ({
  submitHandler,
  address,
  city,
  postalCode,
  country,
  setAddress,
  setCity,
  setPostalCode,
  setCountry,
}) => {
  return (
    <form onSubmit={submitHandler}>
      {/* Address */}
      <Address address={address} setAddress={setAddress} />
      {/* City */}
      <City city={city} setCity={setCity} />
      {/* Postal Code */}
      <PostalCode postalCode={postalCode} setPostalCode={setPostalCode} />
      {/* Country */}
      <Country country={country} setCountry={setCountry} />
      {/* SUBMIT */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        style={{ fontWeight: "bold", margin: "16px 0" }}
      >
        Continue
      </Button>
    </form>
  );
};

export default ShippingForm;
