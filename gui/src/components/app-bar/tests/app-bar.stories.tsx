import React, { ReactElement } from 'react';
import { AppBarComponent } from '../app-bar.component';
import { action } from '@storybook/addon-actions';

export default {
  title: 'App Bar',
  component: AppBarComponent,
};

const actionsData = {
  onMenuButtonClick: action('onMenuButtonClick'),
};

export const openState = (): ReactElement => (
  <AppBarComponent openMenu={true} {...actionsData} />
);

export const closedState = (): ReactElement => (
  <AppBarComponent openMenu={false} {...actionsData} />
);
