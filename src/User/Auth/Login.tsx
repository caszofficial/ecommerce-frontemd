import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { login } from "./AuthScripts";
import { appColor } from "../../Styling";

const Login = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const smToXl = useMediaQuery(theme.breakpoints.up("sm"));

  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const data = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/users/login`,
          values
        );
        if (data.data.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
        login(data.data);
      } catch (error) {
        console.log(error);
      }
    },
    enableReinitialize: true,
  });

  return (
    <Box component="form" onSubmit={form.handleSubmit}>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundColor: appColor,
          display: "flex",
        }}
      >
        {sm && (
          <Paper
            sx={{
              m: "auto 40px",
              p: 4,
              width: "fit-content",
            }}
          >
            <Typography
              variant="h6"
              sx={{ textAlign: "center", width: "100%" }}
            >
              LOGIN
            </Typography>
            <TextField
              name="email"
              value={form.values.email}
              placeholder="Email"
              onChange={form.handleChange}
              sx={{ mb: 2, minWidth: "200px" }}
              fullWidth
            />
            <TextField
              name="password"
              type="password"
              value={form.values.password}
              placeholder="Password"
              onChange={form.handleChange}
              sx={{ mb: 2, minWidth: "200px" }}
              fullWidth
            />
            <Box>
              <Button
                variant="contained"
                size="small"
                type="submit"
                fullWidth
                sx={{ backgroundColor: appColor }}
              >
                login
              </Button>
              <Button
                variant="text"
                size="small"
                fullWidth
                sx={{ color: appColor }}
              >
                Create account
              </Button>
            </Box>
          </Paper>
        )}
        {smToXl && (
          <Paper
            sx={{
              m: "auto",
              p: 4,
              width: "fit-content",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h6"
                sx={{ textAlign: "center", width: "100%" }}
              >
                LOGIN
              </Typography>
              <TextField
                name="email"
                value={form.values.email}
                placeholder="Email"
                onChange={form.handleChange}
                sx={{ mb: 2, width: "500px" }}
              />
              <TextField
                name="password"
                type="password"
                value={form.values.password}
                placeholder="Password"
                onChange={form.handleChange}
                sx={{ mb: 2, width: "500px" }}
                fullWidth
              />
              <Box>
                <Button
                  variant="contained"
                  size="small"
                  type="submit"
                  fullWidth
                  sx={{ backgroundColor: "#78ab9e" }}
                >
                  login
                </Button>
                <Button variant="text" size="small" fullWidth>
                  Create account
                </Button>
              </Box>
            </Box>
          </Paper>
        )}
      </Box>
    </Box>
  );
};

export default Login;
