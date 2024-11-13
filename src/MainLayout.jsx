import React from "react";
import Header from "./components/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";

const MainLayout = () => {
  const location = useLocation();
  const isLoginOrRegister =
    location.pathname === "login" || location.pathname === "register";
  return (
    <div>
      <Header />
      <Outlet />
      {!isLoginOrRegister && <Footer />}
    </div>
  );
};

export default MainLayout;
