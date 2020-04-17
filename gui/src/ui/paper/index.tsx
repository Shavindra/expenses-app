import React from 'react';
import clsx from 'clsx';
import { Paper, withStyles, createStyles } from '@material-ui/core';

const useStyles = (theme: any) => {
  return createStyles({
    root: {
      display: 'flex',
      padding: theme.spacing(2),
      overflow: 'auto',
      flexDirection: 'column',
    },
  });
};

interface PaperProps {
  classes: any;
}

class PaperCmp extends React.Component<PaperProps> {
  public render() {
    const { classes } = this.props;
    return <Paper className={clsx(classes.root)}>{this.props.children}</Paper>;
  }
}

export const UIPaper = withStyles(useStyles)(PaperCmp);
