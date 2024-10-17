import React from "react";
import { BsPersonExclamation } from "react-icons/bs";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";

const NavIcons = () => {
  return (
    <nav className="nav-icons">
      <BsPersonExclamation className="nav-icon" />
      <CiSearch className="nav-icon" />
      <CiHeart className="nav-icon" />
      <CiShoppingCart className="nav-icon" />
    </nav>
  );
};

export default NavIcons;
