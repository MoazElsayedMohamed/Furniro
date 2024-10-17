import React from "react";

const Category = ({ imageUrl, name }) => {
  return (
    <div>
      <img src={imageUrl} alt={name} className="browse-image" />
      <h3 className="image-name">{name}</h3>
    </div>
  );
};

export default Category;
