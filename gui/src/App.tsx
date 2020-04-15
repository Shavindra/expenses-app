import * as React from 'react';
import { Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import { UIPaper, theme } from './ui';
import { LayoutMain } from './layouts';

import './app.scss';
import { ReactElement } from 'react';

export function App(): ReactElement {
  return (
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
  );
}
