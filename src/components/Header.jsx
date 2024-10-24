import React, { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import NavIcons from "./NavIcons";

const Header = ({ openMenu, setOpenMenu }) => {
  return (
    <header className="flex items-center justify-around">
      <div className="flex items-center">
        <Logo />
        <h2 className="logo-header">Furniro</h2>
      </div>
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <NavIcons />
    </header>
  );
};

export default Header;
