import React from "react";
import CheckoutForm from "./CheckoutForm";
import CheckoutPrice from "./CheckoutPrice";

const CheckoutMain = () => {
  return (
    <div className="flex py-24 px-60 gap-56 justify-center">
      <CheckoutForm></CheckoutForm>
      <CheckoutPrice></CheckoutPrice>
    </div>
  );
};

export default CheckoutMain;
