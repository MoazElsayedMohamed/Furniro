import React from "react";
import Size from "./Size";
import Color from "./Color";
import StarRating from "./StarRating";
import Links from "./Links";
// import ProductCount from "./ProductCount";
// import { Button } from "../ui/button";
// import { useCart } from "@/context/CartContext";
import Buttons from "./Buttons";

// eslint-disable-next-line react/prop-types
const ProductDetail = ({ product }) => {
  // eslint-disable-next-line react/prop-types
  const { name, price, long_desc } = product.attributes;
  // eslint-disable-next-line react/prop-types
  const { rating } = product.attributes.reviews.data[0].attributes;
  // eslint-disable-next-line react/prop-types
  const reviewsCount = product.attributes.reviews.data.length;
  // const { addToCart } = useCart();

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-gray-400 pb-8 mb-8 ">
        <h1 className="text-7xl sm:max-xl:text-5xl">{name}</h1>
        <p className="text-4xl text-muted sm:max-xl:text-xl">Rs. {price}.000</p>
        <div className="flex items-center gap-4 sm:max-xl:flex-col sm:max-xl:items-start">
          <StarRating numberOfStars={rating} />
          <p className="text-xl text-gray-400 sm:max-xl:text-sm">
            {reviewsCount} Customer Review
          </p>
        </div>
        <p className="w-4/5 text-xl font-semibold sm:max-xl:text-lg">
          {long_desc}
        </p>
        <Size product={product} />
        <Color />
        {/* <div className="flex">
          <ProductCount product={product} />
          <Button
            variant="outline1"
            size="xl"
            onClick={() => addToCart(product)}
          >
            add to cart
          </Button>
          <Button variant="outline1" size="xl">
            + compare
          </Button>
        </div> */}
        <Buttons product={product} />
      </div>
      <Links product={product} />
    </div>
  );
};

export default ProductDetail;
