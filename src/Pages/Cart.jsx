import React from "react";
import Header from "../components/Header";
import Brands from "../components/Brands";
import Footer from "../components/Footer";
import CartDetails from "../components/CartDetails";
import CustomHero from "../components/CustomHero";

const Cart = () => {
  return (
    <div>
      <Header />
      <CustomHero pageName="Cart" />
      <CartDetails />
      <Brands />
      <Footer />
    </div>
  );
};

export default Cart;
