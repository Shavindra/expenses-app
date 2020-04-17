import { combineReducers } from 'redux';
import { applicationReducer, expensesListReducer } from '../state-managers';

const reducers = {
  app: applicationReducer,
  expenses: expensesListReducer,
};

export const rootReducer = combineReducers(reducers);
