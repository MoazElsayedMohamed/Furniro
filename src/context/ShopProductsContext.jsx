import { createContext, useContext, useState } from "react";
import { useProducts } from "../services/apiProducts";
import { Skeleton } from "../components/ui/skeleton";
import { PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { PAGE_SIZE } from "../../utils/constants";

const ShopProductsContext = createContext("");

const ShopProductsProvider = ({ children }) => {
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
  return (
    <ShopProductsContext.Provider
      value={{
        renderPageNumbers,
        nextPage,
        currentPage,
        visiblePages,
        products,
        start,
        end,
        totalProducts,
        startIndex,
        endIndex,
      }}
    >
      {children}
    </ShopProductsContext.Provider>
  );
};

const useShopProducts = () => useContext(ShopProductsContext);

export { useShopProducts, ShopProductsProvider };
