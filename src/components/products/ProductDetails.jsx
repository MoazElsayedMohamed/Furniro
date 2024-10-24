import React from "react";
import SingleProductImage from "./SingleProductImage";
import ProductDetail from "./ProductDetail";
import ProductDescription from "../ProductDescription";

const ProductDetails = ({ product }) => {
  return (
    <main>
      <div className="px-24 py-8 grid grid-cols-2 gap-24 border-b border-muted mb-8 sm:max-xl:gap-12 sm:max-xl:px-12 sm:max-xl:grid-cols-1">
        <SingleProductImage product={product} />
        <ProductDetail product={product} />
      </div>
      <ProductDescription product={product} />
    </main>
  );
};

export default ProductDetails;
