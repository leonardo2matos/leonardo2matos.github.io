import React from "react";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import CardComponents from "@/components/CardComponents";
import CardComponentsStacks from "./CardComponentsStacks";
import CardComponentsEduc from "./CardComponentsEduc";

const BasicGrid: React.FC = () => {
  const isXs = useMediaQuery("(max-width:600px)");
  return (
    <Container
      maxWidth={isXs ? "sm" : "md"}
      sx={{
        mt: { xs: 20, sm: 25, md: 35, lg: 30 },
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <CardComponents />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "3em", md: "4em", lg: "6em" },
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, ipsum
                dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor
                sit amet, consectetur adipiscing elit Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, ipsum dolor sit amet,
                consectetur
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={6}>
            <CardComponentsStacks />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={6}>
            <CardComponentsEduc />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default BasicGrid;
