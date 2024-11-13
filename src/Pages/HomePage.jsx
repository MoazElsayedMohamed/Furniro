import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Products from "../components/products/Products";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Products />
    </div>
  );
};

export default HomePage;
