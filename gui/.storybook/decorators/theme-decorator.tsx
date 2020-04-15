import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '../../src/ui';

export const ThemeDecorator = ({children}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
