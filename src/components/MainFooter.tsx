import * as React from 'react';
import { Box, Typography, Link } from '@mui/material';
import SocialLinks from './SocialLinks';

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
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        fontSize: { xs: '0.8em', sm: '0.8em', md: '0.8em' },
      }}
    
    >

      <SocialLinks />
    </Box>
      <Typography variant="body1" color="inherit">
        {'Copyright © '}
        <Link color="inherit"  href="https://yourwebsite.com/">
         Leonardo Matos
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
}
