import React from "react";
import "./style.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BrowseRange from "./components/BrowseRange";
import Products from "./components/Products";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <BrowseRange />
      <Products />
      <Footer />
    </div>
  );
};

export default App;
