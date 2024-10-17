import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import NavIcons from "./NavIcons";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Logo />
        <h2 className="logo-header">Furniro</h2>
      </div>
      <Navbar />
      <NavIcons />
    </header>
  );
};

export default Header;