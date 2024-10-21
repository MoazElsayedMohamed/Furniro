import React from "react";
import { useProducts } from "../../services/apiProducts";
import { useParams } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import ProductDetails from "./ProductDetails";
import ProductNav from "./ProductNav";

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
      <Footer />
    </section>
  );
};

export default SingleProduct;
