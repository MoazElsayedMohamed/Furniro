import React from "react";
import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const ProductNav = ({ product }) => {
  const { name } = product.attributes;
  return (
    <section className="product-nav">
      <h3>
        <Link to="/">Home</Link>
      </h3>
      <HiChevronRight />
      <h3>
        <Link to="/shop">Shop</Link>
      </h3>
      <HiChevronRight />
      <div className="single-product-name">{name}</div>
    </section>
  );
};

export default ProductNav;
