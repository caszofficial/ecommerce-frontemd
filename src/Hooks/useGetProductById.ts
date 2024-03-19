import { useEffect, useState } from "react";

const useGetProductById = (id: string) => {
  const [product, setProduct] = useState({
    id: 0,
    name: "",
    price: 0,
    quantity: 0,
    image: "",
  });

  const getProductsData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/productos/${id}`);
      const data = await response.json();
      setProduct({
        id: data.id,
        name: data.name,
        price: data.price,
        quantity: data.quantity,
        image: data.image,
      });
    } catch (error) {
      console.log(error, "fallo");
    }
  };

  useEffect(() => {
    getProductsData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { product };
};

export default useGetProductById;
