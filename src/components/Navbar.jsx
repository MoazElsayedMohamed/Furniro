import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Navbar = ({ openMenu, setOpenMenu }) => {
  return (
    <nav className="">
      <div onClick={() => setOpenMenu(!openMenu)}>
        <IoMenu className="menu-bar" />
      </div>
      <ul
        className={
          openMenu
            ? "open"
            : "flex list-none items-center gap-14 text-2xl cursor-pointer sm:max-phone:hidden"
        }
      >
        <li>
          <NavLink to="/" className="hover:text-primary">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" className="hover:text-primary">
            Shop
          </NavLink>
        </li>
        <li className="hover:text-primary">About</li>
        <li className="hover:text-primary">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
