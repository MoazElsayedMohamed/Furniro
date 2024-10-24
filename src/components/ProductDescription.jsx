import React, { useState } from "react";

const ProductDescription = ({ product }) => {
  const { content } = product.attributes;
  const { content: reviewsContent } =
    product.attributes.reviews.data[0].attributes;
  const reviewsCount = product.attributes.reviews.data.length;

  const [reviews, setReviews] = useState(false);

  function ReviewsContent() {
    return <p>{reviewsContent}</p>;
  }

  function handleClick() {
    setReviews(!reviews);
  }

  return (
    <section className="border-b border-gray-300 pb-8">
      <div className="w-9/12  m-auto">
        <div className="flex items-center justify-center gap-16 text-3xl mb-4 text-muted cursor-pointer">
          <h1 className={reviews ? "" : "active"} onClick={handleClick}>
            Description
          </h1>
          <h1 onClick={handleClick} className={reviews ? "active" : ""}>
            Reviews[{reviewsCount}]
          </h1>
        </div>
        <p className="text-lg leading-8 text-muted mb-8">
          {reviews ? <ReviewsContent /> : content}
        </p>
        <img src="/Group.png" alt="" />
      </div>
    </section>
  );
};

export default ProductDescription;
