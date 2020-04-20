import React from 'react';
import { makeStyles, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiGrid-container': {
      flexGrow: 1,
      display: 'flex',
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export function UIGridList(props: any) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {props.data.map((tile: any) => (
          <Grid item xs={6} sm={4}>
            <Paper className={classes.paper}>Placeholder</Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
