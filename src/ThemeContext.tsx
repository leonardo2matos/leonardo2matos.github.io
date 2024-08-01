"use client";
import React, { createContext, useMemo, useState, useContext, ReactNode } from 'react';
import { ThemeProvider, Theme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LightTheme,  DarkTheme } from '@/theme';


type ThemeMode = "light" | "dark";

interface ThemeContextProps {
    mode: ThemeMode;
    toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextProps | undefined>(undefined);


export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }
    return context;
};

export const CustomThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [mode, setMode] = useState<ThemeMode>('light');
  
    const toggleTheme = () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };
  
    const theme = useMemo<Theme>(() => (mode === 'light' ? LightTheme : DarkTheme), [mode]);
  
    return (
      <ThemeContext.Provider value={{ mode, toggleTheme }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    );
  };