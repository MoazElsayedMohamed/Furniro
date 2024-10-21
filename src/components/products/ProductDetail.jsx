import React from "react";
import { Button } from "../ui/button";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const ProductDetail = ({ product }) => {
  const { name, price, long_desc, sku, size, count, category } =
    product.attributes;
  return (
    <div>
      <div className="main-details">
        <h1 className="main-name">{name}</h1>
        <p className="main-price">Rs. {price}.000</p>
        <p className="main-desc">{long_desc}</p>
        <h3 className="main-size">Size</h3>
        <div className="size-buttons">
          <Button variant="default" className="mr-2" size="sm">
            L
          </Button>
          <Button variant="ghost" className="mr-2" size="sm">
            XL
          </Button>
          <Button variant="ghost" size="sm">
            XS
          </Button>
        </div>
        <h3 className="main-size">Color</h3>
        <div className="colors">
          <div className="violet"></div>
          <div className="black"></div>
          <div className="brown"></div>
        </div>
        <div>
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
