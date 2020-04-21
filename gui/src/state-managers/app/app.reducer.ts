/**
 * Internal Imports
 */
import { createReducer } from '../utils';
import * as actions from './app.actions';

// Initial state
interface AppState {
  error?: any;
  loading: boolean;
}

// TODO: May be separate different filters in to own files/reducers?
const handlers = {
  [actions.appLoadingAction.type]: (state: AppState): AppState => {
    return {
      ...state,
      loading: true,
    };
  },

  [actions.appLoadSuccessAction.type]: (state: AppState): AppState => {
    return {
      ...state,
      error: null,
      loading: false,
    };
  },

  [actions.appLoadFailureAction.type]: (
    state: AppState,
    action: any
  ): AppState => {
    // TODO: fix the types
    return {
      ...state,
      error: action.payload,
      loading: false,
    };
  },
};

const AppInitialState: AppState = {
  loading: true,
  error: null,
};

export const applicationReducer = createReducer(handlers, AppInitialState);
