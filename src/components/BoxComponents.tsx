import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import CardComponents from "@/components/CardComponents";
import { Bolt } from "@mui/icons-material";
//import CardComponentsStacks from '@/components/CardComponentsStacks';

export default function BasicGrid() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: { xs: 20, sm: 15, md: 25, lg: 15, xl: 5 }, // Adiciona margem superior para evitar sobreposição com a navbar
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <CardComponents />
          </Grid>
          <Grid item xs={12} sm={6} md={12} lg={5} >
            <Typography 
            sx={{
               textAlign:'justify-center',
               fontWeight: 700,
               fontSize:
              { 
               xs: "3em",
               sm: "3em",
               md:"4em",
               lg:"4em" 
               } 
            }}
               variant="body1" component="div" >
              Hi,everyone!
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            {/* Adicione mais conteúdo aqui se necessário */}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
