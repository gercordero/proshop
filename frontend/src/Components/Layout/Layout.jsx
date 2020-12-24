import React from "react";
import { Navbar, Footer } from "../";

const Layout = ({ children }) => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
