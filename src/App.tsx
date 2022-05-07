import React, { FC, ReactElement, useState } from 'react';
import MainContainer from './components/MainContainer';
import { Container, CssBaseline, Switch, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from './theme';
import { useStyles } from './styles/styles';

const App: FC = (): ReactElement => {
  const [darkMode, setDarkMode] = useState(false);

  const classes = useStyles();

  return (
    <ThemeProvider theme={darkMode ? lightTheme : darkTheme}>
      <Container className={classes.general_styles}>
        <CssBaseline />
        <Switch className={classes.switch} checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        <MainContainer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
