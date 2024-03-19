import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { appColor } from "../../Styling";

const LogInButton = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Button
        variant="contained"
        onClick={() => navigate("/login")}
        sx={{ backgroundColor: appColor }}
      >
        Login
      </Button>
    </Box>
  );
};

export default LogInButton;
