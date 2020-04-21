/**
 * Internal Imports
 */
import { compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export const composeEnhancers: typeof composeWithDevTools =
  (process.env.NODE_ENV === 'development' && window && composeWithDevTools) ||
  compose;
