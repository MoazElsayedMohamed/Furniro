import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Navbar = ({ openMenu, setOpenMenu }) => {
  return (
    <nav>
      <div onClick={() => setOpenMenu(!openMenu)}>
        <IoMenu className="menu-bar" />
      </div>
      <ul className={openMenu ? "open" : "navbar-list"}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
