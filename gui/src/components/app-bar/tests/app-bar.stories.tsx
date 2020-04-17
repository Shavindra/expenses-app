import React from 'react';
import { AppBarComponent } from '../app-bar.component';
import { action } from '@storybook/addon-actions';

export default {
  title: 'App Bar',
  component: AppBarComponent,
};

const actionsData = {
  onMenuButtonClick: action('onMenuButtonClick'),
};

export const openState = () => (
  <AppBarComponent openMenu={true} {...actionsData} />
);

export const closedState = () => (
  <AppBarComponent openMenu={false} {...actionsData} />
);
