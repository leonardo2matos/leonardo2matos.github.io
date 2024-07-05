import * as React from 'react';
import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        p:4,
        backgroundColor: 'grey', 
        color: 'white',
        textAlign: 'center',
        flexFlow: 0
      }}
    >
      <Typography variant="body2" color="inherit">
        {'Copyright © '}
        <Link color="inherit" href="https://yourwebsite.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
}
