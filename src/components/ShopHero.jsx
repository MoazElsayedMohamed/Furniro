import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ShopHero = () => {
  return (
    <section className="shop-hero">
      <div className="shop-hero-container">
        <h1 className="shop-hero-header">Shop</h1>
        <div className="small-container">
          <p className="small-container-home">
            <NavLink to="/">Home</NavLink>
          </p>
          <FaChevronRight />
          <p className="small-container-shop">
            <NavLink to="/shop">Shop</NavLink>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShopHero;
