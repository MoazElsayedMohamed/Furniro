import React from "react";
import { FaSlidersH } from "react-icons/fa";
import { RiApps2Fill } from "react-icons/ri";

const Filter = ({ start, end, totalProducts, handleChange, sortOption }) => {
  return (
    <section className="bg-[#f9f1e7] h-[10rem] flex items-center justify-around mb-[3.2rem] sm:max-sm-tablet:flex-col sm:max-xl:py-4 sm:max-xl:px-4">
      <div className="flex items-center gap-6 ">
        <FaSlidersH className="text-2xl" />
        <h3 className="text-2xl sm:max-xl:text-xl">Filter</h3>
        <RiApps2Fill className="text-2xl" />
        <p className="pl-16 border-l-2 border-[#9f9f9f] ml-8 text-2xl sm:max-xl:text-lg sm:max-xl:ml-4 ">
          Showing {start}-{end} of {totalProducts} results
        </p>
      </div>
      <div className="flex items-center gap-8">
        <h3 className="text-2xl sm:max-xl:text-xl capitalize">Show</h3>
        <input
          type="text"
          placeholder="8"
          className="outline-none w-[3.5rem] text-xl py-3 px-5 sm:max-xl:w-[3rem] sm:max-xl:text-lg sm:max-xl:px-4"
        />
        <h3 className="text-xl">sort by</h3>
        <select
          className="py-6 px-3 text-xl outline-none sm:max-xl:text-base sm:max-xl:py-3 sm:max-xl:px-2"
          onChange={handleChange}
          value={sortOption}
        >
          <option value="name-asc">select name (ascending)</option>
          <option value="name-dsc">select name (descending)</option>
          <option value="price-asc">select price (low)</option>
          <option value="price-dsc">select price (high)</option>
        </select>
      </div>
    </section>
  );
};

export default Filter;
