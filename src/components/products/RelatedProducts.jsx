import React from "react";
import ProductElements from "./ProductElements";

const RelatedProducts = () => {
  return (
    <section className="pb-8">
      <h1 className="text-5xl font-semibold text-center mb-8 mt-16">
        Related Products
      </h1>
      <ProductElements PAGE_SIZE={4} />
    </section>
  );
};

export default RelatedProducts;
