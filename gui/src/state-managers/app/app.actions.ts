import { type } from '../utils';
import { createAction } from '@reduxjs/toolkit';

// Action creators
export const appLoadingAction = createAction(type('APP/Loading'));
export const appLoadSuccessAction = createAction(type('APP/Loading Success'));
export const appLoadFailureAction = createAction(type('APP/Loading Failure'));
