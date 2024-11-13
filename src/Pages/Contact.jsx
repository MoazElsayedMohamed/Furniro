import React from "react";
import CustomHero from "../components/CustomHero";
import Brands from "../components/Brands";
import MainContact from "../components/MainContact";

const Contact = () => {
  return (
    <div>
      <CustomHero pageName="Contact" />
      <MainContact />
      <Brands />
    </div>
  );
};

export default Contact;
