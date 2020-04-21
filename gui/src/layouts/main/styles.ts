import { Theme, createStyles } from "@material-ui/core";

export const useStyles = (theme: Theme) => {
    return createStyles({
      root: {
        display: 'flex',
        padding: theme.spacing(2),
        overflow: 'auto',
        flexDirection: 'column',
      },
      appBarSpacer: theme.mixins.toolbar,
      content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      },
      container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      },
    });
  };