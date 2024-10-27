import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ShopHero = () => {
  return (
    <section className="shop-hero">
      <div className="shop-hero-container">
        <h1 className="text-7xl ">Shop</h1>
        <div className="flex items-center gap-4">
          <p className="text-3xl font-semibold">
            <NavLink to="/">Home</NavLink>
          </p>
          <FaChevronRight />
          <p className="text-3xl font-light">
            <NavLink to="/shop">Shop</NavLink>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShopHero;
