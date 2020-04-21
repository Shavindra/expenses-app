/**
 * External Imports
 */
import React from 'react';
import { Grid } from '@material-ui/core';

/**
 * Internal Imports
 */
import { ExpensesListComponent } from '../components';
import { LayoutMain } from '../layouts';

export class ExpensesPage extends React.Component {
  public render() {
    return (
      <LayoutMain>
        <Grid item={true} xs={12}>
          <ExpensesListComponent />
        </Grid>
      </LayoutMain>
    );
  }
}
