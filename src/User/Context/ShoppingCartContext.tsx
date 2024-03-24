import React, { ReactNode, createContext, useContext, useState } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  getItemQ: (id: number) => number;
  increaseItemQ: (id: number) => void;
  decreaseItemQ: (id: number) => void;
  removeItem: (id: number) => void;
};

type CartItem = {
  id: number;
  quantity: number;
};

const CartContext = createContext({} as ShoppingCartContext);

export const useShoppingCart = () => {
  return useContext(CartContext);
};

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartItems, setCarItems] = useState<CartItem[]>([]);

  const getItemQ = (id: number) => {
    return cartItems.find((item) => item.id === 1)?.quantity || 0;
  };

  const increaseItemQ = (id: number) => {
    setCarItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseItemQ = (id: number) => {
    setCarItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItem = (id: number) => {
    setCarItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };

  return (
    <CartContext.Provider
      value={{ getItemQ, increaseItemQ, decreaseItemQ, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
