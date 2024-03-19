import { useFormik } from "formik";
import axios from "axios";
import {
  Box,
  Button,
  FormHelperText,
  Paper,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SnackbarSuccessCreate } from "../Snackbar/SnackbarSuccessCreate";
import { buttonStyle } from "../../Styling";

const AdminPanelCreateProduct = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const smToXl = useMediaQuery(theme.breakpoints.up("sm"));
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);

  const initialValues = {
    name: "",
    price: "",
    quantity: "",
    image: "",
  };

  const form = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        axios.post(`${import.meta.env.VITE_API_URL}/api/productos`, {
          name: values.name,
          price: values.price,
          quantity: values.quantity,
          image: values.image,
        });
        setOpen(true);
        setTimeout(() => {
          navigate("/admin");
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    },
    enableReinitialize: true,
  });

  return (
    <>
      {sm && (
        <Box sx={{ display: "flex" }}>
          <Paper sx={{ m: "auto 40px", p: 4 }}>
            <Box component="form" onSubmit={form.handleSubmit}>
              <TextField
                placeholder="Product Name"
                label="Product Name"
                variant="outlined"
                value={form.values.name}
                name="name"
                onChange={form.handleChange}
                fullWidth
                sx={{ mb: 2 }}
              />

              <TextField
                placeholder="Price"
                label="Price"
                variant="outlined"
                value={form.values.price}
                name="price"
                onChange={form.handleChange}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                placeholder="Stock"
                label="Stock"
                variant="outlined"
                value={form.values.quantity}
                name="quantity"
                onChange={form.handleChange}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                placeholder="Image URL"
                label="Image"
                variant="outlined"
                value={form.values.image}
                name="image"
                onChange={form.handleChange}
                fullWidth
              />
              <FormHelperText sx={{ mb: 2 }}>Your image url</FormHelperText>
              <Button
                type="submit"
                variant="contained"
                sx={{ ...buttonStyle, m: "10px 0" }}
                disabled={form.isSubmitting}
                fullWidth
                size="small"
              >
                create product
              </Button>
              <Box>
                <SnackbarSuccessCreate open={open} />
              </Box>
            </Box>
          </Paper>
        </Box>
      )}
      {smToXl && (
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Paper sx={{ m: "auto", p: 4, width: "90%" }}>
            <Box component="form" onSubmit={form.handleSubmit}>
              <TextField
                variant="outlined"
                placeholder="Product Name"
                label="Product Name"
                value={form.values.name}
                name="name"
                onChange={form.handleChange}
                fullWidth
                size="small"
                sx={{ m: "10px 0" }}
              />
              <TextField
                variant="outlined"
                placeholder="Price"
                label="Price"
                value={form.values.price}
                name="price"
                onChange={form.handleChange}
                fullWidth
                size="small"
                sx={{ m: "10px 0" }}
              />
              <TextField
                variant="outlined"
                placeholder="Stock"
                label="Stock"
                value={form.values.quantity}
                name="quantity"
                onChange={form.handleChange}
                fullWidth
                size="small"
                sx={{ m: "10px 0" }}
              />
              <TextField
                variant="outlined"
                placeholder="Image URL"
                label="Image"
                name="image"
                onChange={form.handleChange}
                value={form.values.image}
                fullWidth
                size="small"
                sx={{ m: "10px 0" }}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ ...buttonStyle, m: "10px 0" }}
              >
                create
              </Button>
              <Box>
                <SnackbarSuccessCreate open={open} />
              </Box>
            </Box>
          </Paper>
        </Box>
      )}
    </>
  );
};

export default AdminPanelCreateProduct;
