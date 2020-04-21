/**
 * External Imports
 */
import React, { ChangeEvent } from 'react';
import { TextField } from '@material-ui/core';

/**
 * External Imports
 */
import { IconEdit, IconSave } from '../../icons';
import { UIButtonWithIcon } from '../../buttons';
import { useDisableInput, useOnChange } from '../text-field.hooks';
import { useStyles } from './styles';

interface EditableFieldProps {
  disabled?: boolean;
  value?: string;
  onDisable?: (value: any, disabled: boolean) => any;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => any;
  multiline?: boolean;
  id?: string;
  fullWidth?: boolean;
  placeholder?: string;
  label?: string;
}

export const UITextFieldEditable: React.FC<EditableFieldProps> = (
  props: EditableFieldProps
) => {
  const { onDisable, ...otherProps } = props;

  const classes = useStyles();
  const [value, handleOnChange] = useOnChange(props.value);
  const [disabled, setDisabled] = useDisableInput(true, value, onDisable);

  return (
    <React.Fragment>
      <div className={classes.root}>
        <TextField
          disabled={disabled}
          id="ediable-field"
          {...otherProps}
          value={value}
          type={'text'}
          onChange={handleOnChange}
        />
        <UIButtonWithIcon
          onClick={setDisabled}
          label={disabled ? 'edit' : 'save'}
          icon={
            disabled ? (
              <IconEdit fontSize={'small'} />
            ) : (
              <IconSave fontSize={'small'} />
            )
          }
        />
      </div>
    </React.Fragment>
  );
};
