import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { appStore } from './store';
import { ExpensesPage, HomePage } from './pages';
import { theme } from './ui';

import './app.scss';

export function App() {
  return (
    <Provider store={appStore}>
      <ThemeProvider theme={theme}>
        <div className='App'>
          <div className='page'>
            <BrowserRouter>
              <Switch>
                <Route path='/expenses'>
                  <ExpensesPage />
                </Route>
                <Route path='/'>
                  <HomePage />
                </Route>
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </ThemeProvider>
    </Provider>
  );
}
