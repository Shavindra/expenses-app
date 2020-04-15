import React from "react";
import clsx from "clsx";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  withStyles,
  Theme,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = (theme: Theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
});

interface IAppBarState {
  classes: any;
}

interface IAppBarProps {
  onMenuButtonClick: VoidFunction;
  openMenu: Boolean;
  classes: any;
}

class AppBarCmp extends React.Component<IAppBarProps, IAppBarState> {

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

  private handleMenuButtonClick = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    this.props.onMenuButtonClick();
  }
}

export const AppBarComponent = withStyles(useStyles)(AppBarCmp);
