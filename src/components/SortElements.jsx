import React, { useState } from "react";
import Filter from "./Filter";
import { useShopProducts } from "../context/ShopProductsContext";
import { Link } from "react-router-dom";
import Product from "./products/Product";
import { URL } from "../../utils/constants";

const SortElements = () => {
  const { startIndex, endIndex, products, start, end, totalProducts } =
    useShopProducts();
  const [sortOption, setSortOption] = useState("price-asc");

  function handleChange(e) {
    setSortOption(e.target.value);
  }

  const sortedProducts = [
    products.data.sort((a, b) => {
      if (sortOption === "name-asc") {
        return a.attributes.name.localeCompare(b.attributes.name);
      } else if (sortOption === "name-dsc") {
        return b.attributes.name.localeCompare(a.attributes.name);
      } else if (sortOption === "price-dsc") {
        return b.attributes.price - a.attributes.price;
      } else if (sortOption === "price-asc") {
        return a.attributes.price - b.attributes.price;
      }
      return 0;
    }),
  ];

  const sortedToDisplay = sortedProducts[0].slice(startIndex, endIndex);

  const productsElements = sortedToDisplay.map((product) => {
    return (
      <Link to={`/product/${product.id}`}>
        <Product
          key={product.id}
          id={product.id}
          name={product.attributes.name}
          imageUrl={`${URL}${product.attributes.image.data.attributes.url}`}
          price={product.attributes.price}
          discount={product.attributes.discount}
          shortDesc={product.attributes.short_desc}
        />
      </Link>
    );
  });

  return (
    <>
      <Filter
        start={start}
        end={end}
        totalProducts={totalProducts}
        handleChange={handleChange}
        sortOption={sortOption}
      />

      <div className="products-image">{productsElements}</div>
    </>
  );
};

export default SortElements;
