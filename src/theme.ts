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
    mode: "light",
    primary: {
      main: "#000000",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#FF5722",
      contrastText: "#000000",
    },

    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#000000",
    }
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
    mode:'dark',
    primary: {
      main: "#90caf9",
      
    },
    secondary: {
      main: "#f48fb1",
      
    },
    background: {
      default: '#000000',
      paper: '#ffffff',
    },
    
    text: {
      primary: "#ffffff",
    }
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
