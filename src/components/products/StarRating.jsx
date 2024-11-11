import React from "react";
import { IoStar } from "react-icons/io5";

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

export default StarRating;
