import React from "react";
import { Navbar, Footer } from "../";

const Layout = ({ children, ...props }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
