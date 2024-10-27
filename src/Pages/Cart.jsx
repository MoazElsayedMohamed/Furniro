import React from "react";
import Header from "../components/Header";
import Brands from "../components/Brands";
import Footer from "../components/Footer";
import CartHero from "../components/CartHero";
import CartDetails from "../components/CartDetails";

const Cart = () => {
  return (
    <div>
      <Header />
      <CartHero />
      <CartDetails />
      <Brands />
      <Footer />
    </div>
  );
};

export default Cart;
