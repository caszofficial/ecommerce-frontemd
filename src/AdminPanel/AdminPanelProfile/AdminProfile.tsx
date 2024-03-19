import {
  Avatar,
  Box,
  Grid,
  Paper,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useGetUserInfo } from "../../Hooks/useGetUserInfo";
import { getCurrentUser } from "../../User/Auth/AuthScripts";

const AdminProfile = () => {
  const { id } = getCurrentUser();
  const { userInfo } = useGetUserInfo(id);
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const md = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box sx={{ p: 2 }}>
      <Paper
        sx={{ p: 4, maxWidth: sm ? "100%" : "70vw", margin: "auto" }}
        elevation={24}
      >
        {sm && (
          <>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Avatar
                  sx={{ width: "100px", height: "100px", fontSize: "50px" }}
                >
                  {userInfo.name[0]?.toUpperCase() +
                    userInfo.name[1]?.toUpperCase()}
                </Avatar>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TextField
                  fullWidth
                  label="Name"
                  sx={{ m: 1 }}
                  size="small"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={userInfo.name}
                />
                <TextField
                  fullWidth
                  label="Email"
                  sx={{ m: 1 }}
                  size="small"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={userInfo.email}
                />
                <TextField
                  fullWidth
                  label="Role"
                  sx={{ m: 1 }}
                  size="small"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={userInfo.role}
                />
                <TextField
                  fullWidth
                  label="User ID"
                  value={userInfo.name}
                  size="small"
                  sx={{ m: 1 }}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
            </Grid>
          </>
        )}
        {md && (
          <>
            <Grid container spacing={2}>
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Avatar
                  sx={{ width: "100px", height: "100px", fontSize: "50px" }}
                >
                  {userInfo.name[0]?.toUpperCase() +
                    userInfo.name[1]?.toUpperCase()}
                </Avatar>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  label="Name"
                  sx={{ m: 1 }}
                  size="small"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={userInfo.name}
                />
                <TextField
                  fullWidth
                  label="Email"
                  sx={{ m: 1 }}
                  size="small"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={userInfo.email}
                />
                <TextField
                  fullWidth
                  label="Role"
                  sx={{ m: 1 }}
                  size="small"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={userInfo.role}
                />
                <TextField
                  fullWidth
                  label="User ID"
                  value={userInfo.name}
                  size="small"
                  sx={{ m: 1 }}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
            </Grid>
          </>
        )}
      </Paper>
    </Box>
  );
};

export default AdminProfile;
