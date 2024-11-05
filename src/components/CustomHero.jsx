import React from "react";
import Logo from "./Logo";
import { FaChevronRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const CustomHero = ({ pageName }) => {
  return (
    <section className="shop-hero">
      <div className=" flex flex-col items-center gap-8 justify-center relative top-[10%] sm:max-xl:top-[25%]">
        <Logo />
        <h1 className="text-7xl sm:max-xl:text-5xl">{pageName}</h1>
        <div className="flex items-center gap-4">
          <p className="text-3xl font-semibold sm:max-xl:text-xl">
            <NavLink to="/">Home</NavLink>
          </p>
          <FaChevronRight />
          <p className="text-3xl font-light sm:max-xl:text-xl">
            <NavLink to="/cart">{pageName}</NavLink>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomHero;
