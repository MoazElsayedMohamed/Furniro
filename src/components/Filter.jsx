import React from "react";
import { FaSlidersH } from "react-icons/fa";
import { RiApps2Fill } from "react-icons/ri";
import { useProducts } from "../services/apiProducts";
import { PAGE_SIZE } from "../../utils/constants";

const Filter = () => {
  const { products, isLoading } = useProducts();
  if (isLoading) return <p>Loading...</p>;

  const totalProducts = products.data.length;
  const startIndex = (1 - 1) * PAGE_SIZE + 1;
  const endIndex = startIndex + PAGE_SIZE - 1;

  return (
    <section className="filter">
      <div className="filter-first-container">
        <FaSlidersH />
        <h3>Filter</h3>
        <RiApps2Fill />
        <p>
          Showing {startIndex}-{endIndex} of {totalProducts} results
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
