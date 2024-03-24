import { Box } from "@mui/material";

import { Product } from "../../../Interfaces";
import { useShoppingCart } from "../../Context/ShoppingCartContext";

const CartItem = ({ id, name, price, image }: Product) => {
  const { getItemQ } = useShoppingCart();

  const quantity = getItemQ(id);

  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        sx={{ width: "150px", height: "150px", objectFit: "contain" }}
        src={image}
      />
      <Box>{name}</Box>
      <Box>${price}</Box>
      <Box>{quantity}</Box>
    </Box>
  );
};

export default CartItem;
