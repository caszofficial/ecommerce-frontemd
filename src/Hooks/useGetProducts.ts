import { useEffect, useState } from "react";
import { Product } from "../Interfaces";

export const useGetProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProductsData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/productos`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error, "fallo");
    }
  };
  useEffect(() => {
    getProductsData();
  }, []);

  return { products };
};
