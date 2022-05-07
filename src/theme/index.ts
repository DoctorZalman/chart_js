import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#658C6F',
      light: '#78C679',
      dark: '#2F575D',
    },
    background: {
      default: '#24454a',
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255,255,255,0.7)',
      disabled: 'rgba(255,255,255,0.5)',
    },
    divider: 'rgba(225,225,225, 0.25)',
  },
});
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#24454a',
      light: '#C4CDC1',
      dark: '#99AEAD',
    },
    background: {
      default: '#6E9197',
    },
    text: {
      primary: 'rgba(0,0,0,0.875)',
      secondary: 'rgba(0,0,0,0.6)',
      disabled: 'rgba(0,0,0,0.38)',
    },
    divider: 'rgba(0,0,0,0.25)',
  },
});
