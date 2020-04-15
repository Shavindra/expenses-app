import React from "react";
import { withStyles, createStyles, Grid, Container } from "@material-ui/core";
import { AppBarComponent, DrawerComponent } from "../../components";

const useStyles = (theme: any) => {
  return createStyles({
    root: {
      display: "flex",
      padding: theme.spacing(2),
      overflow: "auto",
      flexDirection: "column",
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto",
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  });
};

interface IMainLayoutProps {
  classes: any;
}

interface IMainLayoutState {
  openMenu: boolean;
}


class MainLayoutComponent extends React.Component<IMainLayoutProps, IMainLayoutState> {

  public state = {
    openMenu: true
  }

  public render() {
    const { classes } = this.props;
    const { openMenu } = this.state;

    return (
      <React.Fragment>
        <AppBarComponent onMenuButtonClick={this.handleMenuButtonClick} openMenu={openMenu} />
        <DrawerComponent onMenuButtonClick={this.handleMenuButtonClick} openMenu={openMenu}  />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container={true} spacing={3}>
              {this.props.children}
            </Grid>
          </Container>
        </main>
      </React.Fragment>
    );
  }

  private handleMenuButtonClick = () => {
    this.setState({
      openMenu: !this.state.openMenu
    });
  }
}

export const LayoutMain = withStyles(useStyles)(MainLayoutComponent);
