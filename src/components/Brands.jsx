import React from "react";
import { BsPatchCheck } from "react-icons/bs";
import { GoTrophy } from "react-icons/go";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiCustomerServiceLine } from "react-icons/ri";
import Brand from "./Brand";

const Brands = () => {
  return (
    <section className="brands">
      <Brand
        brand={<GoTrophy />}
        brandName="High Quality"
        brandDesc="Carfted from top materials"
      />
      <Brand
        brand={<BsPatchCheck />}
        brandName="Warranty Protection"
        brandDesc="Over 2 years"
      />
      <Brand
        brand={<LiaShippingFastSolid />}
        brandName="Free Shipping"
        brandDesc="Order over 150 $"
      />
      <Brand
        brand={<RiCustomerServiceLine />}
        brandName="24 / 7 Support"
        brandDesc="Dedicated support"
      />
    </section>
  );
};

export default Brands;
