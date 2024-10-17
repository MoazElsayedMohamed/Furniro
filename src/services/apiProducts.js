import { useQuery } from "@tanstack/react-query";
import { URL } from "../../utils/constants";

async function getProducts() {
  const response = await fetch(
    `${URL}/api/products?pagination[page]=1&pagination[pageSize]=100&populate=image&sort=name`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();
  return data;
}

export function useProducts() {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["product"],
    queryFn: getProducts,
  });

  if (isLoading) {
    console.log("Loading products...");
  }

  if (error) {
    console.error("Error fetching products:", error);
  }

  // Log only when categories are available
  if (products) {
    console.log("Products data:", products);
  }

  return { products, error, isLoading };
}
