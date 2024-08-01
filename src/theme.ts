"use client";
import { Roboto, Oswald, IBM_Plex_Sans } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});
const oswald = Oswald({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});
const ibmPlexSans = IBM_Plex_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

// light theme definitions
const LightTheme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      dark: "deepPurple[700]",
      light: "deepPurple[500]",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "lightBlue[500]",
      dark: "lightBlue[400]",
      light: "lightBlue[300]",
      contrastText: "#ffffff",
    },

    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
  },

  typography: {
    fontFamily: oswald.style.fontFamily,
    h1: {
      fontSize: 45,
     
    },
    body1: {
      fontFamily: roboto.style.fontFamily,
      
    },
    body2: {
      fontFamily: ibmPlexSans.style.fontFamily,
    },
  },
});

// dark theme definitions
 const DarkTheme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
      dark: "deepPurple[700]",
      light: "deepPurple[500]",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "indigo[500]",
      dark: "indigo[800]",
      light: "indigo[300]",
      contrastText: "#ffffff",
    },
    background: {
      default: '#000000',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: oswald.style.fontFamily,
    h1: {
      fontSize: 45,
      
    },
    body1: {
      fontFamily: roboto.style.fontFamily,
    },
    body2: {
      fontFamily: ibmPlexSans.style.fontFamily,
    },
  },
});

export {LightTheme, DarkTheme};
