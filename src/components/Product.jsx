import React, { useState } from "react";
import { CiHeart, CiShare1 } from "react-icons/ci";
import { MdOutlineCompareArrows } from "react-icons/md";

const Product = ({ imageUrl, name, price, discount, shortDesc }) => {
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseOver() {
    setIsHovering(true);
  }

  function handleMouseOut() {
    setIsHovering(false);
  }

  return (
    <div
      className="product"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {isHovering && (
        <div className="hovering-card">
          <button className="hovering-button">add to cart</button>
          <div className="hovering-icons">
            <CiShare1 />
            <p>share</p>
            <MdOutlineCompareArrows />
            <p>compare</p>
            <CiHeart />
            <p>like</p>
          </div>
        </div>
      )}

      <img src={imageUrl} alt={name} className="product-image" />
      <p className={discount ? "product-discount" : "product-discount new"}>
        {discount ? `-${discount}%` : "New"}
      </p>
      <div className="product-details">
        <h4 className="product-name">{name}</h4>
        <p className="product-short-desc">{shortDesc}</p>
        <p className="product-price">Rp {price}.000</p>
      </div>
    </div>
  );
};

export default Product;
