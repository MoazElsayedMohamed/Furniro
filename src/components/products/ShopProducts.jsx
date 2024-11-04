import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
} from "@/components/ui/pagination";
import { useShopProducts } from "../../context/ShopProductsContext";
import SortElements from "../SortElements";

const ShopProducts = () => {
  const { renderPageNumbers, nextPage } = useShopProducts();

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
