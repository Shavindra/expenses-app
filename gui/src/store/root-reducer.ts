/**
 * External Imports
 */
import { combineReducers } from 'redux';

/**
 * Internal Imports
 */
import { applicationReducer, expensesListReducer } from '../state-managers';

const reducers = {
  app: applicationReducer,
  expenses: expensesListReducer,
};

export const rootReducer = combineReducers(reducers);
