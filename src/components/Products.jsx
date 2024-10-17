import React from "react";
import { useProducts } from "../services/apiProducts";
import Product from "./Product";
import { URL } from "../../utils/constants";
import { Button } from "./ui/button";

const Products = () => {
  const { products, error, isLoading } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading categories</p>;

  const ProductsElements = products.data.map((product) => {
    return (
      <Product
        key={product.id}
        name={product.attributes.name}
        imageUrl={`${URL}${product.attributes.image.data.attributes.url}`}
        price={product.attributes.price}
        discount={product.attributes.discount}
        shortDesc={product.attributes.short_desc}
      />
    );
  });
  return (
    <section className="products">
      <h2 className="products-header">our products</h2>
      <div className="products-image">{ProductsElements}</div>
      <Button size="lg" variant="outline">
        Show More
      </Button>
    </section>
  );
};

export default Products;
