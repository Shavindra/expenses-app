import React, { ReactElement } from 'react';
import { App } from './app';

export default {
  title: 'App',
  component: App,
};

export const Default = (): ReactElement => {
  return <App />;
};
