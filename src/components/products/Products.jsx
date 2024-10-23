import React from "react";
import { buttonVariants } from "../ui/button";
import { Link } from "react-router-dom";
import ProductElements from "./ProductElements";

const Products = () => {
  return (
    <section className="products">
      <h2 className="products-header">our products</h2>
      <ProductElements PAGE_SIZE={8} />
      <Link
        className={buttonVariants({ variant: "outline", size: "lg" })}
        to="/shop"
      >
        Show more
      </Link>
    </section>
  );
};

export default Products;
