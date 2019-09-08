import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './pages';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme';
import {Provider} from 'react-redux';
import store from './redux/store';

const themeProvider = (
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <App />
        </Provider>
    </ThemeProvider>
)

ReactDOM.render(themeProvider, document.getElementById('root'));
