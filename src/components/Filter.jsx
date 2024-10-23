import React from "react";
import { FaSlidersH } from "react-icons/fa";
import { RiApps2Fill } from "react-icons/ri";

const Filter = ({ start, end, totalProducts }) => {
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
        <input type="text" placeholder="Default" className="sorting-input" />
      </div>
    </section>
  );
};

export default Filter;
