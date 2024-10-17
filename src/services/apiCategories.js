import { useQuery } from "@tanstack/react-query";
import { URL } from "../../utils/constants";

async function getCategories() {
  const response = await fetch(
    `${URL}/api/categories?pagination[page]=1&pagination[pageSize]=10&populate=image`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data = await response.json();
  return data;
}

export function useCategories() {
  const {
    data: categories,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["category"],
    queryFn: getCategories,
  });

  return { categories, error, isLoading };
}
