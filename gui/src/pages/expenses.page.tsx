import React from 'react';
import { LayoutMain } from '../layouts';
import { Grid } from '@material-ui/core';
import { ExpensesListComponent } from '../components';

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
