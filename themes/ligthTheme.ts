import { createTheme } from "@mui/material/styles";
import { deepPurple, lightBlue } from "@mui/material/colors";


export const LightTheme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
            dark: 'deepPurple[700]',
            light: 'deepPurple[500]', 
            contrastText: '#ffffff',

          },
          secondary: {
            main: 'lightBlue[500]', 
            dark: 'lightBlue[400]',
            light: 'lightBlue[300]',
            contrastText: '#ffffff',
          },

          background: {
            default: '#ffffff',
            paper: '#ECECEC',
          }

            


    },
})