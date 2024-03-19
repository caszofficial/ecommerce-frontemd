import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { logout } from "./AuthScripts";
import { buttonStyle } from "../../Styling";

const LogOutButton = () => {
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      logout();
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      window.location.reload();
    }
  };

  return (
    <Box>
      <Button variant="contained" onClick={() => logOut()} sx={buttonStyle}>
        Logout
      </Button>
    </Box>
  );
};

export default LogOutButton;
