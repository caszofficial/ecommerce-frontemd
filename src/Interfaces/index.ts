export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export type ProductWithoutQ = Omit<Product, "quantity">

export interface SnackBarProps {
  open: boolean;
}
