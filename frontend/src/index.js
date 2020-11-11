import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "fontsource-roboto";
import "fontsource-open-sans";
import CssBaseline from "@material-ui/core/CssBaseline";
import GlobalStyles from "./styles/globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
