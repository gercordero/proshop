import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { Layout } from "./Components/";
import { HomePage } from "./Pages";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Layout>
          <HomePage />
        </Layout>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
