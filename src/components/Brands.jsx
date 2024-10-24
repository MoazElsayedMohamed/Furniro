import React from "react";
import { BsPatchCheck } from "react-icons/bs";
import { GoTrophy } from "react-icons/go";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiCustomerServiceLine } from "react-icons/ri";

const Brands = () => {
  return (
    <section className="brands">
      <div className="flex items-center gap-4">
        <GoTrophy className="text-7xl" />
        <div>
          <h2 className="text-3xl font-bold">High Quality</h2>
          <p className="text-xl text-gray-400">Carfted from top materials</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <BsPatchCheck className="text-7xl" />
        <div>
          <h2 className="text-3xl font-bold">Warranty Protection</h2>
          <p className="text-xl text-gray-400">Over 2 years</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <LiaShippingFastSolid className="text-7xl" />
        <div>
          <h2 className="text-3xl font-bold">Free Shipping</h2>
          <p className="text-xl text-gray-400">Order over 150 $</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <RiCustomerServiceLine className="text-7xl" />
        <div>
          <h2 className="text-3xl font-bold">24 / 7 Support</h2>
          <p className="text-xl text-gray-400">Dedicated support</p>
        </div>
      </div>
    </section>
  );
};

export default Brands;
