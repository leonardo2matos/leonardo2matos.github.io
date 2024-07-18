'use client';
import { Roboto,Oswald, IBM_Plex_Sans } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});
const oswald = Oswald({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});
const ibmPlexSans = IBM_Plex_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});
const theme = createTheme({
  palette:{
    primary: {
        main: '#000000', // Cor principal customizada
      },
      secondary: {
        main: '#FF5722', // Cor secundária customizada
      },


  },
  typography: {
    fontFamily: oswald.style.fontFamily,
    h1: {
      fontSize: 45,
      color: 'white',
    },
    body1: {
      fontFamily: roboto.style.fontFamily, 
    
    },
    body2: {
      fontFamily: ibmPlexSans.style.fontFamily, 
    
    },

  },
});

export default theme;