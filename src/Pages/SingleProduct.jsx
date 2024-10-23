import React from "react";
import { useProducts } from "../services/apiProducts";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
      <Header />
      <ProductNav product={product} />
      <ProductDetails product={product} />
      <RelatedProducts />
      <Footer />
    </section>
  );
};

export default SingleProduct;
