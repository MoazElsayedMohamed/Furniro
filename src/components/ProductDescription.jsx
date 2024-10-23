import React, { useState } from "react";

const ProductDescription = ({ product }) => {
  const { content } = product.attributes;
  const [reviews, setReviews] = useState(false);
  const [description, setDescription] = useState(false);

  function ReviewsContent() {
    return (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quod iure
        qui aliquam cupiditate esse odio nisi fugit labore exercitationem, nam
        neque. Expedita nam eos dicta earum corrupti inventore ex.
      </p>
    );
  }

  function handleClick() {
    setReviews(!reviews);
  }

  return (
    <section className="description">
      <div className="product-description">
        <div className="description-headers">
          <h1 className={reviews ? "" : "active"} onClick={handleClick}>
            Description
          </h1>
          <h1 onClick={handleClick} className={reviews ? "active" : ""}>
            Reviews
          </h1>
        </div>
        <p className="description-content">
          {reviews ? <ReviewsContent /> : content}
        </p>
        <img src="/Group.png" alt="" />
      </div>
    </section>
  );
};

export default ProductDescription;
