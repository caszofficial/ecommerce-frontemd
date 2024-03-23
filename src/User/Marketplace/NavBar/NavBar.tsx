import { Link, useNavigate } from "react-router-dom";
import LogInButton from "../../Auth/LogInButton";
import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { appColor } from "../../../Styling";
import { getCurrentUser } from "../../Auth/AuthScripts";
import LogOutButton from "../../Auth/LogOutButton";
import { IconShoppingCart } from "@tabler/icons-react";

const NavBar = () => {
  const user = getCurrentUser();
  const navigate = useNavigate();

  return (
    <Box sx={{ mb: "0px" }}>
      <CssBaseline />
      <AppBar
        sx={{
          backgroundColor: appColor,
          height: "60px",
          display: "grid",
          alignContent: "center",
          position: "relative",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">Sell Your Stuff</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "fit-content",
            }}
          >
            <IconButton sx={{ m: 1 }}>
              <Link
                to="/profile"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Profile
              </Link>
            </IconButton>
            <IconButton sx={{ m: 1 }}>
              <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                Home
              </Link>
            </IconButton>
            <IconButton sx={{ m: 1 }} onClick={() => navigate("/cart")}>
              <IconShoppingCart style={{ color: "#fff" }} />
            </IconButton>
            {user === null ? <LogInButton /> : <LogOutButton />}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
