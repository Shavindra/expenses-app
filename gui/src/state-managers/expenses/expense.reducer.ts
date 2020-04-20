import { createReducer } from '../utils';
import * as actions from './expense.actions';
import { ArrayToObject } from '../../utils/array-to-object.util';

// Initial state
interface ExpensesState {
  data?: any;
  dataTotal: number;
  dataMap: any;
  selectedExpense?: any;
  loading: boolean;
  error?: null | string;
}

const loadingState = {
  loading: true,
};

const successState = {
  loading: false,
  error: null,
};

// TODO: May be separate different filters in to own files/reducers?
const handlers = {
  // LIST Actions
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
    const dataMap = ArrayToObject('id', action.payload.data); // Direct access to object
    return {
      ...state,
      ...action.payload,
      ...successState,
      dataMap,
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

  // GET Actions
  [actions.expensesGetLoadingAction.type]: (
    state: ExpensesState,
    action: any
  ) => {
    const dataMap = ArrayToObject('id', action.payload.data);
    const { id } = action.payload.id;
    const item = state.dataMap[id];

    return {
      ...state,
      dataMap: {
        ...dataMap,
        [id]: {
          ...item,
          ...loadingState,
        },
      },
      error: null,
      loading: false,
    };
  },

  [actions.expensesGetSuccessAction.type]: (
    state: ExpensesState,
    action: any
  ) => {
    const { id } = action.payload.id;

    return {
      ...state,
      dataMap: {
        ...state.dataMap,
        [id]: {
          ...action.payload,
          ...successState,
        },
      },
      error: null,
      loading: false,
    };
  },
  // Handle error

  // UPDATE Actions
  [actions.expensesUpdatingAction.type]: (
    state: ExpensesState,
    action: any
  ) => {
    const { id } = action.payload;
    const item = state.dataMap[id];
    return {
      ...state,
      dataMap: {
        ...state.dataMap,
        [id]: {
          ...item,
          updating: true, // Use this to show spinning wheel
        },
      },
      error: null,
      loading: false,
    };
  },

  [actions.expensesUpdateSuccessAction.type]: (
    state: ExpensesState,
    action: any
  ) => {
    const { id } = action.payload;
    return {
      ...state,
      dataMap: {
        ...state.dataMap,
        [id]: {
          ...action.payload,
          updating: false,
        },
      },
      error: null,
      loading: false,
    };
  },
};

const ExpensesInitialState = {
  data: [],
  dataMap: {},
  selectedExpense: null,
};

export const expensesListReducer = createReducer(
  handlers,
  ExpensesInitialState
);
