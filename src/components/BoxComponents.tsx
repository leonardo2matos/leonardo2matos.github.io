import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import CardComponents from '@/components/CardComponents';
import CardComponentsStacks from '@/components/CardComponentsStacks';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function VariableWidthGrid() {
  return (
    <Container 
      maxWidth='md' 
      sx={{  
        mt: { xs: 20, sm: 20, md: 20 },  // Adiciona margem superior para evitar sobreposição com a navbar
        minHeight: '90vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '100%', mt:25 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <CardComponents />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardComponentsStacks />
          </Grid>
          
          
        </Grid>
      </Box>
    </Container>
  );
}
