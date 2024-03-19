import { useNavigate, useParams } from "react-router-dom";
import useGetProductById from "../../Hooks/useGetProductById";
import {
  Box,
  Button,
  FormHelperText,
  Grid,
  Paper,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import { SnackbarSuccessEdit } from "../Snackbar/SnackbarSuccessEdit";
import { useState } from "react";
import { SnackbarSuccessDelete } from "../Snackbar/SnackbarSuccessDelete";
import { appColor, buttonStyle } from "../../Styling";

const AdminPanelEditProduct = () => {
  const { id } = useParams();
  const { product } = useGetProductById(id || "");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const md = useMediaQuery(theme.breakpoints.up("sm"));

  const initialValues = {
    id: id,
    name: product?.name,
    price: product?.price,
    quantity: product?.quantity,
    image: product?.image,
  };

  const form = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        axios.put(`${import.meta.env.VITE_API_URL}/api/productos/${id}`, {
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

  const deleteProduct = () => {
    try {
      axios.delete(`${import.meta.env.VITE_API_URL}/api/productos/${id}`);
      setOpenDelete(true);
      setTimeout(() => {
        navigate("/admin");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {sm && (
        <Box sx={{ display: "flex", p: 2 }}>
          <Paper sx={{ m: "auto", p: 4, width: "90%" }}>
            <Box component="form" onSubmit={form.handleSubmit}>
              <img
                src={product?.image}
                alt="Not Found"
                style={{ width: "100%", height: "auto" }}
              />

              <TextField
                variant="outlined"
                value={form.values.name}
                name="name"
                onChange={form.handleChange}
                fullWidth
                size="small"
              />
              <FormHelperText sx={{ mb: 2 }}>Product Name</FormHelperText>
              <TextField
                variant="outlined"
                value={form.values.price}
                name="price"
                onChange={form.handleChange}
                fullWidth
                size="small"
              />
              <FormHelperText sx={{ mb: 2 }}>Price</FormHelperText>
              <TextField
                variant="outlined"
                value={form.values.quantity}
                name="quantity"
                onChange={form.handleChange}
                fullWidth
                size="small"
              />
              <FormHelperText sx={{ mb: 2 }}>Stock</FormHelperText>
              <TextField
                variant="outlined"
                name="image"
                onChange={form.handleChange}
                value={form.values.image}
                placeholder="Image URL"
                fullWidth
                size="small"
              />
              <FormHelperText sx={{ mb: 2 }}>Your image url</FormHelperText>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ ...buttonStyle, m: "10px 0px" }}
              >
                Submit
              </Button>
              <Button
                variant="text"
                onClick={deleteProduct}
                fullWidth
                sx={{ color: appColor }}
              >
                Delete Product
              </Button>
              <Box>
                <SnackbarSuccessEdit open={open} />
                <SnackbarSuccessDelete open={openDelete} />
              </Box>
            </Box>
          </Paper>
        </Box>
      )}
      {md && (
        <Box
          component="form"
          onSubmit={form.handleSubmit}
          sx={{
            display: "flex",
          }}
        >
          <Paper sx={{ m: "auto", p: 4, width: "90%" }}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={product?.image}
                  alt="Not Found"
                  style={{ width: "250px", height: "450px" }}
                />
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box sx={{ width: "100%" }}>
                  <TextField
                    variant="outlined"
                    value={form.values.name}
                    name="name"
                    onChange={form.handleChange}
                    fullWidth
                    size="small"
                  />
                  <FormHelperText sx={{ mb: 2 }}>Product Name</FormHelperText>
                  <TextField
                    variant="outlined"
                    value={form.values.price}
                    name="price"
                    onChange={form.handleChange}
                    fullWidth
                    size="small"
                  />
                  <FormHelperText sx={{ mb: 2 }}>Price</FormHelperText>
                  <TextField
                    variant="outlined"
                    value={form.values.quantity}
                    name="quantity"
                    onChange={form.handleChange}
                    fullWidth
                    size="small"
                  />
                  <FormHelperText sx={{ mb: 2 }}>Stock</FormHelperText>
                  <TextField
                    variant="outlined"
                    name="image"
                    onChange={form.handleChange}
                    value={form.values.image}
                    placeholder="Image URL"
                    fullWidth
                    size="small"
                  />
                  <FormHelperText sx={{ mb: 2 }}>Your image url</FormHelperText>
                </Box>
              </Grid>
            </Grid>
            <Box sx={{ display: "flex" }}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ ...buttonStyle, m: 1 }}
              >
                Submit
              </Button>
              <Button
                variant="text"
                onClick={deleteProduct}
                fullWidth
                sx={{ color: appColor, m: 1 }}
              >
                Delete Product
              </Button>
            </Box>
            <Box>
              <SnackbarSuccessEdit open={open} />
              <SnackbarSuccessDelete open={openDelete} />
            </Box>
          </Paper>
        </Box>
      )}
    </>
  );
};

export default AdminPanelEditProduct;
