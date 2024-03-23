import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { appColor } from "../../Styling";

const LogInButton = () => {
  const navigate = useNavigate();

  return (
    <>
      <Button
        variant="contained"
        onClick={() => navigate("/login")}
        sx={{
          backgroundColor: "#5A8077",
          color: "#fff",
          transition: "all 0.3s ease",
          "&:hover": { backgroundColor: appColor, color: "#000" },
          m: 1,
        }}
      >
        Login
      </Button>
    </>
  );
};

export default LogInButton;
