import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import CardComponents from "@/components/CardComponents";

const BasicGrid: React.FC = () => {
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
        <Grid
          container
          spacing={0}
          alignItems="center"
          justifyContent="center"
          direction={{ xs: 'column', md: 'row' }} // Alinha os itens verticalmente em telas menores e lado a lado em telas maiores
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            sx={{
              padding: { xs: '2px', sm: '5px', md: '5px', lg: '10px' },
              margin: { xs: '5px', sm: '5px', md: '5px', lg: '10px' },
              display: 'flex',
              justifyContent: 'center', // Centraliza horizontalmente o conteúdo do item
              alignItems: 'center', // Centraliza verticalmente o conteúdo do item
            }}
          >
            <CardComponents />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
              padding: { xs: '16px', sm: '24px', md: '32px', lg: '40px' },
              margin: { xs: '8px', sm: '16px', md: '24px', lg: '32px' },
              display: 'flex',
              justifyContent: 'center', // Centraliza horizontalmente o conteúdo do item
              alignItems: 'center', // Centraliza verticalmente o conteúdo do item
            }}
          >
            <Typography
              sx={{
                textAlign: 'center', // Ajustado para centralizar corretamente
                fontWeight: 700,
                fontSize: {
                  xs: "2em",
                  sm: "2.5em",
                  md: "3em",
                  lg: "3.5em"
                },
                letterSpacing: '-0.05em', // Espaçamento entre as letras
                background: 'linear-gradient(135deg, rgba(0,0,255,1), rgba(255,0,0,1))',
                WebkitBackgroundClip: 'text', // Adiciona o degradê ao texto
                WebkitTextFillColor: 'transparent', // Faz o texto ser preenchido pelo degradê
                '&:hover': {
                  filter: 'blur(0)', // Remove o desfoque ao passar o mouse
                  transition: 'filter 0.5s',
                }
              }}
              variant="body1"
              component="div"
            >
              Hi, everyone!
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{
              padding: { xs: '16px', sm: '24px', md: '32px', lg: '40px' },
              margin: { xs: '8px', sm: '16px', md: '24px', lg: '32px' },
              display: 'flex',
              justifyContent: 'center', // Centraliza horizontalmente o conteúdo do item
              alignItems: 'center', // Centraliza verticalmente o conteúdo do item
            }}
          >
            {/* Adicione mais conteúdo aqui se necessário */}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default BasicGrid;
