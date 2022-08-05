/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import store from '@store/store';
import { Provider } from 'react-redux';
import ThemeProvider from './context/ThemeProvider';
import {
	THEME_DARK,
	THEME_LIGHT,
	THEME_NEITRAL,
} from './context/ThemeProvider';

import App from '@containers/App/App.jsx';
import '@styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
);
