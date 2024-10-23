import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShopHero from "../components/ShopHero";
import Filter from "../components/Filter";
import ShopProducts from "../components/products/ShopProducts";
import Brands from "../components/Brands";

const Shop = () => {
  return (
    <div>
      <Header />
      <ShopHero />
      <ShopProducts />
      <Brands />
      <Footer />
    </div>
  );
};

export default Shop;
