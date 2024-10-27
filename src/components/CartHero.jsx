import React from "react";
import Logo from "./Logo";
import { FaChevronRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const CartHero = () => {
  return (
    <section className="shop-hero">
      <div className="shop-hero-container cart-hero">
        <Logo />
        <h1 className="text-7xl">Cart</h1>
        <div className="flex items-center gap-4">
          <p className="text-3xl font-semibold">
            <NavLink to="/">Home</NavLink>
          </p>
          <FaChevronRight />
          <p className="text-3xl font-light">
            <NavLink to="/cart">Cart</NavLink>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CartHero;
