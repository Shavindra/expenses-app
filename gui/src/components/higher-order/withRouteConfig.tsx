import React from 'react';
import { compose } from 'redux';

import { withRouter } from 'react-router-dom';

const config = new Map([
  [
    '/expenses',
    {
      id: 'expenses',
      title: 'Expenses',
    },
  ],
  [
    '/',
    {
      id: 'dashboard',
      title: 'Dashboard',
    },
  ],
]);

function withConfig(Component: React.ComponentType<any>) {
  return function ComponentWithConfig(props: any) {
    props = {
      ...props,
      routerConfig: config.get(props.match.path),
    };
    return <Component {...props} />;
  };
}

export const withRouterConfig = (Component: React.Component) =>
  compose(withRouter, withConfig)(Component);
