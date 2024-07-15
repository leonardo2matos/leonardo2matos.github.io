import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import CardComponents from '@/components/CardComponents'
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
    <Container maxWidth='lg'>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} sm={6} md="auto"> 
          <CardComponents/>           
          </Grid>
          <Grid item xs={12} sm={6} md="auto">
          <Item>xs=12 sm=12 md=4</Item>
          </Grid>
          <Grid item xs={12} sm={2} md={4}>
          
          
          <CardComponentsStacks/>
          
          </Grid> 
        </Grid>
      </Box>
    </Container>
  );
}
