import { useEffect, useState } from "react";
import type { Product } from "../types/product";

export const useGetProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    async function getProducts() {
      try {
        setIsLoading(true);
        const res = await fetch("https://dummyjson.com/products?limit=9");
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getProducts();
  }, []);

  return { products, isLoading, error };
};
