/**
 * External Imports
 */
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
import { bindActionCreators, compose } from 'redux';

/**
 * Internal Imports
 */
import { appLoadSuccessAction } from '../../state-managers';
import { AppBarProps, AppBarState } from './types';
import { useStyles } from './styles';
import { withRouterConfig } from '../higher-order/withRouteConfig';

class AppBarCmp extends React.Component<AppBarProps, AppBarState> {
  public render() {
    const { openMenu, classes, routerConfig } = this.props;
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
          <Typography variant="h6" color="inherit">
            {routerConfig.title}
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

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators({ appLoadSuccessAction }, dispatch),
  };
}

const enhance = compose(
  connect(null, mapDispatchToProps),
  withStyles(useStyles),
  withRouterConfig
);

export const AppBarComponent = enhance(AppBarCmp) as React.ComponentType<any>;
