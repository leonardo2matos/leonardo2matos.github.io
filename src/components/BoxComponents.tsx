import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import CardComponents from "@/components/CardComponents";
import CardComponentsStacks from "./CardComponentsStacks";
import CardComponentsEduc from "./CardComponentsEduc";


const BasicGrid: React.FC = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: { xs: 15, sm: 25, md: 30, lg: 30, xl: 35 }, // Adiciona margem superior para evitar sobreposição com a navbar
        minHeight: "95vh",
        alignItems: "center",
        alignContent: "stretch",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            sx={{ }}
          >
            <CardComponents />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box sx={{ textAlign: "left" }}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "3.5em", md: "4.5em", lg: "4.0em" },
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
                  fontSize: { xs: "1.0em", md: "1.5em", lg: "2em" },
                  mt: 2,
                }}
                variant="body2"
                component="div"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Box>
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{
              width: "100%",
              display: "flex",
              alignContent: "center",
              justifyContent: "space-around",
              alignItems: "center",
              mb: 15,
            }}
          >
            <Grid
              item
              xs={12}
              sm={4}
              md={6}
              lg={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <CardComponentsStacks />
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              md={6}
              lg={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <CardComponentsEduc />
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              md={6}
              lg={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <CardComponentsStacks />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default BasicGrid;


