import React from "react";

const Category = ({ imageUrl, name }) => {
  return (
    <div>
      <img src={imageUrl} alt={name} className="w-full h-full" />
      <h3 className="text-3xl font-bold mt-8 mb-24">{name}</h3>
    </div>
  );
};

export default Category;
