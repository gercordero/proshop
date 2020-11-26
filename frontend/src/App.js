import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { Layout } from "./Components/";
import { HomePage, ProductPage, CartPage } from "./Pages";

function App() {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Route path="/" component={HomePage} exact />
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/cart/:id?" component={CartPage} />
          </Layout>
        </ThemeProvider>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
