import React from 'react';
import { Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { UIPaper, theme } from './ui';
import { LayoutMain } from './layouts';
import { appStore } from './store';

import './app.scss';

export function App() {
  return (
    <Provider store={appStore}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <div className="page">
            <BrowserRouter>
              <LayoutMain>
                {/* Chart */}
                <Grid item={true} xs={12} md={8} lg={9}>
                  <UIPaper>CHART</UIPaper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item={true} xs={12} md={4} lg={3}>
                  <UIPaper>DEPOSITS</UIPaper>
                </Grid>
                {/* Recent Orders */}
                <Grid item={true} xs={12}>
                  <UIPaper>ORDERS</UIPaper>
                </Grid>
              </LayoutMain>
            </BrowserRouter>
          </div>
        </div>
      </ThemeProvider>
    </Provider>
  );
}
