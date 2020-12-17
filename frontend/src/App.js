import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { Layout } from "./Components/";
import {
  HomePage,
  ProductPage,
  CartPage,
  LoginPage,
  RegisterPage,
  ProfilePage,
  ShippingPage,
  PaymentPage,
  PlaceOrderPage,
  OrderPage,
} from "./Pages";

function App() {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Route path="/order/:id" component={OrderPage} />
            <Route path="/placeorder" component={PlaceOrderPage} />
            <Route path="/payment" component={PaymentPage} />
            <Route path="/shipping" component={ShippingPage} />
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/cart/:id?" component={CartPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/" component={HomePage} exact />
          </Layout>
        </ThemeProvider>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
