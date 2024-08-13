// src/components/MainAppBar.tsx
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography, Box, Container } from "@mui/material";
import Divider from "@mui/material/Divider";
import ToggleButton from "./ToggleButton";
import SocialLinks from "./SocialLinks";
import { useThemeContext } from "@/ThemeContext";

const MainAppBar: React.FC = () => {
  const { mode } = useThemeContext();

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            mt: 2,
            mr: 4,
            justifyContent: { xs: "center", sm: "flex-end", md: "flex-end"},
            alignItems: "center",
          }}
        >
          <ToggleButton 
          />
          <Typography variant="body1" sx={{ ml: 1,color: "primary.contrastText",
              fontSize: { xs: "1em", sm: "1.2em", md: "1.5em" }}}>
            {mode === "dark" ? "Light Mode" : "Dark Mode"}
          </Typography>
        </Box>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            pb: { xs: 1, sm: 1, md: 1 },
            
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                height: { xs: "80px", sm: "150px", md: "150px", lg: "150px" },
                marginRight: 2,
                backgroundColor: "primary.contrastText",
              }}
            />
            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="h4"
                noWrap
                component="div"
                color="primary.contrastText"
                sx={{ fontSize: { xs: "1.7em", sm: "4em" } }}
              >
                Leonardo
                <br />
                Matos
              </Typography>
              <Typography
                variant="h6"
                component="h2"
                noWrap
                color="primary.contrastText"
                sx={{ fontSize: { xs: "1em", sm: "1.25em" } }}
              >
                Front-end Developer
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: { xs: 2, sm: 15 , md: 15} }}>
            <SocialLinks />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MainAppBar;
