import React from "react";
import { BsPersonExclamation } from "react-icons/bs";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";

const NavIcons = () => {
  return (
    <nav className="nav-icons">
      <BsPersonExclamation className="w-10 h-8" />
      <CiSearch className="w-10 h-8" />
      <CiHeart className="w-10 h-8" />
      <CiShoppingCart className="w-10 h-8" />
    </nav>
  );
};

export default NavIcons;
