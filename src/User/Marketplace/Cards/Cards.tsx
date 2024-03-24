import "./Cards.css";
import { useGetProducts } from "../../../Hooks/useGetProducts";
import { Box, Button, Paper, Typography } from "@mui/material";
import { appColor } from "../../../Styling";
import { useShoppingCart } from "../../Context/ShoppingCartContext";

const Cards = () => {
  const { products } = useGetProducts();
  const { increaseItemQ } = useShoppingCart();

  return (
    <Paper
      elevation={12}
      sx={{
        p: 4,
        m: "20px 40px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: "#ebebeb",
      }}
    >
      {products.map((p) => (
        <Box
          sx={{
            height: "fit-content",
            p: 2,
            m: 1,
            "&:hover  #ProductName": { color: appColor },
            display: "grid",
            alignContent: "center",
            // border: "1px solid black",
            borderRadius: "5px",
            backgroundColor: "#fff",
          }}
          key={p.id}
        >
          <Box
            component="img"
            src={p.image}
            alt="Not Found"
            sx={{
              objectFit: "cover",
              verticalAlign: "middle",
              minWidth: "150px",
              minHeight: "230px",
              maxWidth: "150px",
              maxHeight: "230px",
            }}
          />

          <Box sx={{ height: "100px" }}>
            <Typography id="ProductName" sx={{ fontSize: "14px" }}>
              {p.name}
            </Typography>
            <Typography sx={{ fontSize: "30px" }}>$ {p.price}</Typography>
            <Typography sx={{ fontSize: "12px", color: "#AFAFAF" }}>
              Left in stock: {p.quantity}
            </Typography>
          </Box>
          <Box>
            <Button variant="contained" onClick={() => increaseItemQ(p.id)}>
              Add to cart
            </Button>
          </Box>
        </Box>
      ))}
    </Paper>
  );
};

export default Cards;
