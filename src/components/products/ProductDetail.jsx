import React, { useState } from "react";
import { Button } from "../ui/button";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { useProducts } from "../../services/apiProducts";
import { useCart } from "../../context/CartContext";
import { useProduct } from "../../context/ProductContext";
import { useAuth } from "../../context/AuthContext";
import { toast } from "sonner";

const ProductDetail = ({ product }) => {
  const { addToCart } = useCart();
  const { token, username } = useAuth();
  const { productCount, handleCountDecrease, handleCountIncrease } =
    useProduct();
  let tag = product.attributes.tag.data;
  if (tag.length === 1) {
    tag = tag[0];
  }
  const { name, price, long_desc, sku, size, count, category } =
    product.attributes;
  const { name: tagName } = tag.attributes;
  const { name: categoryName } = product.attributes.category.data.attributes;
  const { rating } = product.attributes.reviews.data[0].attributes;
  const reviewsCount = product.attributes.reviews.data.length;
  const [activeSize, setActiveSize] = useState(size);

  function handleClick(size) {
    if (token && username) {
      setActiveSize(size);
    } else {
      toast.error("You can't change size. you must log in first ");
    }
  }

  const StarRating = ({ numberOfStars }) => {
    const stars = Array(numberOfStars).fill(0);
    return (
      <div className="flex gap-1">
        {stars.map((_, index) => (
          <IoStar key={index} className="h-8 w-8 text-yellow-500" />
        ))}
      </div>
    );
  };

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
        <h3 className="text-2xl font-normal text-muted sm:max-xl:text-lg">
          Size
        </h3>
        <div>
          <Button
            variant={activeSize === "L" ? "default" : "ghost"}
            className="mr-2"
            size="sm"
            onClick={() => handleClick("L")}
          >
            L
          </Button>

          <Button
            variant={activeSize === "XL" ? "default" : "ghost"}
            className="mr-2"
            size="sm"
            onClick={() => handleClick("XL")}
          >
            XL
          </Button>
          <Button
            variant={size === "XS" ? "default" : "ghost"}
            size="sm"
            onClick={() => handleClick("XS")}
          >
            XS
          </Button>
        </div>
        <h3 className="text-2xl font-normal text-muted sm:max-xl:text-lg">
          Color
        </h3>
        <div className="flex items-center gap-4 cursor-pointer">
          <div className="bg-violet-500 h-8 w-8 rounded-2xl sm:max-xl:h-6 smmax-xl::w-6"></div>
          <div className="bg-black h-8 w-8 rounded-2xl sm:max-xl:h-6 sm:max-xl:w-6"></div>
          <div className="bg-amber-700 h-8 w-8 rounded-2xl sm:max-xl:h-6 sm:max-xl:w-6"></div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button variant="outline1" size="lg">
            <p onClick={handleCountDecrease}>-</p>
            <p>{productCount}</p>
            <p onClick={handleCountIncrease}>+</p>
          </Button>

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
        </div>
      </div>
      <div className="text-muted font-normal text-lg flex flex-col gap-4 ">
        <p>SKU : {sku}</p>
        <p>Category : {categoryName}</p>
        <p>Tags : {tagName}</p>
        <p className="flex items-center gap-4">
          Share :
          <div className="text-black flex cursor-pointer gap-4">
            <FaFacebook />
            <FaLinkedin />
            <FaTwitter />
          </div>
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
