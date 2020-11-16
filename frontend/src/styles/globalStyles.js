import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html{
    scroll-behavior: smooth;
  }

  body{
    background-color: #fff;
  }

  li{
    list-style-type: none;
  }

  a{
    text-decoration: none;
  }


`;

export default GlobalStyle;
