import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './containers/Todo/Todo';
import store from './redux/store/store';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#e3f2fd',
			dark: '#2962ff',
			main: '#1a73e8',
			contrastText: '#fff'
		},
		secondary: {
			light: '#ffcdd2',
			dark: '#d50000',
			main: '#EA4335',
			contrastText: '#fff'
		}
	},
	typography: {
		useNextVariants: true,
		fontFamily: "\"Product Sans\""
	}
})

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<Provider store={store}>
			<Todo />
		</Provider>
	</MuiThemeProvider>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
