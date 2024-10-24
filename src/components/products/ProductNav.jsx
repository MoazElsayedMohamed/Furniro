import React from "react";
import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const ProductNav = ({ product }) => {
  const { name } = product.attributes;
  return (
    <section className="flex items-center gap-4 text-2xl py-16 px-32 bg-muted-foreground sm:max-xl:text-xl sm:max-xl:py-8 sm:max-xl:px-16">
      <h3>
        <Link to="/">Home</Link>
      </h3>
      <HiChevronRight />
      <h3>
        <Link to="/shop">Shop</Link>
      </h3>
      <HiChevronRight />
      <div className="border-l-2 border-muted pl-8 text-3xl">{name}</div>
    </section>
  );
};

export default ProductNav;
