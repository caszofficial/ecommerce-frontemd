import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { logout } from "./AuthScripts";
import { appColor } from "../../Styling";

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
    <>
      <Button
        variant="contained"
        onClick={() => logOut()}
        sx={{
          backgroundColor: "#5A8077",
          color: "#fff",
          transition: "all 0.3s ease",
          "&:hover": { backgroundColor: appColor, color: "#000" },
          m: 1,
        }}
      >
        Logout
      </Button>
    </>
  );
};

export default LogOutButton;
