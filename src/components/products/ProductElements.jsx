import React from "react";
import Product from "./Product";
import { Skeleton } from "../ui/skeleton";
import { useProducts } from "../../services/apiProducts";
import { PAGE_SIZE, URL } from "../../../utils/constants";

const ProductElements = () => {
  const { products, error, isLoading } = useProducts();
  const currentPage = 1;

  if (isLoading)
    return <Skeleton className="w-[100px] h-[20px] rounded-full" />;

  if (error) return <p>Error loading Products</p>;

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const productsToDisplay = products.data.slice(startIndex, endIndex);

  const productsElements = productsToDisplay.map((product) => {
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

  return <div className="products-image">{productsElements}</div>;
};

export default ProductElements;
