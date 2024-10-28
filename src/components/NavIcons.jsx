import React, { useState } from "react";
import { BsPersonExclamation } from "react-icons/bs";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import ShoppingCart from "./ShoppingCart";
import { IoLockClosedOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavIcons = () => {
  const [openCard, setOpenCard] = useState(false);

  function handleOpenCard() {
    setOpenCard(!openCard);
  }

  return (
    <nav className="nav-icons">
      <Link to="/login">
        <BsPersonExclamation className="w-10 h-8" />
      </Link>
      <CiSearch className="w-10 h-8" />
      <CiHeart className="w-10 h-8" />
      <CiShoppingCart className="w-10 h-8" onClick={handleOpenCard} />
      {openCard && (
        <ShoppingCart
          openCard={openCard}
          setOpenCard={setOpenCard}
          handleOpenCard={handleOpenCard}
        />
      )}
    </nav>
  );
};

export default NavIcons;
