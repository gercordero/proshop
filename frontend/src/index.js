import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Redux
import { Provider } from "react-redux";
import store from "./store";
// Fonts
import "fontsource-roboto";
import "fontsource-open-sans";
// Material UI
import CssBaseline from "@material-ui/core/CssBaseline";
// Styled components global styles
import GlobalStyles from "./styles/globalStyles";

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById("root")
);
