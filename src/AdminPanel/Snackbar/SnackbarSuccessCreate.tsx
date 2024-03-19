import { Alert, Box, Snackbar } from "@mui/material";
import { SnackBarProps } from "../../Interfaces";

export const SnackbarSuccessCreate = ({ open }: SnackBarProps) => {
  return (
    <Box>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
          Product Created Successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};
