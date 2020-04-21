/**
 * External Imports
 */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    '& .MuiButton-label': {
      fontSize: '11px',
      textTransform: 'none',
    },
  },
  input: {
    display: 'none',
  },
}));
