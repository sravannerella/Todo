import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './pages';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme';

const themeProvider = (
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
)

ReactDOM.render(themeProvider, document.getElementById('root'));
