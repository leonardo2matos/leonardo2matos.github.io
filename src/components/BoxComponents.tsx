import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import CardComponents from "@/components/CardComponents";
import CardComponentsStacks from "./CardComponentsStacks";

const BasicGrid: React.FC = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: { xs: 10, sm: 5, md: 5, lg: 10, xl: 10 }, // Adiciona margem superior para evitar sobreposição com a navbar
        minHeight: "95vh",
        alignItems: "center",
        alignContent: "stretch",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <CardComponents />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography
              sx={{
                fontWeight: 700,
                textAlign: "left",
                fontSize: {
                  xs: "2.0em",
                  sm: "3.5em",
                  md: "3.0em",
                  lg: "4.0em",
                },
                letterSpacing: "-0.05em", // Espaçamento entre as letras
                background:
                  "linear-gradient(135deg, rgba(0,0,255,1), rgba(255,0,0,1))",
                WebkitBackgroundClip: "text", // Adiciona o degradê ao texto
                WebkitTextFillColor: "transparent", // Faz o texto ser preenchido pelo degradê
                "&:hover": {
                  filter: "blur(0)", // Remove o desfoque ao passar o mouse
                  transition: "filter 0.5s",
                },
              }}
              variant="body1"
              component="div"
            >
              Hi, everyone!
            </Typography>
            <Typography
              sx={{
                textAlign: "justify",
                fontSize: {
                  xs: "1.0em",
                  sm: "1.5em",
                  md: "1.5em",
                  lg: "2em",
                },
              }}
              variant="body2" component={"div"} >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={6}></Grid>
            <CardComponentsStacks
            />
        </Grid>
      </Box>
    </Container>
  );
};

export default BasicGrid;
