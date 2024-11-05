import React, { useState } from "react";
import { BsPersonExclamation } from "react-icons/bs";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import ShoppingCart from "./ShoppingCart";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "../context/AuthContext";

const NavIcons = ({ openMenu }) => {
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
    <nav
      className={
        openMenu
          ? "flex flex-col absolute z-[999] top-20 right-12 gap-2 items-end"
          : "flex items-center gap-7 cursor-pointer sm:max-xl:hidden"
      }
    >
      {username && token ? (
        <>
          <p className="text-xl sm:max-md:text-lg">{username}</p>
        </>
      ) : (
        <Link to="/login">
          <BsPersonExclamation className="w-10 h-8 sm:max-xl:h-6" />
        </Link>
      )}
      <CiSearch className="w-10 h-8 sm:max-xl:h-6" />
      <CiHeart className="w-10 h-8 sm:max-xl:h-6" />

      <CiShoppingCart
        className="w-10 h-8 sm:max-xl:h-6"
        onClick={handleOpenCard}
      />
      {username && token && (
        <button
          onClick={handleLogOut}
          className="text-xl border border-primary text-primary py-4 px-6 hover:bg-primary hover:text-white sm:max-xl:text-base sm:max-xl:py-2 "
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

// sm:max-xl:absolute sm:max-xl:right-[100%] sm:max-xl:top-[100%]
