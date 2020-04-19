import React, { ChangeEvent } from 'react';
import { TextField } from '@material-ui/core';
import { UIButtonWithIcon } from '..';
import { IconEdit, IconSave } from '../icons';
import { useDisableInput, useOnChange } from './text-field.hooks';

interface EditableFieldProps {
  disabled?: boolean;
  value?: string;
  onDisable?: () => any;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => any;
  multiline?: boolean
  id?: string
}


export const UITextFieldEditable: React.FC<EditableFieldProps> = (
  props: EditableFieldProps
) => {
  const [value, handleOnChange] = useOnChange('');
  const [disabled, setDisabled] = useDisableInput(true, value, props.onDisable);

  return (
    <React.Fragment>
      <div>
        <TextField
          value={props.value}
          disabled={disabled}
          id='ediable-field'
          {...props}
          type={'text'}
          onChange={handleOnChange}
        />
        <UIButtonWithIcon
          onClick={setDisabled}
          label={disabled ? 'edit': 'save'}
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
