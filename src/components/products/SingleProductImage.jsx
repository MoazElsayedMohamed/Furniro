import React from "react";
import { URL } from "../../../utils/constants";

const SingleProductImage = ({ product }) => {
  const { url } = product.attributes.image.data.attributes;

  return (
    <div className="flex gap-8">
      <div className="flex flex-col gap-4">
        <img src="/Group 94.png" alt="" className="cursor-pointer" />
        <img src="/Group 96.png" alt="" className="cursor-pointer" />
        <img src="/Group 97.png" alt="" className="cursor-pointer" />
        <img src="/Group 98.png" alt="" className="cursor-pointer" />
      </div>
      <img
        src={`${URL}${url}`}
        alt="single-product-image"
        className="rounded-lg w-4/5 h-4/5 sm:max-xl:h-fit"
      />
    </div>
  );
};

export default SingleProductImage;
