import React from "react";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import CustomPlanet from "./CustomPlanet";
import { educations, experiences, stacks } from "./data";
import CardImage from "./CardImage";

const BasicGrid: React.FC = () => {
  const isXs = useMediaQuery("(max-width:700px)");

  return (
    <Container
      maxWidth={isXs ? "sm" : "md"}
      sx={{
        mt: { xs: 25, sm: 25, md: 30, lg: 35 },
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <CardImage />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box>
            <Typography
              variant="body2"
              component="h2"
              sx={{
                textWrap:"nowrap",
                textAlign: "left",
                fontWeight: 700,
                fontSize: { xs: "2.7em", sm: "4em", md: "4.7em", lg: "4.8em" },
                letterSpacing: "-0.07em",
                background:
                  "linear-gradient(135deg, rgba(0,0,255,1), rgba(255,0,0,1))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginTop: { xs: 0, sm: -25, md: -20, lg: -5 },
              }}
            >
              Hi, everyone!
            </Typography>
            <Typography
              variant="body2"
              sx={{
                textAlign: "justify",
                fontSize: { xs: "1em", md: "1.2em", lg: "1.5em" },
                mt: 5,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: { xs: 6, md: 7 }, mb:{xs: 6, md: 0} }}
      >
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <CustomPlanet  label="STACKS" items={stacks} />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <CustomPlanet label="EDUCATION" items={educations} />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
        <CustomPlanet label="EXPERIENCE" items={experiences} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BasicGrid;
