import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#e7f6ff',
    },
    primary: {
      main: '#19283B',
      dark: '#292e35',
      light: '#7FB7FF',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#97C0FC',
      contrastText: '#ffffff',
    },
  },
});

export default theme;
