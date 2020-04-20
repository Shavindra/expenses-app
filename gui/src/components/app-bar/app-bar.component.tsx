import React from 'react';
import clsx from 'clsx';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  withStyles,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { appLoadSuccessAction } from '../../state-managers';
import { AppBarProps, AppBarState } from './types';
import { useStyles } from './styles';
import { RootState } from '../../store/types';

class AppBarCmp extends React.Component<AppBarProps, AppBarState> {
  public componentDidMount() {
    // this.props.actions.appLoadSuccessAction();
  }

  public render() {
    const { openMenu, classes } = this.props;

    return (
      <AppBar
        position="absolute"
        elevation={0}
        className={clsx(classes.appBar, openMenu && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={this.handleMenuButtonClick}
            className={clsx(
              classes.menuButton,
              openMenu && classes.menuButtonHidden
            )}
          >
            <Menu />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            noWrap={true}
            className={classes.title}
          >
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }

  private handleMenuButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    this.props.onMenuButtonClick(event);
  };
}

// Map States to Props
function mapStateToProps(state: RootState): { state: RootState } {
  const { app } = state;

  return {
    state: {
      app,
    },
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators({ appLoadSuccessAction }, dispatch),
  };
}

export const AppBarComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(AppBarCmp));
