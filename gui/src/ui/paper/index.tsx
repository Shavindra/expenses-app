import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Paper, withStyles, createStyles } from '@material-ui/core';

const useStyles = (theme: any): any => {
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
  public render(): ReactElement {
    const { classes } = this.props;
    return <Paper className={clsx(classes.root)}>{this.props.children}</Paper>;
  }
}

export const UIPaper = withStyles(useStyles)(PaperCmp);
