import React from "react";
import ProductElements from "./ProductElements";

const RelatedProducts = () => {
  return (
    <section className="related-products">
      <h1 className="related-header">Related Products</h1>
      <ProductElements PAGE_SIZE={4} />
    </section>
  );
};

export default RelatedProducts;
