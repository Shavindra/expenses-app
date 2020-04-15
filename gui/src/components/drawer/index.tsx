import React, { ReactElement } from 'react';
import clsx from 'clsx';
import {
  withStyles,
  createStyles,
  IconButton,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
} from '@material-ui/core';
import { IconDashboard, IconChevronLeft } from '../../ui/icons';

const useStyles = (theme: Theme): any => {
  const drawerWidth = 240;

  return createStyles({
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: 0,
      [theme.breakpoints.up('md')]: {
        width: theme.spacing(9),
      },
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
  });
};

interface DrawerState {
  openMenu: boolean;
}

interface DrawerProps {
  onMenuButtonClick: (event?: React.MouseEvent<HTMLElement>) => void;
  openMenu: boolean;
  classes: any;
}

class DrawerCmp extends React.Component<DrawerProps, DrawerState> {
  public render(): ReactElement {
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
          <ListItem>
            <ListItemIcon>
              <IconDashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </List>
      </Drawer>
    );
  }

  private handleMenuButtonClick = (
    event: React.MouseEvent<HTMLElement>
  ): void => {
    event.preventDefault();
    this.props.onMenuButtonClick(event);
  };
}

export const DrawerComponent = withStyles(useStyles)(DrawerCmp);
