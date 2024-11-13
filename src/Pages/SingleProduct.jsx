import React from "react";
import { useProducts } from "../services/apiProducts";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/products/ProductDetails";
import ProductNav from "../components/products/ProductNav";
import RelatedProducts from "../components/products/RelatedProducts";

const SingleProduct = () => {
  const { id } = useParams();
  const { products, isLoading, error } = useProducts();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error..</p>;

  const product = products.data.find((product) => product.id === Number(id));

  return (
    <section>
      <ProductNav product={product} />
      <ProductDetails product={product} />
      <RelatedProducts />
    </section>
  );
};

export default SingleProduct;
