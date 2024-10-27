import React from "react";
import { FaSlidersH } from "react-icons/fa";
import { RiApps2Fill } from "react-icons/ri";
import { useProducts } from "../services/apiProducts";

const Filter = ({ start, end, totalProducts, handleChange, sortOption }) => {
  return (
    <section className="filter">
      <div className="filter-first-container">
        <FaSlidersH />
        <h3>Filter</h3>
        <RiApps2Fill />
        <p>
          Showing {start}-{end} of {totalProducts} results
        </p>
      </div>
      <div className="show-products">
        <h3>Show</h3>
        <input type="text" placeholder="8" className="show-inputs" />
        <h3>sort by</h3>
        <select
          className="py-6 px-3 text-xl outline-none"
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
