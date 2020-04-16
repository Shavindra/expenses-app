import { createReducer, type } from '../utils';
import { createAction } from '@reduxjs/toolkit';

// TODO: use typescript safe @redux/toolkit
const AppActionTypes = {
  APPLICATION_LOADING: type('APP/Loading'),
  APPLICATION_LOADING_SUCCESS: type('APP/Loading Success'),
  APPLICATION_LOADING_FAILURE: type('APP/Loading Failure'),
};

export const appActions = {
  appLoadingAction: createAction(AppActionTypes.APPLICATION_LOADING),
  appLoadSuccessAction: createAction(
    AppActionTypes.APPLICATION_LOADING_SUCCESS
  ),
  appLoadFailureAction: createAction(
    AppActionTypes.APPLICATION_LOADING_FAILURE
  ),
};

interface AppState {
  error?: any;
  loading: boolean;
}

// TODO: May be separate different filters in to own files/reducers?
const handlers = {
  [AppActionTypes.APPLICATION_LOADING]: (): AppState => {
    return {
      loading: true,
    };
  },

  [AppActionTypes.APPLICATION_LOADING_SUCCESS]: (): AppState => {
    return {
      error: null,
      loading: false,
    };
  },

  [AppActionTypes.APPLICATION_LOADING_FAILURE]: (
    state: AppState,
    action: any
  ): AppState => {
    // TODO: fix the types
    return {
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
