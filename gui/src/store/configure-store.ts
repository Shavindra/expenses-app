import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import { RootState } from './types';
import { rootReducer } from './root-reducer';
import { composeEnhancers } from './utils/compose-enhancers';

// configure middlewares
const middlewares = [thunk, logger]; // TODO: remove logger from production

// compose enhancers
const enhancers = composeEnhancers(applyMiddleware(...middlewares));

// rehydrate state on app start
const defaultState = {} as RootState;

export function configureStore(
  initalState: RootState = defaultState
): typeof store {
  const store = createStore(rootReducer, initalState, enhancers);
  return store;
}
