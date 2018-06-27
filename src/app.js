import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import 'App.css';

const theme = createMuiTheme({
  typography: {
    fontSize: 16
  },
  button: {
    fontSize: 30
  },
  palette: {
    type: "dark",
    primary: {
      light: "#0097A7",
      main: "#00838F",
      dark: "#006064",
      contrastText: "#fff"
    },
    secondary: {
      light: "#80DEEA",
      main: "#4DD0E1",
      dark: "#26C6DA",
      contrastText: "#000"
    }
  }
});

const DarkTheme = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <AppRouter />
    </MuiThemeProvider>
  );
}

ReactDOM.render(<DarkTheme />, document.getElementById('app'));