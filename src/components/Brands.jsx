import React from "react";
import { BsPatchCheck } from "react-icons/bs";
import { GoTrophy } from "react-icons/go";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiCustomerServiceLine } from "react-icons/ri";

const Brands = () => {
  return (
    <section className="brands">
      <div className="brand">
        <GoTrophy className="brand-icon" />
        <div>
          <h2 className="brand-main">High Quality</h2>
          <p className="brand-text">Carfted from top materials</p>
        </div>
      </div>
      <div className="brand">
        <BsPatchCheck className="brand-icon" />
        <div>
          <h2 className="brand-main">Warranty Protection</h2>
          <p className="brand-text">Over 2 years</p>
        </div>
      </div>
      <div className="brand">
        <LiaShippingFastSolid className="brand-icon" />
        <div>
          <h2 className="brand-main">Free Shipping</h2>
          <p className="brand-text">Order over 150 $</p>
        </div>
      </div>
      <div className="brand">
        <RiCustomerServiceLine className="brand-icon" />
        <div>
          <h2 className="brand-main">24 / 7 Support</h2>
          <p className="brand-text">Dedicated support</p>
        </div>
      </div>
    </section>
  );
};

export default Brands;
