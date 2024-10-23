import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Products from "../components/products/Products";
import Footer from "../components/Footer";

const HomePage = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Hero openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
};

export default HomePage;
