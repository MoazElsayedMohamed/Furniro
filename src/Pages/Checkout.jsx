import React from "react";
import Brands from "../components/Brands";
import CheckoutMain from "../components/CheckoutMain";
import CustomHero from "../components/CustomHero";

const Checkout = () => {
  return (
    <div>
      <CustomHero pageName="Checkout" />
      <CheckoutMain />
      <Brands />
    </div>
  );
};

export default Checkout;
