import React from 'react';
import { LayoutMain } from '../layouts';
import { Grid } from '@material-ui/core';

export class HomePage extends React.Component {
  public render() {
    return (
      <LayoutMain>
        <Grid item={true} xs={12}>
          Home Page
        </Grid>
      </LayoutMain>
    );
  }
}
