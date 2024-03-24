import React from "react";
import NavBar from "../NavBar/NavBar";
import { useGetProducts } from "../../../Hooks/useGetProducts";
import CartItem from "./CartItem";

const Cart = () => {
  const { products } = useGetProducts();
  return (
    <div>
      <NavBar />
      {products.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
    </div>
  );
};

export default Cart;
