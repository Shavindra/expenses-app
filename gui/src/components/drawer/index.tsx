/**
 * External Imports
 */
import React from 'react';
import clsx from 'clsx';
import {
  withStyles,
  IconButton,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

/**
 * Internal Imports
 */
import { IconDashboard, IconChevronLeft, IconWallet } from '../../ui/icons';
import { useStyles } from './styles';

interface DrawerState {
  openMenu: boolean;
}

interface DrawerProps {
  onMenuButtonClick: (event?: React.MouseEvent<HTMLElement>) => void;
  openMenu: boolean;
  classes: any;
}

class DrawerCmp extends React.Component<DrawerProps, DrawerState> {
  public render() {
    const { classes, openMenu } = this.props;

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(
            classes.drawerPaper,
            !openMenu && classes.drawerPaperClose
          ),
        }}
        open={openMenu}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={this.handleMenuButtonClick}>
            <IconChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem
            button
            component={NavLink}
            to="/"
            activeClassName="Mui-selected"
            exact
          >
            <ListItemIcon>
              <IconDashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to="/expenses"
            activeClassName="Mui-selected"
            exact
          >
            <ListItemIcon>
              <IconWallet />
            </ListItemIcon>
            <ListItemText primary="Expenses" />
          </ListItem>
        </List>
      </Drawer>
    );
  }

  private handleMenuButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    this.props.onMenuButtonClick(event);
  };
}

export const DrawerComponent = withStyles(useStyles)(DrawerCmp);
