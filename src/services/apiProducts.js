import { useQuery } from "@tanstack/react-query";
import { URL } from "../../utils/constants";

async function getProducts() {
  const response = await fetch(
    `${URL}/api/products?pagination[page]=1&pagination[pageSize]=100&populate[0]=image&sort=name&populate[1]=reviews&populate[2]=tag&populate[3]=category`
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

  return { products, error, isLoading };
}
