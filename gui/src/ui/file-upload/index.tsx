/**
 * External Imports
 */
import React, { useCallback, ChangeEvent } from 'react';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

/**
 * Internal Imports
 */
import { useStyles } from './styles';

interface FileUpload {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => any;
  multiple?: boolean;
  icon?: any;
}

export const UIFileUpload: React.FC<FileUpload> = (props: FileUpload) => {
  const classes = useStyles();

  const { onChange, multiple, icon } = props;

  const handOnChange = useCallback(
    (event: any) => {
      if (typeof onChange === 'function') {
        onChange(event.target.files);
      }
    },
    [onChange]
  );

  const Icon = icon ? icon : PhotoCamera;

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        multiple={multiple}
        className={classes.input}
        id="icon-button-file"
        type="file"
        name={'receipt'}
      />
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={handOnChange}
      />
      <label htmlFor="contained-button-file">
        <Button color="secondary" component="span" endIcon={<Icon />}>
          Upload
        </Button>
      </label>
    </div>
  );
};
