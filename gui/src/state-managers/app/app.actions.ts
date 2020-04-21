/**
 * External Imports
 */
import { createAction } from '@reduxjs/toolkit';

/**
 * Internal Imports
 */
import { type } from '../utils';

// Action creators
export const appLoadingAction = createAction(type('APP/Loading'));
export const appLoadSuccessAction = createAction(type('APP/Loading Success'));
export const appLoadFailureAction = createAction(type('APP/Loading Failure'));
