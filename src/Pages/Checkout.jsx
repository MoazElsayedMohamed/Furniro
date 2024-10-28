import React from "react";
import Header from "../components/Header";
import Brands from "../components/Brands";
import CheckoutHero from "../components/CheckoutHero";
import Footer from "../components/Footer";
import CheckoutMain from "../components/CheckoutMain";

const Checkout = () => {
  return (
    <div>
      <Header />
      <CheckoutHero />
      <CheckoutMain />
      <Brands />
      <Footer />
    </div>
  );
};

export default Checkout;
