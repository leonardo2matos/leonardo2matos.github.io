// /Users/leonardodosanjosmatos/projects/leonardomatos.github.io/src/components/ToggleButton.tsx
import React from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from '@/ThemeContext';
import { useTheme } from '@mui/material/styles';

const ToggleButton: React.FC = () => {
  const { mode, toggleTheme } = useThemeContext();
  const theme = useTheme();

  return (
    <IconButton
      onClick={toggleTheme}
      sx={{
        color: mode === 'dark' ? theme.palette.primary.contrastText: theme.palette.primary.contrastText,
         "&:hover": { color: "gray" },
      }}
    >
      {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ToggleButton;
