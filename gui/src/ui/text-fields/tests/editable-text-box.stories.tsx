import React from 'react';
import { UITextFieldEditable } from '..';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Text Fields',
  component: UITextFieldEditable,
};

const actionsData = {
  onDisable: action('onDisableToggle'),
  onChange: action('onChange'),
};

export const EditableTextField = () => <UITextFieldEditable {...actionsData} />;

export const EditableMultilineField = () => (
  <UITextFieldEditable {...actionsData} multiline={true} />
);
