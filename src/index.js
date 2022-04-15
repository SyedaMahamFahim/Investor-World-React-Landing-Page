import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from './Theme'
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
serviceWorker.register();


