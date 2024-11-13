import React from "react";
import ShopHero from "../components/ShopHero";
import ShopProducts from "../components/products/ShopProducts";
import Brands from "../components/Brands";

const Shop = () => {
  return (
    <div>
      <ShopHero />
      <ShopProducts />
      <Brands />
    </div>
  );
};

export default Shop;
