import React, { useState } from "react";
import { BsPersonExclamation } from "react-icons/bs";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import ShoppingCart from "./ShoppingCart";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "../context/AuthContext";

const NavIcons = () => {
  const [openCard, setOpenCard] = useState(false);
  const { token, username } = useAuth();

  function handleOpenCard() {
    if (token && username) {
      setOpenCard(!openCard);
    } else {
      toast.error("you must log in first");
    }
  }

  function handleLogOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.replace("/login");
    toast.success("logged out successfully");
  }

  return (
    <nav className="nav-icons">
      {username && token ? (
        <>
          <p className="text-xl">{username}</p>
        </>
      ) : (
        <Link to="/login">
          <BsPersonExclamation className="w-10 h-8" />
        </Link>
      )}
      <CiSearch className="w-10 h-8" />
      <CiHeart className="w-10 h-8" />

      <CiShoppingCart className="w-10 h-8" onClick={handleOpenCard} />
      {username && token && (
        <button
          onClick={handleLogOut}
          className="text-xl border border-primary text-primary py-4 px-6 hover:bg-primary hover:text-white"
        >
          logout
        </button>
      )}
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
