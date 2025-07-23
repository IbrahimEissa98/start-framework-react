import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/footer";
import Navbar from "../Components/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
