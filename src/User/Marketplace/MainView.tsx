import { Box, Grid, Typography } from "@mui/material";
import Cards from "./Cards/Cards";
import NavBar from "./NavBar/NavBar";
import Carrousel from "./Carrousel/Carrousel";

const MainView = () => {
  return (
    <Box>
      <NavBar />
      <Grid container>
        <Grid item xs={12} sx={{ mb: 6 }}>
          <Carrousel />
        </Grid>
        <Grid item xs={12} sx={{ mb: 10 }}>
          <Cards />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", p: 4 }}>
            <Typography sx={{ margin: "auto" }}>
              Copyright Santiago Cañas Zapata - 2024. All rights Reserved.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainView;
