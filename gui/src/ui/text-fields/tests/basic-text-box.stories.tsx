import React from 'react';
import { UITextField } from '..';

export default {
  title: 'Text Fields',
  component: UITextField,
};

export const BasicTextField = () => <UITextField />;

export const FullTextField = () => <UITextField {...{ fullWidth: true }} />;
