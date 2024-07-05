'use client';
import { Roboto,Oswald } from 'next/font/google';
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
        //fontWeight:'bold',
        fontSize:45,
        color:'white'
    }
  },
});

export default theme; 