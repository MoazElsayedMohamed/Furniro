import React from "react";
import { URL } from "../../../utils/constants";

const SingleProductImage = ({ product }) => {
  const { url } = product.attributes.image.data.attributes;

  return (
    <div>
      <img
        src={`${URL}${url}`}
        alt="single-product-image"
        className="single-product-img"
      />
    </div>
  );
};

export default SingleProductImage;
