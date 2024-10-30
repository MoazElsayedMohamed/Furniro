import React from "react";

const Brand = ({ brand, brandName, brandDesc }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="text-7xl">{brand}</div>
      <div>
        <h2 className="text-3xl font-bold">{brandName}</h2>
        <p className="text-xl text-gray-400">{brandDesc}</p>
      </div>
    </div>
  );
};

export default Brand;
