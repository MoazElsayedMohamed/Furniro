import React from "react";
import Header from "../components/Header";
import CustomHero from "../components/CustomHero";
import Brands from "../components/Brands";
import Footer from "../components/Footer";
import MainContact from "../components/MainContact";

const Contact = () => {
  return (
    <div>
      <Header />
      <CustomHero pageName="Contact" />
      <MainContact />
      <Brands />
      <Footer />
    </div>
  );
};

export default Contact;
