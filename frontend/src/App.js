import React from "react";
import { Layout } from "./Components/";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Layout>
          <main style={{ minHeight: "80vh" }}>Main</main>
        </Layout>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
