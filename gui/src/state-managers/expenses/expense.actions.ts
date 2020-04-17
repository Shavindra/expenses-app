import { type } from '../utils';
import { createAction } from '@reduxjs/toolkit';

const listTypePrefix = 'EXPENSES_LIST';

// List Action creators
export const expensesListLoadingAction = createAction(
  type(listTypePrefix + '/Loading')
);
export const expensesListLoadSuccessAction = createAction<any>(
  type(listTypePrefix + '/Loading Success')
);
export const expensesListLoadFailureAction = createAction<string>(
  type(listTypePrefix + '/Loading Failure')
);

// const itemTypePrefix = 'EXPENSES_ITEM';

// // List Action creators
// export const expensesItemLoadingAction = createAction(type(itemTypePrefix + '/Updating'));
// export const expensesItemLoadSuccessAction = createAction(type(itemTypePrefix + '/Updating Success'));
// export const expensesItemLoadFailureAction = createAction(type(itemTypePrefix + '/Updating Failure'));
