/**
 * External Imports
 */
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiGrid-container': {
        flexGrow: 1,
        display: 'flex',
      },
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));