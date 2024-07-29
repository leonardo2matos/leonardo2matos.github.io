import React from "react";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import CardComponents from "@/components/CardComponents";
import CustomPlanet from "./CustomPlanet";
import { educations, experiences, stacks } from "./data";

const BasicGrid: React.FC = () => {
  const isXs = useMediaQuery("(max-width:600px)");

  return (
    <Container
      maxWidth={isXs ? "sm" : "md"}
      sx={{
        mt: { xs: 10, sm: 15, md: 20, lg: 25 },
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <CardComponents />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="h2"
              sx={{
                textAlign: "left",
                fontWeight: 700,
                fontSize: { xs: "2.5em", sm: "3.5em", md: "4em", lg: "6em" },
                letterSpacing: "-0.05em",
                background:
                  "linear-gradient(135deg, rgba(0,0,255,1), rgba(255,0,0,1))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Hi, everyone!
            </Typography>
            <Typography
              variant="body2"
              sx={{
                textAlign: "justify",
                fontSize: { xs: "1em", md: "1.2em", lg: "1.5em" },
                mt: 2,
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
        sx={{ mt: { xs: 4, md: 0 } }}
      >
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <CustomPlanet label="STACKS" items={stacks} />
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
