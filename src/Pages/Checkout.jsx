import React from "react";
import Header from "../components/Header";
import Brands from "../components/Brands";
import Footer from "../components/Footer";
import CheckoutMain from "../components/CheckoutMain";
import CustomHero from "../components/CustomHero";

const Checkout = () => {
  return (
    <div>
      <Header />
      <CustomHero pageName="Checkout" />
      <CheckoutMain />
      <Brands />
      <Footer />
    </div>
  );
};

export default Checkout;
