import React from "react";
import SingleProductImage from "./SingleProductImage";
import ProductDetail from "./ProductDetail";
import ProductDescription from "../ProductDescription";

const ProductDetails = ({ product }) => {
  return (
    <main>
      <div className="single-product">
        <SingleProductImage product={product} />
        <ProductDetail product={product} />
      </div>
      <ProductDescription product={product} />
    </main>
  );
};

export default ProductDetails;
