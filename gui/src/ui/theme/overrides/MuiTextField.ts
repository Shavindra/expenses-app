/**
 * Internal Imports
 */
import palette from '../palette';

export default {
  root: {
    '& .MuiFormLabel-root, & textArea': {
      fontFamily: 'inherit',
    },
    '& .MuiInputBase-root.Mui-disabled .MuiInputBase-input': {
      color: palette.text.primary,
    },
  },
};
