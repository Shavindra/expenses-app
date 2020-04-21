import { expenseService } from '../../../services';
import {
  expensesListLoadSuccessAction,
  expensesUpdateSuccessAction,
  expensesUpdatingAction,
} from '../../../state-managers';

export const listExpenses = () => {
  return async function (dispatch: any) {
    // TODO: Sorting
    // TODO: Progressively load increase 25 limit
    // There is no sorting in the API atm.
    // If I just load 25 they are only sorted by date only.
    // which means if a user decide to use `sort` functionality
    // it will not be correct.
    // So for now I will load everything
    const expenses = await expenseService.get({ limit: 2000 });

    dispatch(expensesListLoadSuccessAction(expenses));
  };
};

export const updateExpense = (payload: any) => {
  const { id, ...rest } = payload;

  return async function (dispatch: any) {
    dispatch(expensesUpdatingAction({ id }));

    const expenses = await expenseService.post(`/${id}`, rest);

    dispatch(expensesUpdateSuccessAction(expenses));
  };
};

export const uploadReceipt = (payload: any) => {
  return async function (dispatch: any) {
    const { id, files } = payload;

    const formData = new FormData();
    formData.append('receipt', files[0], files[0].name);

    dispatch(expensesUpdatingAction({ id }));

    // TODO: add the header config to another method .fileUpload
    const expenses = await expenseService.post(`/${id}/receipts`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    dispatch(expensesUpdateSuccessAction(expenses));
  };
};
