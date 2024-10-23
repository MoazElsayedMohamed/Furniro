import React, { useState } from "react";
import { Button } from "../ui/button";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { URL } from "../../../utils/constants";

const ProductDetail = ({ product }) => {
  const { name, price, long_desc, sku, size, count, category } =
    product.attributes;
  const [activeSize, setActiveSize] = useState(size);

  function handleClick(size) {
    setActiveSize(size);
  }

  return (
    <div>
      <div className="main-details">
        <h1 className="main-name">{name}</h1>
        <p className="main-price">Rs. {price}.000</p>
        <p className="main-desc">{long_desc}</p>
        <h3 className="main-size">Size</h3>
        <div className="size-buttons">
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
        <h3 className="main-size">Color</h3>
        <div className="colors">
          <div className="violet"></div>
          <div className="black"></div>
          <div className="brown"></div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button variant="outline1" size="lg">
            add to cart
          </Button>
          <Button variant="outline1" size="lg">
            + compare
          </Button>
        </div>
      </div>
      <div className="main-links">
        <p>SKU : {sku}</p>
        <p>Category : {category}</p>
        <p>Tags : {sku}</p>
        <p className="share">
          Share :
          <div className="share-icons">
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
