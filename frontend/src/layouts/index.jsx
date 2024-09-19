import { Outlet, useLocation } from "react-router-dom";
import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Overlay from "./Overlay";

const Layout = () => {
  const location = useLocation();
  const isLoading = location.state?.loading;

  return (
    <>
      <Header />
      <main className="Main">{isLoading ? <Overlay /> : <Outlet />}</main>
      <Footer />
    </>
  );
};

export default Layout;
