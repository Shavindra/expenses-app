/**
 * External Imports
 */
import { createAction } from '@reduxjs/toolkit';

/**
 * Internal Imports
 */
import { type } from '../utils';

const typePrefix = 'EXPENSES';

// LIST Action creators
export const expensesListLoadingAction = createAction(
  type(typePrefix + '/List Loading')
);
export const expensesListLoadSuccessAction = createAction<any>(
  type(typePrefix + '/List Success')
);
export const expensesListLoadFailureAction = createAction<string>(
  type(typePrefix + '/List Failure')
);

// GET Action creators
export const expensesGetLoadingAction = createAction<any>(
  type(typePrefix + '/Get Loading')
);
export const expensesGetSuccessAction = createAction<any>(
  type(typePrefix + '/Get Success')
);
export const expensesGetFailureAction = createAction<string>(
  type(typePrefix + '/Get Failure')
);

// UPDATE Action creators
export const expensesUpdatingAction = createAction<any>(
  type(typePrefix + '/Updating')
);
export const expensesUpdateSuccessAction = createAction<any>(
  type(typePrefix + '/Update Success')
);
export const expensesUpdateFailureAction = createAction<string>(
  type(typePrefix + '/Update Failure')
);

// const itemTypePrefix = 'EXPENSES_ITEM';

// // List Action creators
// export const expensesItemLoadingAction = createAction(type(itemTypePrefix + '/Updating'));
// export const expensesItemLoadSuccessAction = createAction(type(itemTypePrefix + '/Updating Success'));
// export const expensesItemLoadFailureAction = createAction(type(itemTypePrefix + '/Updating Failure'));
