import React from "react";
// Form fields
import Address from "./Address/Address";
import City from "./City/City";
import PostalCode from "./PostalCode/PostalCode";
import Country from "./Country/Country";
// Material UI
import Button from "@material-ui/core/Button";

/**
 * @param {submitHandler} function - Function to execute on button "Continue" click.
 * @param {address} string - The address of the User.
 * @param {city} string - The city of the User.
 * @param {postalCode} string - The postal code of the User.
 * @param {country} string - The country of the User.
 * @param {setAddress} function - Function to set the Address state of ShippingPage.
 * @param {setCity} function - Function to set the City state of ShippingPage.
 * @param {setPostalCode} function - Function to set the PostalCode state of ShippingPage.
 * @param {setCountry} function - Function to set the Country state of ShippingPage.
 **/
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
