import { createStyles } from '@material-ui/core';

export const useStyles = (theme: any) => {
  return createStyles({
    title: {
      margin: `0 0 ${theme.spacing(2)}px 0`,
    },
  });
};
