import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
