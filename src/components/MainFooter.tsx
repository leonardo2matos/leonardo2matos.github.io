import * as React from 'react';
import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        p: 4,
        backgroundColor: 'grey',
        color: 'white',
        textAlign: 'center',
        flexFlow: 'row wrap',
      }}
    >
      <Typography variant="body1" color="inherit">
        {'Copyright © '}
        <Link color="inherit" href="https://yourwebsite.com/">
         Leonardo Matos
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
}
