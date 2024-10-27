import React, { useState } from "react";
import ProductElements from "./ProductElements";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";
import { useProducts } from "../../services/apiProducts";
import Product from "./Product";
import { Skeleton } from "../ui/skeleton";
import { PAGE_SIZE, URL } from "../../../utils/constants";
import { Link } from "react-router-dom";
import Filter from "../Filter";

const ShopProducts = () => {
  const { products, isLoading, error } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const visiblePages = 3;

  if (isLoading)
    return <Skeleton className="w-[100px] h-[20px] rounded-full" />;

  if (error) return <p>Error loading Products</p>;

  const totalPages = Math.ceil(products.data.length / PAGE_SIZE);
  // to display pagination in 3 values only
  const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);
  const adjustedStartPage = Math.max(1, endPage - visiblePages + 1);

  // display products in one page
  const totalProducts = products.data.length;
  const start = (currentPage - 1) * PAGE_SIZE + 1;
  const end = start + PAGE_SIZE - 1;
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  function nextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function handlePageClick(pageNumber) {
    setCurrentPage(pageNumber);
  }

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = adjustedStartPage; i <= endPage; i++) {
      pageNumbers.push(
        <PaginationItem>
          <PaginationLink size="md" onClick={() => handlePageClick(i)}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    return pageNumbers;
  };

  function SortElements() {
    const [sortOption, setSortOption] = useState("price-asc");

    function handleChange(e) {
      setSortOption(e.target.value);
    }

    const sortedProducts = [
      products.data.sort((a, b) => {
        if (sortOption === "price-asc") {
          return a.attributes.price - b.attributes.price;
        } else if (sortOption === "price-dsc") {
          return b.attributes.price - a.attributes.price;
        } else if (sortOption === "name-asc") {
          return a.attributes.name.localeCompare(b.attributes.name);
        } else if (sortOption === "name-dsc") {
          return b.attributes.name.localeCompare(a.attributes.name);
        }
        return 0;
      }),
    ];

    const sortedToDisplay = sortedProducts[0].slice(startIndex, endIndex);

    const productsElements = sortedToDisplay.map((product) => {
      return (
        <Link to={`/product/${product.id}`}>
          <Product
            key={product.id}
            id={product.id}
            name={product.attributes.name}
            imageUrl={`${URL}${product.attributes.image.data.attributes.url}`}
            price={product.attributes.price}
            discount={product.attributes.discount}
            shortDesc={product.attributes.short_desc}
          />
        </Link>
      );
    });

    return (
      <>
        <Filter
          start={start}
          end={end}
          totalProducts={totalProducts}
          handleChange={handleChange}
          sortOption={sortOption}
        />

        <div className="products-image">{productsElements}</div>
      </>
    );
  }

  return (
    <div>
      <SortElements />
      <Pagination>
        <PaginationContent>
          {renderPageNumbers()}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext onClick={nextPage} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ShopProducts;
