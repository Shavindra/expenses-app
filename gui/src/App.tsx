import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { appStore } from './store';
import { ExpensesPage } from './pages';
import { theme } from './ui';

import './app.scss';

export function App() {
  return (
    <Provider store={appStore}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <div className="page">
            <BrowserRouter>
              <ExpensesPage />
            </BrowserRouter>
          </div>
        </div>
      </ThemeProvider>
    </Provider>
  );
}
