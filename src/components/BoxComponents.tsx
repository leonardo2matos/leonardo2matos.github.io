import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import CardComponents from '@/components/CardComponents';
import CardComponentsStacks from '@/components/CardComponentsStacks';

export default function BasicGrid() {
  return (
    <Container 
      maxWidth='lg' 
      sx={{  
        mt: { xs: 20, sm: 15, md:25, lg:15, xl:5 },  // Adiciona margem superior para evitar sobreposição com a navbar
        minHeight: '100vh', 
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '100%' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={5} lg={5} > 
            <CardComponents />
          </Grid>
          <Grid item xs={12} sm={6} md={7} lg={5}  sx={{mt:'3em'}} > 
            <CardComponentsStacks />
          </Grid>
          <Grid item xs={12} sm={12} md={4} > 
            {/* Adicione mais conteúdo aqui se necessário */}
          </Grid>
        </Grid>
      </Box>   
    </Container>
  );
}
