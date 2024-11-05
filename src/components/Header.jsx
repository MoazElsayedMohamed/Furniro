import React, { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import NavIcons from "./NavIcons";

const Header = ({}) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="flex items-center justify-around sm:max-xl:justify-between ">
      <div className="flex items-center mb-4">
        <Logo />
        <h2 className="text-[2rem]">Furniro</h2>
      </div>
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <NavIcons openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </header>
  );
};

export default Header;
