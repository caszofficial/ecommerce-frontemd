import { Alert, Box, Snackbar } from "@mui/material";
import { SnackBarProps } from "../../Interfaces";

export const SnackbarSuccessDelete = ({ open }: SnackBarProps) => {
  return (
    <Box>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
          Product Deleted!
        </Alert>
      </Snackbar>
    </Box>
  );
};
