import { createReducer } from '../utils';
import * as actions from './expense.actions';

// Initial state
interface ExpensesState {
  data?: any;
  dataTotal: number;
  selectedExpense?: any;
  loading: boolean;
  error?: null | string;
}

// TODO: May be separate different filters in to own files/reducers?
const handlers = {
  [actions.expensesListLoadingAction.type]: (
    state: ExpensesState
  ): ExpensesState => {
    return {
      ...state,
      loading: true,
    };
  },

  [actions.expensesListLoadSuccessAction.type]: (
    state: ExpensesState,
    action: any
  ) => {
    return {
      ...state,
      ...action.payload,
      error: null,
      loading: false,
    };
  },

  [actions.expensesListLoadFailureAction.type]: (
    state: ExpensesState,
    action: any
  ) => {
    // TODO: fix the types
    return {
      ...state,
      error: action.payload,
      loading: false,
    };
  },
};

const ExpensesInitialState = {
  data: [],
  selectedExpense: null,
  loading: true,
  error: null,
};

export const expensesListReducer = createReducer(
  handlers,
  ExpensesInitialState
);
