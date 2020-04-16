import { combineReducers } from 'redux';
import { applicationReducer } from '../state-managers/app';

const reducers = {
  app: applicationReducer,
};

export const rootReducer = combineReducers(reducers);
