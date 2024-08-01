import { createTheme } from "@mui/material/styles";
import { deepPurple, lightBlue, indigo } from "@mui/material/colors";


export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
            dark: 'deepPurple[700]',
            light: 'deepPurple[500]', 
            contrastText: '#ffffff',

          },
          secondary: {
            main: 'indigo[500]', 
            dark: 'indigo[800]',
            light: 'indigo[300]',
            contrastText: '#ffffff',
          },

          background: {
            default: '#000000',
            paper: '#ffffff',
          }

            


    },
})