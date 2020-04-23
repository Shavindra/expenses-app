/**
 * External Imports
 */
import React from 'react';
import { action } from '@storybook/addon-actions';

/**
 * Internal Imports
 */
import { AppBarComponent } from '../app-bar.component';

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
