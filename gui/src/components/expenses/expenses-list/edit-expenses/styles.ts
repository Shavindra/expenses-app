import { createStyles } from '@material-ui/core';

export const useStyles = (theme: any) => {
  return createStyles({
    title: {
      margin: `0 0 ${theme.spacing(2)}px 0`,
    },
    receiptHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px `
    },
    uploadButton: {
      display: 'flex',
      alignItems: 'center'
    },
  });
};
