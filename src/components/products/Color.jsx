import React from "react";

const Color = () => {
  return (
    <>
      <h3 className="text-2xl font-normal text-muted sm:max-xl:text-lg">
        Color
      </h3>
      <div className="flex items-center gap-4 cursor-pointer">
        <div className="bg-violet-500 h-8 w-8 rounded-2xl sm:max-xl:h-6 smmax-xl::w-6"></div>
        <div className="bg-black h-8 w-8 rounded-2xl sm:max-xl:h-6 sm:max-xl:w-6"></div>
        <div className="bg-amber-700 h-8 w-8 rounded-2xl sm:max-xl:h-6 sm:max-xl:w-6"></div>
      </div>
    </>
  );
};

export default Color;
