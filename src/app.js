import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
    primary: {
      light: '#F0F4C3',
      main: '#E6EE9C',
      dark: '#DCE775',
      contrastText: '#fff',
    },
    secondary: {
      light: '#B2EBF2',
      main: '#80DEEA',
      dark: '#80DEEA',
      contrastText: '#000',
    },
  },
});

const DarkTheme = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <AppRouter />
    </MuiThemeProvider>
  );
}

ReactDOM.render(<DarkTheme />, document.getElementById('app'));