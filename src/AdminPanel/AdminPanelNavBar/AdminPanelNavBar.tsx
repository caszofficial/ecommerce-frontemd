import { Link, useNavigate } from "react-router-dom";
import LogOutButton from "../../User/Auth/LogOutButton";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import {
  IconClipboardList,
  IconMenu2,
  IconPlus,
  IconUserCircle,
} from "@tabler/icons-react";
import { appColor } from "../../Styling";

const AdminPanelNavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const md = useMediaQuery(theme.breakpoints.up("sm"));

  const NavDrawer = () => (
    <>
      <Drawer open={openDrawer} onClose={handleToggle}>
        <List>
          <Box
            sx={{
              height: "50px",
            }}
          />
          <Divider />
          <ListItem>
            <IconButton
              onClick={handleToggle}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconClipboardList
                style={{ marginRight: 2, color: "#000" }}
                stroke={1}
              />
              <Link
                to="/admin"
                style={{ textDecoration: "none", color: "#000" }}
              >
                Products
              </Link>
            </IconButton>
          </ListItem>
          <Divider />
          <ListItem>
            <IconButton
              onClick={handleToggle}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <IconPlus style={{ marginRight: 2, color: "#000" }} stroke={1} />
              <Link
                to="/admin/products/create"
                style={{ textDecoration: "none", color: "#000" }}
              >
                Create Product
              </Link>
            </IconButton>
          </ListItem>
          <Divider />
          <ListItem>
            <IconButton
              onClick={handleToggle}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <IconUserCircle
                style={{ marginRight: 2, color: "#000" }}
                stroke={1}
              />
              <Link
                to="/admin/profile"
                style={{ textDecoration: "none", color: "#000" }}
              >
                Profile
              </Link>
            </IconButton>
          </ListItem>
          <Divider />
          <ListItem>
            <LogOutButton />
          </ListItem>
        </List>
      </Drawer>
    </>
  );

  const handleToggle = () => {
    if (openDrawer) {
      setOpenDrawer(false);
    } else {
      setOpenDrawer(true);
    }
  };

  return (
    <Box sx={{ mb: "calc(60px + 30px)" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          height: "60px",
          display: "flex",
          justifyContent: "center",
          backgroundColor: appColor,
        }}
      >
        <Toolbar>
          {sm && (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100vw",
                }}
              >
                <IconButton onClick={handleToggle}>
                  <IconMenu2 strokeWidth={1} style={{ color: "#000" }} />
                </IconButton>
                <Typography variant="h6">Admin Panel</Typography>
              </Box>
              <NavDrawer />
            </>
          )}
          {md && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box>
                <Typography variant="h6">Admin Panel</Typography>
              </Box>
              <Box>
                <Button
                  onClick={() => navigate("/admin")}
                  sx={{
                    color: "#fff",
                    m: 1,
                    "&:hover": { fontWeight: "bold" },
                  }}
                  variant="text"
                >
                  Products
                </Button>
                <Button
                  onClick={() => navigate("/admin/products/create")}
                  sx={{
                    color: "#fff",
                    m: 1,
                    "&:hover": { fontWeight: "bold" },
                  }}
                  variant="text"
                >
                  Create Product
                </Button>
                <Button
                  onClick={() => navigate("/admin/profile")}
                  sx={{
                    color: "#fff",
                    m: 1,
                    "&:hover": { fontWeight: "bold" },
                  }}
                  variant="text"
                >
                  Profile
                </Button>
              </Box>
              <LogOutButton />
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AdminPanelNavBar;
