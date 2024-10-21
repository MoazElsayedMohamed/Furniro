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
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const productsToDisplay = products.data.slice(startIndex, endIndex);

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

  const productsElements = productsToDisplay.map((product) => {
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
    <div>
      <div className="products-image">{productsElements}</div>
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
