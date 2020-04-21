/**
 * External Imports
 */
import React from 'react';
import { Grid, Paper } from '@material-ui/core';

/**
 * Internal Imports
 */
import { useStyles } from './styles';
export function UIGridList(props: any) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {props.data.map((tile: any, i: number) => (
          <Grid item xs={6} sm={4} key={i}>
            <Paper className={classes.paper}>Placeholder</Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
