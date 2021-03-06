/**
 * External Imports
 */
import React from 'react';
import { withStyles, Grid, Container } from '@material-ui/core';
import { AppBarComponent, DrawerComponent } from '../../components';

/**
 * Internal Imports
 */
import { useStyles } from './styles';

interface MainLayoutProps {
  classes: any;
}

interface MainLayoutState {
  openMenu: boolean;
}

class LayoutMainCmp extends React.Component<MainLayoutProps, MainLayoutState> {
  public state = {
    openMenu: false,
  };

  public render() {
    const { classes } = this.props;
    const { openMenu } = this.state;

    return (
      <React.Fragment>
        <AppBarComponent
          onMenuButtonClick={this.handleMenuButtonClick}
          openMenu={openMenu}
        />
        <DrawerComponent
          onMenuButtonClick={this.handleMenuButtonClick}
          openMenu={openMenu}
        />
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
      openMenu: !this.state.openMenu,
    });
  };
}

export const LayoutMain = withStyles(useStyles)(LayoutMainCmp);
