/**
 * External Imports
 */
import React from 'react';
import { Grid } from '@material-ui/core';

/**
 * Internal Imports
 */
import { LayoutMain } from '../layouts';

export class HomePage extends React.Component {
  public render() {
    return (
      <LayoutMain>
        <Grid item={true} xs={12}></Grid>
      </LayoutMain>
    );
  }
}
